const db = require('../db/connection.js')
console.log('model here');
const bcrypt = require('bcrypt-as-promised')
const jwt = require('jsonwebtoken')
const Token = require('./token-model')


class UsersModel {

  // static all(){
  //   return db('users')
  // }

  static signup (email, password) {
    return db('users').where({ email }).first()
      .then(user => {
        if(user) throw new Error()
        const passhash = bcrypt.hashSync(password, 8)

        return User.create({ email, passhash })
      })
      .catch(() => { throw new Error('User signup failed') })
  }

  static login (email, password) {
    return db('users').where({ email })
      .then(user => {
        if(bcrypt.compareSync(password, user[0].passhash)) {
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
