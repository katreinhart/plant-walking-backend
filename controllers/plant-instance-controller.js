const Model = require('../models/plant-instance-model.js')
console.log('PI controller here');


class PlantInstanceController {

  static newInstance(req, res, next) {
    Model.newInstance().then(response => {
      res.json({response})
    })
  }

  static update(req, res, next) {
    Model.update().then(response => {
      res.json({response})
    })
  }

  static getOne(req, res, next) {
    Model.getOne(req.params.id).then( plantInstance => {
      res.json({ plant_instance: plantInstance })
    })
  }

  static getAll(req, res, next) {
    Model.getAll().then (plantInstances => {
      res.json({ plant_instances: plantInstances })
    })
  }

  static getGarden(req, res, next) {
    let id = req.params.id

    Model.getGarden(id).then(garden => {
      console.log('controller get Garden', garden);
      res.json({garden})
    })
  }

  static updatePlantInstance(req, res, next) {
    Model.updatePlantInstance(req.params.id, req.body).then(response => {
      console.log('updated plant instance in model, responding 200')
      res.status(200).json({ response })
    })
  }
}

module.exports = PlantInstanceController
