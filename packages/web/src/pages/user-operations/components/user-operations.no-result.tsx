'use client'

import { Button } from '@/src/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/src/components/ui/empty'
import { IconSearchOff } from '@tabler/icons-react'
import { useUserOperations } from '../providers/user-operations.provider'

export const UserOperationsNoResult = () => {
  const { clearFilters } = useUserOperations()

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconSearchOff />
        </EmptyMedia>
        <EmptyTitle>Nenhum resultado encontrado</EmptyTitle>
        <EmptyDescription>
          Nenhuma operação corresponde aos filtros aplicados.
        </EmptyDescription>
      </EmptyHeader>

      <EmptyContent>
        <Button
          variant="secondary"
          onClick={clearFilters}
        >
          Limpar filtros
        </Button>
      </EmptyContent>
    </Empty>
  )
}
