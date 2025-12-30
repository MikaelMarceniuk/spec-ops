import { DrizzleInstance } from '../../infra/db/db.infra'
import { operationStatusEnum } from '../../infra/db/tables/operation.table'

type CreateOperationUseCaseParams = {
  db: DrizzleInstance
  userId: string
  data: {
    name: string
    description: string | null
    startDate: string | null
    endDate: string | null
    status: (typeof operationStatusEnum.enumValues)[number]
  }
}

export const createOperationUseCase = async ({
  db,
  userId,
}: CreateOperationUseCaseParams) => {}
