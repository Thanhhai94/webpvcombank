"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HDV_PS_MOI_DAILY extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HDV_PS_MOI_DAILY.init(
    {
      Rptdate: DataTypes.STRING,
      KHOI_QL: DataTypes.STRING,
      NHOM_KH: DataTypes.STRING,
      PRODUCT: DataTypes.STRING,
      KY_HAN: DataTypes.STRING,
      Amt: DataTypes.FLOAT,
      Lai_suat: DataTypes.FLOAT,
      Lai_suat_max: DataTypes.FLOAT,
      Amt_bien_do_cong: DataTypes.FLOAT,
      Lai_suat_bien_do_cong: DataTypes.FLOAT,
      Lai_suat_max_bien_do_cong: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "HDV_PS_MOI_DAILY",
      tableName: "DASHBOARD_HDV_PS_MOI_DAILY",
      timestamps: false,
    }
  );
  return HDV_PS_MOI_DAILY;
};
