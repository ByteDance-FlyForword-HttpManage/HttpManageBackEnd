'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING, // 用户名
        allowNull: false,
        defaultValue: "",
      },
      email: {
        type: Sequelize.STRING, // 邮箱
        allowNull: false,
        defaultValue: "",
      },
      password: {
        type: Sequelize.STRING, // 密码
        allowNull: false,
        defaultValue: "",
      },
      role: {
        type: Sequelize.STRING, // 用户角色
        allowNull: false,
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
        allowNull: true,
        type: Sequelize.DATE, // 更新时间
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  }
};
