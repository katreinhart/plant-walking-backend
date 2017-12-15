
exports.up = function(knex, Promise) {
    return knex.schema.createTable('waterings', table => {
      table.increments()
      table.integer('user_id').notNullable()
      table.foreign('user_id').references('id').inTable('users')
      table.integer('amount').defaultTo(0)
      table.integer('plant_id').notNullable()
      table.foreign('plant_id').references('id').inTable('plant_instances')
      table.timestamps(true, true)


    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('waterings')
};
