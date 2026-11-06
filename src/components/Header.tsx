import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "./ui/button";
import { createWhatsAppLink, ORDERING_AVAILABLE } from "@/lib/order";

const navItems = [
  { label: "Menu", href: "#menu" },
  { label: "How It Works", href: "#delivery" },
  { label: "Story", href: "#story" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">S</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">
            Sphe's <span className="text-primary">Vetkoeks</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
        <Button
          variant="whatsapp"
          size="sm"
          asChild
        >
          <a
            aria-label={ORDERING_AVAILABLE ? "Order on WhatsApp" : "Ordering information"}
            href={createWhatsAppLink()}
            target={ORDERING_AVAILABLE ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">{ORDERING_AVAILABLE ? "Order Now" : "Ordering info"}</span>
          </a>
        </Button>
        <button
          ref={menuButton}
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen} className="md:hidden border-t border-border bg-background px-4 py-3">
        <div className="container mx-auto flex flex-col">
          {navItems.map(item => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 font-medium text-foreground hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
