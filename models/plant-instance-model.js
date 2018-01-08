const db = require('../db/connection.js')

/*
  I don't know if `PlantInstance` is the best name for a class.
  Just `Plant` might be better.
*/
class PlantInstanceModel {

  static getOne(id){
    return db('plant_instances')
      .where({id})
      .first()
  }

  static addToProgress(stepsToAdd, id){
    return db('plant_instances')
      .where({id})
      .increment('progress', stepsToAdd)
      .returning('*')
  }

  static resetProgress(id){
    return db('plant_instances')
      .where({id})
      .update('progress', 0)
      .update('completed', true)

  }

  static getAll(){
    return db('plant_instances')
  }

  static getGarden(id){
    console.log('get garden model', id);
    return db('plant_instances')
    .where({
      completed: true,
      user_id: id
    })
    .returning('*')
  }
  
  // Remove dead code!
  
  static createNewInstance({user_id, plant_types_id}){
    console.log('plant instance model, create new instance', plant_types_id)
    return db('plant_instances')
      .insert({
        user_id,
        plant_types_id,
        completed: false
      })
      .returning('*')
  }

  static updatePlantInstance(id, body) {
    const { completed } = body
    return db('plant_instances')
      .where({ id }) 
      .update({ 
        completed,
        completed_on: new Date().toUTCString()
      })
      .returning('*')
  }
}


module.exports = PlantInstanceModel
