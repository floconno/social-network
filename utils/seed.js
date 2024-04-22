const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomUsername, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }


  const users = [];

  for (let i = 0; i < 20; i++) {
    const thoughts = getRandomThoughts(10);

    const username = getRandomUsername();

    users.push({
      username,
      thoughts,
    });
  }

  const userData = await User.insertMany(users);

  await Thought.insertOne({
    thoughtName: 'UCLA',
    users: [...userData.map(({_id}) => _id)],
  });

  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
