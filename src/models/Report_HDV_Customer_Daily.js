"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Report_HDV_Customer_Daily extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Report_HDV_Customer_Daily.init(
    {
      Rptdate: DataTypes.STRING,
      TEN_KH: DataTypes.STRING,
      DIFF: DataTypes.FLOAT,
      KY_HAN: DataTypes.STRING,
      KHOI_QL: DataTypes.STRING,
      NOTE: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Report_HDV_Customer_Daily",
      tableName: "DASHBOARD_HDV_CUSTOMER_DAILY",
      timestamps: false,
    }
  );
  return Report_HDV_Customer_Daily;
};
