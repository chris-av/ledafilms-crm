'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface : any, Sequelize : any) {
    await queryInterface.createTable('open_windows', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      territory: {
        type: Sequelize.STRING
      },
      right: {
        type: Sequelize.STRING
      },
      license_type: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      start_confirmed: {
        type: Sequelize.BOOLEAN
      },
      end_confirmed: {
        type: Sequelize.BOOLEAN
      },
      right_group: {
        type: Sequelize.STRING
      },
      unique_id: {
        type: Sequelize.STRING
      },
      contract_id: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface : any, Sequelize : any) {
    await queryInterface.dropTable('open_windows');
  }
};
