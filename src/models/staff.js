"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Staff.init(
    {
      CIF: DataTypes.STRING,
      Name: DataTypes.STRING,
      Mobile: DataTypes.STRING,
      Team: DataTypes.STRING,
      Email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Staff",
      tableName: "STAFFS",
      timestamps: false,
    }
  );
  return Staff;
};
