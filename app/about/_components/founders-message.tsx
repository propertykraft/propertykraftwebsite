import { MessageSquare } from "lucide-react";

export const FoundersMessage = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-8 justify-center">
            <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Founder's Message</h2>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">OO</span>
              </div>

              <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed italic">
                "At Property Kraft, we understand that well-managed environments
                create better communities. Our commitment is to deliver
                professional, consistent, and people-focused property management
                that adds value to every stakeholder."
              </blockquote>

              <div className="space-y-2">
                <div className="text-xl font-semibold">Olatunji Oginni</div>
                <div className="text-orange-200">Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
