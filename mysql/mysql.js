var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'IP',
  user     : 'User Name',
  password : 'Password',
  port     : 3306,
  database : 'DB Name'
});

connection.connect();

connection.query('SELECT * FROM user_tb;', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
});

connection.end();