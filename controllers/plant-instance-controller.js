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
}

module.exports = PlantInstanceController
