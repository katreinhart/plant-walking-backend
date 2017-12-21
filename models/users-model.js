const db = require('../db/connection.js')
console.log('model here');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Token = require('./token-model')

class UsersModel {

  static all(){
    return db('users')
  }

  static create({ email, passhash: password }) {
    console.log('------- user model create function -------')

    db('users').insert({email, password}).returning('*').then(result => {
      return result
    })
  }

  static signup ({email, password}) {
    // console.log('------- user model signup function -------')
    return db('users').where({ email }).first()
      .then(user => {
        if(user) throw new Error()
        const passhash = bcrypt.hashSync(password, 8)
        return UsersModel.create({ email, passhash })
      })
      .catch(() => { throw new Error('User signup failed') })
  }

  static login (email, password) {
    // console.log('------- user model login function -------')
    return db('users').where({ email })
      .then(user => {
        if(bcrypt.compareSync(password, user[0].password)) {
          const sub = { id: user[0].id, email: user[0].email }
          return Token.signToken(sub)          
        } else {
          throw new Error('Login failed')
        }
      })
      .catch(() => { throw new Error('Login failed') })
  }
}


module.exports = UsersModel;
