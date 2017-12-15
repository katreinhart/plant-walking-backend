
exports.up = function(knex, Promise) {
    return knex.schema.createTable('waterings', table => {
      table.increments()
      table.integer('user_id').notNullable()
      table.integer('amount').defaultsTo(0)
      table.integer('plant_id').notNullable()
      table.timestamps(true, true)
      table.foreign('plant_id').references('plant_instances.id').onDelete('CASCADE')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('waterings')
};
