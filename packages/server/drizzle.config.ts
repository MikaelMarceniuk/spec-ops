import { defineConfig } from 'drizzle-kit'
import { env } from './src/infra/env.infra'

export default defineConfig({
  out: './src/infra/db',
  schema: './src/infra/db/tables/*.table.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  migrations: {
    schema: 'drizzle',
    prefix: 'timestamp',
  },
  casing: 'snake_case',
})
