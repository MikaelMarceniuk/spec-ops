import 'dotenv/config'
import z from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['DEV', 'PRD'], { error: 'NODE_ENV is invalid' }),
  DATABASE_URL: z
    .url({ error: 'DATABASE_URL is invalid' })
    .startsWith('postgres://', {
      error: 'DATABASE_URL is not a postgres connection string',
    }),

  BETTER_AUTH_SECRET: z.string().min(32),
  BETTER_AUTH_URL: z.url(),
})

const result = envSchema.safeParse(process.env)
if (!result.success) {
  const errors = result.error.issues.map(({ message }) => message).join(', ')
  console.error('❌ .env is not valid:', errors)
  process.exit(1)
}

export const env = result.data
