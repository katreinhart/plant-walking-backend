
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_profiles').insert([
        {id: 1, is_admin:false, plant_instances_id:1, user_id:1, display_name:'Herb Gartner'},
        {id: 2, is_admin:false, plant_instances_id:2, user_id:2, display_name:'Flower Child'},
        {id: 3, is_admin:false, plant_instances_id:3, user_id:3, display_name:'Lovely Lilly'},
        {id: 4, is_admin:false, plant_instances_id:4, user_id:4, display_name:'Lucky Lilly'},

      ]);
    });
};
