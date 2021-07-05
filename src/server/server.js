const Koa = require('koa');
const Router = require('koa-router');
const stat = require('koa-static');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const news = require('./news');
const keywords = require('./keywords');
const articles = require('./articles');

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(stat(path.resolve(__dirname, '../../build')));
app.use(router.routes());

router.get('/getNews', async (ctx) => {
  const query = ctx.request.query.q;
  const result = await news.getNews(query);
  ctx.body = result;
});

router.post('/keywords', async (ctx) => {
  const keyword = ctx.request.body && ctx.request.body.keyword;
  console.log(ctx.request.body);
  keywords.log(keyword);
  ctx.response.status = 204;
});

router.post('/articles', async (ctx) => {
  const article = ctx.request.body && ctx.request.body.article;
  articles.log(article);
  ctx.response.status = 204;
});

const port = process.env.PORT || 5000;
console.log(`Your port is ${port}`);

app.use(router.routes());
app.listen(port);
