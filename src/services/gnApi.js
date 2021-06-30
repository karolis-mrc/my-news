import axios from 'axios';

const API_TOKEN = '17c59b964430bc94176e1269de259f36';

export const getNews = async () => {
    const results = await axios.get(`https://gnews.io/api/v4/search?q=golf&token=${API_TOKEN}`).then( ({ data }) => data );

    return results;
}