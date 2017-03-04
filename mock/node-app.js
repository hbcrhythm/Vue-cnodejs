var express = require('express'),
  https = require('https'),
  fs = require('fs'),
  bodyParser = require('body-parser'),
  routes = require('./routes/'),
  notFound = require('./middlewares/notFound'),
  PORTS = require('../build/config/PORTS.js'),
  simpleLogger = require('./middlewares/simpleLogger'),
  cors = require('cors'),
  resAjaxReturn = require('./middlewares/res.ajaxReturn');


var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(simpleLogger);
app.use(resAjaxReturn);

var privateKey  = fs.readFileSync('private.pem', 'utf8');
var certificate = fs.readFileSync('file.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};


// 根据 app.<verb>(<path>, <[middlewares]?>, <handler>) 挂载路由
routes.forEach(function (route) {
  var args = [route.path];
  if (route.middlewares) args.push(route.middlewares);
  args.push(route.handler);

  app[route.method.toLowerCase()].apply(app, args);
});

app.use(notFound);
// app.listen(PORTS.MOCK_SERVER);
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(8989, function(){
  console.log('8989!');
});
// https.createServer(options,app).listen(443);
// app.applisten(8989);

module.exports = app;
