export function setTimeZone(date) {
  date.setHours(date.getHours() + new Date().getTimezoneOffset() / 60);
  return date;
}
