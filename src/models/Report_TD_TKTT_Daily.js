"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TKTT_Daily extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TKTT_Daily.init(
    {
      Rptdate: DataTypes.STRING,
      KHOI_QL: DataTypes.STRING,
      SLTKTT_ytd: DataTypes.FLOAT,
      SLTK_EKYC_ytd: DataTypes.FLOAT,
      SLTKTT_mtd: DataTypes.FLOAT,
      SLTK_EKYC_mtd: DataTypes.FLOAT,
      SLTKTT_dtd: DataTypes.FLOAT,
      SLTK_EKYC_dtd: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "TKTT_Daily",
      tableName: "DASHBOARD_TKTT_DAILY",
      timestamps: false,
    }
  );
  return TKTT_Daily;
};
