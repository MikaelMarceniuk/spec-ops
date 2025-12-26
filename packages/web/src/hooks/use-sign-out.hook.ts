import { useMutation } from '@tanstack/react-query'
import { api } from '../lib/axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

type useSignOutResult = {
  message: true | string
}

export const useSignOut = () => {
  const router = useRouter()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      await api.post<useSignOutResult>('/auth/sign-out')
    },
    onSuccess: () => {
      toast.success('Sessão finalizada com sucesso!')
      router.replace('/sign-in')
    },
  })

  return {
    signOut: mutateAsync,
    isSigningOut: isPending,
  }
}
