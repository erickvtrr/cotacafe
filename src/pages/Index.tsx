import { useEffect, useState } from "react";
import Header from "@/components/Header";
import CoffeeCard from "@/components/CoffeeCard";
import AdBanner from "@/components/AdBanner";
import Footer from "@/components/Footer";
import { RefreshCw, AlertTriangle, Wifi, WifiOff } from "lucide-react";
import { fetchCoffeePrices } from "@/lib/api/coffeePrices";
import { useToast } from "@/hooks/use-toast";

interface CoffeeData {
  price: number;
  variation: number;
  variationPercent: number;
  lastUpdate: string;
  type?: string;
}

const Index = () => {
  const { toast } = useToast();
  const [coffeeData, setCoffeeData] = useState<{
    conilon: CoffeeData;
    arabica: CoffeeData;
  }>({
    conilon: {
      price: 0,
      variation: 0,
      variationPercent: 0,
      lastUpdate: "-",
      type: "CONILON 7/8",
    },
    arabica: {
      price: 0,
      variation: 0,
      variationPercent: 0,
      lastUpdate: "-",
      type: "ARÁBICA RIO",
    },
  });
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState<
    "paineldocafe" | "fallback" | "loading"
  >("loading");

  const formatLastUpdate = (isoDate?: string) => {
    if (!isoDate)
      return new Date().toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

    try {
      return new Date(isoDate).toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "-";
    }
  };

  const loadPrices = async () => {
    setIsLoading(true);

    try {
      const response = await fetchCoffeePrices();

      const lastUpdate = formatLastUpdate(response.data.lastUpdate);

      setCoffeeData({
        conilon: {
          price: response.data.conilon.price,
          variation: response.data.conilon.variation,
          variationPercent: response.data.conilon.variationPercent,
          lastUpdate,
          type: response.data.conilon.type || "CONILON 7/8",
        },
        arabica: {
          price: response.data.arabica.price,
          variation: response.data.arabica.variation,
          variationPercent: response.data.arabica.variationPercent,
          lastUpdate,
          type: response.data.arabica.type || "ARÁBICA RIO",
        },
      });

      setDataSource(response.source || "fallback");
    } catch (error) {
      console.error("Error loading prices:", error);
      setDataSource("fallback");
      toast({
        title: "Erro ao carregar cotações",
        description: "Usando valores de referência.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPrices();
  }, []);

  // Auto-refresh every 5 seconds for real-time updates
  useEffect(() => {
    const interval = setInterval(loadPrices, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Preços */}
      <section
        id="precos"
        className="relative overflow-hidden bg-gradient-hero pt-6 pb-12 md:pt-8 md:pb-16"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-primary-foreground/5 blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 backdrop-blur-sm">
              {dataSource === "paineldocafe" ? (
                <Wifi className="h-3.5 w-3.5 text-accent" />
              ) : dataSource === "loading" ? (
                <RefreshCw className="h-3.5 w-3.5 text-accent animate-spin" />
              ) : (
                <WifiOff className="h-3.5 w-3.5 text-primary-foreground/60" />
              )}
              <span className="text-xs font-medium text-primary-foreground/90">
                Cotações atualizadas automaticamente
              </span>
            </div>
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-foreground">
              Café Cotação
            </h1>
          </div>

          {/* Cards de Preço */}
          <div className="grid gap-4 md:gap-6 md:grid-cols-2 max-w-3xl mx-auto mb-6">
            {isLoading && coffeeData.conilon.price === 0 ? (
              <>
                <div className="rounded-xl bg-card/80 backdrop-blur p-6 shadow-card animate-pulse">
                  <div className="h-4 bg-muted rounded w-1/3 mx-auto mb-4"></div>
                  <div className="h-14 bg-muted rounded w-2/3 mx-auto mb-4"></div>
                  <div className="h-3 bg-muted rounded w-1/2 mx-auto"></div>
                </div>
                <div className="rounded-xl bg-card/80 backdrop-blur p-6 shadow-card animate-pulse">
                  <div className="h-4 bg-muted rounded w-1/3 mx-auto mb-4"></div>
                  <div className="h-14 bg-muted rounded w-2/3 mx-auto mb-4"></div>
                  <div className="h-3 bg-muted rounded w-1/2 mx-auto"></div>
                </div>
              </>
            ) : (
              <>
                <CoffeeCard
                  type="conilon"
                  price={coffeeData.conilon.price}
                  variation={coffeeData.conilon.variation}
                  variationPercent={coffeeData.conilon.variationPercent}
                  lastUpdate={coffeeData.conilon.lastUpdate}
                  coffeeType={coffeeData.conilon.type}
                />
                <CoffeeCard
                  type="arabica"
                  price={coffeeData.arabica.price}
                  variation={coffeeData.arabica.variation}
                  variationPercent={coffeeData.arabica.variationPercent}
                  lastUpdate={coffeeData.arabica.lastUpdate}
                  coffeeType={coffeeData.arabica.type}
                />
              </>
            )}
          </div>

          {/* Botão Atualizar */}
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={loadPrices}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10 text-primary-foreground font-medium text-sm hover:bg-primary-foreground/20 transition-all backdrop-blur-sm disabled:opacity-50 border border-primary-foreground/20"
            >
              <RefreshCw
                className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
              />
              {isLoading ? "Atualizando..." : "Atualizar"}
            </button>

            <div className="flex items-center gap-2 text-[10px] text-primary-foreground/50 text-center">
              <AlertTriangle className="h-3 w-3 shrink-0" />
              <span>
                Valores de referência. Para negociações, consulte sua
                cooperativa.
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 40V20C360 5 720 0 1080 10C1260 15 1380 25 1440 20V40H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Espaço para Anúncio Principal */}
      <section className="py-6">
        <div className="container">
          <AdBanner
            variant="horizontal"
            isPaid={true}
            imageUrl="/ads/syscampo.png"
            linkUrl="https://cooperativa.com.br"
            altText="Cooperativa X - Seu café valorizado"
          />
        </div>
      </section>

      {/* Espaços para Anúncios */}
      <section id="anuncie" className="py-8 flex-1">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="text-lg md:text-xl font-display text-foreground mb-1">
              Espaços Publicitários
            </h2>
            <p className="text-muted-foreground text-sm">
              Anuncie para produtores e compradores de café
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <AdBanner variant="card" />
            <AdBanner variant="card" />
            <AdBanner variant="card" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
