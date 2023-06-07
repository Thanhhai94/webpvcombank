"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TKTT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TKTT.init(
    {
      Rptdate: DataTypes.STRING,
      CHI_TIEU: DataTypes.STRING,
      Amt: DataTypes.FLOAT,
      Dtd: DataTypes.FLOAT,
      Mtd: DataTypes.FLOAT,
      Ytd: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "TKTT",
      tableName: "DASHBOARD_HDV_DAILY",
      timestamps: false,
    }
  );
  return TKTT;
};
