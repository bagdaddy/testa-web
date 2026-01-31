"use client";

import { useState, useEffect } from "react";

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      {/* A/B circles */}
      <div className="flex items-center pr-2">
        <div
          className="w-[34px] h-[34px] rounded-full flex items-center justify-center -mr-2 z-[1]"
          style={{ backgroundColor: "rgba(58, 211, 243, 0.36)" }}
        >
          <span
            className="text-[20px] font-bold text-[#110b36]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            A
          </span>
        </div>
        <div className="w-[34px] h-[34px] rounded-full bg-[#110b36] flex items-center justify-center">
          <span
            className="text-[20px] font-bold text-[#b8effb]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            B
          </span>
        </div>
      </div>
      {/* Text */}
      <span
        className="text-[20px] text-[#110b36]"
        style={{ fontFamily: "var(--font-aldrich)" }}
      >
        TESTING TOOL
      </span>
    </div>
  );
}

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
  { label: "For CRO Specialists", href: "#cro" },
  { label: "For Solopreneurs", href: "#solo" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#f9f8ff] shadow-[0px_19px_24px_0px_rgba(172,191,250,0.4)]"
            : "bg-[#f9f8ff]"
        }`}
      >
        {/* Desktop Header */}
        <div className="hidden xl:flex items-center justify-between px-[204px] py-5 max-w-[1440px] mx-auto">
          <Logo />

          <div className="flex items-center gap-6">
            {/* Nav links */}
            <nav
              className="flex gap-6 items-center text-[20px] font-medium text-[#110b36]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#5864ff] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <button
              className="h-[40px] px-6 bg-[#110b36] text-[#f9f8ff] font-bold text-[16px] rounded-full hover:bg-[#1a1250] transition-colors"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Try for FREE
            </button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex xl:hidden items-center justify-between p-4">
          <Logo />

          {/* Hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2"
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H21M3 12H21M3 18H21"
                stroke="#110b36"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] xl:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgb(255, 255, 255) 34%, rgb(240, 241, 255) 100%)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-[18px]">
            <Logo />

            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="#110b36"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col justify-between h-[calc(100vh-84px)] px-6 py-12">
            {/* Nav links */}
            <nav
              className="flex flex-col gap-6 text-[24px] text-[#110b36]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#5864ff] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <button
              className="w-full h-[56px] bg-[#110b36] text-[#f9f8ff] font-bold text-[20px] rounded-full hover:bg-[#1a1250] transition-colors"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Try for FREE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
