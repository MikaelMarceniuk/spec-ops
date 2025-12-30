export const operationStatus = [
  'PLANNING',
  'ACTIVE',
  'COMPLETED',
  'ABORTED',
] as const

export const OperationStatusMapper: Record<OperationStatus, string> = {
  PLANNING: 'Em Planejamento',
  ACTIVE: 'Ativo',
  COMPLETED: 'Completo',
  ABORTED: 'Abortado',
}

export type OperationStatus = (typeof operationStatus)[number]
