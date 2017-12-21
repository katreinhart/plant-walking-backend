
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'planty1@gmail.com', password:'password'},
        {id: 2, email: 'planty2@gmail.com', password:'password'},
        {id: 3, email: 'planty3@gmail.com', password:'password'}
      ]);
    });
};
