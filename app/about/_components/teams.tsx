import Image from "next/image";
import { teamMembers } from "./data";

export const TeamMembers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 max-w-[280px] mx-auto flex flex-col p-0 transition-all duration-300 hover:shadow-lg"
            >
              {member.imgUrl && (
                <div className="w-full aspect-square overflow-hidden flex items-center justify-center">
                  <Image
                    src={member.imgUrl}
                    alt={member.name}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    width={260}
                    height={260}
                  />
                </div>
              )}
              <div className="flex-1 flex flex-col items-start px-4 py-4">
                <div className="text-xs text-gray-500 tracking-widest mb-2 uppercase">
                  {member.role}
                </div>
                <h3 className="text-lg font-bold text-orange-500 mb-2 leading-tight">
                  {member.name}
                </h3>
                {member.bio && (
                  <p className="text-gray-600 text-sm leading-snug">
                    {member.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
