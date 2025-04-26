
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Content Creator",
    image: "https://i.pravatar.cc/100?img=1",
    quote: "CreatorHub helped me connect with brands that perfectly align with my style and values. The collaborations have been amazing!"
  },
  {
    name: "David Chen",
    role: "Tech Reviewer",
    image: "https://i.pravatar.cc/100?img=3",
    quote: "I've doubled my reach and found incredible partnership opportunities through this platform. The verification process ensures quality connections."
  },
  {
    name: "Megan Taylor",
    role: "Brand Manager at StyleCo",
    image: "https://i.pravatar.cc/100?img=5",
    quote: "Finding the right creators for our campaigns has never been easier. The platform's filtering system helps us connect with perfect matches every time."
  },
  {
    name: "James Wilson",
    role: "Travel Vlogger",
    image: "https://i.pravatar.cc/100?img=7",
    quote: "The opportunities I've found through CreatorHub have taken my content to destinations I never thought possible. Truly game-changing!"
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/100?img=9",
    quote: "As a business looking to work with creators, this platform has streamlined our outreach process and helped us find authentic voices for our brand."
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 relative bg-gradient-to-br from-black to-orange-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from creators and businesses who have found success on our platform
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10">
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full object-cover border-2 border-blue-500"
                      />
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-blue-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="italic text-gray-300">"{testimonial.quote}"</blockquote>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
