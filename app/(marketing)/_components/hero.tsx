import Link from "next/link";

export function Hero() {
  return (
    <>
      {/* Dark hero area */}
      <section className="relative w-full bg-navy overflow-hidden">
        {/* Atmospheric gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 1200px 1100px at 30% 15%, rgba(255, 255, 255, 0.07) 0%, rgba(15, 23, 42, 0) 70%)",
          }}
        />

        <div className="relative z-[2]">
          <HeroBanner />

          {/* Scrolling text ticker with partner section spacing */}
          <div className="flex flex-col items-center w-full">
            <div className="content-stretch flex flex-col items-center pt-[80px] md:pt-[120px] px-[16px] md:px-[32px] pb-[32px] w-full">
              <ScrollingText />
            </div>
          </div>
        </div>
      </section>

      {/* Gradient transition to white — outside the dark wrapper so it fades into white */}
      <div
        className="w-full h-[200px] md:h-[280px]"
        style={{
          background:
            "linear-gradient(to bottom, #0F172A 0%, rgba(15, 23, 42, 0.95) 20%, rgba(15, 23, 42, 0.8) 35%, rgba(15, 23, 42, 0.5) 50%, rgba(15, 23, 42, 0.25) 65%, rgba(15, 23, 42, 0.1) 80%, rgba(15, 23, 42, 0.03) 92%, rgba(255, 255, 255, 0) 100%)",
        }}
      />
    </>
  );
}

function HeroBanner() {
  return (
    <div className="relative shrink-0 w-full" data-name="Hero banner/04">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center py-[24px] md:pb-[80px] md:pt-[112px] px-[16px] md:px-[32px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="content-center flex flex-col md:flex-row flex-wrap gap-6 md:gap-[40px] items-center max-w-[1200px] relative shrink-0 w-full"
      data-name="Container"
    >
      <ContentWrapper />
      <ImageWrapper />
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="flex flex-col gap-9 items-start flex-1 md:min-w-[360px]">
      <div className="flex flex-col gap-10 items-start w-full">
        <p className="font-medium leading-[1.08] text-white text-[32px] md:text-[48px] whitespace-pre-wrap -mb-4">
          Complete Property and Facility Management You Can Rely On.
        </p>
        <div className="w-full max-w-[580px]">
          <p className="font-normal leading-[1.6] opacity-80 text-white text-[16px] md:text-[20px] whitespace-pre-wrap">
            We manage your properties, tenants, facilities, and daily operations
            with structured systems designed for clarity, accountability, and
            long-term stability.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <a
        href="https://wa.me/2348036322847?text=Hello"
        target="_blank"
        rel="noopener noreferrer"
        className="relative rounded-xl md:rounded-2xl bg-transparent hover:bg-pk-orange transition-all duration-200 cursor-pointer group"
      >
        <div className="flex items-center justify-center px-4 md:px-6 py-3 md:py-4">
          <span className="text-pk-orange group-hover:text-white font-bold text-[14px] md:text-[16px] transition-colors duration-200">
            Chat with Us
          </span>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-pk-orange border-solid inset-0 pointer-events-none rounded-xl md:rounded-2xl"
        />
      </a>
    </div>
  );
}

function ScrollingText() {
  const phrases = [
    "PROPERTY MANAGEMENT",
    "FACILITY MANAGEMENT",
    "RENT ADMINISTRATION",
    "TENANT MANAGEMENT",
    "MAINTENANCE COORDINATION",
    "ESTATE OPERATIONS",
    "PROPERTY INSPECTIONS",
    "SECURE RENT COLLECTION",
  ];

  return (
    <div className="content-stretch flex gap-[48px] items-center max-w-[1200px] overflow-hidden py-[16px] md:py-[20px] w-full">
      <div className="flex gap-[48px] md:gap-[64px] items-center animate-scroll whitespace-nowrap">
        {[0, 1].map((i) => (
          <div key={i} className="flex gap-[48px] md:gap-[64px] items-center">
            {phrases.map((phrase, index) => (
              <span
                key={index}
                className="text-[12px] md:text-[14px] font-medium leading-[1.5] tracking-[1.5px] text-white opacity-85"
              >
                {phrase}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageWrapper() {
  return (
    <div
      className="hidden md:flex content-stretch items-start justify-center md:justify-end w-full md:w-[405px] relative shrink-0 scale-90 md:scale-100"
      data-name="Image wrapper"
    >
      <ImgLibHeroIllu />
    </div>
  );
}

function Group3() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Group"
    >
      <div
        className="[grid-column:1] ml-[136px] mt-0 relative [grid-row:1] size-[120px]"
        data-name="Image item"
      >
        <div className="absolute flex inset-[-2.63%_-4.99%_-6.28%_-4.49%] items-center justify-center">
          <div className="flex-none h-[120.285px] rotate-[-5.23deg] skew-x-[0.3deg] w-[120.287px]">
            <div
              className="rounded-[32px] size-full bg-[#ffffff] animate-subtle-rotate"
              data-name="Thumbnail"
            />
          </div>
        </div>
        <div
          className="absolute inset-[0_0.09%_0_-0.09%] overflow-clip rounded-[32px]"
          data-name="Img lib/Image cover/Business"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/hero-gallery-1.jpg"
          />
        </div>
      </div>
      <div
        className="[grid-column:1] ml-[272px] mt-0 relative [grid-row:1] size-[120px]"
        data-name="Image item"
      >
        <div className="absolute flex inset-[-2.63%_-4.99%_-6.28%_-4.49%] items-center justify-center">
          <div className="flex-none h-[120.285px] rotate-[-5.23deg] skew-x-[0.3deg] w-[120.287px]">
            <div
              className="bg-white rounded-[32px] size-full animate-subtle-rotate"
              data-name="Thumbnail"
            />
          </div>
        </div>
        <div
          className="absolute inset-[0_0.09%_0_-0.09%] overflow-clip rounded-[32px]"
          data-name="Img lib/Image cover/Business"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/hero-gallery-2.jpg"
          />
        </div>
      </div>
      <div
        className="[grid-column:1] ml-[136px] mt-[136px] relative [grid-row:1] size-[120px]"
        data-name="Image item"
      >
        <div className="absolute flex inset-[-2.63%_-4.99%_-6.28%_-4.49%] items-center justify-center">
          <div className="flex-none h-[120.285px] rotate-[-5.23deg] skew-x-[0.3deg] w-[120.287px]">
            <div
              className="bg-white rounded-[32px] size-full animate-subtle-rotate"
              data-name="Thumbnail"
            />
          </div>
        </div>
        <div
          className="absolute inset-[0_0.09%_0_-0.09%] overflow-clip rounded-[32px]"
          data-name="Img lib/Image cover/Business"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/hero-gallery-3.jpg"
          />
        </div>
      </div>
      <div
        className="[grid-column:1] ml-0 mt-[136px] relative [grid-row:1] size-[120px]"
        data-name="Image item"
      >
        <div className="absolute flex inset-[15.83%_13.57%_12.18%_14.07%] items-center justify-center">
          <div className="flex-none size-[86.38px] skew-x-[0.3deg]">
            <div
              className="bg-white rounded-[24px] size-full"
              data-name="Thumbnail"
            />
          </div>
        </div>
        <div className="absolute flex inset-[4.17%_2.21%_62.39%_64.17%] items-center justify-center">
          <div className="flex-none h-[34.441px] rotate-[-10.55deg] skew-x-[0.3deg] w-[34.442px]">
            <div
              className="bg-[#ff5000] rounded-[12px] size-full"
              data-name="Thumbnail"
            />
          </div>
        </div>
      </div>
      <div
        className="[grid-column:1] ml-[272px] mt-[136px] relative [grid-row:1] size-[120px]"
        data-name="Image item"
      >
        <div className="absolute flex inset-[-2.63%_-4.99%_-6.28%_-4.49%] items-center justify-center">
          <div className="flex-none h-[120.285px] rotate-[-5.23deg] skew-x-[0.3deg] w-[120.287px]">
            <div
              className="bg-white rounded-[32px] size-full animate-subtle-rotate"
              data-name="Thumbnail"
            />
          </div>
        </div>
        <div
          className="absolute inset-[0_0.09%_0_-0.09%] overflow-clip rounded-[32px]"
          data-name="Img lib/Image cover/Business"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/hero-gallery-4.jpg"
          />
        </div>
      </div>
      <div
        className="[grid-column:1] ml-[136px] mt-[272px] relative [grid-row:1] size-[120px]"
        data-name="Image item"
      >
        <div className="absolute flex inset-[-2.63%_-4.99%_-6.28%_-4.49%] items-center justify-center">
          <div className="flex-none h-[120.285px] rotate-[-5.23deg] skew-x-[0.3deg] w-[120.287px]">
            <div
              className="bg-white rounded-[32px] size-full animate-subtle-rotate"
              data-name="Thumbnail"
            />
          </div>
        </div>
        <div
          className="absolute inset-[0_0.09%_0_-0.09%] overflow-clip rounded-[32px]"
          data-name="Img lib/Image cover/Business"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/hero-gallery-6.jpg"
          />
        </div>
      </div>
      <div
        className="[grid-column:1] ml-0 mt-[272px] relative [grid-row:1] size-[120px]"
        data-name="Image item"
      >
        <div className="absolute flex inset-[-2.63%_-4.99%_-6.28%_-4.49%] items-center justify-center">
          <div className="flex-none h-[120.285px] rotate-[-5.23deg] skew-x-[0.3deg] w-[120.287px]">
            <div
              className="bg-white rounded-[32px] size-full animate-subtle-rotate"
              data-name="Thumbnail"
            />
          </div>
        </div>
        <div
          className="absolute inset-[0_0.09%_0_-0.09%] overflow-clip rounded-[32px]"
          data-name="Img lib/Image cover/Business"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/hero-gallery-5.jpg"
          />
        </div>
      </div>
      <div
        className="[grid-column:1] ml-[272px] mt-[272px] relative [grid-row:1] size-[120px]"
        data-name="Image item"
      >
        <div className="absolute flex inset-[-2.63%_-4.99%_-6.28%_-4.49%] items-center justify-center">
          <div className="flex-none h-[120.285px] rotate-[-5.23deg] skew-x-[0.3deg] w-[120.287px]">
            <div
              className="bg-white rounded-[32px] size-full animate-subtle-rotate"
              data-name="Thumbnail"
            />
          </div>
        </div>
        <div
          className="absolute inset-[0_0.09%_0_-0.09%] overflow-clip rounded-[32px]"
          data-name="Img lib/Image cover/Business"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/hero-gallery-7.jpg"
          />
        </div>
      </div>
    </div>
  );
}

function ImgLibHeroIllu() {
  return (
    <div
      className="content-stretch flex items-end justify-end w-full md:w-[405px] md:min-w-[320px] relative shrink-0"
      data-name="Img lib/Hero illu/02"
      style={{ filter: "drop-shadow(0 8px 24px rgba(0, 0, 0, 0.2))" }}
    >
      <Group3 />
    </div>
  );
}
