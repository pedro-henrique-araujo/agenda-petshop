let mysql = require('mysql2');

let connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'password',
   database: 'agendaPetshop'  
});

module.exports = connection;

