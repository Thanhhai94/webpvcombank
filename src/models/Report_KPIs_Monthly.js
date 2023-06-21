"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KPIs_MONTHLY extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KPIs_MONTHLY.init(
    {
      KHOI_QL: DataTypes.STRING,
      NHOM_KH: DataTypes.STRING,
      KY_HAN: DataTypes.STRING,
      NHOM_CHI_TIEU: DataTypes.STRING,
      LOAI: DataTypes.STRING,
      CHI_TIEU: DataTypes.STRING,
      DON_VI_TINH: DataTypes.STRING,
      Rptdate: DataTypes.STRING,
      Amt: DataTypes.FLOAT,
      Actual_amt: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "KPIs_MONTHLY",
      tableName: "KPIs_MONTHLY",
      timestamps: false,
    }
  );
  return KPIs_MONTHLY;
};
