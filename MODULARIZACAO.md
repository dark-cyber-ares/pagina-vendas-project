# Proposta de Modularização - Neuralis X

Este documento descreve como modularizar o hotsite de vendas da **Neuralis X** utilizando frameworks modernos baseados em componentes (como React, Vue ou Next.js) juntamente com **Tailwind CSS** e **Framer Motion**.

A modularização permite maior reuso de código, facilita testes isolados, melhora a legibilidade e permite a criação de testes A/B em componentes específicos de alta conversão.

---

## 1. Módulos Lógicos e Árvore de Componentes

Ao analisar o código original do hotsite, podemos decompor a página na seguinte estrutura de componentes:

```text
App (Página de Vendas)
├── Header (Navegação Superior)
│   └── Button (CTA do menu)
├── Main (Conteúdo principal)
│   ├── Hero (Primeira dobra - LCP otimizado)
│   │   └── Button (CTA principal)
│   ├── ConnectivitySection (Recursos de conexão)
│   │   └── GlassCard (Notificações, chamadas Bluetooth, etc.)
│   ├── HealthSection (Assistente de bem-estar 24/7)
│   │   ├── GlassCard (Frequência cardíaca, Qualidade do sono)
│   │   └── MetricRing (Visualização dinâmica de dados)
│   ├── CustomizationSection (Mostradores intercambiáveis)
│   ├── GrapheneSection (Engenharia de materiais do relógio)
│   ├── SpecsSection (Bento Grid de especificações técnicas)
│   │   └── GlassCard (Especificações individuais)
│   └── GuaranteeSection (Selo de originalidade e segurança)
├── Footer (Links institucionais e direitos autorais)
└── StickyCTA (Botão flutuante de conversão rápida)
```

---

## 2. Componentes Reutilizáveis (Exemplos em React/TSX + Tailwind)

Abaixo estão as especificações e códigos de implementação dos principais componentes atômicos identificados no projeto original.

### 2.1. Componente Atômico: `Button`
O botão de CTA é repetido em vários locais (Header, Hero, Sticky CTA, etc.). Ele possui variações de tamanho, cor e comportamento.

```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  glow = false,
}) => {
  const baseStyle = "font-label-caps text-label-caps rounded-lg font-bold transition-all duration-300 flex items-center justify-center";
  
  const variants = {
    primary: "bg-[#00f0ff] text-[#00363a] hover:bg-[#00dbe9]",
    secondary: "bg-[#474746] text-[#e5e2e1] hover:bg-[#353534]",
    outline: "border border-white/10 text-on-surface hover:bg-white/5",
  };

  const glowStyle = glow 
    ? "hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]" 
    : "";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${glowStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
```

---

### 2.2. Componente de Estrutura: `GlassCard`
O card de vidro fosco é o elemento visual principal da identidade do produto. Ele é utilizado para exibir métricas de saúde, recursos adicionais e a bento grid de especificações.

```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={`glass-card p-6 rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
};
```

---

## 3. Animações de Entrada e Scroll com Framer Motion

No código HTML/JS estático atual, as animações foram criadas usando a API `inView` e `animate` da biblioteca oficial **Motion**. Em um ecossistema React, o **Framer Motion** fornece tags declarativas extremamente poderosas para realizar o mesmo comportamento.

### Exemplo: Animando a Seção de Especificações (Bento Grid) no React

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

export const SpecsSection: React.FC = () => {
  return (
    <section className="py-24 bg-background" id="especificacoes">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        
        {/* Cabeçalho da Seção Animado ao Entrar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-label-caps text-label-caps text-[#00f0ff]">ESPECIFICAÇÕES TÉCNICAS</span>
          <h2 class="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-2">Poder sob o vidro.</h2>
        </motion.div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <GlassCard className="md:col-span-2">
            <span className="material-symbols-outlined text-4xl text-[#00f0ff] mb-4">sports_score</span>
            <h3 className="text-2xl font-bold mb-4">+100 Modos Esportivos</h3>
            <p className="text-on-surface-variant">Métricas precisas para cada modalidade.</p>
          </GlassCard>

          <GlassCard className="flex flex-col justify-center items-center text-center" delay={0.1}>
            <span className="text-5xl font-extrabold text-[#00f0ff]">40h</span>
            <p className="font-label-caps mt-2">Bateria de Longa Duração</p>
          </GlassCard>

          <GlassCard className="flex flex-col justify-center items-center text-center" delay={0.2}>
            <span className="material-symbols-outlined text-5xl text-[#00f0ff]">language</span>
            <p className="font-label-caps mt-2">Multi-idioma (PT/EN/FR)</p>
          </GlassCard>

          <GlassCard delay={0.3}>
            <h4 className="font-bold text-[#00f0ff] mb-2">Display HD</h4>
            <p class="text-sm text-on-surface-variant">Vidro temperado anti-risco.</p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
```

---

## 4. Otimização de Performance para Produção

Quando a modularização for compilada para produção:
1. **Code Splitting (Divisão de Código):** Módulos mais pesados ou que aparecem no final da página (como a `GuaranteeSection` ou modais secundários) podem ser carregados de forma assíncrona (`lazy loading` de componentes) para melhorar a interatividade inicial (FID/INP).
2. **Purge CSS:** O Tailwind removerá qualquer classe não utilizada, otimizando o CSS final para menos de 10KB.
3. **SVG Inline:** Os ícones do Google Material Design podem ser convertidos para SVGs puros e inline em componentes React de ícones, reduzindo as requisições HTTP e eliminando dependências externas de fontes.
