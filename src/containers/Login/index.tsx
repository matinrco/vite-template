import { useLayoutEffect } from 'react'
import { useRouteContext, useRouter, useSearch } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Login = () => {
  const { i18n } = useTranslation()
  const router = useRouter()
  const search = useSearch({ from: '/$locale/login' })
  const { auth } = useRouteContext({
    from: '/$locale/login',
    select: ({ auth }) => ({ auth }),
  })

  useLayoutEffect(() => {
    if (auth.isLoggedIn && search.redirect) {
      router.history.push(search.redirect)
    }
  }, [auth.isLoggedIn, router.history, search.redirect])

  return (
    <div>
      <p>this is login screen</p>
      <p>your selected language is: {i18n.language}</p>
      <button
        onClick={() => {
          auth.login({ username: 'matin', password: 'secret' })
          router.invalidate()
        }}
      >
        login
      </button>
    </div>
  )
}
