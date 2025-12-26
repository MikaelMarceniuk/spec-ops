import { faker } from '@faker-js/faker'
import { addDays, addHours } from 'date-fns'

export function randomFutureDate(): Date {
  const daysInFuture = faker.number.int({ min: 1, max: 180 })
  return addDays(new Date(), daysInFuture)
}

export function maybeFutureStartDate(): Date | null {
  return faker.datatype.boolean() ? randomFutureDate() : null
}

export function maybeEndDate(startDate: Date | null): Date | null {
  if (!startDate) return null

  const hoursAfter = faker.number.int({ min: 1, max: 240 })
  return addHours(startDate, hoursAfter)
}
