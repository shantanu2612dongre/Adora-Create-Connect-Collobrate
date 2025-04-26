
import { Check, Users, Briefcase, Book } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Find Creators by Niche",
    description: "Easily discover talented creators in specific industries and niches that match your project needs."
  },
  {
    icon: Briefcase,
    title: "Collaborate with Influencers",
    description: "Connect and work with top influencers to boost your brand presence and reach new audiences."
  },
  {
    icon: Check,
    title: "Verified Profiles",
    description: "All creators are verified to ensure quality partnerships and professional collaborations."
  },
  {
    icon: Book,
    title: "Easy Business Connections",
    description: "Direct messaging and proposal system makes business relationships simple and effective."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative bg-gradient-to-br from-black to-purple-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Platform Features
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform offers everything you need to connect, collaborate, and create amazing content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl group"
            >
              <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6 mx-auto group-hover:from-purple-600 group-hover:to-blue-500 transition-all duration-500">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
