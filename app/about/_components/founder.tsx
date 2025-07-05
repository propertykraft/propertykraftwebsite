import Image from "next/image";
import { founder } from "./data";

export const Leadership = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 tracking-wide uppercase">
            Founder
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center bg-gray-50 p-0 gap-10 lg:gap-20">
          <div className="flex-shrink-0 w-full max-w-xs lg:max-w-sm">
            <Image
              src={founder.imgUrl}
              alt={founder.name}
              className="object-cover w-full h-auto rounded-none"
              loading="lazy"
              width={400}
              height={400}
            />
          </div>
          <div className="flex-1 text-left lg:pl-8">
            <div className="text-sm text-orange-500 tracking-widest mb-2 uppercase">
              {founder.role}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {founder.name}
            </h3>
            <p
              className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl mb-6"
              style={{ fontSize: "1rem" }}
            >
              {founder.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
