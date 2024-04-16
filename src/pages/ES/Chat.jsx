import React, { useState, useEffect } from 'react';
import { IoMdStar } from 'react-icons/io';

function Privacidad() {
  const [number, setNumber] = useState(0);

  // Función para aumentar el número por un valor aleatorio entre 5 y 1500
  function increaseNumber() {
    const incremento = Math.floor(Math.random() * (16001) - 100);
    setNumber(prevNumber => prevNumber + incremento); // Actualiza el estado utilizando setNumber
    console.log(`Variable aumentada por ${incremento}. Nuevo valor: ${number}`);
  }

  
  useEffect(() => {
    const intervalId = setInterval(increaseNumber, 20*1000);
    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div className="sm:bg-lavanda">
      <div className="md:mt-10 flex flex-col sm:font-bold">
        <h1 className="ml-32 text-xl md:mb-4 sm:mx-auto sm:text-bizantino">Conversación con Olivia</h1>
        <div className="ml-32 grid grid-cols-4">
          {/* <div className="flex ">
            Progreso
            <progress className=" ml-4 my-auto w-full h-4 rounded-full bg-white-200 overflow-hidden" value={0.2} />
          </div>
          <div> </div>
          <div className="flex">
            Puntos ganados: <b className="ml-2 my-auto">{number}</b>
            <IoMdStar className="my-auto ml-2 text-yellow-500 text-xl" />
          </div>*/}
        </div>
      </div>
      <div className="md:mt-10">
        <iframe
          id="iFrame"
          src="https://efaraneda-olivia.hf.space"
          frameborder="0"
          width="100%"
          height="1400px"
        ></iframe>
      </div>
    </div>
  );
}

export default Privacidad;
