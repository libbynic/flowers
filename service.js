// service.js

// 1. Register: Sends data to the server to be hashed and saved in the array
export async function registerUser(email, password) {
  const response = await fetch('/api/auth/create', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  
  if (!response.ok) {
    const body = await response.json();
    throw new Error(body.msg || 'Failed to create account');
  }
  return response.json();
}

// 2. Login: Verifies credentials against the server's array
export async function loginUser(email, password) {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });

  if (!response.ok) {
    const body = await response.json();
    throw new Error(body.msg || 'Invalid login');
  }
  return response.json();
}



// 4. Logout: Tells the server to clear the cookie
export async function logoutUser() {
  await fetch('/api/auth/logout', { method: 'DELETE' });
}
// export function registerUser(email, password) {
//     console.log(`register user with email: ${email} and password: ${password}`);

//     //localStorage.getItem('users');
//     const textStorage = (localStorage.getItem('users') || '[]');
//     const users = JSON.parse(textStorage);

//     users.push({ email, password });
//     localStorage.setItem('users', JSON.stringify(users));
//     return {success: true};
// }
// export function loginUser(email, password) {
//     console.log(`register user with email: ${email} and password: ${password}`);

//     //localStorage.getItem('users');
//     const textStorage = (localStorage.getItem('users') || '[]');
//     const users = JSON.parse(textStorage);

//     const foundUser = users.find(u => u.email === email && u.password === password);
//     if (foundUser){
//         return {success: true, user: foundUser};
//     }
//     else {
//         return {success: false, message: "Invalid email or password"};
//     }
// }
//     users.push({ email, password });
//     localStorage.setItem('users', JSON.stringify(users));
// }

const imgFiles = [
    "wedding-florals.jpg",
    "flowerCenter.jpg",
    "FrenchBlooms.jpg",
    "lightBlue.jpg",
    "QuickSandRoses.jpg"
];


export async function getPicture() {
  const response = await fetch('/api/picture');
  
  if (!response.ok) {
    throw new Error('Failed to fetch image from server');
  }

  const data = await response.json(); 
  // This 'data' is the { url: "..." } object your backend sends
  return data.url; 
}

