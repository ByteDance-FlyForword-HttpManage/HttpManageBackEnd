// 项目成员控制层代码（ProjectUserController.js）
// 该部分数据逻辑关系需要优化！！！
"use strict";

const Controller = require("egg").Controller;

class ProjectUserController extends Controller {
  // 增添成员
  async create() {
    const { ctx } = this;
    const { projectId, username, email, role } = ctx.request.body;
    const existingUser = await ctx.model.User.findOne({
      where: {
        role: role,
        email: email,
      },
    });
    // 若项目成员已存在数据库，则将其加入项目成员表，并且提示成员添加者：
      // 该项目成员本身存在数据库，现已将其加入项目，其信息除邮箱号之外，其本身信息保留不变
    if (existingUser) {
      await ctx.model.ProjectUser.create({
        project_id: projectId,
        user_id: existingUser.id,
      });
      ctx.body = {
        code: 200,
        message:
          "该项目成员本身存在数据库，现已将其加入项目，其信息除邮箱号之外，其本身信息保留不变",
        data: existingUser,
      };
      return;
    }
    // 若项目成员不在数据库，则添加者将成员基本信息输入传递服务端将其加入用户表（默认密码为123456）和项目成员表
    // 添加至用户表
    const user = await ctx.model.User.create({
      username,
      email,
      password: "123456",
      role,
    });
    // console.log(user.id, projectId);
    // 将该用户记录的id值添加到项目成员表
    await ctx.model.ProjectUser.create({
      project_id: projectId,
      user_id: user.id,
    });

    ctx.body = {
      code: 200,
      message: "成员添加成功",
      data: user,
    };
  }

  // 删除成员
  async destroy() {
    const { ctx } = this;
    const { id } = ctx.params;
    // 删除项目成员表的成员id值
    await ctx.model.ProjectUser.destroy({
      where: {
        user_id: id,
      },
    });

    ctx.body = {
      code: 200,
      message: "成员删除成功",
    };
  }

  // 查找成员
  async index() {
    const { ctx } = this;
    const { projectId } = ctx.query;

    // 将该项目id标识的项目内成员返回
    const members = await ctx.model.ProjectUser.findAll({
      where: {
        project_id: projectId,
      },
      include: [
        {
          model: ctx.model.User,
          attributes: ["id", "username", "email", "role"],
        },
      ],
    });

    ctx.body = {
      code: 200,
      message: "成员列表获取成功",
      data: members,
    };
  }
}

module.exports = ProjectUserController;
