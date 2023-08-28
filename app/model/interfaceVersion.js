"use strict";

module.exports = (app) => {
  const { STRING, TEXT, DATE, INTEGER } = app.Sequelize;

  const InterfaceVersion = app.model.define(
    "interface_version",
    {
      id: {
        type: INTEGER(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: "接口版本ID",
      },
      interface_id: {
        type: INTEGER(20).UNSIGNED,
        allowNull: false,
        comment: "接口ID",
      },
      version: {
        type: STRING(100),
        defaultValue: "",
        allowNull: false,
        comment: "版本号",
      },
      log: {
        type: TEXT,
        comment: "版本描述",
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
      tableName: "interface_versions",
      comment: "接口版本表",
    }
  );
  InterfaceVersion.associate = function () {
    app.model.InterfaceVersion.belongsTo(app.model.Interface, {
      foreignKey: "interface_id",
      targetKey: "id",
    });
  };
  return InterfaceVersion;
};
