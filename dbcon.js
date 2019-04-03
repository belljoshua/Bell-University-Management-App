var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_belljos',
  password        : '6688',
  database        : 'cs340_belljos'
});
module.exports.pool = pool;
