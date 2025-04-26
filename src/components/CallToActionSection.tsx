
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90" />
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Connect with Amazing Creators?
          </h2>
          
          <p className="text-xl text-gray-300">
            Join our community today and start collaborating on exciting projects
          </p>

          <Button 
            size="lg"
            className="bg-gradient-to-r from-orange-400 to-red-600 hover:from-orange-500 hover:to-red-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105 px-8 py-6 text-lg"
          >
            Sign Up Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
