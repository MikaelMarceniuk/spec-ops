import { timestamp } from 'drizzle-orm/pg-core'

export const tableTimestamp = {
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .$onUpdate(() => new Date())
    .notNull(),
}
