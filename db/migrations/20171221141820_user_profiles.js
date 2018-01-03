
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_profiles', table => {
    table.increments()
    table.boolean('is_admin').notNullable().defaultTo(0)

    table.integer('plant_instances_id') 
    table.foreign('plant_instances_id').references('id').inTable('plant_instances')

    table.string('display_name')
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('id').inTable('users')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_profiles')
};
