import React, { useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonClicked, setButtonClicked] = useState('Inicio');

  const handlePlayClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleButtonClick = (buttonName) => {
    setButtonClicked(buttonName);
  };

  const isButtonActive = (buttonName) => {
    return buttonClicked === buttonName;
  };

  return (

<div> 
<div className='bg-slate-200 w-full md:h-[18vh] sm:h-[14vh]'>
<div><h4 id="funciona" className=' flex flex-col items-center sm:py-2 sm:mb-4 justify-center md:py-2 md:text-[3vh] font-semibold text-center text-slate-400'>
      Confían en nosotros
    </h4></div>
  <div className='flex items-center justify-center md:-mt-1 sm:-mt-3'>
    <img src="aws.png" alt="aws icon" class=" w-auto md:h-[8vh] sm:h-[4vh]"></img>
    <img src="trust.png" alt="aws icon" class="px-64 w-auto md:h-[8vh] sm:h-[5vh] sm:px-12 sm:-mt-2"></img>
    <img src="google.webp" alt="aws icon" class=" w-auto md:h-[9vh] sm:h-[5vh]"></img>  
  </div>
</div>

<div className='bg-white w-full -mt-14'>
    <h2 id="funciona" className='md:hidden mt-20 flex flex-col items-center  justify-center text-3xl font-bold text-center text-oxford'>
      ¿Cómo funciona?
    </h2>
    <div className="md:hidden grid grid-rows-2">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[80%] py-0.5 shadow-md border border-gray-400 rounded-xl">
          <div className="flex justify-center items-center">
                          <div
                            className={`${
                              isButtonActive('Inicio')
                                ? 'text-navy py-1 px-4 border border-navy rounded-xl text-center relative'
                                : 'cursor-pointer py-1 px-4 border border-white rounded-xl text-center relative'
                            }`}
                            onClick={() => handleButtonClick('Inicio')}
                          >
                            <h3>Inicio</h3>
                          </div>
                          <div
                            className={`${
                              isButtonActive('Durante') ? 'text-navy py-1 px-4 border border-navy rounded-xl text-center relative'
                              : 'cursor-pointer py-1 px-4 border border-white rounded-xl text-center relative'
                            }`}
                            onClick={() => handleButtonClick('Durante')}
                          >
                            <a>Durante</a>
                          </div>
                          <div
                            className={`${
                              isButtonActive('Fin') ? 'text-navy py-1 px-4 border border-navy rounded-xl text-center relative'
                              : 'cursor-pointer py-1 px-4 border border-white rounded-xl text-center relative'
                            }`}
                            onClick={() => handleButtonClick('Fin')}
                          >
                            <a>Fin</a>
                          </div>
                          <div
                            className={`${
                              isButtonActive('PDF') ? 'text-navy py-1 px-4 border border-navy rounded-xl text-center relative'
                              : 'cursor-pointer py-1 px-4 border border-white rounded-xl text-center relative'
                            }`}
                            onClick={() => handleButtonClick('PDF')}
                          >
                            <a>PDF</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:hidden flex justify-center items-center">
                      <div className="md:hidden h-full text-justify items-center w-[70%]">
                        {isButtonActive('Inicio') ? 'Para iniciar abre WhatsApp, busca el número de Dani ( +56 9 8587 7944 ), saluda 👋 y comienza la evaluación!' : 
                        isButtonActive('Durante') ? 'Durante la evaluación, Dani te hará distintos tipos de preguntas a los largo de la evaluación. Puedes responder con mensajes de texto o de Voz.' : 
                        isButtonActive('Fin') ? 'Al finalizar la evaluación, Dani te enviará automáticamente un archivo PDF, a través de WhatsApp. Ese archivo contiene todo tu caso estructurado para ayudarte a ti y a otros profesionales a entender tus emociones.' : 
                        isButtonActive('PDF') ? 'Revisa este caso de ejemplo. Todos los casos tienen la misma estructura, pero varía su contenido según el contexto y particularidades de cada uno.' : ''}
                      </div>
                    </div>
                  </div>
  </div>
  
  <div className="md:w-[90%] grid md:grid-cols-2 sm:flex-col md:flex-row relative h-auto sm:mt-14 sm:mb-4 gap-4">
  <div></div>
  <h2 id="funciona" className='sm:hidden mb-10 mt-40 md:mt-36 flex flex-col px-14 items-left justify-left text-3xl font-bold text-left text-oxford'>
      ¿Cómo funciona?
    </h2>  
</div>
<div className="md:w-[90%] grid grid-cols-1 md:grid-cols-2 sm:flex-col md:flex-row relative h-auto sm:mt-14 gap-4">

  <div className="sm:-mt-10 flex items-center justify-center md:-mr-16">

  {isButtonActive('Inicio') ? <img
        title="Conoce a DaniGPT"
        controlsList="nodownload"
        src="parte_inicial_demo_web.gif"
        id="acceso"
        className="rounded-xl sm:w-[70%] sm:h-auto md:h-auto md:w-[200px]"
      ></img> : 
      isButtonActive('Durante') ? <img
      title="Conoce a DaniGPT"
      controlsList="nodownload"
      src="parte_medio_demo_web.gif"
      id="acceso"
      className="rounded-xl sm:w-[70%] sm:h-auto md:h-auto md:w-[200px]"
    ></img> : 
      isButtonActive('Fin') ? <img
      title="Conoce a DaniGPT"
      controlsList="nodownload"
      src="parte_final_demo_web.gif"
      id="acceso"
      className="rounded-xl sm:w-[70%] sm:h-auto md:h-auto md:w-[200px]"
    ></img> : 
      isButtonActive('PDF') ? <iframe
      src="ficha-ejemplo.pdf"
      className="rounded-xl sm:w-auto sm:h-[40vh] md:h-[70vh] md:w-200px"
      seamless
      allowFullScreen
      title="Caso de ejemplo"
    ></iframe>
: ''}

      

  </div>
      <div className="sm:hidden grid grid-rows-3">
        <div>
          <div className="row-span-1 md:px-1 py-0.5 md:w-[360px] shadow-md border border-gray-400 rounded-xl justify-center items-center">
            <div className="flex justify-center md:gap-6">
              <div
                className={`${
                  isButtonActive('Inicio')
                    ? 'text-navy py-1 px-4 border border-navy rounded-xl text-center relative'
                    : 'cursor-pointer py-1 px-4 border border-white rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('Inicio')}
              >
                <h3>Inicio</h3>
              </div>
              <div
                className={`${
                  isButtonActive('Durante') ? 'text-navy py-1 px-4 border border-navy rounded-xl text-center relative'
                  : 'cursor-pointer py-1 px-4 border border-white rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('Durante')}
              >
                <a>Durante</a>
              </div>
              <div
                className={`${
                  isButtonActive('Fin') ? 'text-navy py-1 px-4 border border-navy rounded-xl text-center relative'
                  : 'cursor-pointer py-1 px-4 border border-white rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('Fin')}
              >
                <a>Fin</a>
              </div>
              <div
                className={`${
                  isButtonActive('PDF') ? 'text-navy py-1 px-4 border border-navy rounded-xl text-center relative'
                  : 'cursor-pointer py-1 px-4 border border-white rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('PDF')}
              >
                <a>PDF</a>
              </div>
            </div>
          </div>
        </div>
          <div className="sm:hidden h-full flex items-center justify-left w-[80%]">
            {isButtonActive('Inicio') ? 'Para iniciar abre WhatsApp, busca el número de Dani ( +56 9 8587 7944 ), saluda 👋 y comienza la evaluación!' : isButtonActive('Durante') ? 'Durante la evaluación, Dani te hará distintos tipos de preguntas a los largo de la evaluación. Puedes responder con mensajes de texto o de Voz.' : isButtonActive('Fin') ? 'Al finalizar la evaluación, Dani te enviará automáticamente un archivo PDF, a través de WhatsApp. Ese archivo contiene todo tu caso estructurado para ayudarte a ti y a otros profesionales a entender tus emociones.' : isButtonActive('PDF') ? 'Revisa este caso de ejemplo. Todos los casos tienen la misma estructura, pero varía su contenido según el contexto y particularidades de cada uno.' : ''}
          </div>
      </div>
    </div>
    </div>
  );
};

export default VideoPlayer;
