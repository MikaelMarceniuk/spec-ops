'use client'

import { useUserOperations } from './user-operations.provider'
import { UserOperationCard } from './user-operations.card-list'

export const UserOperationList = () => {
  const { operations, view } = useUserOperations()

  return (
    <div className="space-y-4">
      <h2 className="text-sm">Operações</h2>

      <ul
        data-view={view}
        className="grid grid-cols-1 xl:grid-cols-2 gap-4 data-[view=list]:gap-0 data-[view=list]:grid-cols-1 "
      >
        {operations.map((op) => (
          <UserOperationCard
            key={op.id}
            view={view}
            {...op}
          />
        ))}
      </ul>
    </div>
  )
}
