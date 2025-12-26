'use client'

import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/axios'
import { User } from '../types/user.type'
import { toast } from 'sonner'
import { usePathname, useRouter } from 'next/navigation'
import { slugify } from '../utils/slugify.utils'
import { AxiosError } from 'axios'

export const useSession = () => {
  const router = useRouter()
  const pathname = usePathname()

  const { data, isFetching, refetch } = useQuery({
    queryKey: ['/auth/get-session'],
    queryFn: async () => {
      try {
        const { data } = await api.get<User | null>('/auth/get-session')

        if (!data) return null

        if (pathname.startsWith('/sign-in')) {
          const safeName = data.name?.trim() || 'user'

          toast.success(`🚀 Bem vindo de volta ${safeName}`)
          router.replace(`/${slugify(safeName)}-operations`)
        }

        return data
      } catch (error) {
        // Se quiser tratar 401 aqui:
        if (error instanceof AxiosError) {
          if (error.response?.status === 401) {
            toast.warning('⚠️ Sessão expirada.')
            router.replace('/sign-in')
            return null
          }
        }

        throw error
      }
    },
    retry: 1,
  })

  return {
    user: data,
    isFetching,

    refetchSession: refetch,
  }
}
