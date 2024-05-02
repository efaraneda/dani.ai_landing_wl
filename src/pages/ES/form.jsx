import React, { useState, useEffect } from 'react';
import invocarLambda from './lambda';

function Form() {
  const [pregunta, setPregunta] = useState("...Cargando preguntas...");
  const [respuesta, setRespuesta] = useState("");
  const [api, setApi] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [username, setUsername] = useState(null);
  const [typingInProgress, setTypingInProgress] = useState(false); // Estado para controlar si el efecto de escritura está en progreso

  const handleInvocarLambda = async (user, question) => {
    try {
      setTypingInProgress(true);
      setPregunta("")
      const response = await invocarLambda(user, question); // Invoca la función Lambda
      if (response && response.length > 1) {
        
        setApi(response); // Actualiza la respuesta
        
        iniciarEfectoMaquinaEscribir(response[1]); // Inicia el efecto de máquina de escribir
        setObjetivo(response[0]); 
        if(response[0].includes('Objetivo 1: Dar las gracias')){
          localStorage.removeItem('Olivia-user')
        }
      } else {
        console.error('Respuesta de Lambda incompleta:', response);
      }
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
    await handleInvocarLambda(username, respuesta); // Invoca Lambda al enviar formulario
    setPregunta(""); // Limpia la pregunta después de enviarla
    setRespuesta(""); // Limpia la respuesta después de enviarla
  };

  const iniciarEfectoMaquinaEscribir = (texto) => {
    let currentIndex = -1;
    const typingEffect = setInterval(() => {
      if (currentIndex < texto.length-1) {
        setPregunta(prevTexto => prevTexto + texto[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingEffect); // Detiene el efecto de escritura
        setTypingInProgress(false);
      }
    }, 30); // Velocidad de escritura en milisegundos
  };
  
  useEffect(() => {
    if (localStorage.getItem('Olivia-user') !== null) {
      setUsername(localStorage.getItem('Olivia-user'));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (username !== null && pregunta === "...Cargando preguntas...") {
        // Espera 1 segundo antes de invocar la función Lambda
        await new Promise(resolve => setTimeout(resolve, 1000));
        await handleInvocarLambda(username);
      }
    };
  
    fetchData();
  }, [username, pregunta]);
    
    
    
    return (
      <div className="flex bg-greenb2b h-full">
  <div className='w-full absolute grid grid-cols-4 h-[8vh]' style={{ gridTemplateColumns: '20% auto auto 5%' }}>
  <div className=''></div>
  <div className=''></div>
    <div className='text-white w-full text-right justify-end items-center flex'>{username !== null ? <div>Sesión iniciada como <span className='font-bold'>{username}🤖</span></div> : <a href="/login" className="shadow-xl hover:bg-white hover:text-greenb2b border border-white rounded-2xl px-4 py-1">Iniciar sesión</a>}</div>
  </div>
    <div className='w-full grid grid-cols-3' style={{ gridTemplateColumns: '10% auto 10%' }}> {/* Aplicar grid-cols-3 aquí */}
      <div className=''></div>
      <div className=' grid grid-rows-5'>  {/* Establecer diferentes tamaños de columna */}
        <div className=''></div>
        <div className='mx-auto text-4xl text-white'>{username !== null ? pregunta: <div className='text-center flex flex-col'>¡Inicia sesión para comenzar con las preguntas!</div>}</div>
        <div></div>
        <div className='mx-auto w-full text-xl text-right justify-end items-center'>
        {!typingInProgress && username !== null ?<form onSubmit={handleSubmit}>
        {!typingInProgress && (
                  <button type="submit" className='bg-white text-black font-bold px-2 py-1 rounded hover:bg-black hover:text-white'>
                    Enviar
                  </button>
                )}

                <textarea
                  required
                  placeholder='Escribe aquí'
                  id="respuesta"
                  value={respuesta}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (!typingInProgress && e.key === 'Enter' && !e.shiftKey) {
                      setTypingInProgress(true)
                      e.preventDefault(); // Evita que se agregue una nueva línea en el textarea
                      handleSubmit(e); // Pasa el objeto de evento e a la función handleSubmit
                      
                    }
                  }}
                  style={{ resize: 'none', verticalAlign: 'bottom' }}
                  className="text-white w-full h-20 px-4 py-6 bg-greenb2b border-b border-white focus:outline-none focus:border-b "
                ></textarea>
    
              
              <label htmlFor="respuesta" className="flex flex-col items-center block text-gray-300 py-1">
              *Una respuesta larga es preferible a una muy breve.
              </label>

          </form>:              <label htmlFor="respuesta" className="font-bold flex flex-col items-center block text-gray-300 py-1">
          ⏳ Cargando...
              </label>}
      </div>
      </div>
      <div className='bg-greenb2b h-screen'></div>
    </div> 
  </div>

    );
  }

  export default Form;
