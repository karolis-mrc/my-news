import axios from 'axios';

export const getNews = (query) => axios.get(`/getNews?q=${query}`);

export const postKeywords = (keyword) => axios.post(`/keywords`, { keyword });

export const postArticles = (article) => axios.post(`/articles`, { article });
