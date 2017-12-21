const Model = require('../models/users-model.js')
console.log('controller here');

const fields = ['email', 'password']


class UsersController {

  // static getAll(req, res, next){
  //   Model.all().then(response => {
  //     res.json({  })
  //   })
  // }

  static emailIsUnique(req, res, next) {
    Model.exists(req.body.email).then(exists => {
      next({ error: 'User already exists'})
    }).catch(err => {
      next()
    })
  }

  static fieldsExist(req, res, next) {
    const errors = []
    fields.forEach(field => {
      if(!req.body.hasOwnProperty(field)) {
        errors.push(`${field} is required`)
      } 
    })

    if(errors.length) {
      next({ status: 400, message: 'There were errors', errors})
    } 
    else {
      next()
    }
  }

  static prune(req, res, next) {
    Object.keys(req.body).forEach(key => {
      if(!fields.includes(keys)) {
        delete req.body.key
      }
    })
    next()
  }

  static createNewUser(req, res, next) {
    Model.signup(req.body).then(res => {
      res.status(200).json({ })
    })
  }
}

module.exports = UsersController
