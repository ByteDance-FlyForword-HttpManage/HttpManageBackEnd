'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 跨域插件
  cors: {
    enable: true,
    package: "egg-cors",
  },
  sequelize: {
    enable: true,
    package: "egg-sequelize",
  },
};
