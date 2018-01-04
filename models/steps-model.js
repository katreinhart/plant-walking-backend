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

  static editSteps(newStep, id){

    return db('steps')
      .where({id})
      .update({
        number_of_steps:newStep
      })
      .returning('*')

  }
}

module.exports = StepsModel;
