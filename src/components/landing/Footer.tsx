import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative min-h-screen w-full text-white py-16 flex flex-col justify-center">
    <div 
      className="absolute inset-0 w-full h-full opacity-50" 
      style={{ 
        backgroundImage: 'url(/gradient1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    ></div>

      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full">
        <div className="text-6xl font-bold text-white/90 mb-20">
         ADORA
        </div>

        {/* Bottom section */}
        <div className="absolute bottom-8 w-full left-0 px-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white/60">
            <div className="text-sm">
              © 2025 CreatorHub Media Inc.
            </div>
            <div className="text-sm">
              <a href="mailto:contact@creatorhub.com" className="hover:text-white transition-colors">
                contact@creatorhub.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;