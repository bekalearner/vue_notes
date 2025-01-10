export function formatDate(date: Date): string {
  return Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
    hour: "2-digit",
    minute: "numeric"
  })
    .format(date)
    .split(', ')
    .join(' | ')
}
