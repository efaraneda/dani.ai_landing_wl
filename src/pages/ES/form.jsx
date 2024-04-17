import React, { useState, useEffect } from 'react';

function Form() {
  const [pregunta, setPregunta] = useState("¿Cómo describirías el ambiente en tu sala durante las clases?");
  const [respuesta, setRespuesta] = useState("");

  var p2 = '¿Con qué frecuencia hay desorden durante las clases?'
 if (pregunta == '¿Con qué frecuencia hay desorden durante las clases?'){
    var p2 = '¿Cómo crees que afecta el ambiente de la sala a tu capacidad para concentrarte?'
 }else if (pregunta == '¿Cómo crees que afecta el ambiente de la sala a tu capacidad para concentrarte?'){
 var p2 = '¿Te has sentido incómodo en el curso?'
 }
  const handleChange = (event) => {
    setRespuesta(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('La respuesta es:', respuesta);
    setRespuesta("");
    setPregunta("");
    // Lógica del efecto de máquina de escribir
    let currentIndex = -1;
    const typingEffect = setInterval(() => {
      if (currentIndex < p2.length-1) {
        setPregunta((prevPregunta) => prevPregunta + p2[currentIndex]);
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
