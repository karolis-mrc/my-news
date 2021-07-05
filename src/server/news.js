const axios = require('axios');

const api_token = process.env.API_TOKEN;

const getNews = async (query) => {
  const results = await axios.get(`https://gnews.io/api/v4/search?q=${query}&token=${api_token}`).then(({ data }) => data);

  return results;
};

module.exports = { getNews };
