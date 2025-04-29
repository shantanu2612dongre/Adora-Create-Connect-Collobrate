import { Check, Users, Briefcase, Book } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Find Creators by Niche",
    description: "Easily discover talented creators in specific industries and niches that match your project needs.",
    image: "/gradient1.png", // You can replace with your images
  },
  {
    icon: Briefcase,
    title: "Collaborate with Influencers",
    description: "Connect and work with top influencers to boost your brand presence and reach new audiences.",
    image: "/images/collaborate.jpg",
  },
  {
    icon: Check,
    title: "Verified Profiles",
    description: "All creators are verified to ensure quality partnerships and professional collaborations.",
    image: "/images/verified.jpg",
  },
  {
    icon: Book,
    title: "Easy Business Connections",
    description: "Direct messaging and proposal system makes business relationships simple and effective.",
    image: "/images/connections.jpg",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-20 overflow-hidden">
      
      {/* Full Background Image */}
      <img
        src="/space-nebula-art-4k-wb-3840x2400.jpg" 
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

      {/* Main Content */}
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Platform Features
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform offers everything you need to connect, collaborate, and create amazing content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm group hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {/* Blurred Image Behind */}
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:opacity-50 blur-sm group-hover:blur-md transition-all duration-500"
              />

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:from-purple-600 group-hover:to-blue-500 transition-all duration-500">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;