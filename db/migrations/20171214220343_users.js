
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('email', 225).notNullable().defaultTo('')
    table.string('password', 225).notNullable()
    // Where are timestamps?  :(
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
