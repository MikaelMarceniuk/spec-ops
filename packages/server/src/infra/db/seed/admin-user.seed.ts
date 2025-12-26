import { userTable } from '../tables/user.table'
import { eq } from 'drizzle-orm'
import { accountTable } from '../tables/account.table'
import { db } from '../db.infra'
import { adminUser } from './constats/admin-user'

export const adminSeed = async () => {
  const [dbUser] = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, adminUser.email))

  if (dbUser) {
    console.log('✅ Admin user already seeded')
    return
  }

  await db.transaction(async (ctx) => {
    console.log('🌱 Seeding admin user')

    const [newAdminUser] = await ctx
      .insert(userTable)
      .values({
        name: adminUser.name,
        email: adminUser.email,
      })
      .returning()

    await ctx.insert(accountTable).values({
      password: adminUser.password,
      accountId: newAdminUser.id,
      userId: newAdminUser.id,
      providerId: 'credential',
    })
  })

  console.log('✅ Admin user seeded')
}
