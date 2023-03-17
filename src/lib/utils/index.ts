export function formatDate(dateString: any, options: any) {
  const { format } = new Intl.DateTimeFormat('en-US', options);
  return format(new Date(dateString));
}
