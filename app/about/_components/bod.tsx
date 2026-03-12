import Image from "next/image";

import { boardMembers } from "./data";

export function AdvisoryBoard() {
  return (
    <section className="relative w-full bg-white pt-[60px] pb-[120px]">
      <div className="max-w-[1200px] w-full mx-auto px-5 md:px-10">
        <h3 className="font-serif text-navy text-[28px] md:text-[32px] leading-[1.3] mb-10">
          Advisory Board
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {boardMembers.map((member) => (
            <div key={member.name} className="flex flex-col">
              <div className="relative w-full aspect-[3/4] mb-6">
                <Image
                  src={member.imgUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 right-3 w-7 h-7 bg-white flex items-center justify-center">
                  <span className="text-navy text-[11px] font-semibold">
                    in
                  </span>
                </div>
              </div>

              <h4 className="font-semibold text-navy text-[20px] md:text-[22px] leading-[1.3] mb-1.5">
                {member.name}
              </h4>
              <p className="font-normal text-navy/70 text-[15px] leading-[1.7]">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
