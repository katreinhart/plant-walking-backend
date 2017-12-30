const Model = require('../models/steps-model.js')
const PlantInstanceModel = require('../models/plant-instance-model.js')
const UserProfilesModel = require('../models/user-profiles-model.js')
const PlantTypesModel = require ('../models/plant-types-model.js')
// console.log('controller here');

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

  //sorry this functions hideous
  static addSteps(req, res, next){
    let body = {user_id: req.body.user_id, number_of_steps: req.body.number_of_steps}
    // adds steps to the steps db
    Model.addSteps(body).then(result => {

      let stepsToAdd = result[0].number_of_steps
      //gets user profile to grab current plant id
      UserProfilesModel.getOneUserProfile(result[0].user_id).then(result => {
        let plant_instances_id = result[0].plant_instances_id
        // grabs current progress
        PlantInstanceModel.getOne(plant_instances_id).then(result => {
          let progress = result[0].progress + stepsToAdd
          //sets current progress
          PlantInstanceModel.addToProgress(stepsToAdd, plant_instances_id).then(result => {
            return result
            })
            // checks if plant is completed
            PlantTypesModel.getOnePlantType(result[0].plant_types_id).then (result => {
              //if completed reset progress to zero in plant_instances db
              if(progress >= result.steps_required){
                StepsController.resetProgress(plant_instances_id)
                console.log('yay you finished your plant');

              }
            })

          // Need to get number of steps needed for completion
          // check if completed
          })
        })
      res.status(200).json({body})

    })
  }

    //sets progess to zero and completed to true
  static resetProgress(id){
    PlantInstanceModel.resetProgress(id).then(result => {
      })
  }

  static validate(req, res, next){
<<<<<<< HEAD
    console.log('in validate', req.body);
=======
>>>>>>> 6dd1a8bf339e48e3c0edc35da5af72da13d5a230
    if((req.body.user_id && Number.isInteger(req.body.user_id))
    && (req.body.number_of_steps && Number.isInteger(req.body.number_of_steps))) {

      next()
    }
    else{
      next({error: 'Not valid input'})
    }

  }

}

module.exports = StepsController
