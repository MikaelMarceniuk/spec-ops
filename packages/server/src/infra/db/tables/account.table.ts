import { relations } from 'drizzle-orm'
import { pgTable, text, timestamp, index, uuid } from 'drizzle-orm/pg-core'
import { userTable } from './user.table'
import { randomUUIDv7 } from 'bun'
import { tableTimestamp } from '../helper/timestamp.helper'

export const accountTable = pgTable(
  'accounts',
  {
    id: uuid('id')
      .primaryKey()
      .$defaultFn(() => randomUUIDv7()),

    idToken: text('id_token'),
    scope: text('scope'),
    password: text('password'),

    accessToken: text('access_token'),
    refreshToken: text('refresh_token'),
    accessTokenExpiresAt: timestamp('access_token_expires_at'),
    refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),

    accountId: text('account_id').notNull(),
    providerId: text('provider_id').notNull(),
    userId: uuid('user_id')
      .notNull()
      .references(() => userTable.id, { onDelete: 'cascade' }),

    ...tableTimestamp,
  },
  (table) => [index('account_userId_idx').on(table.userId)]
)

export const accountRelations = relations(accountTable, ({ one }) => ({
  user: one(userTable, {
    fields: [accountTable.userId],
    references: [userTable.id],
  }),
}))
