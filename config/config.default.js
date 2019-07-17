/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1562049181798_4979';

  // add your middleware config here
  // 配置中间件
  config.middleware = ['printDate'];

  config.middleware = ['auth'];

  // 给printDate中间件传入的参数
  config.printDate = {
    aaa: 'aaaa'
  }

  // 配置session
  config.session = {
    key:'SESSION_ID',  // 设置session cookie里面的key
    maxAge:2000,   // session过期时间
    httpOnly: true,
    encrypt: true,
    renew: true  // renew等于true  那么每次刷新页面的时候 session都会被延期
  }



  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    }
  }

  config.api = 'http://www.itying.com/api'


  return {
    ...config,
    ...userConfig,
  };
};
