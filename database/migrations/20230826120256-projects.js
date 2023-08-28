'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("projects", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING, // 项目名称
        allowNull: false,
        defaultValue: "",
      },
      description: {
        type: Sequelize.TEXT, // 项目描述
        defaultValue: "",
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
    await queryInterface.dropTable("projects");
  },
};
