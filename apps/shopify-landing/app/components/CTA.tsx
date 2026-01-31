export function CTA() {
  return (
    <section
      className="bg-[#f9f8ff] pt-[70px] pb-[140px] px-4 xl:px-[204px]"
      style={{
        background: `radial-gradient(ellipse 80% 70% at 50% 100%, rgba(88,100,255,0.25) 0%, rgba(172,178,255,0.15) 40%, rgba(249,248,255,1) 70%)`,
      }}
    >
      <div className="max-w-[1032px] mx-auto flex flex-col gap-10 items-center text-center">
        {/* Heading */}
        <div className="flex flex-col gap-4 items-center">
          <h2
            className="text-[32px] xl:text-[44px] font-semibold text-[#110b36] leading-[40px] xl:leading-[52px] max-w-[1032px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Test <em className="font-normal italic">smarter</em>. Get insights
            that <em className="font-normal italic">matter</em>.
          </h2>
          <p
            className="text-[14px] xl:text-[16px] text-[#585663] leading-[23px] max-w-[856px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            A testing approach focused on meaningful insights — helping teams
            make data-driven decisions faster and with clarity.
          </p>
        </div>

        {/* Button */}
        <button
          className="w-[288px] h-[56px] bg-[#110b36] text-[#f9f8ff] font-bold text-[20px] rounded-full hover:bg-[#1a1250] transition-colors"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Try for FREE
        </button>
      </div>
    </section>
  );
}
