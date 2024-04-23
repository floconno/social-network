const user = [
  { username: 'cooluser123', email: 'cooluser123@example.com' },
  { username: 'craftyfox', email: 'craftyfox@example.com' },
  { username: 'rainbowunicorn', email: 'rainbowunicorn@example.com' },
  { username: 'techguru87', email: 'techguru87@example.com' },
  { username: 'musiclover22', email: 'musiclover22@example.com' },
  { username: 'adventurous_soul', email: 'adventurous_soul@example.com' },
  { username: 'coding_ninja', email: 'coding_ninja@example.com' },
  { username: 'bookworm99', email: 'bookworm99@example.com' },
  { username: 'art_lover', email: 'art_lover@example.com' },
  { username: 'sportsfanatic23', email: 'sportsfanatic23@example.com' },
  { username: 'wanderlust_traveler', email: 'wanderlust_traveler@example.com' },
  { username: 'foodie_forever', email: 'foodie_forever@example.com' },
  { username: 'movie_buff', email: 'movie_buff@example.com' },
  { username: 'fitnessfreak101', email: 'fitnessfreak101@example.com' },
  { username: 'nature_enthusiast', email: 'nature_enthusiast@example.com' }
];

const thoughtDescriptions = [
  'Decision Tracker',
  'Find My Phone',
  'Learn Piano',
  'Starbase Defender',
  'Tower Defense',
  'Monopoly Money Manager',
  'Movie trailers',
  'Hello world',
  'Stupid Social Media App',
  'Notes',
  'Messages',
  'Email',
  'Compass',
  'Firefox',
  'Running app',
  'Cooking app',
  'Poker',
  'Deliveries',
];


const genRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUser = () => `${user[genRandomArrItem(user)]}`;

const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtName: genRandomArrItem(thoughtDescriptions),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThoughts };
