import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import { Button } from "@/components/ui/button";  // Assuming you have a custom Button component
import { ArrowRight } from "lucide-react";  // Arrow icon for button

const ServicesSection = () => {
  const navigate = useNavigate();  // Replace useRouter with useNavigate

  // Handler for login as creator
  const handleLoginAsCreator = () => {
    navigate("/login?role=creator");  // Redirect to login page for creator
  };

  // Handler for login as brand
  const handleLoginAsBrand = () => {
    navigate("/login?role=brand");  // Redirect to login page for brand
  };

  return (
    <section id="services" className="relative min-h-screen w-full bg-black">
      <div className="absolute inset-0 grid grid-cols-2">
        {/* Left Section: Creator */}
        <div className="relative group overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/creator.png)' }}>
          {/* Hover gradient overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm">
            <div className="h-full flex flex-col justify-end p-12 pb-20">
              <h2 className="text-4xl font-bold text-white mb-4">ADORA Creators</h2>
              <p className="text-white/80 text-lg mb-8">Connect with top brands and build your brand</p>
              <Button
                onClick={handleLoginAsCreator}  // Trigger login as creator
                className="ml-6 bg-white text-black font-semibold px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition"
              >
                Login as Creator
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Section: Brand */}
        <div className="relative group overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/brand1.png)' }}>
          {/* Hover gradient overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/90 to-transparent backdrop-blur-sm">
            <div className="h-full flex flex-col justify-end p-12 pb-20">
              <h2 className="text-4xl font-bold text-white mb-4">ADORA Brands</h2>
              <p className="text-white/80 text-lg mb-8">Connect with top creators for your brand</p>
              <Button
                onClick={handleLoginAsBrand}  // Trigger login as brand
                className="ml-6 bg-white text-black font-semibold px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition"
              >
                Login as Brand
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;