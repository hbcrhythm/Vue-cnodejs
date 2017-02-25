let mysql = require('mysql2/promise');
let dbconfig = require('../../build/config/DB.js');

let pool = mysql.createPool(dbconfig.mysql);

module.exports = {
  pool : pool
}