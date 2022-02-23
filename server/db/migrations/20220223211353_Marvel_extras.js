exports.up = function (knex) {
  return knex.schema.createTable('Marvel', table => {
    table.increments('id')
    table.string('Title')
    table.string('Chrono Release')
    table.string('Image')
    table.string('Trailer')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Marvel')
}
