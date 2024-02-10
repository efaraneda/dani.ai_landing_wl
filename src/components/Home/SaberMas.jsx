import React, { useState, useEffect } from 'react';

const SaberMas = () => {

  const slides = [
    {
      title: "Conoce GPT",
      content: "Uno de los componentes principales de la arquitectura de Dani, son los modelos de lenguaje con tecnología GPT. Ver más sobre esta tecnología.",
      image: "image.avif",
      link: "https://openai.com/research/overview"
    },
    {
      title: "Research",
      content: "\"Simulacro del comportamiento humano\". Lee más sobre los hallazgos de esta publicación y lo que puede lograr genAI con la arquitectura correcta.",
      image: "research.png",
      link: "https://arxiv.org/abs/2304.03442"
    },
    {
      title: "Componentes",
      content: "\"Dani NO es otro chatbot que te invita a hacer ejercicio cada vez que le escribes(...) Diseñamos una arquitectura de componentes muy específica, que le permite entender el contexto, emociones, priorizar y planificar(...)\". Lee la nota aquí.",
      image: "dani_picture.jpg"
    },
    {
      title: "Conoce a Mia",
      content: "Mia es un Consejero Personalizado Inteligente. Esta pensado para ayudarte a cumplir las metas que te sugirió Dani, según tu caso personal. Este 2024, rompe todas tus metas con Mia.",
      image: "mia.jpeg",
      link: "https//:theragen.ai/consejero"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState([0, 1, 2]);

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    const nextVisibleSlides = visibleSlides.map(index =>
      (index + 1) % slides.length
    );
    setCurrentIndex(nextIndex);
    setVisibleSlides(nextVisibleSlides);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 701px)');
    if (mediaQuery.matches) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  return (
    <div className="sm:items-center sm:justify-center bg-white-200 flex flex-col items-center relative h-auto md:mt-14 sm:mt-24 sm:mb-14">
      

      <h4 className="text-3xl font-bold mt-14 mb-14">¿Quieres saber más?</h4>
      <div className="sm:w-[90%] md:grid items-start text-center relative md:grid-cols-3 md:w-[90%] md:gap-4">
      {visibleSlides.map(index => ( <a href={slides[index].link} target="_blank" rel="noopener noreferrer">
        <div
          key={index}
          className={`hover:border border-1 bg-slate-100 rounded-lg md:h-[40vh] px-3 py-3 sm:mb-4`}
        >
          <div className="flex sm:ml-2 md:grid-cols-2 md:gap-6 sm:gap-4 sm:mb-10">
            <div className="text-left">
              <b>{slides[index].title}</b><br />
              <a className="text-sm">{slides[index].content}</a>
            </div>
            
            <img src={slides[index].image} className="md:mt-0 sm:mt-4 rounded-lg h-[110px] w-[110px]" alt={slides[index].title}></img>
            
          </div>
        </div>
        </a>))}
    </div>
      <div className="h-[90px] bg-white-200 w-full sm:hidden"></div>
      
    </div>
  );
};

export default SaberMas;

