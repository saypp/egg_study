'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // 调用服务里面的方法

    // 调用extend里面扩展的application
    // console.log(this.app.foo());


    // 调用extend里面扩展的ctx
    // console.log(this.ctx.getHost());


    // 调用extend里面扩展的方法
    // console.log(this.ctx.helper.getHelperData())


    // 调用extend里面扩展的request
    // console.log(this.ctx.request.foo()); 
    


    // var list = await this.service.news.getNewsList();

    // var user = await this.service.user.getUserInfo();


    // await this.ctx.render('news',{
    //   list,
    //   user
    // })


    await this.ctx.render('home',{
      csrf: this.ctx.csrf
    })
  

  }


  async add() {
      
      console.log(this.ctx.request.body);

  }

}

module.exports = HomeController;
