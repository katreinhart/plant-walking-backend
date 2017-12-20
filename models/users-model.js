const db = require('../db/connection.js')
console.log('model here');


class UsersModel {

  static all(){
    return db(users)
  }

}


module.exports = UsersModel;
