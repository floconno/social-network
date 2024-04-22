const usernames = [
  'cooluser123',
  'craftyfox',
  'rainbowunicorn',
  'techguru87',
  'musiclover22',
  'adventurous_soul',
  'coding_ninja',
  'bookworm99',
  'art_lover',
  'sportsfanatic23',
  'wanderlust_traveler',
  'foodie_forever',
  'movie_buff',
  'fitnessfreak101',
  'nature_enthusiast'
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

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsername = () =>
  `${getRandomArrItem(usernames)}`;

const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtName: getRandomArrItem(thoughtDescriptions),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomThoughts };
