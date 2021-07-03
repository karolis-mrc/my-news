import axios from 'axios';

const API_TOKEN = '17c59b964430bc94176e1269de259f36';

export const getNews = async (query) => {
  const results = await axios.get(`https://gnews.io/api/v4/search?q=${query}&token=${API_TOKEN}`).then(({ data }) => data);

  return results;
};

export const postKeywords = keyword => axios.post(`http://localhost:5000/keywords`, {keyword}).catch(console.log)

export const postArticles = article => axios.post(`/articles`, {article}).catch(console.log)
