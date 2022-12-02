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
    await queryInterface.bulkInsert('talent', [
      {
        talent_full_name: 'christian',
        role: 'actor',
        unique_id: 'id-1',
      },
      {
        talent_full_name: 'alejandro',
        role: 'director',
        unique_id: 'id-2',
      },
    ]);
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

