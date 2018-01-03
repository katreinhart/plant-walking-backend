const db = require('../db/connection.js')


class userProfilesModel {

  static getOneUserProfile(id){
    console.log('user', id);
    return db('user_profiles')
    .where({id})
  }

  static createUserProfile(body){
    console.log('Model body',body);
    return db('user_profiles')
    .insert(body)
    .returning('*')
  }

}

module.exports = userProfilesModel
