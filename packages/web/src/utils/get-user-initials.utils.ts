export function getUserInitials(username: string) {
  if (!username || typeof username !== 'string') return ''

  const parts = username
    .trim()
    .split(/\s+/) // separa por um ou mais espaços
    .filter(Boolean)

  if (parts.length === 0) return ''

  const first = parts[0][0]
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''

  return (first + last).toUpperCase()
}
