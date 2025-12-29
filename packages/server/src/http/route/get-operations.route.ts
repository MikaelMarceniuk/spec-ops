import Elysia, { t } from 'elysia'
import { betterAuthPlugin } from '../plugins/better-auth.plugin'
import { db } from '../../infra/db/db.infra'
import { getOperationsUseCase } from '../../app/use-cases/get-operations.usecase'
import { OperationPresenter } from '../presenters/operation.presenter'

export const getOperations = new Elysia().use(betterAuthPlugin).get(
  '/',
  async ({ user, query }) => {
    const { operations } = await getOperationsUseCase({
      db,
      userId: user.id,
      filters: query,
    })

    return operations.map((op) => new OperationPresenter(op))
  },
  {
    auth: true,
    query: t.Object({
      q: t.Optional(t.String()),
    }),
  }
)
