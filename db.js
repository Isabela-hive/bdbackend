var mysql = require('mysql');
require('dotenv').config();

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

con.connect(function (err) {
  if (err)
    console.log({
      error: 'DB Connection',
      details: err,
    });
  console.log('Connected to DB!');
});

module.exports = con;
