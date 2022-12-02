'use strict';

const env = process.env.NODE_ENV || 'developtment';
import config_opts from '@/db/config/config';

// select config based on environment
const config = config_opts[env]


import { DataTypes } from 'sequelize';
import Sequelize from 'sequelize';

import Contract from './contract';
import OpenWindow from './openwindow';
import Talent from './talent';
import Title from './title';

console.log('config');
console.log(config);


// initialize sequelize with config
let sequelize : any;
if (config?.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}




// initialize all the tables
Contract.init({
  contract_type: DataTypes.STRING,
  licensor: DataTypes.STRING,
  distributor: DataTypes.STRING,
  status: DataTypes.STRING,
  deal_status: DataTypes.STRING,
  creation_date: DataTypes.DATE,
  deal_type: DataTypes.STRING,
  mg: DataTypes.DOUBLE,
  cur: DataTypes.STRING,
  additional_terms: DataTypes.TEXT,
  notes: DataTypes.TEXT,
  contract_id: {
    primaryKey: true,
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  freezeTableName: true,
  modelName: 'Contract',
  tableName: 'contracts',
  timestamps: false,
});

OpenWindow.init({
  territory: DataTypes.STRING,
  right: DataTypes.STRING,
  license_type: DataTypes.STRING,
  start_date: DataTypes.DATE,
  end_date: DataTypes.DATE,
  start_confirmed: DataTypes.BOOLEAN,
  end_confirmed: DataTypes.BOOLEAN,
  right_group: DataTypes.STRING,
  unique_id: {
    primaryKey: true,
    type: DataTypes.STRING,
  },
  contract_id: DataTypes.STRING
}, {
  sequelize,
  freezeTableName: true,
  modelName: 'OpenWindow',
  tableName: 'open_windows',
  timestamps: false,
});


Talent.init({
  talent_full_name: DataTypes.STRING,
  role: DataTypes.STRING,
  unique_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
}, {
  sequelize,
  freezeTableName: true,
  modelName: 'Talent',
  tableName: 'talent',
  timestamps: false,
});

Title.init({
  title: DataTypes.STRING,
  aka_1: DataTypes.STRING,
  aka_2: DataTypes.STRING,
  adj_running_time: DataTypes.STRING,
  budget: DataTypes.STRING,
  copyright_holder: DataTypes.STRING,
  copyright_year: DataTypes.STRING,
  country_of_origin: DataTypes.STRING,
  dialogue_language: DataTypes.STRING,
  external_comments: DataTypes.STRING,
  genre: DataTypes.STRING,
  imdb_code: DataTypes.STRING,
  internal_comments: DataTypes.STRING,
  logline: DataTypes.STRING,
  motion_picture_association_of_america: DataTypes.STRING,
  number_of_episodes: DataTypes.INTEGER,
  number_of_seasons: DataTypes.INTEGER,
  original_format: DataTypes.STRING,
  original_language: DataTypes.STRING,
  production_company: DataTypes.STRING,
  project_code: DataTypes.STRING,
  project_group: DataTypes.STRING,
  project_type: DataTypes.STRING,
  rating: DataTypes.STRING,
  running_time: DataTypes.STRING,
  sales_agency: DataTypes.STRING,
  season: DataTypes.DOUBLE,
  short_synopsis: DataTypes.STRING,
  status: DataTypes.STRING,
  subtitle_language: DataTypes.STRING,
  synopsis: DataTypes.STRING,
  title_code: DataTypes.STRING,
  website: DataTypes.STRING,
  year_completed: DataTypes.DOUBLE,
  unique_id: {
    primaryKey: true,
    type: DataTypes.STRING,
  },

}, {
  sequelize,
  freezeTableName: true,
  modelName: 'Title',
  tableName: 'titles',
  timestamps: false,
});


export default {
  Contract, OpenWindow,
  Talent, Title,
};

