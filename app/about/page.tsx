import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import {
  Users,
  Target,
  MessageSquare,
  Award,
  TrendingUp,
  Shield,
} from "lucide-react";

const boardMembers = [
  {
    name: "Olatunji Oginni",
    role: "Founder and Chief Executive Officer",
    bio: "Olatunji provides strategic leadership for Property Kraft, drawing from extensive experience in property operations, team development, and multi-site facility management.",
  },
  {
    name: "Sarah Johnson",
    role: "Operations Director",
    bio: "Sarah oversees daily operations and ensures seamless service delivery across all managed properties with over 10 years of industry experience.",
  },
  {
    name: "Michael Chen",
    role: "Finance Director",
    bio: "Michael manages financial operations and strategic planning, bringing expertise in property investment and financial management.",
  },
];

const achievements = [
  {
    icon: TrendingUp,
    number: "500+",
    label: "Properties Managed",
    description: "Successfully managing diverse property portfolios",
  },
  {
    icon: Users,
    number: "98%",
    label: "Client Satisfaction",
    description: "Consistently exceeding client expectations",
  },
  {
    icon: Shield,
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock assistance for all clients",
  },
  {
    icon: Award,
    number: "5+",
    label: "Years Experience",
    description: "Proven track record in property management",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-300/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium animate-bounce-subtle">
                ✨ About Property Kraft
              </div>
              <h1 className="text-5xl font-bold text-gray-900 animate-fade-in-up">
                About Property Kraft
              </h1>
              <p
                className="text-xl text-gray-600 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Property Kraft is a professional property and facility
                management company providing tailored solutions across multiple
                residential and commercial sites. Established in 2025, our
                mission is to manage every property with care, professionalism,
                and operational excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-orange-500 mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be Africa's benchmark for transparent, responsive, and
                  high-performing property and facilities management, setting
                  new standards of excellence in the industry.
                </p>
              </div>

              <div className="space-y-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To deliver trusted, end-to-end property solutions that
                  maximize value, ensure seamless service, and provide full
                  operational transparency to all our stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Message */}
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
                    "At Property Kraft, we understand that well-managed
                    environments create better communities. Our commitment is to
                    deliver professional, consistent, and people-focused
                    property management that adds value to every stakeholder."
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

        {/* Board of Directors */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-gray-900">
                Leadership Team
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
                    <div className="text-orange-500 font-medium">
                      {member.role}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
