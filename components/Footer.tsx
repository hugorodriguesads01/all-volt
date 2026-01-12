import React from 'react';
import { Instagram, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-background text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-lg text-white">Eletroprime</span>
          <p className="text-gray-500">
            Serviços elétricos com segurança e profissionalismo.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a 
            href="https://www.instagram.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
          <a 
            href="https://api.whatsapp.com/send/?phone=5511954608742&text&type=phone_number&app_absent=0&utm_source=ig"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <Phone size={20} />
            <span className="sr-only">Phone</span>
          </a>
        </div>
        
        <div className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Eletroprime. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};