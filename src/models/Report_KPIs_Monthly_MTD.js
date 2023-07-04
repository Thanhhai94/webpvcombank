"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KPIs_MONTHLY_MTD extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KPIs_MONTHLY_MTD.init(
    {
      Rptdate: DataTypes.STRING,
      KHOI_QL: DataTypes.STRING,
      NHOM_KH: DataTypes.STRING,
      LOAI_CHI_TIEU: DataTypes.STRING,
      CHI_TIEU: DataTypes.STRING,
      Amt_mtd: DataTypes.FLOAT,
      KPI_mtd: DataTypes.FLOAT,
      CODE_MAP: DataTypes.STRING,
      CHI_TIEU_REF: DataTypes.STRING,
      DVT: DataTypes.STRING,
      NHOM_CHI_TIEU: DataTypes.STRING,
      CODE_LOAI_CHI_TIEU: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "KPIs_MONTHLY_MTD",
      tableName: "KET_QUA_THUC_HIEN_MTD",
      timestamps: false,
    }
  );
  return KPIs_MONTHLY_MTD;
};
