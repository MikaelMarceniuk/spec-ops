'use client'

import * as React from 'react'
import { ChevronDownIcon } from 'lucide-react'

import { Button } from '@/src/components/ui/button'
import { Calendar } from '@/src/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/src/components/ui/popover'
import { ptBR } from 'date-fns/locale'

type DatePickerProps = {
  value: Date | undefined
  onValueChange: (date: Date | undefined) => void
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onValueChange,
}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id="date"
          className="justify-between font-normal"
        >
          {value
            ? value.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })
            : 'Selecionar data'}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto overflow-hidden p-0"
        align="start"
      >
        <Calendar
          mode="single"
          selected={value}
          captionLayout="dropdown"
          onSelect={(date) => {
            onValueChange(date)
            setOpen(false)
          }}
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  )
}
