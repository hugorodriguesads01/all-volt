import React from 'react';
import { Instagram, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 border-t border-white/10 bg-background text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {/* Col 1: Brand Info */}
        <div className="flex flex-col gap-6">
          <img 
            src="https://i.imgur.com/4SMTQ5h.png" 
            alt="Eletroprime Logo" 
            className="h-14 w-auto object-contain self-start" 
          />
          <p className="text-gray-400 leading-relaxed max-w-xs text-sm">
            Serviços elétricos profissionais em São Paulo e região. Segurança, qualidade e garantia.
          </p>
        </div>

        {/* Col 2: Serviços */}
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-white tracking-wide uppercase text-xs">Serviços</h3>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Residencial</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Comercial</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Manutenção</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instalação</a></li>
          </ul>
        </div>

        {/* Col 3: Empresa */}
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-white tracking-wide uppercase text-xs">Empresa</h3>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
          </ul>
        </div>

        {/* Col 4: Social */}
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-white tracking-wide uppercase text-xs">Social</h3>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li>
              <a 
                href="https://www.instagram.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram size={18} /> Instagram
              </a>
            </li>
            <li>
              <a 
                href="https://api.whatsapp.com/send/?phone=5511954608742&text&type=phone_number&app_absent=0&utm_source=ig"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={18} /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <span>© {new Date().getFullYear()} Eletroprime. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};