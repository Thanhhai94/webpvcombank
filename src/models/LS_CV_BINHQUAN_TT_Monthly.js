"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LS_CV_BINHQUAN_TT_MONTHLY extends Model {
    static associate(models) {
    }
  }
  LS_CV_BINHQUAN_TT_MONTHLY.init(
    {
      RPT_DATE: DataTypes.STRING,
      KHOI_QL: DataTypes.STRING,
      NHOM_KH: DataTypes.STRING,
      AMT_LS_CV_BQ: DataTypes.FLOAT,
      SORTING: DataTypes.FLOAT 
    },
    {
      sequelize,
      modelName: "LS_CV_BINHQUAN_TT_MONTHLY",
      tableName: "LAI_SUAT_THUC_TE_TIN_DUNG",
      timestamps: false,
    }
  );
  return LS_CV_BINHQUAN_TT_MONTHLY;
};
