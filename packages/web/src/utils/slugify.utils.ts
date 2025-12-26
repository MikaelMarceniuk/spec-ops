export function slugify(text: string): string {
  return text
    .normalize('NFD') // separa acento da letra
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // remove caracteres inválidos
    .replace(/\s+/g, '-') // espaços → hífen
    .replace(/-+/g, '-') // múltiplos hífens → um só
    .replace(/^-|-$/g, '') // remove hífen do início/fim
}
