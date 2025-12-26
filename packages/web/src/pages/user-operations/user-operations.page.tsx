'use client'

import { Input } from '@/src/components/ui/input'
import { MainContainer } from '../../components/main-container'
import { Button } from '@/src/components/ui/button'
import { IconChevronDown, IconFilter2 } from '@tabler/icons-react'
import { ViewToggler } from './user-operations.view-toggle'
import { Search } from 'lucide-react'

export const UserOperationsContent = () => {
  return (
    <MainContainer>
      <div className="flex  items-center gap-2">
        <div className="relative w-full flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar..."
            className="pl-10"
          />
        </div>

        <Button
          size={'icon'}
          variant={'outline'}
        >
          <IconFilter2 />
        </Button>

        <ViewToggler />

        <Button>
          Criar novo...
          <IconChevronDown />
        </Button>
      </div>
    </MainContainer>
  )
}
