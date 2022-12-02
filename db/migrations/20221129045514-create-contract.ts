'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface : any, Sequelize : any) {
    await queryInterface.createTable('contracts', {
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
      contract_type: {
        type: Sequelize.STRING
      },
      licensor: {
        type: Sequelize.STRING
      },
      distributor: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      deal_status: {
        type: Sequelize.STRING
      },
      creation_date: {
        type: Sequelize.STRING
      },
      deal_type: {
        type: Sequelize.STRING
      },
      mg: {
        type: Sequelize.DOUBLE
      },
      cur: {
        type: Sequelize.STRING
      },
      additional_terms: {
        type: Sequelize.TEXT
      },
      notes: {
        type: Sequelize.TEXT
      },
      contract_id: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface : any, Sequelize : any) {
    await queryInterface.dropTable('contracts');
  }
};

export {}

