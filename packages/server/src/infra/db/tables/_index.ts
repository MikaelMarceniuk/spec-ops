import { accountRelations, accountTable } from './account.table'
import { operationRelations, operationTable } from './operation.table'
import { sessionRelations, sessionTable } from './session.table'
import { userRelations, userTable } from './user.table'
import { verificationTable } from './verification.table'

export const schema = {
  user: userTable,
  userRelations,
  session: sessionTable,
  sessionRelations,
  account: accountTable,
  accountRelations,
  verification: verificationTable,
  operation: operationTable,
  operationRelations,
} as const
