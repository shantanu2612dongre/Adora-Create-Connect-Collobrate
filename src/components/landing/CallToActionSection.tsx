import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ backgroundImage: 'url(/faqbackground.png)' }}/>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-medium text-white text-center tracking-tight">
            Got more questions?
          </h2>
          
          <div className="relative">
            <Input 
              type="text"
              placeholder="Go ahead and ask them here."
              className="w-full bg-white/95 border-0 h-14 pl-6 pr-12 rounded-full text-base placeholder:text-gray-500"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-black text-white p-2.5 rounded-full hover:bg-gray-800 transition-colors">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;