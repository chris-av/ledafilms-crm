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
    await queryInterface.bulkInsert('titles', [
      {
        title: 'test title',
        aka_1: 'short title 1',
        aka_2: 'short title 2',
        adj_running_time: '',
        budget: '',
        copyright_holder: 'Test Film Productions',
        copyright_year: '2020',
        country_of_origin: 'US',
        dialogue_language: 'English',
        external_comments: '',
        genre: 'Action',
        imdb_code: 'tt5556454',
        internal_comments: '',
        logline: 'In a galaxy far far away',
        motion_picture_association_of_america: 'PG',
        number_of_episodes: 2,
        number_of_seasons: 2,
        original_format: 'HD File',
        original_language: 'English',
        production_company: '',
        project_code: 'Acquired Consent',
        project_group: '',
        project_type: 'Film',
        rating: 'PG',
        running_time: '87',
        sales_agency: '',
        season: 4,
        short_synopsis: '',
        status: 'Completed',
        subtitle_language: 'Spanish',
        synopsis: '',
        title_code: 'MGM Current Films',
        website: 'https://www.google.com',
        year_completed: 2010,
        unique_id: '715',
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

