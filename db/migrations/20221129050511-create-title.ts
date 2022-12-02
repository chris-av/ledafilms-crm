'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface : any, Sequelize : any) {
    await queryInterface.createTable('titles', {
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
      title: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      aka_1: {
        type: Sequelize.STRING
      },
      aka_2: {
        type: Sequelize.STRING
      },
      adj_running_time: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.STRING
      },
      copyright_holder: {
        type: Sequelize.STRING
      },
      copyright_year: {
        type: Sequelize.STRING
      },
      country_of_origin: {
        type: Sequelize.STRING
      },
      dialogue_language: {
        type: Sequelize.STRING
      },
      external_comments: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      imdb_code: {
        type: Sequelize.STRING
      },
      internal_comments: {
        type: Sequelize.STRING
      },
      logline: {
        type: Sequelize.STRING
      },
      motion_picture_association_of_america: {
        type: Sequelize.STRING
      },
      number_of_episodes: {
        type: Sequelize.INTEGER
      },
      number_of_seasons: {
        type: Sequelize.INTEGER
      },
      original_format: {
        type: Sequelize.STRING
      },
      original_language: {
        type: Sequelize.STRING
      },
      production_company: {
        type: Sequelize.STRING
      },
      project_code: {
        type: Sequelize.STRING
      },
      project_group: {
        type: Sequelize.STRING
      },
      project_type: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.STRING
      },
      running_time: {
        type: Sequelize.STRING
      },
      sales_agency: {
        type: Sequelize.STRING
      },
      season: {
        type: Sequelize.DOUBLE
      },
      short_synopsis: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      subtitle_language: {
        type: Sequelize.STRING
      },
      synopsis: {
        type: Sequelize.STRING
      },
      title_code: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      year_completed: {
        type: Sequelize.DOUBLE
      },
      unique_id: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface : any, Sequelize : any) {
    await queryInterface.dropTable('titles');
  }
};

export {}

