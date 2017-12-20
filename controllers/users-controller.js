const Model = require('../models/users-model.js')
console.log('controller here');

class UsersController {

  static getAll(req, res, next){
    Model.all().then(response => {
      res.json({  })
    })
  }

}

module.exports = UsersController
