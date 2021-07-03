const log = (item) => {
  const { title, url } = item;
  console.log(`User clicked on this article: ${title}. Article url is: ${url}`);
};

module.exports = { log };
