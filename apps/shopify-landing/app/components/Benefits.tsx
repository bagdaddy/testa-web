"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// Benefits list data
const benefits = [
  {
    title: "Execute seamless Split URL tests",
    description:
      "Easily compare different page versions by running smooth and reliable Split URL tests.",
    image: "/slides/1.png",
  },
  {
    title: "Be able to test HTML/CSS changes",
    description:
      "Make visual changes directly to your store without touching your theme code.",
    image: "/slides/2.png",
  },
  {
    title: "Have no limits on number of tests or goals",
    description:
      "Run as many experiments as you need with unlimited goals tracking.",
    image: "/slides/3.png",
  },
  {
    title: "Test on any traffic share you want",
    description:
      "Control exactly how much traffic goes to each variant in your tests.",
    image: "/slides/4.png",
  },
  {
    title: "Easily exclude one test from another",
    description:
      "Prevent test conflicts by excluding overlapping experiments.",
    image: "/slides/5.png",
  },
  {
    title: "Track and analyze conversions",
    description:
      "Get detailed insights into how your tests impact conversion rates.",
    image: "/slides/6.png",
  },
];

// Stats data with mobile widths (increasing as you go down)
// First card fills container, second and third progressively wider (overflow container)
const stats = [
  {
    value: "$23M",
    label: "EXPECTED REVENUE UPLIFT GENERATED",
    bgImage: "/benefits/stat-bg-1.svg",
    mobileWidthStyle: { width: "100%" }, // First card fills container
  },
  {
    value: "59",
    label: "AB TESTING TEAMS STRONGLY ADVISED",
    bgImage: "/benefits/stat-bg-2.svg",
    mobileWidthStyle: { width: "calc(100% + 16px)" }, // Second card wider
  },
  {
    value: "1100+",
    label: "A/B TESTS SUCCESSFULLY RUN",
    bgImage: "/benefits/stat-bg-3.svg",
    mobileWidthStyle: { width: "calc(100% + 32px)" }, // Third card widest
  },
];

// Dot widths based on distance from active slide (matching Figma design)
// Active = 98px, then decreasing: 42, 22, 22, 12, 8
const getIndicatorWidths = (activeIndex: number, totalSlides: number) => {
  const baseWidths = [98, 42, 22, 22, 12, 8];
  const widths: number[] = [];

  for (let i = 0; i < totalSlides; i++) {
    const distance = Math.abs(i - activeIndex);
    widths.push(baseWidths[Math.min(distance, baseWidths.length - 1)]);
  }

  return widths;
};

function BenefitItem({
  title,
  description,
  isSelected,
  progress,
}: {
  title: string;
  description: string;
  isSelected: boolean;
  progress: number; // 0-100 for this item's fill level
}) {
  return (
    <div className="flex flex-col w-full">
      {/* Title row with vertically centered indicator */}
      <div className="flex gap-4 items-center">
        {/* Vertical indicator bar with progress fill */}
        <div className="relative w-2 h-[45px] rounded-full overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-[#2f2c46]" />
          <div
            className="absolute top-0 left-0 w-full bg-[#f9f8ff] rounded-full"
            style={{ height: `${progress}%` }}
          />
        </div>
        <p className="font-bold text-[20px] text-[#f9f8ff] leading-normal">
          {title}
        </p>
      </div>
      {/* Description - grid for smooth height animation */}
      <div
        className="grid pl-6 transition-[grid-template-rows,opacity] duration-200 ease-linear"
        style={{
          gridTemplateRows: isSelected ? "1fr" : "0fr",
          opacity: isSelected ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <p className="text-[14px] text-[#f9f8ff] leading-[20px] font-normal pt-1 pb-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
  bgImage,
  mobileWidthStyle,
}: {
  value: string;
  label: string;
  bgImage: string;
  mobileWidthStyle: { width: string };
}) {
  return (
    <div
      className="relative bg-[#110b36] border border-[rgba(255,255,255,0.2)] rounded-[8px] p-4 overflow-hidden xl:!w-[328px] xl:rounded-[20px]"
      style={mobileWidthStyle}
    >
      {/* Background decorative vector */}
      <div
        className="absolute left-[-37px] top-[80px] w-[400px] h-[127px] opacity-50"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-2">
        <p className="font-bold text-[40px] text-[#f9f8ff] leading-normal">
          {value}
        </p>
        <p className="font-semibold text-[20px] text-[#e1daff] uppercase leading-normal">
          {label}
        </p>
      </div>
      {/* Blur overlay effect */}
      <div className="absolute left-[-20px] top-[-19px] w-[333px] h-[148px] border-[16px] border-[rgba(255,255,255,0.34)] rounded-lg blur-[12px] opacity-[0.27]" />
    </div>
  );
}

// Desktop: how much scroll distance maps to 100% progress
// Lower value = faster progress
const SCROLL_DISTANCE = 7500;

export function Benefits() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 100
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Calculate progress for each item (0-100)
  const getItemProgress = useCallback((index: number) => {
    const progressPerItem = 100 / benefits.length;
    const itemStart = index * progressPerItem;
    const itemEnd = (index + 1) * progressPerItem;

    if (scrollProgress <= itemStart) return 0;
    if (scrollProgress >= itemEnd) return 100;
    return ((scrollProgress - itemStart) / progressPerItem) * 100;
  }, [scrollProgress]);

  // Calculate which item is currently selected based on progress
  useEffect(() => {
    const progressPerItem = 100 / benefits.length;
    const newIndex = Math.min(
      Math.floor(scrollProgress / progressPerItem),
      benefits.length - 1
    );
    setSelectedIndex(newIndex);
  }, [scrollProgress]);

  // Desktop: track scroll position within the tall section
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.innerWidth < 1280) return;

      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const stickyOffset = 80; // matches the sticky top value

      // Progress starts when section top reaches the sticky offset point
      // and ends when we've scrolled SCROLL_DISTANCE pixels
      const scrolledIntoSection = -rect.top + stickyOffset;
      const progress = Math.max(0, Math.min(100, (scrolledIntoSection / SCROLL_DISTANCE) * 100));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track scroll position to update current slide indicator (mobile)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const slideWidth = carousel.offsetWidth;
      const newSlide = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(Math.max(0, Math.min(newSlide, benefits.length - 1)));
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to slide when indicator is clicked
  const scrollToSlide = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const slideWidth = carousel.offsetWidth;
    carousel.scrollTo({ left: slideWidth * index, behavior: "smooth" });
  };


  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f9f8ff]"
    >
      {/* ========== DESKTOP VERSION ========== */}
      <div className="hidden xl:block px-5">
        <div className="max-w-[1440px] mx-auto pt-[48px]">
          {/* Wrapper that creates the scroll distance */}
          <div
            className="relative pb-[30px]"
            style={{ height: `${SCROLL_DISTANCE + 730}px` }}
          >
            {/* Dark background - absolute positioned, rounds corners with clip */}
            <div
              className="absolute inset-0 bg-[#120c37] rounded-[20px]"
              style={{ clipPath: "inset(0 round 20px)" }}
            >
              {/* Gradient blob - top right corner */}
              <div
                className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-25"
                style={{
                  background: "radial-gradient(circle at top right, rgba(145, 153, 255, 1) 0%, transparent 60%)",
                }}
              />

              {/* Gradient blob - left side */}
              <div
                className="absolute top-[300px] left-[-150px] w-[350px] h-[350px] pointer-events-none blur-[100px]"
                style={{
                  background: "rgba(145, 153, 255, 0.2)",
                }}
              />
            </div>

            {/* Sticky content - stays in view while scrolling */}
            <div className="sticky top-[60px] px-[140px] py-[96px] z-10">
              <div className="flex flex-col gap-10">
                {/* Title */}
                <h2 className="text-[44px] font-semibold text-[#f9f8ff] text-center leading-[50px] max-w-[1032px] mx-auto">
                  With{" "}
                  <em className="font-normal" style={{ fontStyle: "italic" }}>
                    AB Testing Tool
                  </em>{" "}
                  you will
                </h2>

                {/* Two columns layout */}
                <div className="flex gap-6 items-start">
                  {/* Left: Slide image */}
                  <img
                    src={benefits[selectedIndex].image}
                    alt={benefits[selectedIndex].title}
                    className="w-[592px] h-[426px] object-contain shrink-0 rounded-[16px]"
                  />

                  {/* Right: Benefits list */}
                  <div className="flex flex-col gap-5 w-[416px]">
                    {benefits.map((benefit, index) => (
                      <BenefitItem
                        key={index}
                        title={benefit.title}
                        description={benefit.description}
                        isSelected={selectedIndex === index}
                        progress={getItemProgress(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats cards - at the bottom, overlapping the dark container slightly */}
          <div className="relative -mt-[70px] flex justify-center pb-[48px]">
            <div className="bg-white p-5 rounded-[10px]">
              <div className="flex flex-row gap-6">
                {stats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== MOBILE VERSION ========== */}
      <div className="xl:hidden pt-12 pb-[40px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative">
            {/* Mobile dark container */}
            <div
              className="relative overflow-hidden pt-[48px] pb-[80px] mb-[-40px] rounded-[24px] md:rounded-none"
              style={{
                background:
                  "linear-gradient(-30deg, rgb(18, 12, 55) 50%, rgb(60, 65, 120) 100%)",
              }}
            >
              {/* Content */}
              <div className="relative z-10 flex flex-col gap-8 px-4">
                {/* Title */}
                <h2
                  className="text-[32px] font-bold text-[#f9f8ff] leading-[40px]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  With{" "}
                  <em className="font-normal" style={{ fontStyle: "italic" }}>
                    AB Testing Tool
                  </em>{" "}
                  you will
                </h2>

                {/* Scroll carousel */}
                <div
                  ref={carouselRef}
                  className="flex overflow-x-auto snap-x snap-mandatory -mx-4"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                    scrollSnapStop: "always",
                  }}
                >
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="snap-start snap-always flex-shrink-0 flex flex-col gap-6 w-full px-4"
                    >
                      {/* Benefit text content */}
                      <div className="flex flex-col gap-4">
                        <p
                          className="text-[24px] text-[#f9f8ff] leading-[32px]"
                          style={{
                            fontFamily: "var(--font-lexend)",
                            fontWeight: 400,
                          }}
                        >
                          {benefit.title}
                        </p>
                        <p
                          className="text-[16px] text-[#f9f8ff] leading-[24px]"
                          style={{
                            fontFamily: "var(--font-lexend)",
                            fontWeight: 300,
                          }}
                        >
                          {benefit.description}
                        </p>
                      </div>

                      {/* Benefit image */}
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full rounded-[8px]"
                        style={{ aspectRatio: "344 / 247" }}
                      />
                    </div>
                  ))}
                </div>

                {/* Scroll indicator dots */}
                <div className="flex items-center justify-center w-full">
                  <div className="flex items-center justify-center gap-4 max-w-[420px]">
                    {getIndicatorWidths(currentSlide, benefits.length).map((width, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSlide(index)}
                        className={`h-2 rounded-[100px] transition-all duration-300 flex-shrink-0 ${
                          currentSlide === index
                            ? "bg-white"
                            : "bg-[rgba(255,255,255,0.2)]"
                        }`}
                        style={{ width: `${width}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Stats cards */}
            <div className="relative flex justify-center">
              <div className="bg-white p-4 rounded-[16px] w-[328px] mb-[-40px]">
                <div className="flex flex-col items-center gap-4">
                  {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
