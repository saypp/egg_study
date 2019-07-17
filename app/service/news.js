'use strict';

const Service = require('egg').Service;

class NewsService extends Service {

  async getNewsList() {

        console.log(this.config.api);
        // 获取新闻数据
        var list = ['11','22','33'];

        // 调用user服务的数据

        var user = await this.service.user.getUserInfo();

        console.log(user);

        return list;
  }
}

module.exports = NewsService;
