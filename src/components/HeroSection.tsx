
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-purple-900 opacity-90" />
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Connect with Amazing{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Content Creators
            </span>
          </h1>
          
          <p className="text-xl text-gray-300">
            Discover talented creators, collaborate on projects, and build your network in the creative community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="secondary"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
