const Model = require('../models/plant-types-model.js')

class PlantTypesController{

  static getOnePlantType(req, res, next){
    let id = req.params.id

    Model.getOnePlantType(id).then(response => {
      console.log('getOnePlantType',response.steps_required);
      res.status(200).json({response})
    })
  }
}


module.exports = PlantTypesController
