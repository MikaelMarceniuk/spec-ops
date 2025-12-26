import 'dotenv/config'
import z from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['DEV', 'PRD'], {
    error: 'NODE_ENV must be either "DEV" or "PRD"',
  }),

  FRONTEND_URL: z.url({
    error: 'FRONTEND_URL must be a valid URL (e.g. https://example.com)',
  }),

  DATABASE_URL: z
    .url({
      error: 'DATABASE_URL must be a valid URL',
    })
    .startsWith('postgres://', {
      error:
        'DATABASE_URL must be a PostgreSQL connection string starting with "postgres://"',
    }),

  BETTER_AUTH_SECRET: z.string().min(32, {
    error: 'BETTER_AUTH_SECRET must be at least 32 characters long',
  }),
  BETTER_AUTH_URL: z.url({
    error:
      'BETTER_AUTH_URL must be a valid URL (e.g. https://auth.example.com)',
  }),
})

const result = envSchema.safeParse(process.env)
if (!result.success) {
  const errors = result.error.issues.map(({ message }) => message).join(', ')
  console.error('❌ .env is not valid:', errors)
  process.exit(1)
}

export const env = result.data
