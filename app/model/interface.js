"use strict";

module.exports = (app) => {
  const { STRING, TEXT, DATE, INTEGER, JSON } = app.Sequelize;

  const Interface = app.model.define(
    "interface",
    {
      id: {
        type: INTEGER(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: "接口ID",
      },
      project_id: {
        type: INTEGER(20).UNSIGNED,
        allowNull: false,
        comment: "项目ID",
      },
      name: {
        type: STRING(100),
        allowNull: false,
        defaultValue: "",
        comment: "接口名称",
      },
      description: {
        type: TEXT,
        comment: "接口描述",
      },
      url: {
        type: STRING(200),
        allowNull: false,
        defaultValue: "",
        comment: "接口URL",
      },
      method: {
        type: STRING(100),
        allowNull: false,
        defaultValue: "",
        comment: "请求方法",
      },
      request_params: {
        type: JSON, // 请求参数
        defaultValue: "",
      },
      response_data: {
        type: JSON, // 响应数据
        defaultValue: "",
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
      tableName: "interfaces",
      comment: "接口表",
    }
  );
  Interface.associate = function () {
    app.model.Interface.belongsTo(app.model.Project, {
      foreignKey: "project_id",
      targetKey: "id",
    });
  };
  return Interface;
};
