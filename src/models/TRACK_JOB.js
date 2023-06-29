"use strict";
const { Model } = require("sequelize");

Model.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss');
};

module.exports = (sequelize, DataTypes) => {
  class TRACK_JOB extends Model {
    static associate(models) {
    }
  }
  TRACK_JOB.init(
    {
      id_Job: DataTypes.INTEGER,
      CIF: DataTypes.STRING,
      titleJob: DataTypes.STRING,
      contentJob: DataTypes.TEXT,
      dateJob: DataTypes.STRING,
      statusJob: DataTypes.STRING,
      deadlineJob: DataTypes.DATE,
      timelineJob: DataTypes.DATE,
      timeline_Job: DataTypes.TIME,
      noteJob: DataTypes.TEXT,
      Rptdate: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "TRACK_JOB",
      tableName: "TRACK_JOB",
      timestamps: false,
    }
  );
  return TRACK_JOB;
};
