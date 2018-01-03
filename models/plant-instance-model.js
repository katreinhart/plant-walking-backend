const db = require('../db/connection.js')
// console.log('PI model');

class PlantInstanceModel {

  static getOne(id){
    return db('plant_instances')
    .where({id})
    .first()
  }

  static addToProgress(stepsToAdd, id){
    return db('plant_instances')
    .where({id})
    .increment('progress', stepsToAdd)
    .returning('*')
  }

  static resetProgress(id){
    return db('plant_instances')
    .where({id})
    .update('progress', 0)
    .update('completed', true)

  }

  static getAll(){
    return db('plant_instances')
  }

//   static update(id){
//
//   }
//
//   static newInstance(){}
}


module.exports = PlantInstanceModel
