const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DB_PG_URL,
});

module.exports = pool;