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
<div className='bg-white w-full'>
    <h2 id="funciona" className='md:hidden mt-20 flex flex-col items-center  justify-center text-3xl font-bold text-center text-oxford'>
    How does it work?
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
                            <h3>Beginning</h3>
                          </div>
                          <div
                            className={`${
                              isButtonActive('Durante') ? 'text-navy py-1 px-4 border border-navy rounded-xl text-center relative'
                              : 'cursor-pointer py-1 px-4 border border-white rounded-xl text-center relative'
                            }`}
                            onClick={() => handleButtonClick('Durante')}
                          >
                            <a>During</a>
                          </div>
                          <div
                            className={`${
                              isButtonActive('Fin') ? 'text-navy py-1 px-4 border border-navy rounded-xl text-center relative'
                              : 'cursor-pointer py-1 px-4 border border-white rounded-xl text-center relative'
                            }`}
                            onClick={() => handleButtonClick('Fin')}
                          >
                            <a>Ending</a>
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
                        {isButtonActive('Inicio') ? "To get started, open WhatsApp, look for Dani's WhatsApp ( +56 9 8587 7944 ), say hello 👋 and start the assessment!" : 
                        isButtonActive('Durante') ? 'During the assessment, Dani will ask you various types of questions throughout the evaluation. You can respond with text or voice messages.' : 
                        isButtonActive('Fin') ? 'At the end of the assessment, Dani will automatically send you a PDF file through WhatsApp. This file contains your entire case structured to help you and other professionals understand your emotions.' : 
                        isButtonActive('PDF') ? 'Review this example case. All cases have the same structure, but their content varies depending on the context and particulars of each one.' : ''}
                      </div>
                    </div>
                  </div>
  </div>
  
  <div className="md:w-[90%] grid md:grid-cols-2 sm:flex-col md:flex-row relative h-auto sm:mt-14 sm:mb-4 gap-4">
  <div></div>
  <h2 id="funciona" className='sm:hidden mb-10 mt-40 md:mt-36 flex flex-col px-14 items-left justify-left text-3xl font-bold text-left text-oxford'>
  How does it work?
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
          <div className="row-span-1 md:px-1 py-0.5 md:w-[376px] shadow-md border border-gray-400 rounded-xl justify-center items-center">
            <div className="flex justify-center md:gap-3">
              <div
                className={`${
                  isButtonActive('Inicio')
                    ? 'text-navy py-1 px-4 border border-navy rounded-xl text-center relative'
                    : 'cursor-pointer py-1 px-4 border border-white rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('Inicio')}
              >
                <h3>Beginning</h3>
              </div>
              <div
                className={`${
                  isButtonActive('Durante') ? 'text-navy py-1 px-4 border border-navy rounded-xl text-center relative'
                  : 'cursor-pointer py-1 px-4 border border-white rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('Durante')}
              >
                <a>During</a>
              </div>
              <div
                className={`${
                  isButtonActive('Fin') ? 'text-navy py-1 px-4 border border-navy rounded-xl text-center relative'
                  : 'cursor-pointer py-1 px-4 border border-white rounded-xl text-center relative'
                }`}
                onClick={() => handleButtonClick('Fin')}
              >
                <a>Ending</a>
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
            {isButtonActive('Inicio') ? "To get started, open WhatsApp, look for Dani's WhatsApp ( +56 9 8587 7944 ), say hello 👋 and start the assessment!" : 
            isButtonActive('Durante') ? 'During the assessment, Dani will ask you various types of questions throughout the evaluation. You can respond with text or voice messages.' :
            isButtonActive('Fin') ? 'At the end of the assessment, Dani will automatically send you a PDF file through WhatsApp. This file contains your entire case structured to help you and other professionals understand your emotions.' :
             isButtonActive('PDF') ? 'Review this example case. All cases have the same structure, but their content varies depending on the context and particulars of each one.' : ''}
          </div>
      </div>
    </div>
    </div>
  );
};

export default VideoPlayer;
