import React, { useState } from 'react';



const Equipo = () => {

  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const handleButtonClick = () => {
    console.log('inputValue:'+inputValue)
    fetch(`https://3sic7btedy5f4h4hwygwurnf6y0fgpso.lambda-url.us-west-1.on.aws/?email=${inputValue}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Aquí puedes manejar la respuesta si es necesario
      })
      .catch(error => {
        // Aquí puedes manejar errores de red
        console.error('There was a problem with your fetch operation:', error);
      });
  };
  
  return (
    
<section className="flex flex-col items-center justify-center w-full mb-16" >
<div className='bg-slate-200 md:w-full md:h-auto sm:h-auto sm:-mt-8 flex flex-col items-center justify-center py-10'>
      <h4 className="font-bold sm:w-[90%] text-justify sm:text-center text-3xl lg:text-4xl mt-10">We also partner with businesses & Medical Centers</h4><div className='text-lg py-4 text-justify sm:w-[90%] sm:text-center'> Explore how we can enhance corporate well-being or support your psychological practice.</div>
      <div className="sm:w-[90%] fade-in-translate visible">
        <div  className="mt-4 flex items-center gap-x-3 max-w-2xl mx-auto">
          <div className="relative w-full" id="equipo">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 dark:text-gray-400"><rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <input type="text" id="email" className=" bg-gray-50 focus:outline-none border border-gray-300 text-gray-900 rounded-xl focus:ring-purple-primary focus:border-purple-primary block w-full pl-10 p-2.5  dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-primary dark:focus:border-purple-primary text-lg" placeholder="Email" required="" value={inputValue} onChange={handleInputChange} ></input></div>
            <button 
  className="border-purple-primary dark:border-purple-light bg-crayola from-purple-primary to-purple-dark dark:from-white dark:to-purple-light text-white dark:text-purple-dark hover:brightness-110 focus:ring-purple-primary dark:focus:ring-purple-dark active:ring-purple-primary dark:active:ring-purple-dark transition font-semibold focus:outline-none focus:ring-4 focus:ring-opacity-50 active:ring-4 active:ring-opacity-50 flex shadow-sm border text-base px-4 py-2 rounded-lg text-lg" 
  type="submit"
  onClick={handleButtonClick}

>
  Send
</button>
            </div>
            <div className="pt-5"></div></div>  
  <div className='flex items-center mb-10 mt-12 sm:mt-12  justify-center'>
    <img src="../aws.png" alt="AWS icon" className="sm:hidden hover:brightness-110 w-auto md:h-[7vh] sm:h-[5vh]"></img>
    <img src="../Theragen2024.png" alt="Trust icon" className="hover:brightness-110 sm:-ml-10 md:px-[12vh] sm:px-[4vh] w-auto md:h-[10vh] sm:h-[9vh]"></img>
    <img src="../MicrosoftForStartups.webp" alt="Google icon" className="hover:brightness-110 w-auto md:h-[8vh] sm:h-[7vh]"></img>
  </div>
</div>
<h4 className="font-bold text-center text-3xl lg:text-4xl mt-24">Founding Team</h4>
    <p className="mt-4 text-lg text-black sm:w-[90%] sm:text-center">Blending Clinical Psychology & Engineering expertise.</p>
<div className="grid md:grid-cols-2 sm:grid-rows-2 mt-10">
<div className="px-20 w-80% flex flex-col items-center justify-center bg-white-500">
    <div className="flex items-center justify-center"> 
      <img alt="" src="../Anastasia-removebg.png" className="w-[130px] h-auto rounded-full" />
    </div>
    <p className="text-2xl mt-2">Anastasia Batkhina</p>
    <p className="text-center text-slate-500 text-base">Ph.D., Clinical Director & Co-founder</p>
    <div className="flex items-center justify-center mt-2"> 
      <a href="https://www.linkedin.com/in/anastasia-batkhina-phd-986b9b10b/" className="bg-red-200 hover:brightness-110 mr-4">
        <img src="../linkedin.png" className="w-[20px] h-auto" alt="LinkedIn" />
      </a>
      <div className="-mt-1 -mr-1">|</div>
      <a href="https://www.researchgate.net/profile/Anastasia-Batkhina" className=" hover:brightness-110 ml-4">
        <img src="../researchgate1714.jpg" className="w-[120px] h-auto" alt="ResearchGate" />
      </a>
    </div>
    <p className="mt-4 md:h-[22vh] text-justify">
    Researcher, Clinical Psychologist, and Ph.D. in Psychology with expertise in building science-backed digital psychology products. Author of over 20 scientific papers. <a className="underline text-crayola" href='https://onlinelibrary.wiley.com/doi/10.1111/famp.12733'>[Learn more]</a> 
    </p>

    </div>
    <div className="px-20 w-80% flex flex-col items-center justify-center bg-white-500">
    <div className="md:mt-8 flex items-center justify-center"> 
      <img alt="" src="../Emiliano-removebg-preview.png" className="w-[130px] h-auto rounded-full md:-mt-8 sm:mt-14" />
    </div>
    <p className="text-2xl mt-2">Emiliano Araneda</p>
    <p className="text-slate-500 text-base mb-2">CTO & Co-founder</p>
      <a href="https://www.linkedin.com/in/efaraneda/" className=" hover:brightness-110">
        <img src="../linkedin.png" className="items-center justify-center w-[20px] h-auto" alt="LinkedIn" />
      </a>
    <p className="mt-4   md:h-[22vh] text-justify">
    Data Engineer. Master's in Administration and Strategy.
Master's in Data Science candidate.
Specialist in optimizing Artificial Intelligence Language Models.
    </p>

    </div>
    
  </div>
</section>

  );
};



export default Equipo