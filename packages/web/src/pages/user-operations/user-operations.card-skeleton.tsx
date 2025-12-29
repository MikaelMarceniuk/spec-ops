'use client'

import { Skeleton } from '@/src/components/ui/skeleton'
import { IconDots, IconProgress } from '@tabler/icons-react'
import React from 'react'

type UserOperationCardProps = {
  view: 'list' | 'grid'
}

export const UserOperationCardSkeleton: React.FC<UserOperationCardProps> = ({
  view,
}) => {
  if (view == 'grid') {
    return (
      <li className="border rounded h-40 p-4 hover:border-white/80 cursor-pointer">
        <div className="flex justify-between gap-4">
          <div className="flex gap-2 items-center flex-1">
            <Skeleton className="rounded-full bg-amber-800 size-10 shrink-0" />

            <div className="self-start space-y-2">
              <Skeleton className="w-40 h-4" />
              <Skeleton className="w-full h-4" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Skeleton className="size-8 rounded-full" />
            <Skeleton className="size-8 rounded-full" />
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
            <Skeleton className="rounded-full bg-amber-800 size-10 shrink-0" />
            <div className="self-start space-y-2">
              <Skeleton className="w-40 h-4" />
              <Skeleton className="w-full h-4" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Skeleton className="size-8 rounded-full" />
            <Skeleton className="size-8 rounded-full" />
          </div>
        </div>
      </li>
    )
  }
}
