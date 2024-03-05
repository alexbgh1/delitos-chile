export function setTimeZone(date) {
  console.log("Date: ", date);
  date.setHours(date.getHours() + new Date().getTimezoneOffset() / 60);
  // Arbitrary timezone +12
  // So if date is 2023-12-31, 12:00:00 -> 2024-01-01, ..:..:..
  date.setHours(date.getHours() + 12);
  return date;
}
