const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

// The projects and users are saved in memory and disappear whenever the service is restarted.
let users = [];
let projects = [];

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};


// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});




async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  users.push(user);
  
  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}


apiRouter.post('/projects', verifyAuth, (req, res) => {
  const project = {
    id: uuid.v4(),
    user: req.cookies[authCookieName],
    arrangements: req.body.arrangements,
    date: new Date()
  };
  
  projects.push(project);
  res.send(project);
});

app.post('/api/projects', (req, res) => {
  const project = req.body;
  projects.push(project);
  res.send({ success: true });
});

app.get('/api/projects', (req, res) => {
  res.send(projects);
});

app.get('/api/picture', async (req, res) => {
  const API_KEY = '55003532-9a2218b4c030503caeb531032'; 
  
  // Lowering this to 10 makes it much less likely to hit an "out of range" error
  const randomPage = Math.floor(Math.random() * 10) + 1;
  
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=flowers+bouquets&image_type=photo&page=${randomPage}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorBody = await response.text();
      // If the random page failed, let's try one more time with Page 1
      if (response.status === 400) {
        console.warn("Page out of range, falling back to page 1");
        const fallbackRes = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=flowers&page=1`);
        const fallbackData = await fallbackRes.json();
        return res.send({ url: fallbackData.hits[0].webformatURL });
      }
      return res.status(response.status).send({ error: errorBody });
    }

    const data = await response.json();

    if (data.hits && data.hits.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.hits.length);
      res.send({ url: data.hits[randomIndex].webformatURL });
    } else {
      res.status(404).send({ msg: "No images found" });
    }
  } catch (error) {
    console.error("Fetch Error:", error.message);
    res.status(500).send({ msg: "Internal server error" });
  }
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});