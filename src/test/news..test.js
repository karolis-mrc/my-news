import axios from 'axios';
 
import { getNews } from '../server/news';
 
jest.mock('axios');
 
describe('getNews', () => {
  it('fetches successfully data from an API', async () => {
    const data = {};
 
    axios.get.mockResolvedValue({ data });

    const result = await getNews('react');

    console.log('result', result);
    expect(result).toBe(data);
 
    expect(axios.get).toHaveBeenCalledWith(
      `https://gnews.io/api/v4/search?q=react&token=${process.env.API_TOKEN}`,
    );
  });
});

// describe('postKeywords', () => {
//   it('posts successfully data', async () => {
//     const data = {};
 
//     axios.post.mockResolvedValue({ data });

//     const result = await getNews('react');

//     console.log('result', result);
//     expect(result).toBe(data);
 
//     expect(axios.get).toHaveBeenCalledWith(
//       `https://gnews.io/api/v4/search?q=react&token=${process.env.API_TOKEN}`,
//     );
//   });
// });


