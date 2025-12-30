import { useMutation } from '@tanstack/react-query'
import { api } from '../lib/axios'
import { Operation } from '../types/operation.type'
import { toast } from 'sonner'

export const useCreateOperation = () => {
  const mutation = useMutation({
    mutationFn: async (data: Omit<Operation, 'id'>) =>
      await api.post<Operation>('/operation', data),
    onSuccess: ({ data }) => {
      toast.success(`Operação "${data.name}" criado com sucesso!`)
    },
    onError: (error) => {
      toast.error(
        'Erro ao criar operação. Verifique se o nome está preenchido e tente novamente.'
      )
    },
  })

  return {
    ...mutation,
  }
}
