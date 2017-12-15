
exports.up = function(knex, Promise) {
    return knex.schema.createTable('step_inputs', table => {
      table.increments()
      table.integer('user_id').notNullable()
      table.foreign('user_id').references('id').inTable('users')

      table.integer('number_of_steps').notNullable().defaultTo(0)
      table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('step_inputs')
};
