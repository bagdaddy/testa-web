"use client";

import { useState, useRef, useCallback, useEffect } from "react";

// Session tiers with placeholder prices (to be filled in later)
const sessionTiers = [
  { sessions: "50K", value: 50000 },
  { sessions: "100K", value: 100000 },
  { sessions: "250K", value: 250000 },
  { sessions: "500K", value: 500000 },
  { sessions: "1M", value: 1000000 },
];

// Placeholder pricing - will be updated later
const pricing: Record<
  number,
  {
    core: { original: number; current: number };
    advanced: { original: number; current: number };
  }
> = {
  50000: {
    core: { original: 0, current: 0 },
    advanced: { original: 0, current: 0 },
  },
  100000: {
    core: { original: 0, current: 0 },
    advanced: { original: 0, current: 0 },
  },
  250000: {
    core: { original: 0, current: 0 },
    advanced: { original: 0, current: 0 },
  },
  500000: {
    core: { original: 0, current: 0 },
    advanced: { original: 0, current: 0 },
  },
  1000000: {
    core: { original: 0, current: 0 },
    advanced: { original: 0, current: 0 },
  },
};

// Core plan features - "Who's it for"
const coreWhosItFor = [
  "Want to do regular split URL A/B testing",
  "Sporadically have more complex A/B test setups",
  "Want to target your audience better",
];

// Advanced plan features - "Who's it for"
const advancedWhosItFor = [
  "Want VIP support",
  "Want to find out how to get extra profit",
  "Receive revenue-growing AB-testing advice",
];

// Core plan includes
const coreIncludes = [
  { text: "Everything in Core", bold: true },
  { text: "Dedicated ", boldPart: "Account Manager" },
  { text: "One-time storefront ", boldPart: "audit and insights" },
  { text: "Monthly ", boldPart: "on-demand strategy session" },
  { text: "Dedicated ", boldPart: "Slack Channel" },
];

// Advanced plan includes
const advancedIncludes = [
  { boldPart: "URL split", text: " testing" },
  { boldPart: "Statistical", text: " analytics" },
  { boldPart: "Conversion and engagement", text: " goals" },
  { boldPart: "Device", text: " targeting" },
  { boldPart: "Audience", text: " targeting" },
  { boldPart: "Country and region", text: " targeting" },
  { text: "Email Support", bold: true },
  { boldPart: "GA4", text: " integration" },
  { boldPart: "Unlimited", text: " number of tests" },
  { boldPart: "Unlimited", text: " number of goals" },
  { boldPart: "Mutually exclusive", text: " groups" },
  { boldPart: "Multivariate", text: " tests (A/B/C)" },
  { boldPart: "Customisable traffic", text: " shares" },
];

function CheckIcon() {
  return <img src="/plans/check.svg" alt="" className="w-6 h-6 shrink-0" />;
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 items-start w-full">
      <CheckIcon />
      <p className="flex-1 text-[#221f38] text-[16px] leading-normal">
        {children}
      </p>
    </div>
  );
}

function PriceDisplay({
  original,
  current,
}: {
  original: number;
  current: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#93919d] text-[18px] font-medium line-through leading-[20px]">
        $ {original.toFixed(2)}
      </p>
      <div className="flex items-end text-[#221f38]">
        <span className="text-[20px] font-medium leading-[26px]">$</span>
        <span className="text-[36px] font-bold leading-[36px]">
          {current.toFixed(2)}
        </span>
        <span className="text-[20px] font-medium leading-[26px]">/mo</span>
      </div>
    </div>
  );
}

function CoreCard({
  currentPricing,
}: {
  currentPricing: { original: number; current: number };
}) {
  return (
    <div
      className="flex-1 flex flex-col rounded-[16px] pb-px"
      style={{
        backgroundImage:
          "linear-gradient(-12deg, rgba(88, 100, 255, 0.24) 3%, rgba(145, 153, 255, 0.1) 98%)",
      }}
    >
      {/* Header */}
      <div className="border border-[#bfc4ff] rounded-t-[16px] px-6 pt-12 pb-6">
        <div className="flex flex-col gap-4">
          <h3
            className="text-[30px] font-bold text-[#5864ff] leading-[30px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Core
          </h3>
          <PriceDisplay
            original={currentPricing.original}
            current={currentPricing.current}
          />
        </div>
      </div>

      {/* Who's it for */}
      <div className="border border-[#bfc4ff] border-t-0 px-6 py-6">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p
              className="text-[16px] font-bold text-[#221f38] leading-[20px]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Who&apos;s it for:
            </p>
            <div className="flex flex-col gap-2">
              {coreWhosItFor.map((item, index) => (
                <FeatureItem key={index}>{item}</FeatureItem>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full h-[56px] bg-[#110b36] text-[#f9f8ff] font-bold text-[20px] rounded-full hover:bg-[#1a1250] transition-colors"
            >
              Contact Us
            </button>
            <div className="flex flex-col gap-4 items-center">
              <button className="w-full h-[56px] border-2 border-[#110b36] text-[#110b36] font-bold text-[20px] rounded-full hover:bg-[#110b36] hover:text-[#f9f8ff] transition-colors">
                Try for FREE
              </button>
              <p className="text-[14px] text-[#5864ff] text-center">
                First 30 days free
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Includes */}
      <div className="border border-[#bfc4ff] border-t-0 rounded-b-[16px] px-6 pt-6 pb-12 flex-1">
        <div className="flex flex-col gap-2">
          <p
            className="text-[16px] font-bold text-[#221f38] leading-[20px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Includes:
          </p>
          <div className="flex flex-col gap-2">
            {coreIncludes.map((item, index) => (
              <FeatureItem key={index}>
                {item.bold ? (
                  <span className="font-semibold">{item.text}</span>
                ) : (
                  <>
                    <span>{item.text}</span>
                    <span className="font-semibold">{item.boldPart}</span>
                  </>
                )}
              </FeatureItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdvancedCard({
  currentPricing,
}: {
  currentPricing: { original: number; current: number };
}) {
  return (
    <div
      className="flex-1 flex flex-col rounded-[16px] pb-px"
      style={{
        backgroundImage:
          "linear-gradient(173deg, rgba(172, 224, 243, 0.1) 20%, rgba(63, 77, 255, 0.3) 103%)",
      }}
    >
      {/* Header */}
      <div className="border border-[#bfc4ff] rounded-t-[16px] px-6 pt-12 pb-6">
        <div className="flex flex-col gap-4">
          <h3
            className="text-[30px] font-bold text-[#5864ff] leading-[30px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Advanced
          </h3>
          <PriceDisplay
            original={currentPricing.original}
            current={currentPricing.current}
          />
        </div>
      </div>

      {/* Who's it for */}
      <div className="border border-[#bfc4ff] border-t-0 px-6 py-6">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p
              className="text-[16px] font-bold text-[#221f38] leading-[20px]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Who&apos;s it for
            </p>
            <div className="flex flex-col gap-2">
              {advancedWhosItFor.map((item, index) => (
                <FeatureItem key={index}>{item}</FeatureItem>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full h-[56px] bg-[#110b36] text-[#f9f8ff] font-bold text-[20px] rounded-full hover:bg-[#1a1250] transition-colors"
            >
              Contact Us
            </button>
            <div className="flex flex-col gap-4 items-center">
              <button className="w-full h-[56px] border-2 border-[#110b36] text-[#110b36] font-bold text-[20px] rounded-full hover:bg-[#110b36] hover:text-[#f9f8ff] transition-colors">
                Try for FREE
              </button>
              <p className="text-[14px] text-[#5864ff] text-center">
                First 30 days free
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Includes */}
      <div className="border border-[#bfc4ff] border-t-0 rounded-b-[16px] px-6 pt-6 pb-12 flex-1">
        <div className="flex flex-col gap-2">
          <p
            className="text-[16px] font-bold text-[#221f38] leading-[20px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Includes:
          </p>
          <div className="flex flex-col gap-2">
            {advancedIncludes.map((item, index) => (
              <FeatureItem key={index}>
                {item.bold ? (
                  <span className="font-semibold">{item.text}</span>
                ) : (
                  <>
                    <span className="font-semibold">{item.boldPart}</span>
                    <span>{item.text}</span>
                  </>
                )}
              </FeatureItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Plans() {
  const [selectedTierIndex, setSelectedTierIndex] = useState(2); // Default to 250K
  const selectedTier = sessionTiers[selectedTierIndex];
  const currentPricing = pricing[selectedTier.value];
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Calculate slider progress percentage
  const progressPercent = (selectedTierIndex / (sessionTiers.length - 1)) * 100;

  // Handle slider drag/swipe
  const updateSliderFromPosition = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, x / rect.width));
      const newIndex = Math.round(percentage * (sessionTiers.length - 1));
      setSelectedTierIndex(newIndex);
    },
    []
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updateSliderFromPosition(e.clientX);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging.current) {
        updateSliderFromPosition(e.clientX);
      }
    },
    [updateSliderFromPosition]
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    updateSliderFromPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) {
      updateSliderFromPosition(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  // Auto-advance slider every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTierIndex((prev) => (prev + 1) % sessionTiers.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#f9f8ff]">
      {/* Header + Slider Container with gradient background */}
      <div className="relative">
        {/* Mobile background gradient */}
        <div
          className="absolute inset-0 xl:hidden"
          style={{
            backgroundImage: "url('/plans/mobile-gradient.png')",
            backgroundSize: "100% 100%",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Desktop background gradient */}
        <div
          className="absolute inset-0 hidden xl:block"
          style={{
            backgroundImage: "url('/plans/gradient.png')",
            backgroundSize: "100% 100%",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="relative px-4 xl:px-[204px] pt-[200px]">
          <div className="max-w-[1032px] mx-auto flex flex-col items-center">
            {/* Header - centered */}
            <div className="flex flex-col gap-2 text-center mb-[48px]">
              <h2
                className="text-[28px] xl:text-[44px] font-bold text-[#110b36] leading-[36px] xl:leading-[52px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Plans to <em className="font-normal italic">match</em> your
                store targets
              </h2>
              <p
                className="text-[16px] xl:text-[18px] text-[#110b36] leading-normal"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Choose a plan to start growing your profits
              </p>
            </div>

            {/* Slider Section */}
            <div className="flex flex-col gap-2 w-full">
              <h3
                className="text-[20px] xl:text-[24px] font-bold text-[#110b36] leading-[30px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Monthly Store Sessions
              </h3>
              <p
                className="text-[14px] xl:text-[16px] text-[#110b36] leading-normal"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Slide to adjust session volume
              </p>

              {/* Slider */}
              <div className="relative w-full">
                {/* Slider track - now interactive */}
                <div
                  ref={sliderRef}
                  className="relative flex items-center w-full h-[40px] cursor-pointer select-none px-[40px]"
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Track background - spans full width */}
                  <div className="absolute left-0 right-0 h-[14px] flex items-center">
                    {/* Full track background */}
                    <div className="absolute inset-0 bg-[#e1daff] rounded-[100px]" />
                    {/* Filled portion - aligned with dots */}
                    <div
                      className="absolute left-0 top-0 bottom-0 bg-[#110b36] rounded-[100px] transition-all duration-150"
                      style={{ width: `calc(40px + ${progressPercent}% - ${progressPercent * 0.8}px)` }}
                    />
                  </div>

                  {/* Dots and labels together */}
                  <div className="relative w-full flex items-center justify-between z-[3]">
                    {sessionTiers.map((tier, index) => (
                      <div key={tier.value} className="relative flex flex-col items-center">
                        {/* Dot */}
                        <div
                          className={`w-[8px] h-[8px] rounded-full transition-colors pointer-events-none ${
                            index <= selectedTierIndex
                              ? "bg-white"
                              : "bg-[#110b36]"
                          }`}
                        />
                        {/* Label - absolutely positioned below dot */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedTierIndex(index);
                          }}
                          className={`absolute top-[24px] left-1/2 -translate-x-1/2 font-bold text-[#110b36] text-center transition-all py-1 px-2 rounded-lg hover:bg-[#e1daff]/50 whitespace-nowrap ${
                            index === selectedTierIndex
                              ? "text-[20px] xl:text-[24px] leading-[24px]"
                              : "text-[14px] xl:text-[16px] leading-[22px]"
                          }`}
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {tier.sessions}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Thumb - positioned exactly on top of current dot */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[30px] h-[30px] bg-[#110b36] rounded-full border-4 border-white shadow-lg z-[4] transition-all duration-150 pointer-events-none"
                    style={{ left: `calc(40px + ${progressPercent}% - ${progressPercent * 0.8}px)` }}
                  />
                </div>

                {/* Spacer for labels */}
                <div className="h-[40px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards - outside gradient container */}
      <div className="relative px-4 xl:px-[204px] pt-[24px] pb-[48px]">
        <div className="max-w-[1032px] mx-auto flex justify-center">
          <div className="w-full max-w-[856px]">
            {/* Mobile: Advanced first, then Core */}
            <div className="flex flex-col xl:hidden gap-6">
              <AdvancedCard currentPricing={currentPricing.advanced} />
              <CoreCard currentPricing={currentPricing.core} />
            </div>

            {/* Desktop: Core first, then Advanced */}
            <div className="hidden xl:flex gap-6">
              <CoreCard currentPricing={currentPricing.core} />
              <AdvancedCard currentPricing={currentPricing.advanced} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
