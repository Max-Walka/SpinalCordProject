<<<<<<< HEAD
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
=======
import { getLoggedInStaff } from "./auth";

/** Client-side staff id from login (`staffInfo` in sessionStorage). */
export function readStaffIdFromStorage(): number | null {
  return getLoggedInStaff()?.staffId ?? null;
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
}
