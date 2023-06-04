"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DAILYREPORT_TD extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DAILYREPORT_TD.init(
    {
      Rptdate: DataTypes.STRING,
      KHOI_QL: DataTypes.STRING,
      KY_HAN: DataTypes.STRING,
      NHOM_KH: DataTypes.STRING,
      CHI_TIEU: DataTypes.STRING,
      Amt: DataTypes.FLOAT,
      Dtd: DataTypes.FLOAT,
      Mtd: DataTypes.FLOAT,
      Ytd: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "DAILYREPORT_TD",
      tableName: "DASHBOARD_TD_DAILY",
      timestamps: false,
    }
  );
  return DAILYREPORT_TD;
};
