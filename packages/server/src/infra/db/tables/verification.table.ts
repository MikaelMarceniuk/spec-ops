import { randomUUIDv7 } from 'bun'
import { pgTable, text, timestamp, index, uuid } from 'drizzle-orm/pg-core'
import { tableTimestamp } from '../helper/timestamp.helper'

export const verificationTable = pgTable(
  'verification',
  {
    id: uuid('id')
      .primaryKey()
      .$defaultFn(() => randomUUIDv7()),

    identifier: text('identifier').notNull(),
    value: text('value').notNull(),
    expiresAt: timestamp('expires_at').notNull(),

    ...tableTimestamp,
  },
  (table) => [index('verification_identifier_idx').on(table.identifier)]
)
