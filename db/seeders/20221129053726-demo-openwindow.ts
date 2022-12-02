'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface : any, Sequelize : any) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('open_windows', [
      {
        territory: 'US',
        right: 'TVOD',
        license_type: 'License',
        start_date: new Date(),
        end_date: new Date(),
        start_confirmed: 't',
        end_confirmed: 't',
        right_group: 'TVOD',
        unique_id: '1236',
        contract_id: 'AC-523',
      },
    ])
  },

  async down (queryInterface : any, Sequelize : any) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

export {}

