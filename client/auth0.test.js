import { cacheUser } from './auth0'
import { handleLogin } from './actions/userauth'
jest.mock('./store', () => ({
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn()
}))
jest.mock('./actions/userauth')

const user = {
  name: 'Donald Duck',
  email: 'donald.duck@disneyplaent.com'
}

const getAccessTokenSilently = async () => {
  return 'sdfgh'
}

const useAuth0 = () => {
  return {
    isAuthenticated: true,
    user,
    getAccessTokenSilently
  }
}

describe('cacheUser', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('if user is authenticated and does not have token, handleLogin called', async () => {
    expect.assertions(2)
    await cacheUser(useAuth0)
    expect(handleLogin).toHaveBeenCalled()
    const user = handleLogin.mock.calls[0][0]
    expect(user.email).toEqual('donald.duck@disneyplaent.com')
  })
  it('if user not authenticated handleLogin is not called', async () => {
    const useAuth0NotAuthenticated = () => {
      return {
        isAuthenticated: false,
        user,
        getAccessTokenSilently
      }
    }
    await cacheUser(useAuth0NotAuthenticated)
    expect(handleLogin).not.toHaveBeenCalled()
  })
})
