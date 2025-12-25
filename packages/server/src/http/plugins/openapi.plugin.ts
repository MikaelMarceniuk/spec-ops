import Elysia from 'elysia'
import { openapi } from '@elysiajs/openapi'
import { OpenAPI } from './better-auth.plugin'

export const openapiPlugin = new Elysia().use(
  openapi({
    documentation: {
      components: await OpenAPI.components,
      paths: await OpenAPI.getPaths(),
    },
  })
)
