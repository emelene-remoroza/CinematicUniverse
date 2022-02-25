exports.up = function (knex) {
  return knex.schema.createTable('watchList', table => {
    table.integer('user_id')
    table.integer('marvel_id')
    table.boolean('status')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('watchList')
}
