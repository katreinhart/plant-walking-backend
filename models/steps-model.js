const db = require('../db/connection.js')
console.log('steps model here');


class StepsModel {

  static all(){
    return db('steps')
  }

  static addSteps(body){
    return db('steps').insert(body).returning('*')
  }

}


module.exports = StepsModel;
