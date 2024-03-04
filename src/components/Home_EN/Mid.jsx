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
    <h2 className='md:hidden mt-10 py-20 flex flex-col items-center justify-center text-3xl font-bold text-center text-oxford'>
      How does it work?
    </h2> 
    <div className="md:hidden grid grid-rows-2">
      <div className="flex flex-col items-center justify-center -mt-48">
      <p className='w-[70%] text-slate-500 italic flex flex-col text-right justify-right '>Click here 👇</p>
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
              <a >Results</a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center h-[200px]"> {/* Set a fixed height */}
  <div className="md:hidden h-full text-justify items-center w-[75%] -mt-36">
    {isButtonActive('Inicio') ? 'The assessment starts on WhatsApp and typically takes about 30 minutes to finish and receive your results.' : 
    isButtonActive('Durante') ? "Dani will guide you through various questions during the assessment. It's important to answer naturally and truthfully so that our technology can produce accurate and helpful outcomes." : 
    isButtonActive('Fin') ? "After you're done, you'll get a document that presents clinical insights. It's crafted within a conceptual framework designed to make it easier to understand the issue and its origins." : 
    isButtonActive('Documento') ? (
      <span>
        Take a look at <a className='font-semibold underline text-blue-500' target="_blank" rel='nofollow' href="https://prod-bkt-marketing.s3.amazonaws.com/example-file-2.pdf">James's Case</a> as an example. While all cases follow the same format, the content is tailored to the unique aspects of each one. Additionally, they cover the Patient's Strengths, Treatment Plan, General Background, Working Hypotheses, Suggested Goals, and recommend Psychotherapists suited for the specific case, enabling immediate action on the problem. {' '}
        
      </span>
    ) : ''}
  </div>
</div>
   </div>
  </div>

  
  <div id="funciona2" className="md:w-[90%] grid md:grid-cols-2 sm:flex-col md:flex-row relative h-auto sm:mt-14 sm:mb-4 gap-4">
  <div></div>
  <div>
       <h2 className='sm:hidden  mb-10 mt-40 md:mt-36 flex flex-col px-14 items-left justify-left text-3xl font-bold text-left text-oxford'>      How does it work?
</h2> 
      <p className='sm:hidden md:w-[340px] flex flex-col justify-center text-slate-500 italic items-right text-right justify-right'>Click here 👇 </p>  
  </div>  
    
</div>
<div className="md:w-[90%] grid grid-cols-1 md:grid-cols-2 sm:flex-col md:flex-row relative h-auto sm:mt-14 gap-4">

  <div className="sm:-mt-16 flex items-center justify-center md:-mr-16 sm:mb-16">

  {isButtonActive('Inicio') ? <img
        title="Conoce a DaniGPT"
        controlsList="nodownload"
        src="../parte1.gif"
        id="acceso"
        className="flex flex-col rounded-xl sm:-mt-24 sm:w-[80%] sm:h-auto md:h-auto md:w-[250px]"
      ></img> : 
      isButtonActive('Durante') ? <img
      title="Conoce a DaniGPT"
      controlsList="nodownload"
      src="../parte2.gif"
      id="acceso"
      className="flex flex-row rounded-xl sm:-mt-24 sm:w-[80%] sm:h-auto md:h-auto md:w-[250px]"
    ></img> : 
      isButtonActive('Fin') ? <img
      title="Conoce a DaniGPT"
      controlsList="nodownload"
      src="../parte3.gif"
      id="acceso"
      className="rounded-xl sm:w-[80%] sm:-mt-24 sm:h-auto md:h-auto md:w-[250px]"
    ></img> : 
      isButtonActive('Documento') ? <iframe
      src="https://prod-bkt-marketing.s3.amazonaws.com/example-file-2.pdf"
      className="rounded-xl sm:w-[88%] sm:h-[60vh] md:-mt-58 sm:mt-18 md:h-[70vh] md:w-[300px]"
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
                <a>Results</a>
              </div>
            </div>
          </div>
        </div>
          <div className="sm:hidden h-full flex items-center text-justify justify-left w-[80%] md:-mt-16">
            {isButtonActive('Inicio') ? 'The assessment starts on WhatsApp and typically takes about 30 minutes to finish and receive your results.' : isButtonActive('Durante') ? "Dani will guide you through various questions during the assessment. It's important to answer naturally and truthfully so that our technology can produce accurate and helpful outcomes." : isButtonActive('Fin') ? "After you're done, you'll get a document that presents clinical insights. It's crafted within a conceptual framework designed to make it easier to understand the issue and its origins."   : isButtonActive('Documento') ? (
      <span>
        Take a look at <a className='font-semibold underline text-blue-500' target="_blank" rel='nofollow' href="https://prod-bkt-marketing.s3.amazonaws.com/example-file-2.pdf">Jame's Case</a> as an example. While all cases follow the same format, the content is tailored to the unique aspects of each one. Additionally, they cover the Patient's Strengths, Treatment Plan, General Background, Working Hypotheses, Suggested Goals, and recommend Psychotherapists suited for the specific case, enabling immediate action on the problem.{' '}
        
      </span>
    ) : ''}
          </div>
      </div>
    </div>

    <div className='md:hidden bg-slate-200 flex flex-col items-center justify-center py-14'>
      
      <h4 className="font-semibold text-center text-2xl mt-10">Our promise</h4>
      <div className='py-4 w-[60%] text-center text-lg'> In 30 min you will be ready to tackle your issues</div>
         
            <button 
  className="border-purple-primary dark:border-purple-light bg-crayola from-purple-primary to-purple-dark dark:from-white dark:to-purple-light text-white dark:text-purple-dark hover:brightness-110 focus:ring-purple-primary dark:focus:ring-purple-dark active:ring-purple-primary dark:active:ring-purple-dark transition font-semibold focus:outline-none focus:ring-4 focus:ring-opacity-50 active:ring-4 active:ring-opacity-50 flex shadow-sm border text-base px-4 py-2 rounded-lg text-lg" 
  type="submit"
  onClick={handleButtonClick}

>
  Start Now
</button>
            </div>
            <div className='md:hidden py-6 bg-slate-200'></div>
    </div>
  );
};

export default VideoPlayer;
