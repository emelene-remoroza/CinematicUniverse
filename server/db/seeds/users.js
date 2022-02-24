exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        { id: 1, auth0_id: 'auth0|123', email: 'banana@user.com' },
        { id: 2, auth0_id: 'auth0|567', email: 'watermelon@user.com' }
      ])
    })
}
