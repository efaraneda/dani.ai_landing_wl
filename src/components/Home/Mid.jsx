import React, { useRef, useState } from 'react';

const VideoPlayer = () => {

  const handleClick = () => {
    // Execute dataLayer.push('event') script here
    window.dataLayer.push({
      'event': 'click_cta',
      'language':navigator.language
      });
  };
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
  <div className='bg-white w-full -mt-14'>
    <h2 className='md:hidden mt-10 py-20 flex flex-col items-center justify-center text-3xl font-bold text-center text-oxford'>
      ¿Cómo funciona?
    </h2> 
    <div className="md:hidden grid grid-rows-2">
      <div className="flex flex-col items-center justify-center -mt-48">
      <p className='w-[70%] sm:w-[50%] text-slate-500 italic flex flex-col text-right justify-right '>Clic aquí 👇</p>
      <div className="w-[91%] sm:w-[80%] py-0.5 shadow-md border border-gray-400 rounded-xl">
        <div className="flex justify-center items-center ">
          <div
              className={`${
                isButtonActive('Inicio')
                ? 'text-navy py-1  mr-1 px-6 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                : 'cursor-pointer  mr-1 py-1 px-6 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'

              }`}
              onClick={() => handleButtonClick('Inicio')}
            >
              <a>1</a>
            </div>
            <div
              className={`${
                isButtonActive('Durante') 
                ? 'text-navy py-1 px-6 mr-1 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                : 'cursor-pointer py-1 px-6 mr-1 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'

              }`}
              onClick={() => handleButtonClick('Durante')}
            >
              <a>2</a>
            </div>
            <div
              className={`${
                isButtonActive('Fin') 
                ? 'text-navy py-1 px-6 mr-1 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                : 'cursor-pointer py-1 px-6 mr-1 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'

              }`}
              onClick={() => handleButtonClick('Fin')}
            >
              <a>3</a>
            </div>
            <div
              className={`${
                isButtonActive('Documento') 
                ? 'text-navy py-1 px-5 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                : 'cursor-pointer py-1 px-5 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'

              }`}
              onClick={() => handleButtonClick('Documento')}
            >
              <a >Resultados</a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center h-[200px]"> {/* Set a fixed height */}
  <div className="md:hidden h-full text-justify items-center w-[75%] -mt-36">
    {isButtonActive('Inicio') ? 'La evaluación comienza en WhatsApp y generalmente toma alrededor de 30 minutos para completarse y recibir tus resultados.' : 
    isButtonActive('Durante') ? "Dani te guiará a través de varias preguntas durante la evaluación. Es importante responder de manera natural y sincera para que nuestra tecnología pueda producir resultados precisos y útiles." : 
    isButtonActive('Fin') ? "Después de que hayas terminado, recibirás un documento que presenta perspectivas clínicas. Está elaborado dentro de un marco conceptual diseñado para facilitar la comprensión del problema y sus orígenes." : 
    isButtonActive('Documento') ? (
      <span>
        Revisa el <a className='font-semibold underline text-blue-500' target="_blank" rel='nofollow' href="https://theragen.ai/ficha-ejemplo.pdf">caso de Fernanda</a> como ejemplo. Si bien todos los casos siguen el mismo formato, el contenido está adaptado a los aspectos únicos de cada uno. Además, cubren las fortalezas del paciente, el plan de tratamiento, antecedentes generales, hipótesis de trabajo, metas sugeridas y recomiendan psicoterapeutas adecuados para el caso específico, lo que permite una acción inmediata sobre el problema. {' '}
        
      </span>
    ) : ''}
  </div>
</div>
   </div>
  </div>

  
  <div id="funciona2" className="md:w-[90%] grid md:grid-cols-2 sm:flex-col md:flex-row relative h-auto sm:mt-14 sm:mb-4 gap-4">
  <div></div>
  <div>
       <h2 className='sm:hidden  mb-10 mt-40 md:mt-36 flex flex-col px-14 items-left justify-left text-3xl font-bold text-left text-oxford'>      ¿Cómo funciona?
</h2> 
      <p className='sm:hidden md:w-[340px] flex flex-col justify-center text-slate-500 italic items-right text-right justify-right'>Clic aquí 👇 </p>  
  </div>  
    
</div>
<div className="md:w-[90%] grid grid-cols-1 md:grid-cols-2 sm:flex-col md:flex-row relative h-auto sm:mt-14 gap-4">

  <div className="sm:-mt-16 flex items-center justify-center md:-mr-16 sm:mb-16">

  {isButtonActive('Inicio') ? <img
        title="Start"
        controlsList="nodownload"
        src="../parte1_esp_nueva.gif"
        id="acceso"
        className="flex flex-col rounded-xl sm:-mt-24 sm:w-[80%] sm:h-auto md:h-auto md:w-[250px]"
      ></img> : 
      isButtonActive('Durante') ? <img
      title="Mid"
      controlsList="nodownload"
      src="../parte2_esp_nueva.gif"
      id="acceso"
      className="flex flex-row rounded-xl sm:-mt-24 sm:w-[80%] sm:h-auto md:h-auto md:w-[250px]"
    ></img> : 
      isButtonActive('Fin') ? <img
      title="End"
      controlsList="nodownload"
      src="../parte3_esp_nueva.gif"
      id="acceso"
      className="rounded-xl sm:w-[80%] sm:-mt-24 sm:h-auto md:h-auto md:w-[250px]"
    ></img> : 
      isButtonActive('Documento') ? <div className="rounded-xl sm:w-[90%] sm:h-[50vh] md:-mt-68 sm:mt-18 md:h-[55vh] md:w-[330px] md:-ml-10">
      <div>
      <embed src="https://drive.google.com/file/d/1fJ8HNiGjt4qAYWEgyyhOt8ndbFigP_GC/preview" 
      width="100%" height="400" frameborder="0" scrolling="no"></embed>

        </div>
  </div>
: ''}

      

  </div>
      <div className="sm:hidden grid grid-rows-3">
        <div>
          <div className="row-span-1 md:px-1 py-0.5 md:w-[360px] shadow-md border border-gray-400 rounded-xl justify-center items-center">
            <div className="flex justify-center md:gap-6">
              <div
                className={`${
                  isButtonActive('Inicio')
                    ? 'text-navy py-1 px-5 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                    : 'cursor-pointer py-1 px-5 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('Inicio')}
              >
                <h3>1</h3>
              </div>
              <div
                className={`${
                  isButtonActive('Durante') 
                  ? 'text-navy py-1 px-5 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                  : 'cursor-pointer py-1 px-5 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'

                }`}
                onClick={() => handleButtonClick('Durante')}
              >
                <a>2</a>
              </div>
              <div
                className={`${
                  isButtonActive('Fin') 
                  ? 'text-navy py-1 px-5 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                  : 'cursor-pointer py-1 px-5 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('Fin')}
              >
                <a>3</a>
              </div>
              <div
                className={`${
                  isButtonActive('Documento') 
                  ? 'text-navy py-1 px-2 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                  : 'cursor-pointer py-1 px-2 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('Documento')}
              >
                <a>Resultados</a>
              </div>
            </div>
          </div>
        </div>
          <div className="sm:hidden h-full flex items-center text-justify justify-left w-[80%] md:mt-2">
            {isButtonActive('Inicio') ? 'La evaluación comienza en WhatsApp y generalmente toma alrededor de 30 minutos para completarse y recibir tus resultados.' : isButtonActive('Durante') ? "Dani te guiará a través de varias preguntas durante la evaluación. Es importante responder de manera natural y sincera para que nuestra tecnología pueda producir resultados precisos y útiles." : isButtonActive('Fin') ? "Después de que hayas terminado, recibirás un documento que presenta perspectivas clínicas. Está elaborado dentro de un marco conceptual diseñado para facilitar la comprensión del problema y sus orígenes."   : isButtonActive('Documento') ? (
      <span>
        Revisa el <a className='font-semibold underline text-blue-500' target="_blank" rel='nofollow' href="https://theragen.ai/ficha-ejemplo.pdf">caso de Fernanda</a> como ejemplo. Si bien todos los casos siguen el mismo formato, el contenido está adaptado a los aspectos únicos de cada uno. Además, cubren las fortalezas del paciente, el plan de tratamiento, antecedentes generales, hipótesis de trabajo, metas sugeridas y recomiendan psicoterapeutas adecuados para el caso específico, lo que permite una acción inmediata sobre el problema.{' '}
        
      </span>
    ) : ''}
          </div>
      </div>
    </div>

    <div className='md:hidden bg-slate-200 flex flex-col items-center justify-center py-14'>
      
      <h4 className="font-semibold text-center text-2xl mt-10">Nuestra promesa</h4>
      <div className='py-4 w-[65%] text-center text-lg'> En 30 minutos estarás listo para comenzar a tomar acción</div>
         
            <a 
  className="border-purple-primary dark:border-purple-light bg-crayola from-purple-primary to-purple-dark dark:from-white dark:to-purple-light text-white dark:text-purple-dark hover:brightness-110 focus:ring-purple-primary dark:focus:ring-purple-dark active:ring-purple-primary dark:active:ring-purple-dark transition font-semibold focus:outline-none focus:ring-4 focus:ring-opacity-50 active:ring-4 active:ring-opacity-50 flex shadow-sm border text-base px-4 py-2 rounded-lg text-lg" 
  href="https://wa.me/message/UEPODIF6XTSYK1" onClick={handleClick} target="_blank" rel='nofollow'
>
  Empezar
</a>
            </div>
            <div className='md:hidden py-6 bg-slate-200'></div>
    </div>
  );
};

export default VideoPlayer;
