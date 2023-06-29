'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TRACK_JOB', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CIF: {
        type: Sequelize.STRING
      },
      titleJob: {
        type: Sequelize.STRING
      },
      dateJob: {
        type: Sequelize.STRING
      },
      statusJob: {
        type: Sequelize.STRING
      },
      deadlineJob: {
        type: Sequelize.DATE
      },
      timelineJob: {
        type: Sequelize.DATE
      },
      noteJob: {
        type: Sequelize.STRING
      },
      timeline_Job: {
        type: Sequelize.TIME
      },
      contentJob: {
        type: Sequelize.STRING
      },
      Rptdate: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TRACK_JOB');
  }
};