// 项目控制层代码（ProjectController.js）
"use strict";

const Controller = require("egg").Controller;

class ProjectController extends Controller {
  // 增添项目
  async create() {
    const { ctx } = this;
    const { userId,name, description } = ctx.request.body;
    const inspectProject = await ctx.model.Project.findOne({
      where: {
        name,
      },
    });
    if (inspectProject) {
      ctx.body = {
        code: 200,
        message: "项目已存在",
      };
      return;
    }
    // 增添数据库项目表
    const project = await ctx.model.Project.create({
      name,
      description,
    });
    // 添加用户管理项目
    await ctx.model.ProjectUser.create({
      project_id: project.id,
      user_id: userId,
    });
    ctx.body = {
      code: 200,
      message: "项目创建成功,且该项目属于当前用户（即项目成员表增添记录）",
      data: project,
    };
  }


  // 更改项目
  async update() {
    const { ctx } = this;
    const { id, name, description } = ctx.request.body;
    console.log(id, name, description);
    const result = await this.ctx.model.Project.findByPk(id);
    if (!result) {
      this.ctx.body = {
        code: 200,
        data: null,
        msg: "该项目不存在",
      };
      return;
    }
    const updateParams = this.ctx.request.body;
    const updateResult = await result.update(updateParams, {
      fields: ["name", "description"],
    });
    this.ctx.body = {
      code: 200,
      data: updateResult,
      msg: "项目更新成功",
    };
  }

  // 删除项目
  async destroy() {
    const { ctx } = this;
    const { id } = ctx.params;
    // 删除项目
    await ctx.model.Project.destroy({
      where: {
        id,
      },
    });
    await ctx.model.ProjectUser.destroy({
      where: {
        project_id: id,
      },
    });
    // 获取项目的所有接口ID
    const interfaces = await ctx.model.Interface.findAll({
      where: {
        project_id: id,
      },
    });
    // 获取接口ID列表
    const interfaceIds = interfaces.map((interfaceItem) => interfaceItem.id);
    // 通过接口ID查找删除接口版本记录
    await ctx.model.InterfaceVersion.destroy({
      where: {
        interface_id: interfaceIds,
      },
    });

    ctx.body = {
      code: 200,
      message: "项目删除成功（项目删除+项目成员移除+项目接口删除+项目接口版本管理删除）",
    };
  }

  // 查找所有项目
  async index() {
    const { ctx } = this;
    // 返回项目的所有列表
    const projects = await ctx.model.Project.findAll();
    ctx.body = {
      code: 200,
      message: "项目列表获取成功",
      data: projects,
    };
  }
  // 查找当前用户的项目：通过userId找到项目成员表project_id字段，从而找到该用户所有的project
  async findProjectsByUserId() {
    const { ctx } = this;
    const { userId } = ctx.params;
    // 通过用户ID查找项目成员表中的 project_id 字段
    const projectUsers = await ctx.model.ProjectUser.findAll({
      where: {
        user_id:userId,
      },
    });
    // 获取项目ID列表
    const projectIds = projectUsers.map((member) => member.project_id);
    console.log(projectUsers,projectIds);
    // 通过项目ID查找项目列表
    const projects = await ctx.model.Project.findAll({
      where: {
        id: projectIds,
      },
    });

    ctx.body = {
      code: 200,
      message: "用户的项目查找成功",
      data: projects,
    };
  }
}

module.exports = ProjectController;
