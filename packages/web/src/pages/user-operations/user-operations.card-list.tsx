'use client'

import { Operation } from '@/src/types/operation.type'
import { IconDots, IconProgress } from '@tabler/icons-react'
import React from 'react'

type UserOperationCardProps = {
  view: 'list' | 'grid'
} & Operation

export const UserOperationCard: React.FC<UserOperationCardProps> = ({
  view,
  name,
  description,
}) => {
  if (view == 'grid') {
    return (
      <li className="border rounded h-40 p-4 hover:border-white/80 cursor-pointer">
        <div className="flex justify-between gap-4">
          <div className="flex gap-2 items-center flex-1">
            <div className="rounded-full bg-amber-800 size-10 shrink-0" />

            <div className="self-start">
              <span className="text-sm">{name}</span>
              <span className="line-clamp-1 text-sm text-muted-foreground">
                {description}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full border-4 size-8 flex items-center justify-center">
              <IconProgress className="text-muted-foreground size-5" />
            </div>
            <IconDots />
          </div>
        </div>
      </li>
    )
  }

  if (view == 'list') {
    return (
      <li className="border rounded h-20 p-4 hover:border-white/80 cursor-pointer">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="rounded-full bg-amber-800 size-10" />

            <div className="self-start">
              <span className="text-sm">{name}</span>
              <span className="line-clamp-1 text-sm text-muted-foreground">
                {description}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full border-4 size-8 flex items-center justify-center">
              <IconProgress className="text-muted-foreground size-5" />
            </div>
            <IconDots />
          </div>
        </div>
      </li>
    )
  }
}
