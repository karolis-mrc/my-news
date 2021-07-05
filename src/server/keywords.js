const { storeKeywords } = require('./database');

const log = (item) => {
  console.log(`User's search keyword: ${item}`);
  storeKeywords(item);
};

module.exports = { log };
