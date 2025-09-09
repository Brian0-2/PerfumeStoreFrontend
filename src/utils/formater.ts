
export const formatCurrency = (value: string | number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(Number(value));

export function formatDate(
  date: string | Date,
  options: Intl.DateTimeFormatOptions = {}
): string {
  if (!date) return "";

  const parsedDate = typeof date === "string" ? new Date(date) : date;

  return new Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    ...options,
  }).format(parsedDate);
}
