import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-5">
      <div className="max-w-[600px] mx-auto text-center">
        <h1 className="font-semibold text-pk-orange text-[80px] md:text-[160px] leading-none mb-4">
          404
        </h1>
        <h2 className="font-semibold text-navy text-[24px] md:text-[36px] leading-[1.2] mb-4">
          Page Not Found
        </h2>
        <p className="font-normal text-pk-text-light text-[15px] md:text-[17px] leading-[1.6] mb-10 max-w-[480px] mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved or no longer exists.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <Link
            href="/"
            className="inline-block bg-pk-orange hover:bg-pk-orange-hover transition-colors text-white px-7 py-3 rounded-lg font-medium text-[15px]"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-pk-border hover:border-pk-orange/40 transition-colors text-navy px-7 py-3 rounded-lg font-medium text-[15px]"
          >
            Contact Us
          </Link>
        </div>

        <div className="border-t border-pk-border pt-8">
          <p className="font-medium text-navy text-[15px] mb-4">
            Popular Pages
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14px]">
            <Link
              href="/about"
              className="text-pk-orange hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-pk-orange hover:underline"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="text-pk-orange hover:underline"
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="text-pk-orange hover:underline"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
