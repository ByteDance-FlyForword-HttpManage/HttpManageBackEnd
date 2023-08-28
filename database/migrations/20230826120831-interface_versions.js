'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("interface_versions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      interface_id: {
        type: Sequelize.INTEGER, // 接口ID
        allowNull: false,
        references: {
          model: "interfaces",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      version: {
        type: Sequelize.STRING, // 版本号
        allowNull: false,
        defaultValue: "",
      },
      log: {
        type: Sequelize.TEXT, // 版本日志
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
        type: Sequelize.DATE, // 更新时间
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("interface_versions");
  },
};
