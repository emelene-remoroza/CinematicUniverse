const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const { getMarvel } = require('../marvel')

beforeAll(() => {
  return testDb.migrate.latest()
})
beforeEach(() => {
  return testDb.seed.run()
})
afterAll(() => testDb.destroy())

describe('getMarvel', () => {
  it('returns the list of marvel movies seeds', () => {
    expect.assertions(3)
    return getMarvel(testDb)
      .then((marvel) => {
        expect(marvel).toHaveLength(32)
        expect(marvel[0]).toHaveProperty('Released')
        expect(marvel[1].ChronoDate).toBe('1995-01-01')
        return null
      })
  })
})
