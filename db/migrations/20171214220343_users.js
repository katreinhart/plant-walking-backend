
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username').notNullable().defaultTo('')
    table.string('email', 225).notNullable().defaultTo('')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
