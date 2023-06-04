"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Report_TD_Customer_Daily extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Report_TD_Customer_Daily.init(
    {
      Rptdate: DataTypes.STRING,
      CIF: DataTypes.FLOAT,
      FULL_NAME: DataTypes.STRING,
      DIFF: DataTypes.FLOAT,
      NOTE: DataTypes.STRING,
      KHOI_QL: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Report_TD_Customer_Daily",
      tableName: "DASHBOARD_TD_CUSTOMER_DAILY",
      timestamps: false,
    }
  );
  return Report_TD_Customer_Daily;
};
