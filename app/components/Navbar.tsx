"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9998,
          background: "rgba(15,23,42,.97)",
          borderBottom: "1px solid rgba(255,255,255,.08)",
          backdropFilter: "blur(12px)",
        }}
      >
        <nav
          aria-label="主要導覽"
          style={{
            maxWidth: "1280px",
            minHeight: "72px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="棟鑫水電首頁"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
              color: "#fff",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                color: "#d6a52c",
                fontSize: "25px",
              }}
            >
              ⚡
            </span>

            <span
              style={{
                fontSize: "24px",
                fontWeight: 900,
                letterSpacing: ".5px",
              }}
            >
              棟鑫水電
            </span>
          </Link>

          {/* 電腦版 */}
          <div className="desktop-nav">
            <Link href="/" className="nav-link">
              首頁
            </Link>

            <Link href="/#services" className="nav-link">
              服務項目
            </Link>

            <Link href="/#gallery" className="nav-link">
              工程案例
            </Link>

            <Link href="/#areas" className="nav-link">
              服務區域
            </Link>

            <Link href="/about" className="nav-link">
              關於我們
            </Link>

            <Link href="/contact" className="nav-link">
              聯絡我們
            </Link>

            <a
              href="tel:0918808209"
              style={{
                minHeight: "44px",
                padding: "0 18px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "7px",
                background: "#d6a52c",
                color: "#111827",
                textDecoration: "none",
                fontWeight: 900,
                whiteSpace: "nowrap",
              }}
            >
              📞 0918-808-209
            </a>
          </div>

          {/* 手機版按鈕 */}
          <button
            type="button"
            className="mobile-menu-button"
            aria-label={menuOpen ? "關閉選單" : "開啟選單"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              style={{
                width: "22px",
                height: "2px",
                background: "#fff",
                transition: ".2s",
                transform: menuOpen
                  ? "translateY(7px) rotate(45deg)"
                  : "none",
              }}
            />

            <span
              style={{
                width: "22px",
                height: "2px",
                background: "#fff",
                transition: ".2s",
                opacity: menuOpen ? 0 : 1,
              }}
            />

            <span
              style={{
                width: "22px",
                height: "2px",
                background: "#fff",
                transition: ".2s",
                transform: menuOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </nav>

        {/* 手機選單 */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="mobile-navigation"
          >
            <Link href="/" onClick={closeMenu}>
              首頁
            </Link>

            <Link href="/#services" onClick={closeMenu}>
              服務項目
            </Link>

            <Link href="/#gallery" onClick={closeMenu}>
              工程案例
            </Link>

            <Link href="/#areas" onClick={closeMenu}>
              服務區域
            </Link>

            <Link href="/about" onClick={closeMenu}>
              關於棟鑫水電
            </Link>

            <Link href="/contact" onClick={closeMenu}>
              聯絡我們
            </Link>

            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,.1)",
                margin: "8px 0",
              }}
            />

            <p
              style={{
                margin: "5px 0 0",
                color: "#94a3b8",
                fontSize: "13px",
              }}
            >
              台北・新北水電服務
            </p>

            <a
              href="tel:0918808209"
              onClick={closeMenu}
              style={{
                marginTop: "5px",
                background: "#d6a52c",
                color: "#111827",
                borderRadius: "8px",
                fontWeight: 900,
                textAlign: "center",
              }}
            >
              📞 立即來電
            </a>
          </div>
        )}
      </header>

      <style jsx global>{`
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .nav-link {
          color: #e2e8f0;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #d6a52c;
        }

        .mobile-menu-button {
          display: none;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          cursor: pointer;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 5px;
          padding: 0;
        }

        .mobile-navigation {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-button {
            display: flex;
          }

          .mobile-navigation {
            display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 12px 20px 22px;
            background: #0f172a;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          }

          .mobile-navigation a {
            display: block;
            padding: 13px 12px;
            color: #e2e8f0;
            text-decoration: none;
            font-size: 16px;
            font-weight: 700;
          }
        }
      `}</style>
    </>
  );
}