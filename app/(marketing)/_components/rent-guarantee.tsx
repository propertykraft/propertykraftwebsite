import Link from "next/link";
import Image from "next/image";

const benefits = [
  "Tenant onboarding, KYC verification, and offer letters",
  "Rent reminders, payment tracking, and financial records",
  "Tenancy renewals and end-of-tenancy coordination",
  "Maintenance requests and vendor communication",
];

export function LiztPreview() {
  return (
    <section className="w-full" style={{ backgroundColor: "#F9F7F4" }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 md:py-20">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left: Text Content */}
          <div className="flex-1 min-w-0 md:min-w-[340px]">
            <div className="flex flex-col gap-6 items-start w-full">
              <h2 className="font-semibold leading-[1.16] text-[#141513] text-[32px] md:text-[39px]">
                Meet Lizt — A Smarter Way to Manage Properties.
              </h2>
              <p className="font-normal leading-[1.6] opacity-80 text-[#3c403a] text-[16px] max-w-[90%]">
                Lizt is one of our products designed to make managing tenants
                and properties simple. It works through WhatsApp, so you can
                oversee your property from your phone — just like sending a
                message.
              </p>
            </div>

            <div className="h-8" />

            {/* Benefit list */}
            <div className="flex flex-col gap-2 items-start w-full">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-2.5 items-start w-full">
                  <div className="flex items-center pt-2.5 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-pk-orange" />
                  </div>
                  <p className="flex-1 font-normal leading-[1.6] text-[#282b27] text-[14px]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-9" />

            <p className="font-normal leading-[1.6] opacity-80 text-[#3c403a] text-[16px] max-w-[90%]">
              There&apos;s also a simple dashboard that keeps all your records
              organized and easy to understand — without complicated software.
            </p>

            <div className="h-8" />

            <Link
              href="https://lizt.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-pk-orange hover:bg-pk-orange-hover transition-colors rounded-[10px] text-white font-bold text-[16px]"
            >
              Explore Lizt
            </Link>
          </div>

          {/* Right: Image area */}
          <div className="w-full md:flex-1 md:min-w-[400px] flex flex-col items-center md:items-end justify-center">
            <div className="relative rounded-[32px] p-5 border border-white w-full md:w-auto">
              <div className="relative h-[280px] md:h-[338px] w-full md:w-[443px] overflow-hidden rounded-[20px]">
                {/* placeholder: lizt-preview.jpg */}
                <Image
                  src="/lizt-preview.jpg"
                  alt="Happy landlord using phone"
                  fill
                  className="object-cover"
                />
              </div>

              {/* WhatsApp message bubble overlay */}
              <div className="absolute bottom-0 left-0 bg-white rounded-[26px] p-3.5 border border-white shadow-lg">
                <div className="w-[310px]">
                  <div className="flex items-start gap-1.5">
                    <div className="w-7 h-7 shrink-0 relative">
                      {/* placeholder: lizt-icon.png */}
                      <Image
                        src="/lizt-icon.png"
                        alt="Lizt logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="bg-[#DCF8C6] rounded-lg px-2.5 py-2 shadow-sm">
                        <p className="font-normal leading-[1.5] text-black text-[14px]">
                          Hi Mr. Ade 👋
                          <br />
                          This is a reminder that your rent is due on June 30.
                          <br />
                          You can complete payment using the link sent to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
