export default {
  development: {
    username: process.env.PG_USER,
    password: process.env.PG_PW || undefined,
    database: process.env.PG_DB,
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT || ''),
    dialect: "postgres",
    quoteIdentifiers: false,
  },
  test: {
    username: "root",
    password: null,
    database: "availsdb",
    host: "127.0.0.1",
    port: undefined,
    dialect: "postgres",
    quoteIdentifiers: false,
  },
  production: {
    username: process.env.PG_USER,
    password: process.env.PG_PW,
    database: process.env.PG_DB,
    host: process.env.DB_HOST,
    port: 5439,
    dialect: "postgres",
    quoteIdentifiers: false,
  }
}

