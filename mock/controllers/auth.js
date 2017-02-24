var db = require('../db/');
_      = require('lodash'),
jwt    = require('jsonwebtoken');
config = require('../../build/config/JWT'); 
// XXX: This should be a database of users :).
var users = [{
  id: 1,
  username: 'gonto',
  password: 'gonto'
}, {
  id: 2,
  username: 'hbc',
  password: 'hbc'
}];

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
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*5 });
}


// GET /auth/checkLogin
exports.checkLogin = function (req, res) {
  res.ajaxReturn(db.get('session').value());
};

// POST /auth/login
exports.login = function (req, res) {
  var userScheme = getUserScheme(req);

  if(!userScheme.username || !req.body.password) {
    return res.ajaxReturn(false, { errMsg: "You must send the username and the password" });
  }

  if(_.find(users, userScheme.userSearch)) {
    return res.ajaxReturn(false, { errMsg: "A user with that username already exists" });
  }

  var profile = _.pick(req.body, userScheme.type, 'password', 'extra');
  profile.id = _.max(users, 'id').id + 1;
  console.log({id_token: createToken(profile)});
  res.append('authorization','Bearer ' + createToken(profile));
  res.ajaxReturn({id_token: createToken(profile)});

};

// DELETE /auth/logout
exports.logout = function (req, res) {
  db.set('session', null).value();
  res.ajaxReturn();
};

// GET /auth/user
exports.user = function (req, res) {
  res.ajaxReturn(users[0]);
}

// GET /auth/refresh
exports.refresh = function (req, res) {
    Token = req.header('Authorization');
    if(Token) {
      res.append('authorization','Bearer ' + createToken(users[1]));
      res.ajaxReturn();
    }else{
      res.ajaxReturn(false, { errMsg: '404' });
    }
}