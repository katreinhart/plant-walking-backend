const db = require('../db/connection.js')


class userProfilesModel {

  static getOneUserProfile(id){
    return db('user_profiles')
    .where({id})
  }

  static createUserProfile(body){
    return db('user_profiles')
    .insert(body)
    .returning('*')
  }

  static updateUserProfile(id, body) {
    return db('user_profiles')
      .where({ user_id: id })
      .update(body)
      .returning('*')
  }

}

module.exports = userProfilesModel
