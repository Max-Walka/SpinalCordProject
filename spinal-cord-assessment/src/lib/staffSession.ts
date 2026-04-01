export function hasValidStaffSession(): boolean {
  if (typeof window === "undefined") return false;
  const raw = localStorage.getItem("staffInfo");
  if (!raw) return false;
  try {
    const parsed = JSON.parse(raw) as { username?: string };
    return Boolean(parsed?.username);
  } catch {
    return false;
  }
}
