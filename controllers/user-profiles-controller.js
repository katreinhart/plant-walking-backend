const Model = require('../models/user-profiles-model.js')
const PlantInstanceModel = require('../models/plant-instance-model')

class userProfilesController {

  static getOneUserProfile(req, res, next) {
    let id = req.params.id
    Model.getOneUserProfile(id).then(response => {
      if(response.length){
      res.json({response})
      }
      else{
        next({error: 'User not found :(  '})
      }
    })
  }

  static createUserProfile(req, res, next){
    // console.log('creatingUP', req.body);
    const body = {
      user_id: req.body.user_id,
      display_name:req.body.display_name,
      plant_instances_id: req.body.plant_instances_id,
      is_admin: false,
    }
    // console.log('body', body);

    Model.createUserProfile(body).then( response => {
      // console.log('response',response);

      res.status(200).json({response})
    })
  }

  static updateUserProfile(req, res, next) {
    console.log('controller updating user profile', req.body)
    const body = {
      user_id: req.body.user_id,
      plant_types_id: req.body.plant_types_id
    }

    PlantInstanceModel.createNewInstance(body).then(result => {
      console.log(result)
      const id = result[0].id
      Model.updateUserProfile(body.user_id, {plant_instances_id: id}).then(result => {
        console.log(result)
        res.status(200).json({result})
      })
    })
  }
}

module.exports = userProfilesController
