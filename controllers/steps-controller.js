const Model = require('../models/steps-model.js')
const PlantInstanceModel = require('../models/plant-instance-model.js')
const UserProfilesModel = require('../models/user-profiles-model.js')
const PlantTypesModel = require ('../models/plant-types-model.js')
console.log('controller here');

class StepsController {

  static getAll(req, res, next){
    console.log('in steps Cont');
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

  static addSteps(req, res, next){
    // user_id, number_of_steps
    // req.body.user_id req.body.number_of_steps
    console.log('in addSteps');
    let body = {user_id: req.body.user_id, number_of_steps: req.body.number_of_steps}

    Model.addSteps(body).then(result => {
      //update progress with added steps
      //user_id

      let stepsToAdd = result[0].number_of_steps
      UserProfilesModel.getOneUserProfile(result[0].user_id).then(result => {
        let plant_instances_id = result[0].plant_instances_id

        PlantInstanceModel.getOne(plant_instances_id).then(result => {

          let progress = result[0].progress + stepsToAdd
          //PlantTypesModel.getOnePlantType()
          // Need to get number of steps needed for completion
          // check to if completed
          })

        })


      res.status(200).json({body})

    })
  }

  static validate(req, res, next){
    console.log('in validate',req.body);
    if((req.body.user_id && Number.isInteger(req.body.user_id))
    && (req.body.number_of_steps && Number.isInteger(req.body.number_of_steps))) {
      console.log('in validate before next');
      next()
    }
    else{
      next({error: 'Not valid input'})
    }

  }

}

module.exports = StepsController
