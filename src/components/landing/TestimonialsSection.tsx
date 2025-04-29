import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const creators = [
  {
    name: "Ella Emhoff",
    location: "Brooklyn, NY",
    role: "Artist and Fashion Designer",
    image: "/lovable-uploads/cad24159-5774-470e-95de-94368582a299.png"
  },
  {
    name: "Katie Chiou",
    location: "New York, USA",
    role: "Platform at FirstMark Capital",
    image: "https://i.pravatar.cc/300?img=28"
  },
  {
    name: "Meher Goel",
    location: "New York, USA",
    role: "Senior Product Designer Etsy",
    image: "https://i.pravatar.cc/300?img=47"
  },
  {
    name: "Cathy Dinas",
    location: "Los Angeles, USA",
    role: "Director of Operations at Backstage Capital",
    image: "https://i.pravatar.cc/300?img=45"
  }
];

const brands = [
  {
    name: "Michael Chen",
    location: "San Francisco, USA",
    role: "Marketing Director at TechCorp",
    image: "https://i.pravatar.cc/300?img=12"
  },
  {
    name: "Sarah Williams",
    location: "London, UK",
    role: "Brand Manager at GlobalStyle",
    image: "https://i.pravatar.cc/300?img=24"
  },
  {
    name: "David Park",
    location: "Toronto, Canada",
    role: "Creative Director at DesignHub",
    image: "https://i.pravatar.cc/300?img=32"
  },
  {
    name: "Emma Thompson",
    location: "Sydney, Australia",
    role: "Head of Partnerships at InnovateCo",
    image: "https://i.pravatar.cc/300?img=16"
  }
];
const TestimonialsSection = () => {
  return (
    <section className="py-20 relative bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
              Our Community
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join creators and brands already making waves
          </p>
        </div>

        {/* Creators Row */}
        <div className="mb-16">
          <h3 className="text-xl font-medium text-gray-400 mb-6 pl-4">Featured Creators</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {creators.map((creator, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl overflow-hidden aspect-[3/4] border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Image with bottom blur */}
                <div className="relative h-full w-full">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Blurred bottom half */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black/30 backdrop-blur-md"></div>
                  
                  {/* Gradient fade (optional - enhances text readability) */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                
                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-white font-medium text-xl">{creator.name}</h3>
                  <p className="text-gray-300 text-sm mt-1">{creator.location}</p>
                  <p className="text-gray-400 text-sm mt-2">{creator.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brands Row - Same structure as creators */}
        <div>
          <h3 className="text-xl font-medium text-gray-400 mb-6 pl-4">Featured Brands</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl overflow-hidden aspect-[3/4] border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="relative h-full w-full">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black/30 backdrop-blur-md"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-white font-medium text-xl">{brand.name}</h3>
                  <p className="text-gray-300 text-sm mt-1">{brand.location}</p>
                  <p className="text-gray-400 text-sm mt-2">{brand.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default TestimonialsSection;