'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/admin', controller.admin.index);
  router.get('/news', controller.news.index);
  router.get('/content', controller.news.content);
  router.get('/newslist/:aid', controller.news.newsList);
  router.post('/add',controller.home.add);
  router.get('/cookiehome', controller.cookieHome.index);
  router.get('/loginout', controller.cookieHome.loginOut);
  router.get('/cookienews', controller.cookieNews.index);

}
