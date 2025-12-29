export type Operation = {
  id: string
  name: string
  startDate: Date | null
  endDate: Date | null
  status: 'PLANNING' | 'ACTIVE' | 'COMPLETED' | 'ABORTED'
}
