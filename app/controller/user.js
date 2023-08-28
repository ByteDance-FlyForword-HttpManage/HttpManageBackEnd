// 用户控制层代码（UserController.js）
"use strict";

const { Controller } = require("egg");
const md5 = require("md5");


class UserController extends Controller {
  // 注册接口
  async register() {
    const { ctx } = this;
    const { username, password, email, role } = ctx.request.body;
    // 检查用户名和邮箱是否已存在
    const existingUser = await ctx.model.User.findOne({
      where: {
        username: username,
        email: email,
      },
    });
    if (existingUser) {
      ctx.body = {
        code: 400,
        message: "用户已存在",
      };
      return;
    }
    // 插入用户表
    const user = await ctx.model.User.create({
      username,
      password,
      email,
      role,
    });

    ctx.body = {
      code: 200,
      message: "注册成功",
      data: user,
    };
  }

  // 登录接口
  async login() {
    const { ctx } = this;
    const { email, password, role } = ctx.request.body;
    const encryptedPassword = md5(password + "secret");
    console.log(email, password, role);
    // 核验邮箱号及密码及身份角色
    const user = await ctx.model.User.findOne({
      where: {
        email,
        password: encryptedPassword,
        role,
      },
    });
    if (user) {
      ctx.body = {
        code: 200,
        message: "登录成功",
        data: user,
      };
    } else {
      ctx.body = {
        code: 400,
        message: "登录失败，请检查邮箱号或密码是否正确！",
      };
    }
  }
  // 用户注销
  async logout() {
    const { ctx } = this;
    const { userId } = ctx.params;
    // 删除用户记录
    const delResult = await ctx.model.User.destroy({
      where: {
        id: userId,
      },
    });
    if (delResult === 0) {
      ctx.body = {
        code: 400,
        message: "用户不存在",
      };
      return;
    }
    ctx.body = {
      code: 200,
      message: "用户注销成功",
      data:delResult,
    };
  }
}

module.exports = UserController;