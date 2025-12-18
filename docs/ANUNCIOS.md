# Documentação de Anúncios - Café Cotação ES

## Visão Geral

O Café Cotação ES oferece espaços publicitários para empresas do setor cafeeiro alcançarem produtores, compradores e profissionais do agronegócio no Espírito Santo.

---

## Formatos de Anúncio Disponíveis

### 1. Banner Horizontal (Principal)
- **Localização:** Abaixo dos cards de preços
- **Dimensões recomendadas:** 1200x200px ou 728x90px
- **Formato:** JPG, PNG, GIF ou HTML5
- **Visibilidade:** Alta (primeira posição após os preços)

### 2. Cards Laterais (x3)
- **Localização:** Seção "Espaços Publicitários"
- **Dimensões recomendadas:** 400x300px
- **Formato:** JPG, PNG ou GIF
- **Quantidade:** 3 espaços disponíveis

---

## Como Implementar um Anúncio

### Passo 1: Receber os Materiais do Anunciante
- Imagem do banner (nos formatos acima)
- URL de destino (link para onde o usuário será redirecionado)
- Texto alternativo (para acessibilidade)
- Período do anúncio (data início e fim)

### Passo 2: Adicionar o Anúncio ao Código

#### Para Banner Horizontal:
Edite o arquivo `src/components/AdBanner.tsx` e substitua o conteúdo do banner horizontal:

```tsx
// Exemplo para banner horizontal pago
if (variant === "horizontal") {
  return (
    <a 
      href="https://site-do-anunciante.com.br" 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "relative overflow-hidden rounded-xl block transition-all duration-300 hover:opacity-90",
        className
      )}
    >
      <img 
        src="/ads/banner-horizontal-anunciante.jpg" 
        alt="Anúncio - Nome do Anunciante"
        className="w-full h-auto"
      />
    </a>
  );
}
```

#### Para Cards Laterais:
Crie componentes individuais para cada anunciante ou modifique o `AdBanner` variant="card":

```tsx
// Exemplo para card pago
return (
  <a 
    href="https://site-do-anunciante.com.br" 
    target="_blank" 
    rel="noopener noreferrer"
    className={cn(
      "relative overflow-hidden rounded-xl block transition-all duration-300 hover:opacity-90",
      className
    )}
  >
    <img 
      src="/ads/card-anunciante.jpg" 
      alt="Anúncio - Nome do Anunciante"
      className="w-full h-auto rounded-xl"
    />
  </a>
);
```

### Passo 3: Adicionar as Imagens
1. Coloque as imagens dos anúncios na pasta `public/ads/`
2. Nomeie de forma organizada: `banner-horizontal-[nome].jpg`, `card-[nome].jpg`

---

## Estrutura de Pastas para Anúncios

```
public/
└── ads/
    ├── banner-horizontal-cooperativa-x.jpg
    ├── card-empresa-y.jpg
    ├── card-corretora-z.jpg
    └── card-insumos-w.jpg
```

---

## Tabela de Preços Sugeridos

| Formato | Posição | Valor Mensal (Sugestão) |
|---------|---------|-------------------------|
| Banner Horizontal | Principal | R$ 500 - R$ 1.000 |
| Card Lateral | Seção Anúncios | R$ 200 - R$ 400 |
| Pacote Completo | Todos os espaços | R$ 1.200 - R$ 2.000 |

*Valores são sugestões e podem ser ajustados conforme o mercado local*

---

## Contrato com Anunciantes

### Informações a Coletar:
- [ ] Nome da empresa
- [ ] CNPJ
- [ ] Responsável pelo contato
- [ ] E-mail e telefone
- [ ] Período do anúncio (mínimo sugerido: 1 mês)
- [ ] Materiais (imagens + URL)
- [ ] Forma de pagamento

### Termos Importantes:
1. Materiais devem ser enviados em alta resolução
2. Conteúdo deve ser apropriado e relacionado ao setor
3. Alterações de banner: 1x por mês sem custo adicional
4. Cancelamento: aviso prévio de 15 dias

---

## Código de Exemplo Completo

### AdBanner.tsx com Suporte a Anúncios Pagos

```tsx
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
  altText = "Anúncio"
}: AdBannerProps) => {
  
  // Se for anúncio pago, renderiza a imagem
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
      >
        <img 
          src={imageUrl}
          alt={altText}
          className="w-full h-auto"
        />
      </a>
    );
  }

  // Placeholder para espaço disponível (código atual)
  // ... resto do código existente
};

export default AdBanner;
```

### Uso na Index.tsx:

```tsx
{/* Banner pago */}
<AdBanner 
  variant="horizontal"
  isPaid={true}
  imageUrl="/ads/banner-cooperativa.jpg"
  linkUrl="https://cooperativa.com.br"
  altText="Cooperativa X - Seu café valorizado"
/>

{/* Espaço ainda disponível */}
<AdBanner variant="card" />
```

---

## Métricas e Relatórios (Futuro)

Para rastreamento de cliques, considere implementar:
1. Google Analytics com eventos customizados
2. UTM parameters nos links
3. Dashboard interno de métricas

---

## Contato para Anunciantes

- **E-mail:** comercial@cafecotacao.com.br
- **WhatsApp:** (27) XXXXX-XXXX
- **Site:** cafecotacao.com.br/anuncie

---

*Documento atualizado em: Dezembro 2024*
