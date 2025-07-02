import React from "react";

import { boardMembers } from "./data";

export const BoardOfDirectors = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Leadership Team</h2>
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
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <div className="text-orange-500 font-medium">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">
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
