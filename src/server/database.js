const MongoClient = require('mongodb').MongoClient;
const dbName = 'my-news-logs';
const URL = process.env.DATABASE_URL;

const storeKeywords = async (item) => {
  const client = new MongoClient(URL, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('connecting');
    const db = client.db(dbName);
    await db.collection('keywords').insertOne({ created_on: new Date(), _id: new Date(), keyword: item });
  } catch (err) {
    console.log(err.stack);
  } finally {
    client.close();
  }
};

const storeArticle = async (item) => {
  const client = new MongoClient(URL, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('connecting');
    const db = client.db(dbName);
    await db.collection('articles').insertOne({
      title: item.title,
      url: item.url,
    });
  } catch (err) {
    console.log(err.stack);
  } finally {
    client.close();
  }
};

module.exports = { storeKeywords, storeArticle };
