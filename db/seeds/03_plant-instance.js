
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plant_instances').del()
    .then(function () {
      // Inserts seed entries
      return knex('plant_instances').insert([
        {id: 1, progress: 33, user_id: 1, plant_types_id: 1, completed: false},
        {id: 2, progress: 89, user_id: 2, plant_types_id: 2, completed: false},
        {id: 3, progress: 55, user_id: 3, plant_types_id: 3, completed: false},

      ]);
    })
    .then(()=>{
      return knex.raw(`SELECT setval('plant_instances_id_seq', (SELECT MAX(id) FROM plant_instances))`)
    })
};
