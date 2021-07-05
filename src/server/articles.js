const { storeArticle } = require('./database');

const log = (item) => {
  const { title, url } = item;
  console.log(`User clicked on this article: ${title}. Article url is: ${url}`);
  storeArticle(item);
};

module.exports = { log };
