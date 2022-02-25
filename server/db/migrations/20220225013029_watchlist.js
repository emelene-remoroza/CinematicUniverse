exports.up = function (knex) {
  return knex.schema.createTable('watchList', table => {
    table.integer('user_id').refrence('users')
    table.integer('marvel_id').refrence('Marvel')
    table.boolean('status')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('watchList')
}
