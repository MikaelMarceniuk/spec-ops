import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from './db/db.infra'
import { openAPI } from 'better-auth/plugins'

export const auth = betterAuth({
  plugins: [openAPI()],
  basePath: '/auth',
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
})
