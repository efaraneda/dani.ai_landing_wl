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
  <div className='bg-white w-full -mt-14'>
    <h2 id="funciona" className='md:hidden mt-10 py-20 flex flex-col items-center justify-center text-3xl font-bold text-center text-oxford'>
      ¿Cómo funciona?
    </h2> 
    <div className="md:hidden grid grid-rows-2">
      <div className="flex flex-col items-center justify-center -mt-48">
      <p className='w-[70%] text-slate-500 italic flex flex-col text-right justify-right '>Clic aquí 👇</p>
      <div className="w-[91%] py-0.5 shadow-md border border-gray-400 rounded-xl">
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
              <a>Resultados</a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center h-[200px]"> {/* Set a fixed height */}
  <div className="md:hidden h-full text-justify items-center w-[75%] -mt-36">
    {isButtonActive('Inicio') ? 'Comienza la evaluación en WhatsApp. En promedio, toma 30 minutos completarla y obtener los resultados.' : 
    isButtonActive('Durante') ? 'Dani te hará distintos tipos de preguntas a lo largo de la evaluación. Debes responder de manera natural y conciente, de esa forma nuestra tecnología podrá generar resultados precisos y útiles.' : 
    isButtonActive('Fin') ? 'Al finalizar, se genera un documento que ofrece un valioso enfoque pedagógico y clínico. Está formulado bajo un marco conceptual que facilita la comprensión del problema y su origen.' : 
    isButtonActive('Documento') ? (
      <span>
        Revisa el <a className='font-semibold underline text-blue-500' target="_blank" rel='nofollow' href="ficha-ejemplo.pdf">Caso de Fernanda</a>, cómo ejemplo. Todos los Casos tienen la misma estructura, pero varía su contenido según las particularidades de cada uno. Además, incluyen Fortalezas del Paciente, Plan de Tratamiento, Antecedentes generales, Hipótesis de trabajo, Metas sugeridas y Psicoterapeutas adecuados para el Caso en particular, para comenzar a trabajar en el problema inmediatamente.{' '}
        
      </span>
    ) : ''}
  </div>
</div>
   </div>
  </div>

  
  <div className="md:w-[90%] grid md:grid-cols-2 sm:flex-col md:flex-row relative h-auto sm:mt-14 sm:mb-4 gap-4">
  <div></div>
  <div id="funciona">
       <h2 className='sm:hidden  mb-10 mt-40 md:mt-36 flex flex-col px-14 items-left justify-left text-3xl font-bold text-left text-oxford'>      ¿Cómo funciona?
</h2> 
      <p className='sm:hidden md:w-[340px] flex flex-col justify-center text-slate-500 italic items-right text-right justify-right'>Clic aquí 👇 </p>  
  </div>  
    
</div>
<div className="md:w-[90%] grid grid-cols-1 md:grid-cols-2 sm:flex-col md:flex-row relative h-auto sm:mt-14 gap-4">

  <div className="sm:-mt-10 flex items-center justify-center md:-mr-16">

  {isButtonActive('Inicio') ? <img
        title="Conoce a DaniGPT"
        controlsList="nodownload"
        src="parte_inicial_demo_web.gif"
        id="acceso"
        className="flex flex-col rounded-xl sm:w-[80%] sm:h-auto md:h-auto md:w-[250px]"
      ></img> : 
      isButtonActive('Durante') ? <img
      title="Conoce a DaniGPT"
      controlsList="nodownload"
      src="parte_medio_demo_web.gif"
      id="acceso"
      className="flex flex-row rounded-xl sm:w-[80%] sm:h-auto md:h-auto md:w-[250px]"
    ></img> : 
      isButtonActive('Fin') ? <img
      title="Conoce a DaniGPT"
      controlsList="nodownload"
      src="parte_final_demo_web.gif"
      id="acceso"
      className="rounded-xl sm:w-[80%] sm:h-auto md:h-auto md:w-[250px]"
    ></img> : 
      isButtonActive('Documento') ? <iframe
      src="ficha-ejemplo.pdf"
      className="rounded-xl sm:w-[80%] sm:h-[30vh] md:-mt-58 sm:mt-20 md:h-[70vh] md:w-[300px]"
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
                    ? 'text-navy py-1 px-6 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                    : 'cursor-pointer py-1 px-6 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('Inicio')}
              >
                <h3>1</h3>
              </div>
              <div
                className={`${
                  isButtonActive('Durante') 
                  ? 'text-navy py-1 px-6 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                  : 'cursor-pointer py-1 px-6 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'

                }`}
                onClick={() => handleButtonClick('Durante')}
              >
                <a>2</a>
              </div>
              <div
                className={`${
                  isButtonActive('Fin') 
                  ? 'text-navy py-1 px-6 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                  : 'cursor-pointer py-1 px-6 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('Fin')}
              >
                <a>3</a>
              </div>
              <div
                className={`${
                  isButtonActive('Documento') 
                  ? 'text-navy py-1 px-4 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                  : 'cursor-pointer py-1 px-4 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('Documento')}
              >
                <a>Resultados</a>
              </div>
            </div>
          </div>
        </div>
          <div className="sm:hidden h-full flex items-center text-justify justify-left w-[80%] md:-mt-16">
            {isButtonActive('Inicio') ? 'Comienza la evaluación en WhatsApp. En promedio, toma 30 minutos completarla y obtener los resultados.' : isButtonActive('Durante') ? 'Dani te hará distintos tipos de preguntas a lo largo de la evaluación. Debes responder de manera natural y honesta, de esa forma nuestra tecnología podrá generar resultados precisos y útiles.' : isButtonActive('Fin') ? 'Al finalizar, se genera un documento que ofrece un valioso enfoque pedagógico y clínico. Está formulado bajo un marco conceptual que facilita la comprensión del problema y su origen.'   : isButtonActive('Documento') ? (
      <span>
        Revisa el <a className='font-semibold underline text-blue-500' target="_blank" rel='nofollow' href="ficha-ejemplo.pdf">Caso de Fernanda</a>, cómo ejemplo. Todos los Casos tienen la misma estructura, pero varía su contenido según las particularidades de cada uno. Además, incluyen Fortalezas del Paciente, Plan de Tratamiento, Antecedentes generales, Hipótesis de trabajo, Metas sugeridas y Psicoterapeutas adecuados para el Caso en particular, para comenzar a trabajar en el problema inmediatamente.{' '}
        
      </span>
    ) : ''}
          </div>
      </div>
    </div>
    </div>
  );
};

export default VideoPlayer;
