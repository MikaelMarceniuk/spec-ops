import { and, eq, ilike } from 'drizzle-orm'
import { operationTable } from '../../infra/db/tables/operation.table'
import { DrizzleInstance } from '../../infra/db/db.infra'

type GetOperationsUseCaseParams = {
  db: DrizzleInstance
  userId: string
  filters: {
    q?: string
  }
}

export const getOperationsUseCase = async ({
  db,
  userId,
  filters,
}: GetOperationsUseCaseParams) => {
  const conditions = [
    eq(operationTable.userId, userId),
    filters.q ? ilike(operationTable.name, `%${filters.q}%`) : undefined,
  ].filter(Boolean)

  const operations = await db
    .select()
    .from(operationTable)
    .where(and(...conditions))

  return {
    operations,
  }
}
