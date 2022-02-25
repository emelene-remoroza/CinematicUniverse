exports.seed = function (knex) {
  return knex('watchList').del()
    .then(function () {
      return knex('watchList').insert([
        { user_id: 1, marvel_id: [6, 3, 5, 16], status: true }
      ])
    })
}
