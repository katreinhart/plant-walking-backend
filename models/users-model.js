const db = require('../db/connection.js')
console.log('model here');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Token = require('./token-model')

class UsersModel {

  static all(){
    return db('users')
  }

  static create({ email, passhash: password, username }) {
    console.log('------- user model create function -------')

    return db('users').insert({email, password}).returning('*').then(result => {
      console.log( result[0].id, username );
      return ({user_id:result[0].id, username})
    })
  }

  static signup ({email, password, username}) {
    // console.log('------- user model signup function -------')
    return db('users').where({ email }).first()
      .then(user => {
        if(user) throw new Error()
        const passhash = bcrypt.hashSync(password, 8)
        return UsersModel.create({ email, passhash, username })
      })
      // .catch(() => { throw new Error('User signup failed') })
  }



  static login (email, password) {
    return db('users').where({ email })
      .then(user => {
        if(bcrypt.compareSync(password, user[0].password)) {
          const sub = { id: user[0].id, email: user[0].email }
          return Token.signToken(sub)
        } else {
          throw new Error('Login failed: inncorrect password or username')
        }
      })
  }
}


module.exports = UsersModel;
