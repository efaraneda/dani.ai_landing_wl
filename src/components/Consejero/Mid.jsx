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
  <div className='bg-white w-full ' id="work">
    <div className='bg-slate-200 w-full md:h-auto sm:h-auto sm:-mt-8 flex flex-col items-center justify-center'>    
      <div className='flex items-center mb-8 mt-10 sm:mt-6'>
        <img src="aws.png" alt="AWS icon" className="hover:brightness-110 w-auto md:h-[7vh] sm:h-[4vh]"></img>
        <img src="Theragen2024.png" alt="Trust icon" className="hover:brightness-110 md:px-[20vh] sm:px-[7vh] w-auto md:h-[9vh] sm:h-[5vh]"></img>
        <img src="MicrosoftForStartups.webp" alt="Google icon" className="hover:brightness-110 w-auto md:h-[8vh] sm:h-[5vh]"></img>
      </div>
    </div>

    <h2 id="funciona" className='md:hidden mt-10  py-20 flex flex-col items-center justify-center text-3xl font-bold text-center text-oxford'>
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
              <a>Delve Deeper</a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center h-[200px]"> {/* Set a fixed height */}
        <div className="md:hidden -mt-48 h-full text-justify items-center w-[75%]">
          {isButtonActive('Inicio') ? 'Saluda 👋 a DaniGPT. ¡Puedes compartir una situación específica, síntomas, hacer preguntas, pedir consejos o simplemente compartir tu progreso!' : 
          isButtonActive('Durante') ? 'Dani responderá de manera natural y amigable. Ella puede hacer preguntas para entender mejor tu situación, guiarte paso a paso en la práctica de diferentes técnicas y revisar tu progreso de vez en cuando.' : 
          isButtonActive('Fin') ? "Todo el mundo ama a DaniGPT. Es el consejero perfecto, siempre está ahí cuando más la necesitas. Según nuestros datos, los usuarios tienen más probabilidades de obtener resultados después de 8 semanas con al menos 2 veces por semana de uso." : 
          isButtonActive('Documento') ? 'Justo como un consejero humano, DaniGPT funciona mejor cuando tiene un contexto estructurado sobre ti, tu trasfondo, tu problema y posibles causas fundamentales. Por tan solo $9, puedes desbloquear esta función adicional que es una evaluación psicológica exhaustiva que proporciona tanto al usuario como a DaniGPT todo lo que necesitan para tomar las mejores decisiones. Construido sobre una base de técnicas clínicamente probadas de la terapia cognitivo-conductual.' : ''}
        </div>
      </div>
    </div>
  </div>

  
  <div className="md:w-[90%] grid md:grid-cols-2 sm:flex-col md:flex-row relative h-auto sm:mt-14 sm:mb-4 gap-4">
  <div></div>
  <div id="funciona">
       <h2 className='sm:hidden mb-10 mt-40 md:mt-36 flex flex-col px-14 items-left justify-left text-3xl font-bold text-left text-oxford'>      ¿Cómo funciona?
</h2> 
      <p className='sm:hidden md:w-[340px] flex flex-col justify-center text-slate-500 italic items-right text-right justify-right'>Clic aquí 👇 </p>  
  </div>  
    
</div>
<div className="md:w-[90%] grid grid-cols-1 md:grid-cols-2 sm:flex-col  md:flex-row relative h-auto sm:mt-14 gap-4">

  <div className="sm:-mt-10 flex items-center justify-center md:-mr-16">

  {isButtonActive('Inicio') ? <img
        title="Conoce a DaniGPT"
        controlsList="nodownload"
        src="parte_inicial_demo_web.gif"
        id="acceso"
        className="-mt-48 flex flex-col rounded-xl sm:w-[80%] sm:h-auto md:h-auto md:w-[250px]"
      ></img> : 
      isButtonActive('Durante') ? <img
      title="Conoce a DaniGPT"
      controlsList="nodownload"
      src="parte_medio_demo_web.gif"
      id="acceso"
      className="-mt-48 flex flex-row rounded-xl sm:w-[80%] sm:h-auto md:h-auto md:w-[250px]"
    ></img> : 
      isButtonActive('Fin') ? <img
      title="Conoce a DaniGPT"
      controlsList="nodownload"
      src="parte_final_demo_web.gif"
      id="acceso"
      className="-mt-48 rounded-xl sm:w-[80%] sm:h-auto md:h-auto md:w-[250px]"
    ></img> : 
      isButtonActive('Documento') ? <iframe
      src="ficha-ejemplo.pdf"
      className="-mt-48 rounded-xl sm:w-[80%] sm:h-auto md:-mt-58 sm:mt-32 md:h-[70vh] md:w-[300px]"
      seamless
      allowFullScreen
      title="Example"
    ></iframe>
: ''}

      

  </div>
      <div className="sm:hidden grid grid-rows-3 ">
        <div>
          <div className="row-span-1 md:px-1 py-0.5 md:w-[370px] shadow-md border border-gray-400 rounded-xl justify-center items-center">
            <div className="flex justify-center md:gap-4">
              <div
                className={`${
                  isButtonActive('Inicio')
                    ? 'flex place-items-center md:max-h-12 text-navy py-1 px-6 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                    : 'flex place-items-center md:max-h-12 cursor-pointer py-1 px-6 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('Inicio')}
              >
                <a>1</a>
              </div>
              <div
                className={`${
                  isButtonActive('Durante') 
                  ? 'flex place-items-center md:max-h-12 text-navy py-1 px-6 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                  : 'flex place-items-center md:max-h-12 cursor-pointer py-1 px-6 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'

                }`}
                onClick={() => handleButtonClick('Durante')}
              >
                <a>2</a>
              </div>
              <div
                className={`${
                  isButtonActive('Fin') 
                  ? 'flex place-items-center md:max-h-12 text-navy py-1 px-6 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                  : 'flex place-items-center md:max-h-12 cursor-pointer py-1 px-6 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('Fin')}
              >
                <a>3</a>
              </div>
              <div
                className={`${
                  isButtonActive('Documento') 
                  ? 'flex place-items-center text-navy py-1 md:max-h-12 px-4 border shadow-sm bg-lavanda text-black rounded-xl text-center relative'
                  : 'flex place-items-center cursor-pointer md:max-h-12 py-1 px-4 border border border-slate-400 hover:bg-slate-200 rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('Documento')}
              >
                <a>Profundiza</a>
              </div>
            </div>
          </div>
        </div>
        <div className={`${isButtonActive('Documento') ? "sm:hidden h-full flex items-center text-justify w-[80%] md:-mt-14 md:py-1" : isButtonActive('Fin') ? "sm:hidden h-full flex items-center text-justify w-[80%] md:-mt-6" : isButtonActive('Durante') ? "sm:hidden h-full flex items-center text-justify w-[80%] md:-mt-4" : "sm:hidden h-full flex items-center text-justify w-[80%] md:-mt-7"}`}>

            {isButtonActive('Inicio') ? 'Saluda 👋 a DaniGPT. ¡Puedes compartir una situación específica, síntomas, hacer preguntas, pedir consejos o simplemente compartir tu progreso!' : isButtonActive('Durante') ? 'Dani responderá de manera natural y amigable. Ella puede hacer preguntas para entender mejor tu situación, guiarte paso a paso en la práctica de diferentes técnicas y revisar tu progreso de vez en cuando.' : isButtonActive('Fin') ? "Todo el mundo ama a DaniGPT. Es el consejero perfecto, siempre está ahí cuando más la necesitas. Según nuestros datos, los usuarios tienen más probabilidades de obtener resultados después de 8 semanas con al menos 2 veces por semana de uso."   : isButtonActive('Documento') ? 'Justo como un consejero humano, DaniGPT funciona mejor cuando tiene un contexto estructurado sobre ti, tu trasfondo, tu problema y posibles causas fundamentales. Por tan solo $9, puedes desbloquear esta función adicional que es una evaluación psicológica exhaustiva que proporciona tanto al usuario como a DaniGPT todo lo que necesitan para tomar las mejores decisiones. Construido sobre una base de técnicas clínicamente probadas de la terapia cognitivo-conductual.' : ''}
          </div>
      </div>
    </div>
    </div>
  );
};
export default VideoPlayer;
