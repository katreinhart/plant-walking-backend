const db = require('../db/connection.js')


class PlantTypesModel {
  static getAllPlantTypes() {
    return db('plant_types')
  }
  static getOnePlantType(id){
    return db('plant_types').where({id}).first()
  }
}

module.exports = PlantTypesModel
