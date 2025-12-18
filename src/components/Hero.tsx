import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Coffee bean pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="coffee-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#coffee-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Dados atualizados em tempo real
            </span>
          </div>

          {/* Main headline */}
          <h1 className="mb-6 font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight animate-fade-in [animation-delay:100ms]">
            Painel do Café
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-in [animation-delay:200ms]">
            Acompanhe as cotações de <strong className="text-primary-foreground">Conilon</strong> e{" "}
            <strong className="text-primary-foreground">Arábica</strong> com dados claros, 
            confiáveis e atualizados para tomar as melhores decisões.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:300ms]">
            <a 
              href="#precos"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105"
            >
              Ver Cotações
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a 
              href="#anuncie"
              className="px-6 py-3 rounded-xl border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Anuncie Conosco
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 animate-fade-in [animation-delay:400ms]">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary-foreground">2+</p>
              <p className="text-xs md:text-sm text-primary-foreground/70">Tipos de Café</p>
            </div>
            <div className="text-center border-x border-primary-foreground/20">
              <p className="text-2xl md:text-3xl font-bold text-primary-foreground">24/7</p>
              <p className="text-xs md:text-sm text-primary-foreground/70">Monitoramento</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary-foreground">100%</p>
              <p className="text-xs md:text-sm text-primary-foreground/70">Gratuito</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 100V60C240 20 480 0 720 20C960 40 1200 80 1440 60V100H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
