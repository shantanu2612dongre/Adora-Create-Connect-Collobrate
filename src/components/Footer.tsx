
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            CreatorHub
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <FooterLink href="#about">About Us</FooterLink>
            <FooterLink href="#privacy">Privacy Policy</FooterLink>
            <FooterLink href="#terms">Terms of Service</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </div>
          
          <div className="flex gap-6 mb-8">
            <SocialIcon icon={Facebook} href="#facebook" />
            <SocialIcon icon={Twitter} href="#twitter" />
            <SocialIcon icon={Linkedin} href="#linkedin" />
            <SocialIcon icon={Instagram} href="#instagram" />
          </div>
        </div>
        
        <div className="text-center text-gray-400 text-sm">
          <p>© 2025 CreatorHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    {children}
  </a>
);

const SocialIcon = ({ 
  icon: Icon,
  href 
}: { 
  icon: React.ElementType; 
  href: string;
}) => (
  <a
    href={href}
    className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export default Footer;
