'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("interfaces", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      project_id: {
        type: Sequelize.INTEGER, // 项目ID
        allowNull: false,
        references: {
          model: "projects",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      name: {
        type: Sequelize.STRING, // 接口名称
        allowNull: false,
        defaultValue: "",
      },
      description: {
        type: Sequelize.TEXT,
        defaultValue:"",
        comment: "接口描述",
      },
      url: {
        type: Sequelize.STRING, // 接口URL
        allowNull: false,
        defaultValue: "",
      },
      method: {
        type: Sequelize.STRING, // 请求方法
        allowNull: false,
        defaultValue: "",
      },
      request_params: {
        type: Sequelize.JSON, // 请求参数
      },
      response_data: {
        type: Sequelize.JSON, // 响应数据
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE, // 创建时间
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE, // 更新时间
      },
      deleted_at: {
        type: Sequelize.DATE, // 删除时间
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("interfaces");
  },
};
