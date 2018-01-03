const Model = require('../models/users-model.js')
const UserProfileModel = require('../models/user-profiles-model.js')
const PlantInstanceModel = require('../models/plant-instance-model.js')
console.log('users controller here');
const jwt = require('jsonwebtoken')
const loginFields = ['email', 'password']
const registerFields = ['username','email', 'password']

class UsersController {

  static getAll(req, res, next){
    Model.all().then(response => {
      res.json({ users: response })
    })
  }

  static registerFieldsExist(req, res, next) {
    const errors = []
    registerFields.forEach(field => {
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

  static loginFieldsExist(req, res, next) {
    const errors = []
    loginFields.forEach(field => {
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

  static registerPrune(req, res, next) {
    Object.keys(req.body).forEach(key => {
      if(!registerFields.includes(key)) {
        delete req.body.key
      }
    })
    next()
  }

  static loginPrune(req, res, next) {
    Object.keys(req.body).forEach(key => {
      if(!loginFields.includes(key)) {
        delete req.body.key
      }
    })
    next()
  }

  static getUserInfo(req, res, next) {
    console.log('getUserInfo: ---', req.body);
    UserProfileModel.getOneUserProfile(req.body.userId).then(user => {
      console.log('getinfo', user[0].plant_instances_id);
      req.body.plantInstanceId = user[0].plant_instances_id
      // return req.body
      next()
    })
  }

  static getPlantInstance(req, res, next){
    let id = req.body.plantInstanceId
    console.log('plant instance:', req.body.plantInstanceId);
    if(id) {
      PlantInstanceModel.getOne(id).then(plantInstance => {
        req.body.progress = plantInstance.progress
        req.body.plant_types_id = plantInstance.plant_types_id
        console.log('body', req.body);
        let {email, token, userId, plantInstanceId, progress, plant_types_id} = req.body
        res.json({ email, token, userId, plantInstanceId, progress, plant_types_id })
      })
    } else {
      const { email, token, userId } = req.body
      res.json({ email, token, userId, })
    }
  }

  static createNewUser(req, res, next) {
    console.log('------- user controller signup function -------')
    console.log(req.body);
    Model.signup(req.body).then(response => {
      console.log('response to createNewUser', response);
      req.body.user_id=response.user_id
      req.body.display_name=response.username
      next()
      // res.status(200).json({ message: 'User created' })
    })
    .catch(err => {
      console.log(err)
      next({ error: err })
    })
  }

  static loginUser (req, res, next) {
    let { email, password } = req.body
    Model.login(email, password)
      .then(token => {
        let decoded = jwt.decode(token)
        req.body.userId = decoded.sub.id
        req.body.token = token
        next()
      })
      .catch(err => {
        console.log('user controller', err);
        next({ status:401, err })
      })
  }
}

module.exports = UsersController
