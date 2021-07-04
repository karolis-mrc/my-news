jest.mock('../server/database');
const database = require('../server/database');

const {log} = require('../server/keywords');

// database.storeKeywords = jest.fn().mockImplementation().mockResolvedValue({});

test('calls storeKeywords function', () => {
  log('string');
  expect(database.storeKeywords).toBeCalled();
});
