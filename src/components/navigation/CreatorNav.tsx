import { useState, useEffect } from "react";
import { Bell, MessageSquare, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  username: string;
  profileImage: string;
}

const Navbar: React.FC<NavbarProps> = ({ username, profileImage }) => {
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
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[100%] max-w-6xl rounded-full transition-all duration-300 px-4 ${
        scrolled
          ? "bg-black/40 backdrop-blur-lg shadow-lg"
          : "bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center text-2xl font-extrabold tracking-wide text-white">
    ADORA
  </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative text-white">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <MessageSquare size={20} />
          </Button>
        

          <div className="text-right mr-2">
            <p className="text-sm font-medium text-white">{username}</p>
            <p className="text-xs text-gray-300">Creator</p>
          </div>
          <div>
            <img
              src={profileImage}
              alt={username}
              className="h-8 w-8 rounded-full border-2 border-purple-400 object-cover"
            />
          </div>
        </div>

        {/* Mobile menu toggle */}
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
        <div className="md:hidden bg-black/95 backdrop-blur-lg rounded-b-2xl mt-2 px-4">
          <div className="flex flex-col items-center space-y-6 py-6 border-t border-white/10">
            <MobileNavLink href="#dashboard" onClick={() => setMobileMenuOpen(false)}>
              Dashboard
            </MobileNavLink>
            <MobileNavLink href="#campaigns" onClick={() => setMobileMenuOpen(false)}>
              Campaigns
            </MobileNavLink>
            <MobileNavLink href="#messages" onClick={() => setMobileMenuOpen(false)}>
              Messages
            </MobileNavLink>
            <MobileNavLink href="#settings" onClick={() => setMobileMenuOpen(false)}>
              Settings
            </MobileNavLink>

            {/* Mobile CTA */}
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

// Mobile nav link component
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