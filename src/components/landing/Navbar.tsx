import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[100%] max-w-6xl rounded-full transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-lg shadow-lg"
          : "bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-3">
  {/* Logo */}
  <a href="/" className="flex items-center text-2xl font-extrabold tracking-wide text-white">
    ADORA
  </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#our-story">Our Story</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#faq">Support</NavLink>
          <Button className="ml-6 bg-white text-black font-semibold px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition">
            Discover
          </Button>
        </div>

        {/* Mobile Menu Button */}
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
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg rounded-b-2xl mt-2">
          <div className="flex flex-col items-center space-y-6 py-6 border-t border-white/10">
            <MobileNavLink href="#our-story" onClick={() => setMobileMenuOpen(false)}>Our Story</MobileNavLink>
            <MobileNavLink href="#use-cases" onClick={() => setMobileMenuOpen(false)}>Use Cases</MobileNavLink>
            <MobileNavLink href="#features" onClick={() => setMobileMenuOpen(false)}>Features</MobileNavLink>
            <MobileNavLink href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</MobileNavLink>
            <MobileNavLink href="#support" onClick={() => setMobileMenuOpen(false)}>Support</MobileNavLink>

            {/* CTA in Mobile */}
            <Button className="w-4/5 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition">
              Try for free
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
    className="text-white hover:opacity-80 transition-opacity text-base font-semibold"
  >
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-white text-xl font-semibold hover:opacity-80"
  >
    {children}
  </a>
);
export default Navbar;