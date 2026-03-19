const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('flowers');
const usersCollection = db.collection('users');
const arrangeCollection = db.collection('arrange');


(async function testConnection() {
  try {
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
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await usersCollection.insertOne(user);
}


async function main() {
  
  try {
    // add all the following database code here
  
  } finally {
    client.close();
  }
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  updateUserRemoveAuth,
  addScore,
  getHighScores,
};
main();