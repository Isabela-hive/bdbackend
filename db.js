var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@isabellah',
  database: 'bunyala',
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
