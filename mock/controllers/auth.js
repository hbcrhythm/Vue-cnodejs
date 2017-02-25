var db = require('../db/index.lowdb');
_      = require('lodash'),
jwt    = require('jsonwebtoken'),
util   = require('../libs/util');
config = require('../../build/config/JWT'); 
// XXX: This should be a database of users :).
// var users = [{
//   id: 1,
//   username: 'gonto',
//   password: 'gonto'
// }, {
//   id: 2,
//   username: 'hbc',
//   password: 'hbc'
// }];

function getUserScheme(req) {
  
  var username;
  var type;
  var userSearch = {};

  // The POST contains a username and not an email
  if(req.body.username) {
    username = req.body.username;
    type = 'username';
    userSearch = { username: username };
  }
  // The POST contains an email and not an username
  else if(req.body.email) {
    username = req.body.email;
    type = 'email';
    userSearch = { email: username };
  }

  return {
    username: username,
    type: type,
    userSearch: userSearch
  }
}

function createToken(user) {
  return jwt.sign(_.omit(user, ['password', 'token']), config.secret, { expiresIn: 60*5 });
}

// GET /auth/checkLogin
exports.checkLogin = function (req, res) {
  res.ajaxReturn(db.get('session').value());
};

// POST /auth/login
exports.login = function (req, res) {
  console.log(12312);
  var userScheme = getUserScheme(req);

  if(!userScheme.username || !req.body.password) {
    res.status(400);
    return res.ajaxReturn(false, { errMsg: "You must send the username and the password" });
  }

  var User = db.get('users').find({username: userScheme.username}).value();
  if(typeof User === 'undefined'){
    res.status(400);
    return res.ajaxReturn(false, { errMsg: "You must create a user with login"});
  } 
  // if(_.find(db.get('users')., userScheme.userSearch)) {
  //   return res.ajaxReturn(false, { errMsg: "A user with that username already exists" });
  // }
  
  if(User.password !== req.body.password){
    res.status(400);
    return res.ajaxReturn(false, { errMsg: "Username or password error !"});
  }

  // var profile = _.pick(req.body, userScheme.type, 'password', 'extra');
  // console.log(profile);

  // User.id = _.max(db.get('users').value(), 'id').id + 1;
  User.token = createToken(User);
  console.log(User); 
  db.get('users').find({username: userScheme.username}).assign(User).write();
  res.append('authorization','Bearer ' + User.token);
  res.ajaxReturn();
};

// DELETE /auth/logout
exports.logout = function (req, res) {
  db.set('session', null).value();
  res.ajaxReturn();
};

// GET /auth/user
exports.user = function (req, res) {
  var token = util.getToken(req);
  if(token === false) {
    return res.ajaxReturn(false, { errMsg: "token undefined !" });
  }
  User = db.get('users').find({token, token}).value();
  res.ajaxReturn(User);
}

// GET /auth/refresh
exports.refresh = function (req, res) {
    Auth = req.header('Authorization');
    if(Auth) {
      const parts = Auth.split(' ');
      if(!Object.is(parts.length, 2) || !Object.is(parts[0], 'Bearer')){
        return res.ajaxReturn(false, { errMsg: '404' });
      }
      User = db.get('users').find({token: parts[1]}).value();
      User.token = createToken(User);
      db.get('users').find({token: parts[1]}).assign(User).write();
      res.append('authorization','Bearer ' + User.token);
      res.ajaxReturn();
    }else{
      res.ajaxReturn(false, { errMsg: '404' });
    }
}

