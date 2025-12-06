import React from 'react';
import { Instagram, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5511954608742&text&type=phone_number&app_absent=0&utm_source=ig";
  const instagramLink = "https://www.instagram.com/allvoltservicos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  return (
    <footer className="pt-16 pb-10 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
             <div className="flex items-center gap-1 mb-6">
                <img src="https://i.imgur.com/ItoX9KK.png" alt="ALL VOLT" className="h-10 w-auto" />
                <span className="font-sans text-xl tracking-tight text-white">
                    <span className="font-light italic">ALL</span> <span className="font-bold">VOLT</span>
                </span>
             </div>
             <p className="text-gray-500 text-sm max-w-xs">
               Serviços elétricos profissionais em São Paulo e região. Segurança, qualidade e garantia.
             </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-white font-medium mb-6">Serviços</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Residencial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Comercial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manutenção</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instalação</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white font-medium mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white font-medium mb-6">Social</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a 
                  href={instagramLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram size={16}/> Instagram
                </a>
              </li>
              <li>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={16}/> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600">
          © 2025 ALL VOLT. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};