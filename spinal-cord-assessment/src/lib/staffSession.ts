import { getLoggedInStaff } from "./auth";

/** Client-side staff id from login (`staffInfo` in sessionStorage). */
export function readStaffIdFromStorage(): number | null {
  return getLoggedInStaff()?.staffId ?? null;
}
