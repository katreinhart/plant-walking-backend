const Model = require('../models/steps-model.js')
console.log('controller here');

class StepsController {

  static getAll(req, res, next){
    Model.all().then(res => {
      res.json({  })
    })
  }

  static addSteps(req, res, next){
    // user_id, number_of_steps
    // req.body.user_id req.body.number_of_steps
    let body = {user_id: req.body.user_id, number_of_steps: req.body.number_of_steps}
    Model.addSteps(body).then(res => {
      res.status(200).json({body})
    })
  }

  static validate(req, res, next){
    if((req.body.user_id && Number.isInteger(req.body.user_id))
    && (req.body.user_id && Number.isInteger(req.body.user_id))) {
      next()
    }
    else{
      next({error: 'Not valid input'})
    }

  }

}

module.exports = StepsController