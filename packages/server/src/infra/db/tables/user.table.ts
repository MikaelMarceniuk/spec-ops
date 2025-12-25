import { relations } from 'drizzle-orm'
import { pgTable, text, boolean, uuid } from 'drizzle-orm/pg-core'
import { sessionTable } from './session.table'
import { accountTable } from './account.table'
import { tableTimestamp } from '../helper/timestamp.helper'
import { randomUUIDv7 } from 'bun'

export const userTable = pgTable('users', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => randomUUIDv7()),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').default(false).notNull(),
  image: text('image'),

  ...tableTimestamp,
})

export const userRelations = relations(userTable, ({ many }) => ({
  sessions: many(sessionTable),
  accounts: many(accountTable),
}))
