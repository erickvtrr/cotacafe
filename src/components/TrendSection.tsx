import { TrendingUp, TrendingDown, BarChart3, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrendData {
  trend: "up" | "down" | "stable";
  message: string;
  details: string;
}

interface TrendSectionProps {
  conilon: TrendData;
  arabica: TrendData;
}

const TrendSection = ({ conilon, arabica }: TrendSectionProps) => {
  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="h-5 w-5" />;
    if (trend === "down") return <TrendingDown className="h-5 w-5" />;
    return <BarChart3 className="h-5 w-5" />;
  };

  const getTrendColor = (trend: string) => {
    if (trend === "up") return "text-success bg-success/10";
    if (trend === "down") return "text-negative bg-negative/10";
    return "text-muted-foreground bg-muted";
  };

  return (
    <section className="py-8 md:py-12">
      <div className="container">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <BarChart3 className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-display text-foreground">Tendência do Dia</h2>
            <p className="text-sm text-muted-foreground">Análise do mercado de café</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Conilon Trend */}
          <div className="rounded-xl bg-gradient-card border border-border/50 p-5 shadow-card">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-foreground">Café Conilon</h3>
              <div className={cn(
                "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                getTrendColor(conilon.trend)
              )}>
                {getTrendIcon(conilon.trend)}
                <span className="capitalize">{conilon.trend === "up" ? "Alta" : conilon.trend === "down" ? "Baixa" : "Estável"}</span>
              </div>
            </div>
            <p className="text-foreground font-medium mb-2">{conilon.message}</p>
            <p className="text-sm text-muted-foreground">{conilon.details}</p>
          </div>

          {/* Arabica Trend */}
          <div className="rounded-xl bg-gradient-card border border-border/50 p-5 shadow-card">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-foreground">Café Arábica</h3>
              <div className={cn(
                "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                getTrendColor(arabica.trend)
              )}>
                {getTrendIcon(arabica.trend)}
                <span className="capitalize">{arabica.trend === "up" ? "Alta" : arabica.trend === "down" ? "Baixa" : "Estável"}</span>
              </div>
            </div>
            <p className="text-foreground font-medium mb-2">{arabica.message}</p>
            <p className="text-sm text-muted-foreground">{arabica.details}</p>
          </div>
        </div>

        {/* Update notice */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Análise atualizada às 09:00 - Próxima atualização às 15:00</span>
        </div>
      </div>
    </section>
  );
};

export default TrendSection;
