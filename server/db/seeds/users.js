exports.seed = function (knex) {
  return knex('table_name').del()
    .then(function () {
      return knex('table_name').insert([
        { id: 1, auth0_id: 'auth0|567', email: 'watermelon@user.com' }
      ])
    })
}
