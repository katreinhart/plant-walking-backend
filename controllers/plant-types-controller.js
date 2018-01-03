const Model = require('../models/plant-types-model.js')

class PlantTypesController{

  static getAllPlantTypes(req, res, next) {
    Model.getAllPlantTypes().then(response => res.status(200).json({ plants: response }))
  }

  static getOnePlantType(req, res, next){
    let id = req.params.id

    Model.getOnePlantType(id).then(response => {
      res.status(200).json({plant: response })
    })
  }
}


module.exports = PlantTypesController
