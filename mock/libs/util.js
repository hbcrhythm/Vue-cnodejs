'use strict';

exports.getToken = (req) => {
    var Auth = req.header('Authorization');
    if(Auth) {
      const parts = Auth.split(' ');
      if(!Object.is(parts.length, 2) || !Object.is(parts[0], 'Bearer')){
        return false;
      }
      return parts[1];
    }else {
        return false;
    }
}
