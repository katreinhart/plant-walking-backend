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
}

module.exports = userProfilesController
