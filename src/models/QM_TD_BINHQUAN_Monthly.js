"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QM_TD_BQ extends Model {
    static associate(models) {
    }
  }
  QM_TD_BQ.init(
    {
      RPT_DATE: DataTypes.STRING,
      KHOI_QL: DataTypes.STRING,
      NHOM_KH: DataTypes.STRING,
      AMT: DataTypes.FLOAT,
      SORTING: DataTypes.FLOAT
    },
    {
      sequelize,
      modelName: "QM_TD_BQ",
      tableName: "Data_QMTD",
      timestamps: false,
    }
  );
  return QM_TD_BQ;
};
