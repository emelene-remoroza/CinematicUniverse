exports.seed = function (knex) {
  return knex('watchList').del()
    .then(function () {
      return knex('watchList').insert([
        { auth0_id: 'auth0|567', marvel_id: 1, starwars_id: 0, status: true },
        { auth0_id: 'auth0|567', marvel_id: 0, starwars_id: 2, status: true },
        { auth0_id: 'auth0|567', marvel_id: 9, starwars_id: 0, status: true }
      ])
    })
}
