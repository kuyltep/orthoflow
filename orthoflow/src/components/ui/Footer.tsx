import React from 'react';
import Container from './Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#579AE2] text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="/logo.png" alt="OrthoFlow" className="w-50 h-10" />
            <div>

            <p className="text-blue-100">
              Революционная технология для мониторинга и анализа давления стопы
            </p>
            </div>
          </div>
        </div>

        {/* Grant Support Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-blue-500/20 rounded-2xl border border-blue-400/30 backdrop-blur-sm">
          <div className="flex items-center gap-6 shrink-0 bg-white/10 p-4 rounded-xl">
             <img src="/images/faise.png" alt="Фонд содействия инновациям" className="h-16 w-auto object-contain" />
             <div className="w-px h-12 bg-blue-200/40"></div>
             <img src="/images/puti.png" alt="Платформа университетского технологического предпринимательства" className="h-16 w-auto object-contain" />
          </div>
          <p className="text-blue-50 text-sm md:text-base max-w-2xl text-center md:text-left leading-relaxed font-light">
            Проект реализован при поддержке Фонда содействия инновациям в рамках программы «Студенческий стартап» мероприятия «Платформа университетского технологического предпринимательства» федерального проекта «Технологии»
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-300 text-center">
          <div className="text-blue-100 text-sm">
            © {new Date().getFullYear()} OrthoFlow. Все права защищены.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 