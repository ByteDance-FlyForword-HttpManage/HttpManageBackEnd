"use strict";
const md5 = require("md5");

module.exports = (app) => {
  const { INTEGER,STRING, DATE } = app.Sequelize;

  const User = app.model.define(
    "user",
    {
      id: {
        type: INTEGER(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: "用户ID",
      },
      username: {
        type: STRING(30),
        allowNull: false,
        defaultValue: "",
        comment: "用户名",
      },
      email: {
        type: STRING(100),
        allowNull: false,
        defaultValue: "",
        comment: "邮箱",
      },
      password: {
        type: STRING(100),
        allowNull: false,
        defaultValue: "",
        set(value) {
          const encrypted = md5(value + "secret");
          this.setDataValue("password", encrypted);
        },
        comment: "密码",
      },
      role: {
        type: STRING(30),
        allowNull: false,
        defaultValue: "",
        comment: "用户角色",
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
      tableName: "users",
      comment: "用户表",
    }
  );
  return User;
};
