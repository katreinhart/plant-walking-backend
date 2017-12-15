
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plant_types', table => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.string('svg').notNullable().defaultTo('')
    table.integer('steps_required')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plant_types')
};
