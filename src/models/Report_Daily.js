"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DAILYREPORT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DAILYREPORT.init(
    {
      Rptdate: DataTypes.STRING,
      KHOI_QL: DataTypes.STRING,
      NHOM_KH: DataTypes.STRING,
      CHI_TIEU: DataTypes.STRING,
      Amt: DataTypes.FLOAT,
      Dtd: DataTypes.FLOAT,
      Mtd: DataTypes.FLOAT,
      Ytd: DataTypes.FLOAT,
      Ty_trong: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "DAILYREPORT",
      tableName: "DASHBOARD_HDV_DAILY",
      timestamps: false,
    }
  );
  return DAILYREPORT;
};
