export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatNumber(value: number) {
  return value.toLocaleString();
}
