const db = require('../db/connection.js')
console.log('PI model');

class PlantInstanceModel {

  static getOne(id){
  console.log('getOne', id);
    return db('plant_instances')
    .where({id})
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
