import { Coffee, Mail, AlertCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      {/* Disclaimer */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-4">
          <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <p>
              <strong className="text-primary-foreground/90">Aviso:</strong> Os valores apresentados são de referência. 
              Para negociações, consulte sua cooperativa ou corretora.
            </p>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
              <Coffee className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl text-primary-foreground">Café Cotação</span>
          </a>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="#precos" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Preços
            </a>
            <a href="https://w.app/erick" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Anuncie
            </a>
            <a href="mailto:erickrios0037@gmail.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Mail className="h-4 w-4" />
              Contato
            </a>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Café Cotação. Feito com ☕ no Brasil.</p>
          <p className="mt-1">Desenvolvido por Erick Silva</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
