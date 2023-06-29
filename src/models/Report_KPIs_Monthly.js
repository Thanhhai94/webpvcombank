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
      Rptdate: DataTypes.STRING,
      KHOI_QL: DataTypes.STRING,
      NHOM_KH: DataTypes.STRING,
      LOAI_CHI_TIEU: DataTypes.STRING,
      CHI_TIEU: DataTypes.STRING,
      Amt: DataTypes.FLOAT,
      KPI: DataTypes.FLOAT,
      CODE_MAP: DataTypes.STRING,
      CHI_TIEU_REF: DataTypes.STRING,
      DVT: DataTypes.STRING,
      NHOM_CHI_TIEU: DataTypes.STRING,
      CODE_LOAI_CHI_TIEU: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "KPIs_MONTHLY",
      tableName: "KET_QUA_THUC_HIEN",
      timestamps: false,
    }
  );
  return KPIs_MONTHLY;
};
