exports.seed = function (knex) {
  return knex('watchList').del()
    .then(function () {
      return knex('watchList').insert([
        { auth0_id: 'auth0|567', marvel_id: 1, status: true },
        { auth0_id: 'auth0|567', marvel_id: 5, status: true },
        { auth0_id: 'auth0|567', marvel_id: 9, status: true }
      ])
    })
}
