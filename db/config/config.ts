export default {
  development: {
    username: "chrisvalenzuela",
    password: null,
    database: "availsdb",
    host: "127.0.0.1",
    dialect: "postgres",
    quoteIdentifiers: false,
    define: {
      freezeTableName: true,
    },
  },
  test: {
    username: "root",
    password: null,
    database: "availsdb",
    host: "127.0.0.1",
    dialect: "postgres",
    quoteIdentifiers: false,
    define: {
      freezeTableName: true,
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_DBNAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    quoteIdentifiers: false,
    define: {
      freezeTableName: true,
    }
  }
}

