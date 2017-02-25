// https://github.com/typicode/lowdb 前后端通用的微型数据库 LowDB
var lowdb = require('lowdb');
const fileAsync = require('lowdb/lib/storages/file-async')

// 数据库实例（pathToDbFile 为存储路径或 LocalStorage 键名）
var pathToDbFile = 'db.json';

if (typeof __dirname !== 'undefined') {
  var path = require('path');
  pathToDbFile = path.join(__dirname, pathToDbFile);
}

// Start database using file-async storage
var db = lowdb(pathToDbFile, {
	storage: fileAsync
});

db.defaults({
  // 初始化时的默认值
  msgs: [/*
    {
      id: <uuid>,
      title: <String>,
      content: <String>,
      author: <String>,
      ctime: <Number:Timestamp>
    }
  */],
  users: [
  /*
    { 
      id: <uuid>,
      username: <String>,
      password: <string>,
      token: <string>
     } // 对应着 msgs[i].author
  */]
}).value();

module.exports = db;
