import { Pool } from 'pg';


console.log('environment variables : ');
console.log({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PW,
  database: process.env.PG_DB,
});
console.log('');
console.log('');

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PW,
  database: process.env.PG_DB,
  port: 5439,
  ssl: false
});

pool.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to database!');
    console.log('');
  }
});


export default pool;

