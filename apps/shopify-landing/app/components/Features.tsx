// Feature data
const features = [
  {
    title: "Run several experiments in exclusion",
    description:
      "Test several things at once and ensure users see only what you want them to see. Test precisely what you want and get answers on what works and what doesn't. No need for big change mashups.",
    image: "/features/experiments.png",
    imageAlt: "Chart showing multiple experiment variations over time",
  },
  {
    title: "Seamless Split URL testing",
    description:
      "Redirect visitors from original page to your variation in a lightning-quick manner. Easily test one page versus another and find out which one brings the most conversions.",
    image: "/features/split_url.png",
    imageAlt: "Split URL testing showing page A and page B comparison",
  },
  {
    title: "Multivariate testing",
    description:
      "A/B/C tests? You're covered. A/B/C/D? We have that too. No need to limit yourself - easily compare the performance of multiple test variants.",
    image: "/features/multivariate.png",
    imageAlt: "Multivariate testing interface with variation parameters",
  },
  {
    title: "Want to test only for a part of your traffic? Covered.",
    description:
      "Easily adjust the amount of traffic you want to allocate to the test. You don't have to go all in - start with smaller percentage of your store, measure the results and ramp it up!",
    image: "/features/traffic_split.png",
    imageAlt: "Traffic allocation slider interface",
  },
];

export function Features() {
  return (
    <section className="relative bg-white py-12 md:pt-[48px] md:pb-[80px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[204px]">
        {/* Section Title */}
        <h2 className="text-[28px] md:text-[44px] font-semibold text-[#110b36] text-center leading-[1.2] md:leading-[52px] mb-10 md:mb-[40px]">
          Achieve full AB Testing{" "}
          <em className="font-normal" style={{ fontStyle: "italic" }}>
            potential
          </em>{" "}
          of your
          <br className="hidden md:block" /> Shopify store
        </h2>

        {/* Features Grid */}
        <div className="flex flex-col gap-12 md:gap-[80px]">
          {/* Feature 1: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-[24px] items-center">
            <div className="w-full md:w-[504px] md:h-[290px] shrink-0 order-2 md:order-1">
              <img
                src={features[0].image}
                alt={features[0].imageAlt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1 order-1 md:order-2">
              <h3
                className="text-[22px] md:text-[28px] leading-[30px] md:leading-[36px] text-[#110b36]"
                style={{ fontFamily: "var(--font-lexend)", fontWeight: 400 }}
              >
                {features[0].title}
              </h3>
              <p
                className="text-[#110b36] text-[16px] leading-[24px]"
                style={{ fontFamily: "var(--font-lexend)", fontWeight: 300 }}
              >
                {features[0].description}
              </p>
            </div>
          </div>

          {/* Feature 2: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-[24px] items-center">
            <div className="flex flex-col gap-4 flex-1 order-1">
              <h3
                className="text-[22px] md:text-[28px] leading-[30px] md:leading-[36px] text-[#110b36]"
                style={{ fontFamily: "var(--font-lexend)", fontWeight: 400 }}
              >
                {features[1].title}
              </h3>
              <p
                className="text-[#110b36] text-[16px] leading-[24px]"
                style={{ fontFamily: "var(--font-lexend)", fontWeight: 300 }}
              >
                {features[1].description}
              </p>
            </div>
            <div className="w-full md:w-[504px] md:h-[290px] shrink-0 order-2">
              <img
                src={features[1].image}
                alt={features[1].imageAlt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Feature 3: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-[24px] items-center">
            <div className="w-full md:w-[504px] md:h-[290px] shrink-0 order-2 md:order-1">
              <img
                src={features[2].image}
                alt={features[2].imageAlt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1 order-1 md:order-2">
              <h3
                className="text-[22px] md:text-[28px] leading-[30px] md:leading-[36px] text-[#110b36]"
                style={{ fontFamily: "var(--font-lexend)", fontWeight: 400 }}
              >
                {features[2].title}
              </h3>
              <p
                className="text-[#110b36] text-[16px] leading-[24px]"
                style={{ fontFamily: "var(--font-lexend)", fontWeight: 300 }}
              >
                {features[2].description}
              </p>
            </div>
          </div>

          {/* Feature 4: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-[24px] items-center">
            <div className="flex flex-col gap-4 flex-1 order-1">
              <h3
                className="text-[22px] md:text-[28px] leading-[30px] md:leading-[36px] text-[#110b36]"
                style={{ fontFamily: "var(--font-lexend)", fontWeight: 400 }}
              >
                {features[3].title}
              </h3>
              <p
                className="text-[#110b36] text-[16px] leading-[24px]"
                style={{ fontFamily: "var(--font-lexend)", fontWeight: 300 }}
              >
                {features[3].description}
              </p>
            </div>
            <div className="w-full md:w-[504px] md:h-[290px] shrink-0 order-2">
              <img
                src={features[3].image}
                alt={features[3].imageAlt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
