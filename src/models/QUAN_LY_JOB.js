"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QL_JOB extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Staff,{foreignKey: 'CIF_QUANLY',targetKey: 'CIF'})
    }
  }
  QL_JOB.init(
    {
      CIF: DataTypes.STRING,
      CIF_QUANLY: {
        type: DataTypes.STRING,
        foreignKey: true
      },
      Name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "QL_JOB",
      tableName: "QUAN_LY_JOB_NV",
      timestamps: false,
    }
  );
  return QL_JOB;
};
