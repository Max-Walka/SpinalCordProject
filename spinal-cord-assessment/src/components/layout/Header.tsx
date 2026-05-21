"use client";

import { useEffect, useRef, useState } from "react";
<<<<<<< HEAD
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const [staffName, setStaffName] = useState("Loading...");
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLButtonElement | null)[]>([]);
=======
import { getLoggedInStaff, logoutStaff } from "@/lib/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const [staffName, setStaffName] = useState("Loading...");
  const [menuOpen, setMenuOpen] = useState(false);
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806

  // Load staff name from localStorage
  useEffect(() => {
<<<<<<< HEAD
    const staffInfo = localStorage.getItem("staffInfo");
    if (!staffInfo) {
      setStaffName("Unknown User");
      return;
    }
    try {
      const parsed = JSON.parse(staffInfo);
      setStaffName(parsed.fullName || "Unknown User");
    } catch {
      setStaffName("Unknown User");
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Focus first menu item when opening
  useEffect(() => {
    if (menuOpen) {
      menuItemsRef.current[0]?.focus();
    }
  }, [menuOpen]);

  // Keyboard navigation in menu
  function handleMenuKeyDown(e: React.KeyboardEvent) {
    const items = menuItemsRef.current.filter(Boolean) as HTMLButtonElement[];
    const currentIdx = items.indexOf(document.activeElement as HTMLButtonElement);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = currentIdx < items.length - 1 ? currentIdx + 1 : 0;
      items[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = currentIdx > 0 ? currentIdx - 1 : items.length - 1;
      items[prev]?.focus();
    } else if (e.key === "Escape") {
      setMenuOpen(false);
    }
  }

  // Sign out function
  function handleSignOut() {
    localStorage.removeItem("staffInfo");
=======
    const staff = getLoggedInStaff();
    setStaffName(staff?.fullName ?? "Unknown User");
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    function onMouseDown(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [menuOpen]);

  function handleLogout() {
    logoutStaff();
    setMenuOpen(false);
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
    router.push("/login");
  }

  return (
    <header
      style={{
        backgroundColor: "#33476D",
        color: "#FFFFFF",
        padding: "20px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
<<<<<<< HEAD
      <Link
        href="/"
        className="header-logo"
        aria-label="Go to Assessment Dashboard"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div
          style={{
            fontSize: "28px",
            fontWeight: 700,
            marginBottom: "4px",
          }}
        >
          Health New Zealand
        </div>
        <div style={{ fontSize: "20px", fontWeight: 700, color: "#1FC2D5" }}>
          Te Whatu Ora
        </div>
      </Link>

      {/* RIGHT */}
      <div ref={dropdownRef} style={{ position: "relative", display: "flex", alignItems: "center", gap: "14px" }}>
        {/* Name */}
        <span
          role="button"
          aria-expanded={menuOpen}
          aria-haspopup="true"
          style={{
            fontSize: "18px",
            color: "#AEB9D3",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpen((prev) => !prev)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setMenuOpen((prev) => !prev);
=======
      <Link href="/dashboard" style={{ textDecoration: "none" }}>
        <div
          style={{
            cursor: "pointer",
            transition: "all 0.2s ease",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.8";
            e.currentTarget.style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <div style={{ fontSize: "28px", fontWeight: 700, color: "#FFFFFF" }}>
            Health New Zealand
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#1FC2D5",
            }}
          >
            Te Whatu Ora
          </div>
        </div>
      </Link>

      <div
        ref={menuRef}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          aria-label="Profile menu"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: 0,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: "inherit",
            fontFamily: "inherit",
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
          }}
        >
          <span
            style={{
              fontSize: "18px",
              color: "#AEB9D3",
            }}
          >
            {staffName}
          </span>

<<<<<<< HEAD
        {/* Person Icon */}
        <div
          style={{
            width: "58px",
            height: "58px",
            borderRadius: "50%",
            border: "4px solid #7E90BA",
            position: "relative",
            flexShrink: 0,
            cursor: "pointer",
          }}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
=======
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
          <div
            style={{
              width: "58px",
              height: "58px",
              borderRadius: "50%",
              border: "4px solid #7E90BA",
              position: "relative",
            }}
<<<<<<< HEAD
          />
=======
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: "#7E90BA",
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                width: "28px",
                height: "14px",
                borderRadius: "14px 14px 10px 10px",
                backgroundColor: "#7E90BA",
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </div>
        </button>

        {menuOpen ? (
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
          <div
            role="menu"
            style={{
              position: "absolute",
              top: "calc(100% + 10px)",
              right: 0,
              minWidth: "200px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #D6D6D6",
              borderRadius: "8px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              overflow: "hidden",
              zIndex: 50,
            }}
<<<<<<< HEAD
          />
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div
            className="profile-menu"
            role="menu"
            style={{
              position: "absolute",
              top: "70px",
              right: 0,
              backgroundColor: "#FFFFFF",
              color: "#000000",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
              minWidth: "140px",
              zIndex: 50,
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              padding: "8px 0",
            }}
            onKeyDown={handleMenuKeyDown}
          >
            <button
              className="profile-menu-item"
              role="menuitem"
              tabIndex={-1}
              ref={(el) => { menuItemsRef.current[0] = el; }}
              style={{ background: "none", border: "none", padding: "8px 16px", textAlign: "left", cursor: "pointer" }}
            >
              Profile
            </button>
            <button
              className="profile-menu-item"
              role="menuitem"
              tabIndex={-1}
              ref={(el) => { menuItemsRef.current[1] = el; }}
              style={{ background: "none", border: "none", padding: "8px 16px", textAlign: "left", cursor: "pointer" }}
            >
              Settings
            </button>
            <hr style={{ margin: "4px 0", borderColor: "#E5E7EB" }} />
            <button
              className="profile-menu-item"
              role="menuitem"
              tabIndex={-1}
              ref={(el) => { menuItemsRef.current[2] = el; }}
              onClick={handleSignOut}
              style={{ background: "none", border: "none", padding: "8px 16px", textAlign: "left", cursor: "pointer", color: "#B91C1C" }}
            >
              Sign out
            </button>
          </div>
        )}
=======
          >
            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              style={{
                width: "100%",
                padding: "16px 20px",
                border: "none",
                backgroundColor: "#FFFFFF",
                color: "#DC2626",
                fontSize: "16px",
                fontWeight: 600,
                textAlign: "left",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FEF2F2";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
              }}
            >
              Log Out
            </button>
          </div>
        ) : null}
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
      </div>
    </header>
  );
}
