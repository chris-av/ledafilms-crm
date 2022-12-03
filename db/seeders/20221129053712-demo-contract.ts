/** @type {import('sequelize-cli').Migration} */
export default {
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
    await queryInterface.bulkInsert('contracts', [
      {
        contract_type: 'Sales',
        licensor: 'Videx International Media Ltd.',
        distributor: 'Ammo-Tuby',
        status: 'Normal',
        deal_status: 'Long Form Executed',
        creation_date: new Date(),
        deal_type: 'Flat Fee',
        mg: 0,
        cur: 'USD',
        additional_terms: '',
        notes: 'Copied from previous contract',
        contract_id: 'DA-739',
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

