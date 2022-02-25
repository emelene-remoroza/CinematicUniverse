exports.seed = function (knex) {
  return knex('watchList').del()
    .then(function () {
      return knex('watchList').insert([
        { user_id: 1, marvel_id: 6, status: true },
        { user_id: 1, marvel_id: 3, status: true },
        { user_id: 1, marvel_id: 5, status: true }
      ])
    })
}
