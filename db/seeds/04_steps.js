
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, user_id: 1, number_of_steps:99},
        {id: 2, user_id: 2, number_of_steps:66},
        {id: 3, user_id: 3, number_of_steps:15},
      ]);
    })
    .then(()=>{
      return knex.raw(`SELECT setval('steps_id_seq', (SELECT MAX(id) FROM steps))`)
    })
};
