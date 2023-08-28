'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("project_users", {
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
      user_id: {
        type: Sequelize.INTEGER, // 用户ID
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("project_users");
  },
};
