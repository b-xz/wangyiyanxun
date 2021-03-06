let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let demoData = require('./datas/demo');
router.get('/demo', (ctx, next) => {
  ctx.body = demoData
});


let cateNavList = require('./datas/cateNavDatas');
router.get('/getCateNavList', (ctx, next) => {
  ctx.body = cateNavList
});



let cateList = require('./datas/cateLists');
router.get('/getCateList', (ctx, next) => {
  ctx.body = cateList
});



app
  .use(router.routes())
  .use(router.allowedMethods())


app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
