// // https://github.com/typicode/lowdb 前后端通用的微型数据库 LowDB
// var lowdb = require('lowdb');

// // 数据库实例（pathToDbFile 为存储路径或 LocalStorage 键名）
// var pathToDbFile = 'db.json';

// if (typeof __dirname !== 'undefined') {
//   var path = require('path');
//   pathToDbFile = path.join(__dirname, pathToDbFile);
// }

// var db = lowdb(pathToDbFile);

// db.defaults({
//   // 初始化时的默认值
//   msgs: [/*
//     {
//       id: <uuid>,
//       title: <String>,
//       content: <String>,
//       author: <String>,
//       ctime: <Number:Timestamp>
//     }
//   */],
 
//   session: null
//   /*
//     { username: <String> } // 对应着 msgs[i].author
//    */
// }).value();
var mysql = require('mysql2');
// var await = require('asyncawait/await');
// import dbconfig from '../../build/config/DB.js';
var dbconfig = require('../../build/config/DB.js');
var connection = (mysql.createConnection(dbconfig.mysql));
// connection.execute('SELECT * FROM account', function(err, results){
// 	console.log(results[0].account);
// });
module.exports = {conn : connection};
