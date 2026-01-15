import React from 'react';
import Container from './Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#579AE2] text-white py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 shrink-0 bg-white p-4 rounded-xl shadow-sm">
            <img src="/images/faise.png" alt="Фонд содействия инновациям" className="h-35 w-auto object-contain" />
            <div className="w-px h-10 bg-gray-200"></div>
            <img src="/images/puti.png" alt="Платформа университетского технологического предпринимательства" className="h-35 w-auto object-contain" />
          </div>

          <p className="text-white text-sm md:text-base text-center md:text-left font-light leading-relaxed opacity-95">
            Проект реализован при поддержке Фонда содействия инновациям в рамках программы «Студенческий стартап» мероприятия «Платформа университетского технологического предпринимательства» федерального проекта «Технологии»
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 