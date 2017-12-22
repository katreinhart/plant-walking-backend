const db = require('../db/connection.js')
console.log('PI model');

class PlantInstanceModel {

  // static getOne(){}

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
