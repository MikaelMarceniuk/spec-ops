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
import { IconDatabase } from '@tabler/icons-react'

export const UserOperationsEmpty = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconDatabase />
        </EmptyMedia>
        <EmptyTitle>Nenhum dado ainda</EmptyTitle>
        <EmptyDescription>
          Você ainda não adicionou nenhuma operação.
        </EmptyDescription>
      </EmptyHeader>

      <EmptyContent>
        <Button>Criar nova operação</Button>
      </EmptyContent>
    </Empty>
  )
}
