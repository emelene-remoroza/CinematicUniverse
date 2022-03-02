const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const { getStarWars } = require('../starwars')

beforeAll(() => {
  return testDb.migrate.latest()
})
beforeEach(() => {
  return testDb.seed.run()
})
afterAll(() => testDb.destroy())

describe('getStarWars', () => {
  it('returns the list of starwars movies seeds', () => {
    expect.assertions(3)
    return getStarWars(testDb)
      .then((starwars) => {
        expect(starwars).toHaveLength(19)
        expect(starwars[0]).toHaveProperty('Released')
        expect(starwars[1].Period).toBe('22 BBY')
        return null
      })
  })
})
