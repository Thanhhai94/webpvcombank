"use strict";
const { Model } = require("sequelize");

Model.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};

module.exports = (sequelize, DataTypes) => {
  class LSHD_DINH_HUONG extends Model {
    static associate(models) {
    }
  }
  LSHD_DINH_HUONG.init(
    {
      KHOI_QL: DataTypes.STRING,
      From_Date: DataTypes.FLOAT,
      To_Date: DataTypes.FLOAT,
      Amt_L_12M: DataTypes.FLOAT,
      Amt_G_12M: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "LSHD_DINH_HUONG",
      tableName: "LSHD_DINH_HUONG",
      timestamps: false,
    }
  );
  return LSHD_DINH_HUONG;
};
