exports.up = function (knex) {
  return knex.schema.createTable('watchList', table => {
    table.integer('user_id').references('users')
    table.integer('marvel_id').references('Marvel')
    table.boolean('status')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('watchList')
}
