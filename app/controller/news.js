'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
        // this.ctx.body = '新闻页面';

      var msg='ejs';

      var list = await this.service.news.getNewsList();

      await  this.ctx.render('news',{
            msg : msg,
            list
      });
  }
  async content() {
        // 获取get传值
        // koa 中如何获取传值  ctx.query
        // egg.js获取传值
        var query = this.ctx.query;

        console.log(query);

        this.ctx.body = '新闻详情';
  }
  async newsList() {

        // koa 获取动态路由传值  ctx.params

        var params = this.ctx.params;

        console.log(params);
        this.ctx.body = '新闻列表';
  }
}

module.exports = NewsController;
