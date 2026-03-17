export const Hero = () => {
  return (
    <section className="bg-navy relative w-full">
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 1200px 1100px at 30% 15%, rgba(255, 255, 255, 0.07) 0%, rgba(15, 23, 42, 0) 70%)",
        }}
      />
      <div className="relative z-[2] flex flex-col items-center pt-[100px] md:pt-[180px] pb-[60px] md:pb-[120px] px-4 md:px-8">
        <div className="max-w-[800px] text-center flex flex-col items-center gap-6">
          <h1 className="font-semibold text-white text-[32px] md:text-[56px] lg:text-[68px] leading-[1.1]">
            Legal Information
          </h1>
          <p className="font-normal text-[#e2e8f0] text-[15px] md:text-[22px] leading-[1.6] max-w-[700px]">
            Your privacy and trust are important to us. Please review our
            policies and terms of service.
          </p>
        </div>
      </div>
    </section>
  );
};
