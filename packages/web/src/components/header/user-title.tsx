'use client'

import { useAuth } from '@/src/providers/auth.provider'
import { Skeleton } from '../ui/skeleton'

export const UserTitle = () => {
  const { user, isFetchingUser } = useAuth()

  if (isFetchingUser) {
    return (
      <div className="flex items-center gap-2">
        <Skeleton className="size-6 rounded-full" />

        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-64" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <div className="bg-amber-800 size-6 rounded-full" />
      <span>
        Projetos de <b>{user!.name}</b>
      </span>
    </div>
  )
}
