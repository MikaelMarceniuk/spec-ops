import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  pgEnum,
} from 'drizzle-orm/pg-core'
import { tableTimestamp } from '../helper/timestamp.helper'
import { tableId } from '../helper/id.helper'
import { relations } from 'drizzle-orm'
import { userTable } from './user.table'

export const operationStatusEnum = pgEnum('operation_status', [
  'PLANNING',
  'ACTIVE',
  'COMPLETED',
  'ABORTED',
])

export const operationTable = pgTable('operations', {
  ...tableId,

  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  startDate: timestamp('start_date', { withTimezone: true }),
  endDate: timestamp('end_date', { withTimezone: true }),
  status: operationStatusEnum('status').notNull().default('PLANNING'),

  userId: uuid('user_id').notNull(),

  ...tableTimestamp,
})

export const operationRelations = relations(operationTable, ({ one }) => ({
  user: one(userTable, {
    fields: [operationTable.userId],
    references: [userTable.id],
  }),
}))
