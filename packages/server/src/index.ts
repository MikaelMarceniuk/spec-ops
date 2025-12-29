import { Elysia } from 'elysia'
import { testDatabaseConnection } from './infra/db/db.infra'
import { openapiPlugin } from './http/plugins/openapi.plugin'
import { betterAuthPlugin } from './http/plugins/better-auth.plugin'
import { corsPlugin } from './http/plugins/cors.plugin'
import { getOperations } from './http/route/get-operations.route'

await testDatabaseConnection()

const app = new Elysia({ prefix: '/api' })
  .use(openapiPlugin)
  .use(betterAuthPlugin)
  .use(corsPlugin)
  .group('/operation', (app) => app.use(getOperations))
  .listen(3333)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
