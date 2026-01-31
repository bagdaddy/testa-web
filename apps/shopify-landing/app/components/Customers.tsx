"use client";

import { useState, useRef, useEffect } from "react";

// Testimonial data - Row 1 (3 cards for mobile, 4 for desktop)
const row1Testimonials = [
  {
    id: 1,
    quote:
      "Many of our e-commerce clients are using Shopify. Having an ability to run several mutually exclusive tests at the same time was a game changer for us. We increased our testing velocity 3x.",
    name: "Kandy",
    avatar: "/customers/avatar-kandy.png",
  },
  {
    id: 2,
    quote:
      "Many of our e-commerce clients are using Shopify. Having an ability to run several mutually exclusive tests at the same time was a game changer for us. We increased our testing velocity 3x.",
    name: "Kandy",
    avatar: "/customers/avatar-kandy.png",
  },
  {
    id: 3,
    quote:
      "We have a Slack channel where they helped me onboard and do the GA4 integration within 15 minutes. Super fast and highly specialized support. Love it.",
    name: "Gajus",
    avatar: "/customers/avatar-gajus.png",
  },
  {
    id: 4,
    quote:
      "We have a Slack channel where they helped me onboard and do the GA4 integration within 15 minutes. Super fast and highly specialized support. Love it.",
    name: "John",
    avatar: "/customers/avatar-john.png",
  },
];

// Testimonial data - Row 2 (3 cards for mobile, 4 for desktop)
const row2Testimonials = [
  {
    id: 5,
    quote:
      "Many of our e-commerce clients are using Shopify. Having an ability to run several mutually exclusive tests at the same time was a game changer for us. We increased our testing velocity 3x.",
    name: "Kandy",
    avatar: "/customers/avatar-kandy.png",
  },
  {
    id: 6,
    quote:
      "We have a Slack channel where they helped me onboard and do the GA4 integration within 15 minutes. Super fast and highly specialized support. Love it.",
    name: "John",
    avatar: "/customers/avatar-john.png",
  },
  {
    id: 7,
    quote:
      "Many of our e-commerce clients are using Shopify. Having an ability to run several mutually exclusive tests at the same time was a game changer for us. We increased our testing velocity 3x.",
    name: "Trace",
    avatar: "/customers/avatar-trace.png",
  },
  {
    id: 8,
    quote:
      "We have a Slack channel where they helped me onboard and do the GA4 integration within 15 minutes. Super fast and highly specialized support. Love it.",
    name: "Thomas",
    avatar: "/customers/avatar-thomas.png",
  },
];

function QuoteIcon() {
  return (
    <img
      src="/customers/quote.svg"
      alt=""
      className="w-[22px] h-[14px] shrink-0"
    />
  );
}

function TestimonialCard({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) {
  return (
    <div
      className="flex flex-col p-4 rounded-[16px] w-[344px] xl:w-[501px] h-[237px] xl:h-[216px] shrink-0"
      style={{
        background: "linear-gradient(to bottom, #f2f6fd, #c7def9)",
      }}
    >
      <div className="flex flex-col gap-5 h-full">
        <QuoteIcon />
        <div className="flex flex-col gap-4 flex-1 justify-between">
          <p
            className="text-[#110b36] text-[16px] font-medium leading-normal"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            &ldquo;{quote}&rdquo;
          </p>
          <div className="flex gap-2 items-center">
            <div className="w-[50px] h-[50px] rounded-full border-[3px] border-white overflow-hidden shrink-0">
              <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className="text-[#110b36] text-[12px] font-medium"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Indicator widths based on active slide
const getIndicatorWidths = (activeIndex: number, totalSlides: number) => {
  const baseWidths = [98, 42, 22, 12, 8];
  const widths: number[] = [];

  for (let i = 0; i < totalSlides; i++) {
    const distance = Math.abs(i - activeIndex);
    widths.push(baseWidths[Math.min(distance, baseWidths.length - 1)]);
  }

  return widths;
};

export function Customers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalMobileSlides = 3; // 3 slides on mobile

  // Fixed slide width (card 344px + small gap 8px)
  const mobileSlideWidth = 352;

  // Track scroll position to update current slide indicator
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const newSlide = Math.round(scrollLeft / mobileSlideWidth);
      setCurrentSlide(Math.max(0, Math.min(newSlide, totalMobileSlides - 1)));
    };

    carousel.addEventListener("scroll", handleScroll, { passive: true });
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [mobileSlideWidth]);

  // Scroll to slide when indicator is clicked
  const scrollToSlide = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollTo({ left: mobileSlideWidth * index, behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#f9f8ff] pt-6 xl:pt-[80px] overflow-hidden">
      {/* Title */}
      <div className="px-4 xl:px-[204px] mb-8 xl:mb-10 max-w-[1440px] mx-auto">
        <h2
          className="text-[28px] xl:text-[44px] font-semibold text-[#110b36] leading-[36px] xl:leading-[52px] xl:text-center"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          What Our <em className="font-normal italic">Customers</em> Say
        </h2>
      </div>

      {/* Desktop: Two rows of staggered cards, centered */}
      <div className="hidden xl:flex flex-col gap-6 items-center">
        {/* Row 1 */}
        <div className="flex gap-6 justify-center">
          {row1Testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
        {/* Row 2 - offset left by ~half a card to create staggered effect */}
        <div
          className="flex gap-6 justify-center"
          style={{ transform: "translateX(-262px)" }}
        >
          {row2Testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>

      {/* Mobile: Two rows of staggered cards in a scrollable carousel */}
      <div className="xl:hidden">
        <div
          ref={carouselRef}
          className="overflow-x-auto flex px-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Each slide is a column with 2 cards stacked */}
          {[0, 1, 2].map((slideIndex) => (
            <div
              key={slideIndex}
              className="snap-start shrink-0 flex flex-col gap-4"
              style={{ scrollSnapAlign: "start", width: "352px" }}
            >
              {/* Row 1 card */}
              <TestimonialCard {...row1Testimonials[slideIndex]} />
              {/* Row 2 card - offset to the right */}
              <div style={{ marginLeft: "40px" }}>
                <TestimonialCard {...row2Testimonials[slideIndex]} />
              </div>
            </div>
          ))}
          {/* Extra partial slide for endless feel */}
          <div className="shrink-0 flex flex-col gap-4" style={{ width: "352px" }}>
            <TestimonialCard {...row1Testimonials[0]} />
            <div style={{ marginLeft: "40px" }}>
              <TestimonialCard {...row2Testimonials[0]} />
            </div>
          </div>
        </div>

        {/* Scroll indicators */}
        <div className="flex items-center justify-center gap-4 mt-6 px-4">
          {getIndicatorWidths(currentSlide, totalMobileSlides).map(
            (width, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#110b36]" : "bg-[#e1daff]"
                }`}
                style={{ width: `${width}px` }}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
