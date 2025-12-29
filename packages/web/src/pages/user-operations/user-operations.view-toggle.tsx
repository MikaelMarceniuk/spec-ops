'use client'

import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/src/components/animate-ui/components/radix/toggle-group'
import { IconLayoutGrid, IconList } from '@tabler/icons-react'
import { useState } from 'react'
import { useUserOperations } from './user-operations.provider'

type AvailableViews = 'grid' | 'list'

const availableViews = {
  GRID: {
    value: 'grid',
    icon: <IconLayoutGrid />,
  },
  LIST: {
    value: 'list',
    icon: <IconList />,
  },
} as const

export const ViewToggler = () => {
  const { view, setView } = useUserOperations()

  return (
    <ToggleGroup
      type="single"
      variant={'outline'}
      size={'icon'}
      value={view}
      onValueChange={(val) => setView(val as AvailableViews)}
    >
      {Object.entries(availableViews).map(([_key, { icon, value }], index) => (
        <ToggleGroupItem
          key={index}
          value={value}
        >
          {icon}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
