'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  // 用户表管理
  router.post("/user/register", controller.user.register);
  router.post("/user/login", controller.user.login);

  // 项目表管理
  router.post("/project/create", controller.project.create);
  router.put("/project/update", controller.project.update);
  router.delete("/project/:id", controller.project.destroy);
  router.get("/project", controller.project.index);
  // 通过当前用户，查找该用户所拥有的项目，若用户无项目，则前端项目列表为空
  router.get("/project/user/:userId", controller.project.findProjectsByUserId);

  // 项目成员表管理
  router.post("/project/member/create", controller.projectUser.create);
  router.delete("/project/member/:id", controller.projectUser.destroy);
  router.get("/project/member", controller.projectUser.index);

  // 接口表管理
  router.post("/interface/create", controller.interface.create);
  router.put("/interface/update", controller.interface.update);
  router.delete("/interface", controller.interface.destroy);
  router.get("/interface", controller.interface.index);

  // 接口版本管理
  router.get("/interface/version/:projectId", controller.interfaceVersion.index);

  // 用户注销
  router.delete("/user/:userId", controller.user.logout);
};
