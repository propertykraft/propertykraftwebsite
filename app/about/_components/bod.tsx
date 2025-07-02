import Image from "next/image";
import { boardMembers } from "./data";

export const BoardOfDirectors = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Board of Directors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The strategic leadership of Property Kraft is driven by a
            forward-thinking team dedicated to transparency, operational
            efficiency, and long-term value creation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col items-center"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-md border-4 border-orange-100 mb-4 flex items-center justify-center bg-gray-50">
                <Image
                  src={member.imgUrl}
                  alt={member.name}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  width={200}
                  height={200}
                />
              </div>
              <div className="text-center space-y-3 flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
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
