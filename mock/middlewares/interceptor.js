var db = require('../db/index.lowdb');
var util = require('../libs/util');

function interceptorGen(loginStatus, errMsg) {
  // return function (req, res, next) {
  //   if(!db.get('session').isEmpty().value() === loginStatus) {
  //     next();
  //   } else {
  //     res.ajaxReturn(false, { errMsg: errMsg });
  //   }
  // };
  return function (req, res, next) {
    var token = util.getToken(req);
    if(token === false) {
      return ajaxReturn(false, { errMsg: errMsg });
    }
    User = db.get('users').find({'token': token}).value();
    console.log('user' , User);
    if(token !== User.token){
      return ajaxReturn(false, { errMsg: errMsg });
    }
    next();
  }
}

module.exports = {
  NEED_AUTH: interceptorGen(true, '您需要登录后才能进行该操作'),
  FORBID_AUTHED: interceptorGen(false, '您已经登录，禁止当前操作')
};
