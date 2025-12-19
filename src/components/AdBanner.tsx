import { Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdBannerProps {
  variant?: "horizontal" | "card";
  className?: string;
  // Props para anúncios pagos
  isPaid?: boolean;
  imageUrl?: string;
  linkUrl?: string;
  altText?: string;
}

const AdBanner = ({
  variant = "horizontal",
  className,
  isPaid = false,
  imageUrl,
  linkUrl,
  altText = "Anúncio",
}: AdBannerProps) => {
  // Prioridade para anúncios pagos quando fornecidos
  if (isPaid && imageUrl && linkUrl) {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative overflow-hidden rounded-xl block transition-all duration-300 hover:opacity-90 hover:shadow-lg",
          className
        )}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          minHeight: "400px",
        }}
      ></a>
    );
  }
  if (variant === "horizontal") {
    return (
      <a
        href="https://api.whatsapp.com/send?phone=5527997856364&text=Ol%C3%A1%2C+tenho+interesse+em+anunciar+no+site+cota%C3%A7%C3%A3o+do+caf%C3%A9%21%0A"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative overflow-hidden rounded-xl block transition-all duration-300 hover:opacity-90",
          className
        )}
        style={{
          backgroundImage: "url(/ads/syscampo.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          minHeight: "400px",
        }}
      ></a>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border-2 border-dashed border-border bg-secondary/30 p-4 md:p-6 transition-all duration-300 hover:border-accent/50 hover:bg-secondary/50 group",
          className
        )}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-center md:text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
            <Megaphone className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Espaço para Anúncio</p>
            <p className="text-sm text-muted-foreground">
              Sua marca vista por milhares de produtores e compradores de café
            </p>
          </div>
          <a
            href="https://w.app/erick"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 md:mt-0 md:ml-auto px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            Anunciar Aqui
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border-2 border-dashed border-border bg-secondary/30 p-6 transition-all duration-300 hover:border-accent/50 hover:bg-secondary/50 group text-center",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
          <Megaphone className="h-7 w-7 text-accent" />
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">Anuncie Aqui</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Cooperativas, corretoras e empresas de insumos: alcance seu público
            ideal
          </p>
        </div>
        <a
          href="https://w.app/erick"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors text-center"
        >
          Saiba Mais
        </a>
      </div>
    </div>
  );
};

export default AdBanner;
