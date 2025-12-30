import Elysia, { t } from 'elysia'
import { betterAuthPlugin } from '../plugins/better-auth.plugin'
import { operationStatusMapper } from '../../infra/db/tables/operation.table'
import { createOperationUseCase } from '../../app/use-cases/create-operation.usecase'
import { db } from '../../infra/db/db.infra'
import { OperationPresenter } from '../presenters/operation.presenter'

export const createOperation = new Elysia().use(betterAuthPlugin).post(
  '/',
  async ({ user, body }) => {
    const { operation } = await createOperationUseCase({
      data: body,
      userId: user.id,
      db: db,
    })

    return new OperationPresenter(operation).toJSON()
  },
  {
    auth: true,
    body: t.Object({
      name: t.String({ minLength: 8 }),
      description: t.Optional(t.String()),
      startDate: t.Optional(t.Date()),
      endDate: t.Optional(t.Date()),
      status: t.Optional(t.Enum(operationStatusMapper)),
    }),
  }
)
