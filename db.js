const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "013527",
  host: "localhost",
  port: 5432,
  database: "anime",
});

module.exports = pool;
