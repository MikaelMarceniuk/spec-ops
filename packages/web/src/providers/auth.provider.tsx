'use client'

import React, { createContext, useContext } from 'react'
import { withChildren } from '../types/with-children.type'
import {
  useSignInByEmail,
  useSignInByEmailParams,
  useSignInByEmailResult,
} from '../hooks/use-sign-in-by-email.hook'

type AuthContext = {
  // user: User | undefined | null
  // isFetchingUser: boolean

  signInByEmail: (
    data: useSignInByEmailParams
  ) => Promise<useSignInByEmailResult>
}

const AuthContext = createContext({} as AuthContext)

export const AuthProvider: React.FC<withChildren> = ({ children }) => {
  const { signInByEmailMutate } = useSignInByEmail()

  return (
    <AuthContext.Provider
      value={{
        signInByEmail: signInByEmailMutate,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return ctx
}
