'use client'

import {
  QueryClient,
  QueryClientProvider as TanStackQueryClientProvider,
} from '@tanstack/react-query'
import React from 'react'
import { withChildren } from '../types/with-children.type'

const queryClient = new QueryClient()

export const QueryClientProvider: React.FC<withChildren> = ({ children }) => {
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  )
}
