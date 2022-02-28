exports.up = function (knex) {
  return knex.schema.createTable('watchList', table => {
    table.string('auth0_id').references('users.auth0_id')
    table.integer('marvel_id').references('Marvel.id')
    table.boolean('status')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('watchList')
}
