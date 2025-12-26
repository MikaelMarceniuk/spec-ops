import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { env } from '../../infra/env.infra'

export const corsPlugin = new Elysia().use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  })
)
