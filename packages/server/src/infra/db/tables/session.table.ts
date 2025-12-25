import { relations } from 'drizzle-orm'
import { pgTable, text, timestamp, index, uuid } from 'drizzle-orm/pg-core'
import { userTable } from './user.table'
import { randomUUIDv7 } from 'bun'
import { tableTimestamp } from '../helper/timestamp.helper'

export const sessionTable = pgTable(
  'sessions',
  {
    id: uuid('id')
      .primaryKey()
      .$defaultFn(() => randomUUIDv7()),
    token: text('token').notNull().unique(),
    ipAddress: text('ip_address'),
    userAgent: text('user_agent'),

    userId: uuid('user_id')
      .notNull()
      .references(() => userTable.id, { onDelete: 'cascade' }),

    expiresAt: timestamp('expires_at').notNull(),
    ...tableTimestamp,
  },
  (table) => [index('session_userId_idx').on(table.userId)]
)

export const sessionRelations = relations(sessionTable, ({ one }) => ({
  user: one(userTable, {
    fields: [sessionTable.userId],
    references: [userTable.id],
  }),
}))
