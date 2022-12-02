'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface : any, Sequelize : any) {
    await queryInterface.createTable('talent', {
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
      talent_full_name: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      unique_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface : any, Sequelize : any) {
    await queryInterface.dropTable('talent');
  }
};

export {}

