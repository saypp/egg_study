'use strict';

const Controller = require('egg').Controller;

class CookieNewsController extends Controller {
  async index() {
        // this.ctx.body = 'cookieNews 控制器';

        // 获取cookie
        // var username = this.ctx.cookies.get('username');

        // 获取加密的cookie
        // var username = this.ctx.cookies.get('username',{
        //     encrypt: true
        // })

        var username = this.ctx.session.username;
   

        await this.ctx.render('news',{
            username: username
        })
  }
}

module.exports = CookieNewsController;
