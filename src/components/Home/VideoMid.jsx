import React, { useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-white flex flex-col items-center relative h-auto sm:mt-14 sm:mb-14">
      <video
        ref={videoRef}
        controlsList="nodownload"
        id="acceso"
        src="Theragen 1.mp4"
        className="sm:w-[90%] sm:h-[auto] sm:mt-20 md:mb-10 md:h-auto md:w-[80%]"
      ></video>
      <button
        onClick={handlePlayClick}
        className="bottom-1/2 sm:-mt-12 sm:px-6 sm:ml-6 bg-transparent border-2 -mt-24 -left-1/3 transform -translate-x-1/5 relative bg-black font-semibold text-lg text-white px-10 py-0 z-10"
      >
        {isPlaying ? 'Pausar' : 'Ver'}
      </button>
      <div className='hidden sm:w-[90%] md:w-[80%] mt-10'>
          <div className="md:border md:border-gray-500">
            <div className="sm:w-[100%] w-[80%] justify-left xl:w-[70%] xl:ml-36 md:ml-16 md:mt-20">
              <h4  className="flex flex-col text-2xl font-medium text-gray-600 mb-4 sm:ml-10 sm:w-[80%] sm:mt-4 italic">

                "Dani no es otro chatbot que te invita a hacer ejercicio cada vez que le escribes... Diseñamos una arquitectura tecnológica específica, para que Dani pueda indagar en los detalles de cada caso y entienda el contexto; para que te 'preste mente', indagando en la razones, contexto, emociones y priorizando temas; para que resuma tu caso y te ayude a fijar metas aplicando los lineamientos de la Terapia Cognitivo Conductual, justo como con un psicólogo humano."
        
              </h4>
              <a className='text-l w-full text-gray-500 flex sm:mb-8 sm:ml-10 sm:w-[80%] sm:mt-4 sm:text-lg '>
                Emiliano Araneda, <br />
                Fundador de Theragen. </a>
            </div>
                 
            <div className="mb-20"></div>

        </div>

      </div>
    </div>
  );
};

export default VideoPlayer;
