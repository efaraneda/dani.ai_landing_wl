import React, { useState, useEffect } from 'react';
import invocarLambda from './lambda';

function Form() {
  const [pregunta, setPregunta] = useState("Saluda para comenzar!");
  const [respuesta, setRespuesta] = useState("");
  const [api, setApi] = useState("");



  const handleInvocarLambda = async () => {
    try {
      const username = localStorage.getItem('Olivia-usr');
      if (!username) {
        setRespuesta("ERROR: NOMBRE DE USUARIO NO ENCONTRADO. Ingresa y vuelve a intentarlo");
        iniciarEfectoMaquinaEscribir("ERROR: NOMBRE DE USUARIO NO ENCONTRADO. Ingresa y vuelve a intentarlo");
        return;
      }

      const response = await invocarLambda(username, pregunta); // Invoca la función Lambda
      setApi(response); // Actualiza la respuesta
      iniciarEfectoMaquinaEscribir(response); // Inicia el efecto de máquina de escribir
    } catch (err) {
      // Maneja el error si ocurre alguno
      console.error('Error al invocar la función Lambda:', err);
      // Puedes mostrar un mensaje de error al usuario aquí
    }
  };

  const handleChange = (event) => {
    setRespuesta(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleInvocarLambda(); // Espera a que se complete la invocación antes de continuar
    setRespuesta("");
    setPregunta("");
  };

  const iniciarEfectoMaquinaEscribir = (texto) => {
    let currentIndex = -1;
    const typingEffect = setInterval(() => {
      if (currentIndex < texto.length-1) {
        setPregunta(prevTexto => prevTexto + texto[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingEffect); // Detiene el efecto de escritura
      }
    }, 30); // Velocidad de escritura en milisegundos
  };
  
  

  return (
    <div className="flex bg-lavanda h-full">
  <div className='w-full grid grid-cols-3' style={{ gridTemplateColumns: '10% auto 10%' }}> {/* Aplicar grid-cols-3 aquí */}
    <div className=''></div>
    <div className=' grid grid-rows-5'>  {/* Establecer diferentes tamaños de columna */}
      <div className=''></div>
      <div className='mx-auto text-4xl text-gray-700'>{pregunta}</div>
      <div></div>
      <div className='mx-auto w-full text-xl '>
        <form onSubmit={handleSubmit}>
            <button type="submit" className='  bg-black text-white px-2 py-1 rounded hover:bg-gray-700'>
                    Enviar
                </button>

            <textarea
            required
            id="respuesta"
            value={respuesta}
            onChange={handleChange}
            style={{ resize: 'none' , verticalAlign: 'bottom' }}
            className="text-black w-full h-20 px-4 py-6 bg-lavanda border-b border-black focus:outline-none focus:border-b "></textarea>    
            <label htmlFor="respuesta" className="flex flex-col items-center block text-gray-400 py-1">
            *Tip: Tu respuesta puede ser tan larga como necesites. . .
            </label>

        </form>
    </div>
    </div>
    <div className=''></div>
  </div> 
</div>

  );
}

export default Form;
