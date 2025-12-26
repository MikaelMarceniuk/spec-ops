import { eq } from 'drizzle-orm'
import { db } from '../db.infra'
import { maybeEndDate, maybeFutureStartDate } from './helpers/date.helpers'
import { userTable } from '../tables/user.table'
import { operationStatusEnum, operationTable } from '../tables/operation.table'
import { adminUser } from './constats/admin-user'
import { faker } from '@faker-js/faker'

const maxOperations = 30

const codename = [
  'Expansão Estratégica',
  'Inovação Contínua',
  'Alinhamento Operacional',
  'Transformação Digital',
  'Excelência em Execução',
  'Crescimento Sustentável',
  'Visão 360',
]

const objective = [
  'Alinhar equipes em torno de objetivos estratégicos',
  'Otimizar processos internos e fluxos de trabalho',
  'Promover capacitação por meio de workshops práticos',
  'Avaliar oportunidades de melhoria operacional',
  'Impulsionar inovação e colaboração entre áreas',
]

export const operationsSeed = async () => {
  const [dbAdminUser] = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, adminUser.email))

  console.log('🌱 Seeding operations for admin user')

  for (let i = 0; i < maxOperations; i++) {
    const startDate = maybeFutureStartDate()
    const endDate = maybeEndDate(startDate)

    await db.insert(operationTable).values({
      name: faker.helpers.arrayElement(codename),
      description: faker.helpers.arrayElement(objective),
      startDate,
      endDate,
      status: faker.helpers.arrayElement(operationStatusEnum.enumValues),
      userId: dbAdminUser.id,
    })
  }

  console.log('✅ Operations seeded')
}
