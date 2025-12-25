import { Elysia } from 'elysia'
import { testDatabaseConnection } from './infra/db/db.infra'

await testDatabaseConnection()

const app = new Elysia().get('/', () => 'Hello Elysia').listen(3333)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
