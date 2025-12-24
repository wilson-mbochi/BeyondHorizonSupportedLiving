import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, HeartHandshake } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Stories" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={cn("font-display font-bold text-lg leading-tight", scrolled ? "text-primary" : "text-primary")}>
                Beyond Horizon
              </span>
              <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Supported Living</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer",
                    location === link.href
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="ml-4 rounded-full px-6 shadow-md hover:shadow-lg transition-all">
                Get Support
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-accent/50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  <span
                    className={cn(
                      "block px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer",
                      location === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-accent/50"
                    )}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full rounded-xl py-6 text-lg shadow-md">
                    Get Support Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
