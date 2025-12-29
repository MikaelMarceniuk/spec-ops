import 'dotenv/config'
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres'
import { env } from '../env.infra'
import { schema } from './tables/_index'

export type DrizzleInstance = NodePgDatabase<typeof schema>

const db: DrizzleInstance = drizzle(env.DATABASE_URL, {
  casing: 'snake_case',
  schema,
})

export async function testDatabaseConnection(
  maxRetries = 5,
  delayMs = 1000
): Promise<void> {
  let lastError: unknown

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await db.execute('select 1')
      console.log('✅ Database connection established')
      return
    } catch (err) {
      lastError = err
      console.warn(
        `⚠️ Failed to connect to the database (attempt ${attempt}/${maxRetries})`
      )

      if (attempt < maxRetries) {
        await new Promise((res) => setTimeout(res, delayMs))
      }
    }
  }

  console.error('❌ Could not connect to the database after multiple attempts')
  throw lastError
}

export { db }
