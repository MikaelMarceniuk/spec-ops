'use client'

import z from 'zod'
import { useForm } from '@tanstack/react-form'
import { IconPlus } from '@tabler/icons-react'

import { Input } from '@/src/components/ui/input'
import { Button } from '@/src/components/ui/button'
import { Textarea } from '@/src/components/ui/textarea'
import { FieldError } from '@/src/components/ui/field'
import { DatePicker } from '@/src/components/date-picker'
import {
  operationStatus,
  OperationStatusMapper,
} from '@/src/types/operation-status.type'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select'
import { useCreateOperation } from '@/src/hooks/use-create-operation.hook'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/src/providers/auth.provider'
import { slugify } from '@/src/utils/slugify.utils'

const NewOperationSchema = z.object({
  name: z
    .string({ error: 'Nome não precisa ser do tipo texto.' })
    .min(8, { error: 'Nome precisa ter pelo menos 8 caracteres.' }),
  description: z.string({ error: 'Descrição deve ser do tipo texto.' }),
  startDate: z
    .date({ error: 'Data de Início deve ser do tipo Data.' })
    .optional(),
  endDate: z.date({ error: 'Data de Fim deve ser do tipo Data.' }).optional(),
  status: z
    .enum(operationStatus, {
      error: 'Status deve ter um valor válido.',
    })
    .optional(),
})

export const NewOperationForm = () => {
  const { mutateAsync } = useCreateOperation()
  const router = useRouter()
  const { user } = useAuth()

  const form = useForm({
    validators: {
      onSubmit: NewOperationSchema,
    },
    defaultValues: {
      name: '',
      description: '',
      startDate: undefined,
      endDate: undefined,
      status: undefined,
    },
    onSubmit: async ({ value }) =>
      await mutateAsync(value, {
        onSuccess: () => {
          router.push(`${slugify(user!.name)}-operations`)
          form.reset()
        },
      }),
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Vamos organizar uma nova operação
        </h2>

        <div className="flex gap-0">
          <div className="flex flex-col flex-1 gap-1">
            <form.Field name="name">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid

                return (
                  <>
                    <Input
                      className="w-full rounded-br-none rounded-tr-none"
                      placeholder="Nome da operação"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </>
                )
              }}
            </form.Field>
          </div>

          <Button
            className="rounded-bl-none rounded-tl-none shrink-0"
            type="submit"
            isLoading={form.state.isSubmitting}
          >
            <IconPlus />
            Criar
          </Button>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col flex-1 gap-1">
            <form.Field name="startDate">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid

                return (
                  <>
                    <span className="text-sm font-semibold">
                      Data de início
                    </span>
                    <DatePicker
                      value={field.state.value}
                      onValueChange={(date) => field.handleChange(date)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </>
                )
              }}
            </form.Field>
          </div>

          <div className="flex flex-col flex-1 gap-1">
            <form.Field name="endDate">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid

                return (
                  <>
                    <span className="text-sm font-semibold">
                      Data de término
                    </span>
                    <DatePicker
                      value={field.state.value}
                      onValueChange={(date) => field.handleChange(date)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </>
                )
              }}
            </form.Field>
          </div>

          <div className="flex flex-col flex-1 gap-1">
            <form.Field name="status">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid

                return (
                  <>
                    <span className="text-sm font-semibold">Status</span>
                    <Select
                      value={field.state.value}
                      onValueChange={(val) => field.handleChange(val)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione um status" />
                      </SelectTrigger>
                      <SelectContent>
                        {operationStatus.map((stats, i) => (
                          <SelectItem
                            key={i}
                            value={stats}
                          >
                            {OperationStatusMapper[stats]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </>
                )
              }}
            </form.Field>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <form.Field name="description">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid

              return (
                <>
                  <span className="text-sm font-semibold">Descrição</span>
                  <Textarea
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </>
              )
            }}
          </form.Field>
        </div>
      </div>
    </form>
  )
}
