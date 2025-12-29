'use client'

import { useDebounce } from '@/src/hooks/use-debounce.hook'
import { api } from '@/src/lib/axios'
import { Operation } from '@/src/types/operation.type'
import { withChildren } from '@/src/types/with-children.type'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import React, { createContext, useContext, useState } from 'react'
import { toast } from 'sonner'

type UserOperationsContext = {
  operations: Operation[]
  isFetchingOperations: boolean

  filters: OperationFilters
  filterChangeHandler: (key: keyof OperationFilters, value: string) => void
}

type OperationFilters = {
  q?: string
}

const UserOperationsContext = createContext({} as UserOperationsContext)

export const UserOperationsProvider: React.FC<withChildren> = ({
  children,
}) => {
  const [filters, setFilters] = useState<OperationFilters>({
    q: '',
  })
  const debouncedFilters = useDebounce(filters)

  const { data: operations, isFetching: isFetchingOperations } = useQuery({
    queryKey: ['/operation', debouncedFilters],
    queryFn: async () => {
      try {
        const { q } = debouncedFilters
        const apiResult = await api.get<Operation[]>('/operation', {
          params: {
            q: q == '' ? undefined : q,
          },
        })

        return apiResult.data
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response?.status == 401) {
            toast.error('❌ Erro de permissão ao buscar operações.')
          }
        }

        toast.error('❌ Erro inexperado aconteceu. Tente novamente mais tarde.')
      }
    },
  })

  const filterChangeHandler = (key: keyof OperationFilters, value: string) => {
    setFilters((oldVal) => ({ ...oldVal, [key]: value }))
  }

  return (
    <UserOperationsContext.Provider
      value={{
        operations: operations || [],
        isFetchingOperations,

        filters,
        filterChangeHandler,
      }}
    >
      {children}
    </UserOperationsContext.Provider>
  )
}

export const useUserOperations = () => {
  const ctx = useContext(UserOperationsContext)
  if (!ctx) {
    throw new Error(
      'useUserOperation must be used inside UserOperationProvider'
    )
  }
  return ctx
}
