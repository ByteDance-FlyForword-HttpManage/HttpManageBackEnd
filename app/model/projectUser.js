"use strict";

module.exports = (app) => {
  const { INTEGER, DATE } = app.Sequelize;

  const ProjectUser = app.model.define(
    "project_user",
    {
      id: {
        type: INTEGER(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: "项目用户ID",
      },
      project_id: {
        type: INTEGER(20).UNSIGNED,
        allowNull: false,
        comment: "项目ID",
      },
      user_id: {
        type: INTEGER(20).UNSIGNED,
        allowNull: false,
        comment: "用户ID",
      },
      created_at: {
        type: DATE,
        allowNull: false,
        get() {
          const val = this.getDataValue("created_at");
          return "zh" + val;
        },
        comment: "创建时间",
      },
      updated_at: {
        type: DATE,
        allowNull: false,
        comment: "更新时间",
      },
    },
    {
      timestamps: true,
      tableName: "project_users",
      comment: "项目用户表",
    }
  );
  // 定义关联关系
  ProjectUser.associate = function () {
    app.model.ProjectUser.belongsTo(app.model.User, {
      foreignKey: "user_id",
      targetKey: "id",
    });
    app.model.ProjectUser.belongsTo(app.model.Project, {
      foreignKey: "project_id",
      targetKey: "id",
    });
  };
  return ProjectUser;
};
