const db = require('../db/connection.js')


class userProfilesModel {

  static getOneUserProfile(user_id){
    return db('user_profiles')
    .where({user_id})
  }

}

module.exports = userProfilesModel
