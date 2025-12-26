'use client'

import { useAuth } from '../providers/auth.provider'
import { Skeleton } from '../components/ui/skeleton'

export const UserOperationsContent = () => {
  const { user, isFetchingUser } = useAuth()

  if (isFetchingUser) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span>Autenticado como:</span>
            <Skeleton className="w-28 h-5 rounded" />
          </div>

          <div className="flex flex-row items-center justify-center gap-2">
            <Skeleton className="w-16 h-9" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-2">
      <div className="flex flex-col gap-2">
        <span>
          Autenticado como: <b>{user?.name}</b>
        </span>
      </div>
    </div>
  )
}
