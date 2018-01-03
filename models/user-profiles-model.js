const db = require('../db/connection.js')


class userProfilesModel {

  static getOneUserProfile(id){
    console.log('user', id);
    return db('user_profiles')
    .where({id})
  }

}

module.exports = userProfilesModel
