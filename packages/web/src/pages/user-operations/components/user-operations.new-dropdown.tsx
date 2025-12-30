'use client'

import { Button } from '@/src/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu'
import { IconChevronDown } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const UserOperationsNewDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const newOperationHandler = () => router.push('/new')

  return (
    <DropdownMenu
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DropdownMenuTrigger asChild>
        <Button>
          Criar novo...
          <IconChevronDown
            data-open={isOpen}
            className="data-[open=true]:rotate-180 transition-transform duration-300 ease-in-out"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-1">
        <DropdownMenuItem onClick={newOperationHandler}>
          Operação
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
