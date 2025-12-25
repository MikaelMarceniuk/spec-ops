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
  advanced: {
    database: {
      generateId: false,
    },
    disableOriginCheck: true,
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    minPasswordLength: 8,
    password: {
      hash: async (password) => await Bun.password.hash(password),
      verify: async ({ password, hash }) =>
        await Bun.password.verify(password, hash),
    },
  },
})
