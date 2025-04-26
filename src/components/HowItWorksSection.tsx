
import { UserPlus, Search, MessageSquare, Handshake } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Profile",
    description: "Set up your profile with your skills, portfolio, and preferences to get discovered."
  },
  {
    icon: Search,
    title: "Browse Creators",
    description: "Explore our diverse community of talent to find the perfect match for your project."
  },
  {
    icon: MessageSquare,
    title: "Send Messages",
    description: "Reach out directly to creators or businesses to discuss opportunities and ideas."
  },
  {
    icon: Handshake,
    title: "Connect & Collaborate",
    description: "Formalize partnerships and start creating amazing content together."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 relative bg-gradient-to-br from-black to-blue-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Follow these simple steps to start connecting with amazing creators and businesses
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting line between steps */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-1/2 rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative"
                >
                  <div 
                    className="bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl flex flex-col items-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative z-10 h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6 mx-auto">
                      <step.icon className="h-8 w-8 text-white" />
                      <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold border border-white/20">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-300 text-center">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
