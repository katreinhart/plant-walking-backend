
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plant_instances', table => {
    table.increments()
    table.integer('progress').notNullable().defaultTo(0)

    table.integer('user_id').notNullable()
    table.foreign('user_id').references('id').inTable('users')

    table.integer('plant_types_id').notNullable()
    table.foreign('plant_types_id').references('id').inTable('plant_types')

    table.boolean('completed').notNullable().defaultTo(false)
    table.date('completed_on').defaultTo(null)
    table.timestamps(true, true)



  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plant_instances')
};
