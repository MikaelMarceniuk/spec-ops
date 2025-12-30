import {
  Operation,
  operationStatusEnum,
} from '../../infra/db/tables/operation.table'

export class OperationPresenter {
  id: string
  name: string
  description: string | null
  startDate: Date | null
  endDate: Date | null
  status: (typeof operationStatusEnum.enumValues)[number]

  constructor({
    id,
    name,
    description,
    startDate,
    endDate,
    status,
  }: Operation) {
    this.id = id
    this.name = name
    this.description = description
    this.startDate = startDate
    this.endDate = endDate
    this.status = status
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      startDate: this.startDate,
      endDate: this.endDate,
      status: this.status,
    }
  }
}
