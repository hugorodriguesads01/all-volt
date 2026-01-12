import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureSection } from './components/FeatureSection';
import { GridFeatures } from './components/GridFeatures';
import { Testimonials } from './components/Testimonials';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Check, ListChecks, ShieldCheck, Zap, Package, Hammer } from 'lucide-react';
import { GlowingEffect } from './components/ui/glowing-effect';

const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-white font-mono selection:bg-white/20 overflow-x-hidden">
      <Navbar />
      
      {/* 1) Headline + Promessa (Fixed for Parallax Effect) */}
      <Hero />
      
      {/* Spacer to push the scrolling content down, creating room for the fixed Hero */}
      <div className="h-[100svh]"></div>

      {/* Wrapper for all other sections, which will scroll over the Hero */}
      <div className="relative z-10 bg-background shadow-[0_-50px_100px_-20px_rgba(36,36,36,1)]">
        {/* 2) Benefícios (Glass Blocks) */}
        <GridFeatures />
        
        {/* 3) Dor -> Consequência -> Solução */}
        <FeatureSection
          badge="Solução Definitiva"
          title="Instalações mal feitas, falhas elétricas e orçamentos confusos?"
          description="“É caro? Tem garantia? É profissional mesmo? Vai atrasar? Tem alguém mais barato?” Medo de contratar amadores e riscos desnecessários."
          imageSide="right"
          points={[
            { icon: <Zap size={16} />, text: 'Diagnóstico técnico rápido e explicação clara' },
            { icon: <Hammer size={16} />, text: 'Execução segura com materiais corretos' },
            { icon: <ShieldCheck size={16} />, text: 'Garantia real e orçamento simples via WhatsApp' }
          ]}
        >
          {/* Image Replacement for Confusion vs Clarity */}
          <div className="relative w-full h-full">
             <img 
               src="https://i.imgur.com/ioHLRbt.png" 
               alt="Instalações elétricas mal feitas vs Solução Profissional" 
               className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 hover:scale-105"
             />
             {/* Using pure black for clarity instead of gray */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </FeatureSection>

        {/* 4) Como funciona / Método */}
        <FeatureSection
          badge="Método Eletroprime"
          title="Como funciona"
          description="Formato: atendimento presencial em São Paulo e região, execução agendada ou emergencial."
          imageSide="left"
          points={[
            { icon: <ListChecks size={16} />, text: '1. Diagnóstico técnico via WhatsApp ou visita' },
            { icon: <ShieldCheck size={16} />, text: '2. Execução segura com técnicas e materiais corretos' },
            { icon: <Check size={16} />, text: '3. Garantia + explicação do que foi feito' }
          ]}
        >
           {/* Updated image to new URL */}
           <div className="relative w-full h-full">
              <img 
                src="https://i.imgur.com/WXwPIoT.png" 
                alt="Processo de atendimento Eletroprime" 
                className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
              />
           </div>
        </FeatureSection>

        {/* 5) Autoridade (With Image) */}
        <FeatureSection
          title="Profissionais experientes"
          description="Profissionais experientes atendendo pessoas que buscam segurança, rapidez e um serviço confiável. Tanto quem não entende de elétrica e quer alguém sério para resolver sem complicação, quanto quem já entende e precisa de execução profissional para serviços grandes, complexos ou de alto padrão."
          imageSide="right"
          points={[
            { icon: <Check size={16} />, text: 'Para quem busca solução sem complicação' },
            { icon: <Check size={16} />, text: 'Para serviços complexos e de alto padrão' }
          ]}
        >
           {/* Updated image to new URL */}
           <div className="relative w-full h-full">
              <img 
                src="https://i.imgur.com/JK1vIKh.png" 
                alt="Eletricista Profissional Eletroprime" 
                className="absolute inset-0 w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-700 hover:scale-105"
              />
              {/* Using pure black for clarity instead of gray */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-500/20 rounded-full border border-green-500/30">
                        <ShieldCheck size={16} className="text-green-400" />
                      </div>
                      <p className="text-white text-sm font-medium">Serviço Confiável e Seguro</p>
                    </div>
                 </div>
              </div>
           </div>
        </FeatureSection>

        {/* 6) Oferta (With Image) */}
        <FeatureSection
          title="Serviço Elétrico Profissional Eletroprime"
          description="Inclui: diagnóstico técnico completo, execução (instalação/manutenção/reparo), materiais adequados, acabamento profissional, garantia, suporte via WhatsApp e relatório simples quando necessário."
          imageSide="left"
          points={[
            { icon: <Zap size={16} />, text: 'Vantagens: Rapidez, Segurança Máxima e Orçamento Claro' },
            { icon: <Package size={16} />, text: 'Bônus: Orçamento Gratuito e Visita Técnica' },
            { icon: <ShieldCheck size={16} />, text: 'Bônus: Garantia Estendida e Prioridade' }
          ]}
        >
           {/* Updated image to new URL */}
           <div className="relative w-full h-full group">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <img 
                src="https://i.imgur.com/LfNmZs1.png" 
                alt="Serviço Elétrico Profissional Eletroprime" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105"
              />
              {/* Using pure black for clarity instead of gray */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
              
              {/* Overlay Content representing the Offer */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                 <div className="space-y-4">
                   <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                     <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Valor</p>
                     <p className="text-white font-medium text-lg">Orçamento direto via WhatsApp</p>
                   </div>
                   
                   <div className="flex flex-wrap gap-2">
                     <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">Sem Surpresas</span>
                     <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">Equipe Qualificada</span>
                   </div>
                 </div>
              </div>
           </div>
        </FeatureSection>

        {/* 7) CTA */}
        <BottomCTA />

        {/* 8) Prova Social */}
        <Testimonials />

        {/* 10) FAQ */}
        <FAQ />

        <Footer />
      </div>
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;