import { Elysia } from 'elysia'
import { testDatabaseConnection } from './infra/db/db.infra'
import { openapiPlugin } from './http/plugins/openapi.plugin'
import { betterAuthPlugin } from './http/plugins/better-auth.plugin'

await testDatabaseConnection()

const app = new Elysia({ prefix: '/api' })
  .use(openapiPlugin)
  .use(betterAuthPlugin)
  .listen(3333)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
