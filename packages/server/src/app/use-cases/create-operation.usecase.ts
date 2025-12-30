import { DrizzleInstance } from '../../infra/db/db.infra'
import {
  operationStatusEnum,
  operationTable,
} from '../../infra/db/tables/operation.table'

type CreateOperationUseCaseParams = {
  db: DrizzleInstance
  userId: string
  data: {
    name: string
    description?: string | null
    startDate?: Date | null
    endDate?: Date | null
    status?: (typeof operationStatusEnum.enumValues)[number]
  }
}

export const createOperationUseCase = async ({
  db,
  userId,
  data,
}: CreateOperationUseCaseParams) => {
  const [operation] = await db
    .insert(operationTable)
    .values({
      name: data.name,
      description: data.description,
      startDate: data.startDate,
      endDate: data.endDate,
      userId: userId,
    })
    .returning()

  return {
    operation,
  }
}
