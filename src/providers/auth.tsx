import axios from 'axios'

import { createContext, useContext, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'


interface AuthContextValue {
  setToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)

interface AuthProviderProperties {
  children: React.ReactNode;
}

const setToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    Missive.storeSet('token', token)
  } else {
    delete axios.defaults.headers.common.Authorization
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    Missive.storeSet('token', '')
  }
}

function AuthProvider({ children }: AuthProviderProperties) {

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    Missive.storeGet('token')
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      .then((token: string) => {
        setToken(token)
      })
  }, [])

  const contextValue = useMemo(
    () => ({
      setToken
    }),
    []
  )

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
