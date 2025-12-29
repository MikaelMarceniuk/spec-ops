export type Operation = {
  id: string
  name: string
  description: string | null
  startDate: Date | null
  endDate: Date | null
  status: 'PLANNING' | 'ACTIVE' | 'COMPLETED' | 'ABORTED'
}
