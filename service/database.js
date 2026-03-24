const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('Flowers');
const usersCollection = db.collection('users');
const arrangeCollection = db.collection('arrange');


(async function testConnection() {
  try {
    await client.connect();
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    client.close();
    process.exit(1);
  }
})();

function getUser(email) {
  return usersCollection.findOne({email:email})
}

function getUserByToken(token) {
  return usersCollection.findOne({ token: token });
}

async function addUser(user) {
  await usersCollection.insertOne(user);
}

async function updateUser(user) {
  await usersCollection.updateOne({ email: user.email }, { $set: user });
}

async function addArrangement(arrangement) {
  await arrangeCollection.insertOne(arrangement);
}

function getArrangementsByUser(email) {
  return arrangeCollection.find({userEmail: email }).toArray();
}

async function updateUserRemoveAuth(user) {
  await usersCollection.updateOne({ email: user.email }, { $unset: { token: 1 } });
}


module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addArrangement,
  getArrangementsByUser,
  updateUserRemoveAuth
};
