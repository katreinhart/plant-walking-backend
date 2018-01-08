const Model = require('../models/user-profiles-model.js')
const PlantInstanceModel = require('../models/plant-instance-model')

class userProfilesController {

  static getOneUserProfile(req, res, next) {
    let id = req.params.id
    Model.getOneUserProfile(id).then(response => {
      if(!response.length) return next({error: 'User not found :(  '})
      res.json({response})
    })
  }

  static createUserProfile(req, res, next){
    const { user_id, display_name, plant_instances_id } = req.body
    const body = { user_id, display_name, plant_instances_id, is_admin: false }

    Model.createUserProfile(body).then( response => {
      res.status(200).json({response})
    })
  }

  static updateUserProfile(req, res, next) {
    const { user_id, plant_types_id } = req.body

    PlantInstanceModel.createNewInstance({ user_id, plant_types_id }).then(result => {
      const id = result[0].id
      Model.updateUserProfile(body.user_id, {plant_instances_id: id}).then(result => {
        res.status(200).json({result})
      })
    })
  }
}

module.exports = userProfilesController
