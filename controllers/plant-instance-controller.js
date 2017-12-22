const Model = require('../models/plant-instance-model.js')
console.log('PI controller here');


class PlantInstanceController {

  static newInstance(req, res, next){
    console.log('in newInstance PI controller');
    Model.newInstance().then(response => {
      res.json({response})
    })
  }

  static update(req, res, next){
    console.log('in update PI cont');
    Model.update().then(response => {
      res.json({response})
    })
  }

  static getOne(req, res, next){
    console.log('getOne PI controller');
    Model.getOne().then( response => {
      res.json({response})
    })
  }


  static getAll(req, res, next){
    console.log('getAll PI controller');
    Model.getAll().then (response => {
      res.json({plant_instance: response})
    })
  }



}

module.exports = PlantInstanceController
