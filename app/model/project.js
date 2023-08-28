"use strict";

module.exports = (app) => {
  const { INTEGER,STRING, TEXT, DATE } = app.Sequelize;

  const Project = app.model.define(
    "project",
    {
      id: {
        type: INTEGER(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: "项目ID",
      },
      name: {
        type: STRING(200),
        allowNull: false,
        defaultValue: "",
        comment: "项目名称",
      },
      description: {
        type: TEXT,
        comment: "项目描述",
      },
      created_at: {
        type: DATE,
        get() {
          const val = this.getDataValue("created_at");
          return "zh" + val;
        },
        allowNull: false,
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
      tableName: "projects",
      comment: "项目表",
    }
  );

  return Project;
};
