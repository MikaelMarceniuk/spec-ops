'use client'

import { useUserOperations } from './user-operations.provider'
import { UserOperationCard } from './user-operations.card'
import { UserOperationCardSkeleton } from './user-operations.card-skeleton'
import { UserOperationsNoResult } from './user-operations.no-result'
import { UserOperationsEmpty } from './user-operations.empty'

export const UserOperationList = () => {
  const { operations, debouncedFilters, isFetchingOperations, view } =
    useUserOperations()

  const renderList = () => {
    if (isFetchingOperations) {
      return Array.from({ length: 8 }).map((_, index) => (
        <UserOperationCardSkeleton
          key={index}
          view={view}
        />
      ))
    }

    if (operations.length == 0) {
      const hasFilters = Object.values(debouncedFilters).some(
        (v) => v !== undefined && v !== null && v !== ''
      )

      return (
        <div className="col-span-2">
          {hasFilters ? <UserOperationsNoResult /> : <UserOperationsEmpty />}
        </div>
      )
    }

    if (operations) {
      return operations.map((op) => (
        <UserOperationCard
          key={op.id}
          view={view}
          {...op}
        />
      ))
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold">Operações</h2>

      <ul
        data-view={view}
        className="grid grid-cols-1 xl:grid-cols-2 gap-4 data-[view=list]:gap-0 data-[view=list]:grid-cols-1 "
      >
        {renderList()}
      </ul>
    </div>
  )
}
