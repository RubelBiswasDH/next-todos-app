import "server-only";

export function getAppUrl() {
  const url = process.env.APP_URL ?? "http://localhost:3000";
  return url.replace(/\/$/, "");
}
