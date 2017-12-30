const db = require('../db/connection.js')


class PlantTypesModel {
  static getOnePlantType(id){
    return db('plant_types').where({id}).first()
  }
}

module.exports = PlantTypesModel
