
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-black/10 backdrop-blur-md"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            CreatorHub
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
          </div>

          <div className="hidden md:block">
            <Button 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Discover
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="flex flex-col items-center space-y-4 py-6 border-t border-white/10">
            <MobileNavLink href="#home" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#features" onClick={() => setMobileMenuOpen(false)}>Features</MobileNavLink>
            <MobileNavLink href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</MobileNavLink>
            <Button 
              className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-4/5"
            >
              Discover
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-300 hover:text-white transition-colors duration-200 text-lg w-full text-center py-2"
  >
    {children}
  </a>
);

export default Navbar;
