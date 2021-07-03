const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const keywords = require('./keywords');
const articles = require('./articles');

const app = new Koa();
app.use(bodyParser());
const router = new Router();

router.post('/keywords', async (ctx) => {
  const keyword = ctx.request.body && ctx.request.body.keyword;
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
