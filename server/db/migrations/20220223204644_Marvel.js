exports.up = function (knex) {
  return knex.schema.createTable('Marvel', table => {
    table.increments('id')
    table.string('Title')
    table.datetime('Released')
    table.datetime('ChronoDate')
    table.string('Image')
    table.string('Trailer')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Marvel')
}
