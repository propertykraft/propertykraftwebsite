import { Target, Users } from "lucide-react";

export const VisionAndMissionPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be Africa's benchmark for transparent, responsive, and
              high-performing property and facilities management, setting new
              standards of excellence in the industry.
            </p>
          </div>

          <div className="space-y-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To deliver trusted, end-to-end property solutions that maximize
              value, ensure seamless service, and provide full operational
              transparency to all our stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
