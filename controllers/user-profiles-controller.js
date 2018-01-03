const Model = require('../models/user-profiles-model.js')

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
    console.log('creatingUP', req.body);
    const body = {
      user_id: req.body.user_id,
      display_name:req.body.display_name,
      plant_instances_id: req.body.plant_instances_id,
      is_admin: req.body.is_admin,
    }
    console.log('body', body);

    Model.createUserProfile(body).then( response => {
      console.log('response',response);

      res.json({response})
    })
  }
}

module.exports = userProfilesController
