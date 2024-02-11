import React, { useState } from 'react';
import PlanCard from './PlanCard';

const Mid = () => {
  const [showChilePrices, setShowChilePrices] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const id_1 = urlParams.get('id_1');
  const id_2 = urlParams.get('id_2');
  const toggleShowChilePrices = () => {
    setShowChilePrices(!showChilePrices);
  };

  return (
    <div id="pricing" className="flex flex-col items-center p-4">
      <div className="mb-2 text-center">
        <h1 className="mb-4 text-4xl font-black text-black">Precios</h1>
        <p className="text-lg text-black md:w-[90vh]">
          Elige la mejor opción para ti. Empieza a trabajar en tus metas hoy!
          </p>
          <div  className="flex justify-center  mx-auto w-[auto] sm:max-w-[320px] max-w-[70%] bg-slate-200 rounded-xl py-5 mt-4">
          <div className="flex px-2  mr-8">
      <p className="flex justify-center items-center">Dólares </p>
      <img src="usa.png" className="rounded w-auto h-4 my-auto justify-center items-center ml-2" />
    </div>
    <div className="rounded-full w-16 h-8 sm:h-6 bg-white ">        
      <button
        className={`rounded-full w-10 sm:w-8 sm:h-6 h-8 bg-crayola flex items-center justify-center ${showChilePrices ? 'ml-auto' : 'mr-auto'}`}
        onClick={toggleShowChilePrices}
      >
          </button>
        </div>
        <div className="flex px-2  justify-center items-center ml-8"> <img src="chile.png" className='rounded my-auto justify-center items-center mr-2 w-auto h-4'></img><p>Pesos</p></div>
      </div>

      </div>

      <div className="flex flex-col gap-8 p-10 md:flex-row">
        <PlanCard
          color="#000000"
          name="DaniGPT Semanal"
          description="Ideal para empezar"
          features={['Mensajes de Texto & Voz ilimitados', 'Sin cobros automáticos', '7 días de acceso']}
          btnText="Acceso Semanal"
          price={showChilePrices ? "3.500" : "3.5"}
          id={id_1}
        />
        <PlanCard
          color="#000080"
          name="DaniGPT Mensual"
          description="Ideal para renovar"
          features={['Mensajes de Texto & Voz ilimitados', 'Sin cobros automáticos', '30 días de acceso']}
          btnText="Acceso Mensual"
          price={showChilePrices ? "11.000" : "11"}
          id={id_2}
        />
      </div>

    </div>
  );
};

export default Mid;
