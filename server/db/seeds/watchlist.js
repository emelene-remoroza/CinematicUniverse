exports.seed = function (knex) {
  return knex('watchList').del()
    .then(function () {
      return knex('watchList').insert([
        { user_id: 1, marvel_id: 1, status: true },
        { user_id: 1, marvel_id: 5, status: true },
        { user_id: 1, marvel_id: 9, status: true }
      ])
    })
}
