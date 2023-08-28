// 接口版本控制层代码（InterfaceVersionController.js）
"use strict";

const Controller = require("egg").Controller;

class InterfaceVersionController extends Controller {
  // 查找接口版本
  async index() {
    const { ctx } = this;
    const { projectId } = ctx.params;

    // 获取项目的所有接口ID
    const interfaces = await ctx.model.Interface.findAll({
      where: {
        project_id: projectId,
      },
    });
    // 获取接口ID列表
    const interfaceIds = interfaces.map((interfaceItem) => interfaceItem.id);
    // 通过接口ID查找接口版本记录
    const interfaceVersions = await ctx.model.InterfaceVersion.findAll({
      where: {
        interface_id: interfaceIds,
      },
    });

    ctx.body = {
      code: 200,
      message: "项目的接口版本记录查找成功",
      data: interfaceVersions,
    };
  }
}

module.exports = InterfaceVersionController;
