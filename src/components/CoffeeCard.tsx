import { TrendingUp, TrendingDown, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoffeeCardProps {
  type: "conilon" | "arabica";
  price: number;
  variation: number;
  variationPercent: number;
  lastUpdate: string;
  coffeeType?: string;
}

const CoffeeCard = ({ type, price, variation, variationPercent, lastUpdate, coffeeType }: CoffeeCardProps) => {
  const isPositive = variation >= 0;
  const defaultName = type === "conilon" ? "CONILON 7/8" : "ARÁBICA RIO";
  const coffeeName = coffeeType || defaultName;

  return (
    <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-card transition-all duration-300 hover:shadow-card-hover group">
      {/* Header com nome do tipo */}
      <div className={cn(
        "px-4 py-2 text-center border-b border-border/50",
        type === "conilon" ? "bg-primary/5" : "bg-accent/5"
      )}>
        <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
          {coffeeName}
        </h3>
      </div>
      
      {/* Preço Principal */}
      <div className="p-6 text-center">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight font-display">
          {price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>

      {/* Footer com variação e data */}
      <div className="px-4 py-3 bg-secondary/30 border-t border-border/50 flex items-center justify-between">
        <div className={cn(
          "flex items-center gap-1.5 text-sm font-medium",
          isPositive ? "text-success" : "text-negative"
        )}>
          {isPositive ? (
            <TrendingUp className="h-4 w-4" />
          ) : (
            <TrendingDown className="h-4 w-4" />
          )}
          <span>
            {isPositive ? "+" : ""}{variationPercent.toFixed(2)}%
          </span>
        </div>
        <span className="text-xs text-muted-foreground">
          {lastUpdate}
        </span>
      </div>
    </div>
  );
};

export default CoffeeCard;
