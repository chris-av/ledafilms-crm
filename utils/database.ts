import { Sequelize } from 'sequelize';

console.log('environment variables : ');
console.log({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PW,
  database: process.env.PG_DB,
  port: process.env.PG_PORT,
});



const sequelize = new Sequelize({
  username: process.env.PG_USER,
  password: process.env.PG_PW ? process.env.PG_PW : undefined,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  port: process.env.PG_PORT ? parseInt(process.env.PG_PORT) : undefined,
  ssl: false,
  dialect: 'postgres',
})


export default sequelize;

