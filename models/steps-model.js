const db = require('../db/connection.js')
console.log('steps model here');


class StepsModel {

  static getAll(){
    return db('steps')
  }

  static getAllUserSteps(user_id){
    return db('steps')
      .where({user_id})
      .returning('*')
  }

  static addSteps(body){
    return db('steps')
      .insert(body)
      .returning('*')
  }

  static editSteps(body, id){
    return db('steps')
      .where({id})
      
  }
}

module.exports = StepsModel;
