'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
        // egg 基于 koa

        // console.log(this);
        this.ctx.body = '用户管理';

  }
}

module.exports = AdminController;
