'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../lib/axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { slugify } from '../utils/slugify.utils'
import { AxiosError } from 'axios'

export type useSignInByEmailParams = {
  email: string
  password: string
}

export type useSignInByEmailResult = {
  redirect: false
  token: string
  user: {
    id: string
    name: string
    email: string
    emailVerified: false
    image: string | null
    createdAt: string
    updatedAt: string
  }
}

export const useSignInByEmail = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async ({ email, password }: useSignInByEmailParams) => {
      const apiResult = await api.post<useSignInByEmailResult>(
        '/auth/sign-in/email',
        {
          email,
          password,
        }
      )
      return apiResult.data
    },
    onSuccess: ({ user }) => {
      toast.success(`🚀 Bem vindo de volta ${user.name}`)
      router.replace(`${slugify(user.name)}-operations`)
      queryClient.invalidateQueries({ queryKey: ['/auth/get-session'] })
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const status = error.response?.status

        if (status === 401) {
          toast.error('❌ Credenciais inválidas. Verifique e tente novamente.')
        } else if (status === 409) {
          toast.error('❌ Muitas tentativas. Tente novamente mais tarde.')
        } else if (status === 500) {
          toast.error('❌ Erro inesperado. Tente novamente mais tarde.')
        } else {
          toast.error('❌ Não foi possível fazer login.')
        }
      }
    },
  })

  return {
    signInByEmailMutate: mutateAsync,
    isPending,
  }
}
