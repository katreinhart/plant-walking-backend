
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plant_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('plant_types').insert([
        {id: 1, name: 'sunflower', svg:'placeholder', steps_required:100},
        {id: 2, name: 'orchid', svg:'placeholder', steps_required:1000},
        {id: 3, name: 'daisy', svg:'placeholder', steps_required:500},
      ]);
    })
    .then(()=>{
      return knex.raw(`SELECT setval('plant_types_id_seq', (SELECT MAX(id) FROM plant_types))`)
    })
};
