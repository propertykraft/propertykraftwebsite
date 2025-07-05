import Image from "next/image";
import { boardMembers } from "./data";

export const BoardOfDirectors = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Advisory Board</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-center">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 max-w-80 mx-auto flex flex-col p-0 transition-all duration-300 hover:shadow-lg"
            >
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
              <div className="flex-1 flex flex-col items-start px-4 py-4">
                <h3 className="text-lg font-bold text-orange-500 mb-2 leading-tight">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm leading-snug">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
