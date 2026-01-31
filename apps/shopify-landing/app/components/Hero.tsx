"use client";

// Trending up icon - export from Figma node 1921:292
function TrendingUpIcon({ className = "w-8 h-8 md:w-12 md:h-12" }: { className?: string }) {
  return (
    <img
      src="/icon-trending-up.svg"
      alt=""
      className={className}
    />
  );
}

// Payment icon - export from Figma node 1921:306
function PaymentIcon({ className = "w-8 h-8 md:w-12 md:h-12" }: { className?: string }) {
  return (
    <img
      src="/icon-payments.svg"
      alt=""
      className={className}
    />
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f9f8ff] pt-[60px] md:pt-[60px] pb-12 md:pb-20">
      {/* Background gradient image - stretched to fit section exactly */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/hero-gradient.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center max-w-[856px] mx-auto mb-20 md:mb-[80px]">
          {/* Headline */}
          <h1 className="text-[30px] md:text-[56px] font-bold text-[#110b36] leading-[1.1] mb-4">
            <span className="block md:inline">Want to do AB Testing?</span>{" "}
            <span className="block">
              We have <em className="font-normal">the tool</em>.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-[#585663] text-base md:text-lg leading-relaxed mb-8 max-w-[856px]">
            Supercharge your AB testing efforts with the essential AB Testing
            Tool. No redundant features. No sloppy support. Just pure focus on
            your AB testing and CRO for you to master your Conversions.
          </p>

          {/* CTA Button - 288px wide */}
          <button className="w-full md:w-[288px] bg-[#110b36] text-[#f9f8ff] font-bold text-xl py-4 px-12 rounded-full hover:bg-[#1a1250] transition-colors">
            Try for FREE
          </button>
        </div>

        {/* Dashboard Preview with Stats */}
        <div className="relative w-full max-w-[1200px] mx-auto">
          {/* Main Dashboard Chart - aspect ratio 805:495 */}
          <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[136px] w-[90%] md:w-[805px] mx-auto aspect-[805/495] bg-white rounded-xl shadow-[0px_5px_40px_0px_rgba(164,179,246,0.49)] overflow-hidden">
            <img
              src="/hero-chart.png"
              alt="Profit per Visitor chart showing Control at $1.40, Group 1 at $1.89, and Group 2 at $1.51"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Spacer for desktop to maintain layout height */}
          <div className="hidden md:block h-[668px]" />

          {/* Floating Stat Cards - Desktop Only */}
          <div className="hidden md:block">
            {/* Top Left - Profit per visitor */}
            <div className="absolute left-[162px] top-6 bg-white/80 backdrop-blur-sm border border-white rounded-lg p-6 shadow-lg">
              <p className="font-semibold text-[#110b36] text-2xl">
                Profit per visitor
              </p>
              <div className="flex items-center gap-1">
                <span className="font-bold text-5xl text-[#2aa900]">4.87%</span>
                <TrendingUpIcon />
                <span className="text-[#110b36] text-2xl font-medium">
                  -3% to +6%
                </span>
              </div>
            </div>

            {/* Top Right - Conversion Rate */}
            <div className="absolute right-[87px] top-12 bg-white/80 backdrop-blur-sm border border-white rounded-lg p-6 shadow-lg">
              <p className="font-semibold text-[#110b36] text-3xl">
                Conversion Rate
              </p>
              <div className="flex items-center gap-2">
                <span className="font-bold text-6xl text-[#110b36]">
                  75.90%
                </span>
                <TrendingUpIcon className="w-12 h-12" />
              </div>
            </div>

            {/* Middle Right - A/B Tests */}
            <div className="absolute right-[60px] top-[237px] bg-white/70 backdrop-blur-sm border border-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-6">
                <span className="font-bold text-4xl text-[#110b36]">1100+</span>
                <span className="font-bold text-xl text-[#110b36] uppercase">
                  A/B tests run
                </span>
              </div>
            </div>

            {/* Left - Revenue Uplift */}
            <div className="absolute left-1 top-[247px] bg-white/60 backdrop-blur-sm border border-white rounded-lg p-4 shadow-lg">
              <p className="font-semibold text-[#110b36] text-2xl">
                Revenue Uplift
              </p>
              <div className="flex items-center gap-2">
                <span className="font-bold text-5xl text-[#110b36]">$23M</span>
                <PaymentIcon />
              </div>
            </div>
          </div>

          {/* Mobile Stats - displayed above and below chart */}
          <div className="md:hidden space-y-4">
            {/* Top Stats Row */}
            <div className="flex gap-2 px-2 -mt-2">
              <div className="flex-1 bg-white/80 backdrop-blur-sm border border-white rounded-lg p-3 shadow-lg">
                <p className="font-semibold text-[#110b36] text-xs">
                  Profit per visitor
                </p>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-xl text-[#2aa900]">4.87%</span>
                  <TrendingUpIcon className="w-4 h-4" />
                  <span className="text-[#110b36] text-[10px]">-3% to +6%</span>
                </div>
              </div>
              <div className="flex-1 bg-white/80 backdrop-blur-sm border border-white rounded-lg p-3 shadow-lg">
                <p className="font-semibold text-[#110b36] text-xs">
                  Conversion Rate
                </p>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-xl text-[#110b36]">75.90%</span>
                  <TrendingUpIcon className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Bottom Stats Row */}
            <div className="flex justify-between px-2">
              <div className="bg-white/60 backdrop-blur-sm border border-white rounded-lg p-2 shadow-lg">
                <p className="font-semibold text-[#110b36] text-[10px]">
                  Revenue Uplift
                </p>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-lg text-[#110b36]">$23M</span>
                  <PaymentIcon className="w-4 h-4" />
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-white rounded-lg p-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-[#110b36]">1100+</span>
                  <span className="font-bold text-[8px] text-[#110b36] uppercase">
                    A/B TESTS RUN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
