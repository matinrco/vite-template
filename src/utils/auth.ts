export type Auth = {
  username?: string
  password?: string
  isLoggedIn: boolean
  login: (input: {
    username: Auth['username']
    password: Auth['password']
  }) => void
  logout: () => void
}

export const auth: Auth = {
  isLoggedIn: false,
  username: undefined,
  password: undefined,
  login: async ({ username, password }) => {
    auth.username = username
    auth.password = password
    auth.isLoggedIn = true
  },
  logout: async () => {
    auth.username = undefined
    auth.password = undefined
    auth.isLoggedIn = false
  },
}
