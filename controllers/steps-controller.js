const Model = require('../models/steps-model.js')
const PlantInstanceModel = require('../models/plant-instance-model.js')
const UserProfilesModel = require('../models/user-profiles-model.js')
const PlantTypesModel = require ('../models/plant-types-model.js')

// Remove those console.log statements!
class StepsController {

  static getAll(req, res, next){
    Model.getAll().then(response => {
      res.json({response})
    })
  }

  static getAllUserSteps(req, res, next){
    Model.getAllUserSteps(req.params.id).then(response => {
      let steps = response[0].number_of_steps
      res.json({response, steps})
    })
  }

  static addSteps(req, res, next) {
    const body = {user_id: req.body.user_id, number_of_steps: req.body.number_of_steps}
    Model.addSteps(body).then(result => {
      next()
    })
    .catch(err => {
      next({
        err,
        message: 'Error in add steps function'
      })
    })
  }

  static checkPlantTypeStepsRequired(req, res, next) {
    console.log('check plant type steps required function')
    PlantTypesModel.getOnePlantType(req.body.plant_type_id).then(plantType => {
      req.body.steps_required = plantType.steps_required
      next()
    })
    .catch(err => {
      next({
        err,
        message: 'Error in check plant type steps required function'
      })
    })
  }

  static getActivePlantType(req, res, next) {
    PlantInstanceModel.getOne(req.body.plant_instance_id).then((plantInstance) => {
      req.body.plant_type_id = plantInstance.plant_types_id
      req.body.progress = plantInstance.progress
      next()
    })
    .catch(err => {
      next({
        err,
        messsage: 'Error in get active plant function'
      })
    })
  }

  static updateUserCurrentPlant(req, res, next) {
    console.log('update user current plant function')
    PlantInstanceModel.addToProgress(req.body.number_of_steps, req.body.plant_instance_id).then(_ => {
      next()
    })
    .catch(err => {
      next({
        err,
        message: 'error in update current user plant function'
      })
    })
  }

  static isPlantFinished(req, res, next) {
    const { user_id, plant_instance_id, plant_type_id, number_of_steps, steps_required, progress } = req.body
    const finished = req.body.steps_required <= req.body.progress
    const response = {
      user_id,
      plant_instance_id,
      plant_type_id,
      steps_required,
      progress,
      number_of_steps_added: number_of_steps,
      finished
    }

    // Make sure to DRY up your code!
    res.status(200).json(response)
  }

  static getCurrentUserPlant(req, res, next) {
    UserProfilesModel.getOneUserProfile(req.body.user_id).then(([user]) => {
      const plant_instance_id = user.plant_instances_id
      req.body.plant_instance_id = plant_instance_id
      next()
    })
    .catch(err => {
      next({
        err,
        message: 'Error in get current user plant function'
      })
    })
  }

  static resetProgress(id){
    PlantInstanceModel.resetProgress(id)
  }

  static validate(req, res, next){
    /*
      Destructuring will actually really help make the code cleaner in this case.
      Number.isInteger(undefined) will also return false, so the check for whether
      or not it exists shouldn't be necessary!
    */
    const { user_id: id, number_of_steps: steps } = req.body
    Number.isInteger(id) && Number.isInteger(steps)) ? next() : next({ error: 'Not valid input' })
  }


  static editSteps(req, res, next){
    let id = req.body.id
    let newStep = req.body.number_of_steps

    Model.editSteps(newStep, id).then(response => {
      res.status(200).json({response})
    })
  }

}
module.exports = StepsController
