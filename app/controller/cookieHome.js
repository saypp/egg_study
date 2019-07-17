'use strict';

const Controller = require('egg').Controller;

class CookieHomeController extends Controller {
  async index() {
        // this.ctx.body = 'cookieHome 控制器'

        /*
            cookie

            1、可以实现：同一浏览器访问同一个域的时候，不同页面之间的数据共享

            2、实现数据的持久化(关闭浏览器重新打开以后数据还存在)

            3、默认情况下cookies当浏览器关闭以后就销毁了

        */

        // 设置一个值
        // 第一个参数：cookies的名称
        // 第二个参数：cookies的值
        // 第三个参数：配置
        // this.ctx.cookies.set('username','zhangsan',{
        //     maxAge: 1000*3600*24,  // cookie存储一天
        //     httpOnly: true,
        //     signed: true,  // 对cookie进行签名，防止被修改
        //     encrypt: true, // 是否对cookie进行加密   如果cookie加密那么获取的时候需要解密
        // });


        // 设置session
        this.ctx.session.username = '张三';


  }

  async loginOut() {

        // 清理cookie
        // this.ctx.cookies.set('username',null)

        this.ctx.cookies.set('username',null,{
            maxAge: 0
        })

        this.ctx.redirect('/cookienews');  // 路由跳转


  }



}

module.exports = CookieHomeController;
