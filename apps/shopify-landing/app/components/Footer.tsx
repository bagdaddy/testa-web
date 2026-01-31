export function Footer() {
  return (
    <footer className="bg-[#f9f8ff] px-4 xl:px-[204px]">
      <div className="max-w-[1392px] mx-auto">
        {/* Footer content */}
        <div className="flex flex-col xl:flex-row items-center justify-between py-6 gap-4">
          {/* Copyright */}
          <div
            className="flex gap-1 items-center text-[#2f2c46] text-[16px] xl:text-[20px] font-medium"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <span>Copyright</span>
            <span>&copy;</span>
            <span>2025 Testa</span>
          </div>

          {/* Links */}
          <div
            className="flex gap-6 items-center text-[#110b36] text-[16px] xl:text-[20px] font-semibold"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <a href="/terms" className="hover:underline">
              Terms and Conditions
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
