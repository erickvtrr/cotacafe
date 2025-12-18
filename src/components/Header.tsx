import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero transition-transform duration-300 group-hover:scale-105">
            <Coffee className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg leading-tight text-foreground">Café Cotação</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#precos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Preços
          </a>
          <a href="#anuncie" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Anuncie
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="https://w.app/erick"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:bg-accent/90 transition-colors"
          >
            Anunciar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "max-h-40 border-t border-border/50" : "max-h-0"
      )}>
        <nav className="container py-4 flex flex-col gap-2">
          <a href="#precos" className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
            Preços
          </a>
          <a href="#anuncie" className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
            Anuncie
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
