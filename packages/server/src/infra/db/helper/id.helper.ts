import { randomUUIDv7 } from 'bun'
import { uuid } from 'drizzle-orm/pg-core'

export const tableId = {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => randomUUIDv7()),
}
