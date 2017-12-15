const db = require('../db/connection.js')
console.log('model here');


class Model {

  static all(){
    return db(users)
  }

}


module.exports = Model;
