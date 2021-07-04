jest.mock('../server/database');
const database = require('../server/database');

const {log} = require('../server/articles');

test('calls storeArticle function', () => {
  log('article');
  expect(database.storeArticle).toBeCalled();
});
