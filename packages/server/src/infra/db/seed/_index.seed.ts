import { adminSeed } from './admin-user.seed'
import { operationsSeed } from './operations.seed'

export const seed = async () => {
  await adminSeed()
  await operationsSeed()
}

await seed()
