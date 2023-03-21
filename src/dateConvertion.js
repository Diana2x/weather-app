export function convertToDate(stamp) {
  let date = new Date(stamp * 1000);
  let timestamp = date.toLocaleTimeString();
  return `${timestamp}`;
}
