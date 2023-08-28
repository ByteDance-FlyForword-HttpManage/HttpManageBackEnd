// 接口控制层代码（InterfaceController.js）
"use strict";

const { Controller } = require("egg");

class InterfaceController extends Controller {
  // 增加接口
  async create() {
    const { ctx } = this;
    const {
      projectId,
      name,
      description,
      url,
      method,
      request_params,
      response_data,
    } = ctx.request.body;
    // console.log(projectId, name, method, request_params, response_data);
    // console.log(JSON.stringify(request_params));
    const existingInterface = await ctx.model.Interface.findOne({
      where: {
        name: name,
        method: method,
      },
    });
    if (existingInterface) {
      ctx.body = {
        code: 200,
        message: `${name}接口已存在`,
        data: existingInterface,
      };
      return;
    }
    // 增加接口
    const defInterface = await ctx.model.Interface.create({
      project_id: projectId,
      name,
      description,
      url,
      method,
      request_params,
      response_data,
    });
    // 创建‘接口添加’日志
    const version = "1.0.0";
    await ctx.model.InterfaceVersion.create({
      interface_id: defInterface.id,
      version: version,
      log:`接口${name},请求方式${method},url:${url},版本${version}初始创建！`,
    })
    ctx.body = {
      code: 200,
      message: "接口添加成功,接口日志添加",
      data: defInterface,
    };
  }

  // 删除接口
  async destroy() {
    const { ctx } = this;
    // 接口id，项目版本号
    const { id, version } = ctx.query;

    // 创建‘接口删除’日志
    const existingInterface = await ctx.model.Interface.findOne({
      where: {
        id: id,
      },
    });
    await ctx.model.InterfaceVersion.create({
      interface_id: id,
      version: version,
      log: `接口${existingInterface.name},请求方式${existingInterface.method},url:${existingInterface.url},版本号${version}已被删除！`,
    });
    // 删除接口
    await ctx.model.Interface.destroy({
      where: {
        id,
      },
    });
    ctx.body = {
      code: 200,
      message: "接口删除成功",
    };
  }

  // 更新接口
  async update() {
    const { ctx } = this;
    const { id, version } = ctx.request.body;
    // 更新接口
    const result = await this.ctx.model.Interface.findByPk(id);
    if (!result) {
      this.ctx.body = {
        code: 200,
        data: null,
        msg: "未找到该接口",
      };
      return;
    }
    const updateParams = this.ctx.request.body;
    const updateResult = await result.update(updateParams, {
      fields: [
        "name",
        "description",
        "url",
        "method",
        "request_params",
        "response_data",
      ],
    });
    const existingInterface = await ctx.model.Interface.findOne({
      where: {
        id: id,
      },
    });
    const versionParts = version.split("."); // 拆分版本号为三个部分
    const newLastPart = parseInt(versionParts[2]) + 1; // 最后一位加一
    versionParts[2] = newLastPart.toString(); // 更新版本号的最后一位
    const newVersion = versionParts.join(".");
    console.log(updateResult);
    await ctx.model.InterfaceVersion.create({
      interface_id: id,
      version: newVersion,
      log: `接口${existingInterface.name},请求方式${
        existingInterface.method
      },url:${
        existingInterface.url
      },版本号${newVersion},已被更新为${toString(updateResult)}!`,
    });
    this.ctx.body = {
      code: 200,
      message: "接口更新成功,更新日志已添加",
      data: updateResult,
    };
  }

  // 查找接口
  async index() {
    const { ctx } = this;
    const { projectId } = ctx.query;
    // 返回该项目的所有接口
    const interfaces = await ctx.model.Interface.findAll({
      where: {
        project_id: projectId,
      },
    });
    ctx.body = {
      code: 200,
      message: "接口列表获取成功",
      data: interfaces,
    };
  }
}

module.exports = InterfaceController;