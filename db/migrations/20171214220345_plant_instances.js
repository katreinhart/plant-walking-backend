
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plant_instances', table => {
    table.increments()
    table.integer('progress').notNullable().defaultsTo(0)
    table.integer('user_id').notNullable()
    table.integer('plant_types_id').notNullable()
    table.boolean('completed').notNullable().defaultsTo(false)
    table.date('completed_on').defaultTo(null)
    table.timestamps(true, true)

    table.foreign('user_id').references('users.id')
    table.foreign('plant_types_id').references('plant_types.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plant_instances')
};
