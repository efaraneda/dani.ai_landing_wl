import React, { useState, useEffect } from 'react';
import invocarLambda from './lambda';

function Form({ iniciar }) {
  const [pregunta, setPregunta] = useState('*Da clic en el botón "Pongámoslo a prueba" para iniciar');
  const [respuesta, setRespuesta] = useState("");
  const [autodemo, setAutodemo] = useState(1);
  const [esconder, setEsconder] = useState(true);
  const [tip, setTip] = useState('');
  

  const respuestas = ['Hola. Bien...', 'kjadakdakdjakdakdjakdjakdjakdjakjdakjdaljdnalsknasd', 'Hhmmmm, bueno si, a veces pasan cosas pero no es tan común']
  const preguntas = ['Hola, ¿cómo estás?', '¡Qué bueno! ahora vamos a empezar las preguntas ','¿Has visto a algún compañero desafiar al profesor? ¿Cómo?', '¡Parece que tu teclado se volvió loco! 😄 ¿Recuerdas alguna vez que un compañero haya desafiado al profesor? 🤔', "¡Entiendo! ¿Te viene a la cabeza algún ejemplo específico? 😊"]
  const tips = ['*NOTA: Supongamos que el cuestionario Smart comienza saludando','*NOTA: Y el alumno responde así. . .', '*NOTA: Nuestra tecnología lo notará y reformulará la pregunta' , '*NOTA: Así está mejor. Sin datos adecuados, no hay análisis ', '*NOTA: Ahora vas tu. Tu respuesta puede ser tan larga como necesites. . .']

  const iniciarEfectoMaquinaEscribir = (texto, funcion,nivel) => {
    let currentIndex = -1;
    const typingEffect = setInterval(() => {
      if (currentIndex < texto.length-1) {
        if (funcion === 'tip'){
          
          setTip(prevTexto => prevTexto + texto[currentIndex]);
        } else if(funcion === 'pregunta'){
          
          setPregunta(prevTexto => prevTexto + texto[currentIndex]);
        } else if(funcion === 'respuesta'){
          
          setRespuesta(prevTexto => prevTexto + texto[currentIndex]);
        }
        currentIndex++;
        if (texto.length-2 === currentIndex){ 
          if (funcion === 'tip' & nivel === 0){   
          setPregunta("");       
          iniciarEfectoMaquinaEscribir(preguntas[0], 'pregunta', nivel);
          }if (funcion === 'pregunta' & nivel === 0){ 
                     
            setTimeout(() => {
              setTip("");
              iniciarEfectoMaquinaEscribir(tips[1], 'tip', 1);
          }, 2000);
            }if (funcion === 'tip' & nivel === 1){ 
              setRespuesta("");         
              setTimeout(() => {
                iniciarEfectoMaquinaEscribir(respuestas[0], 'respuesta', 1);
            }, 1000);
              
              }if (funcion === 'respuesta' & nivel === 1){ 
                setTimeout(() => {
                  setPregunta("");         
                iniciarEfectoMaquinaEscribir(preguntas[1], 'pregunta', 1);
              }, 1000);
                }if (funcion === 'pregunta' & nivel === 1){ 
                  setTimeout(() => {
                    setPregunta("");         
                    iniciarEfectoMaquinaEscribir(preguntas[2], 'pregunta', 2);
                }, 1000);
                  }if (funcion === 'pregunta' & nivel === 2){ 
                    setTimeout(() => {
                      setRespuesta("");         
                      iniciarEfectoMaquinaEscribir(respuestas[1], 'respuesta', 2);
                }, 1500);
                  }if (funcion === 'respuesta' & nivel === 2){ 
                    setTimeout(() => {setTip("");         
                    iniciarEfectoMaquinaEscribir(tips[2], 'tip', 2);
                  }, 1500);
                    }if (funcion === 'tip' & nivel === 2){ 
                      setTimeout(() => {setPregunta("");         
                      iniciarEfectoMaquinaEscribir(preguntas[3], 'pregunta', 3);
                    }, 1500);
                      }if (funcion === 'pregunta' & nivel === 3){ 
                        setTimeout(() => {setTip("");
                        setRespuesta("");         
                        iniciarEfectoMaquinaEscribir(respuestas[2], 'respuesta', 3);
                      }, 1500);
                        }if (funcion === 'respuesta' & nivel === 3){ 
                             
                            iniciarEfectoMaquinaEscribir(tips[3], 'tip', 3);
                        
                          }if (funcion === 'tip' & nivel === 3){ 
                            setTimeout(() => {  
                            setRespuesta("");
                            setPregunta("");
                            setTip("");
                            iniciarEfectoMaquinaEscribir(preguntas[4], 'pregunta', 4);
                            
                          }, 3200);
                            }if (funcion === 'pregunta' & nivel === 4){ 
                              
                            setTimeout(() => { 
                              iniciarEfectoMaquinaEscribir(tips[4], 'tip', 4);
                                                         
                          }, 1000);
                              }if (funcion === 'tip' & nivel === 4){ 
                              
                                //Habilitar botón de enviar y habilitar funcionalidad con el servidor
                                
                              }

        }
      } else {
        clearInterval(typingEffect); // Detiene el efecto de escritura
      }
    }, 40); // Velocidad de escritura en milisegundos
  };
  
  

  
  useEffect(() => {
    if (iniciar + autodemo === 2) {
      setAutodemo(2);
      console.log('iniciar:', autodemo);
      
      try {
        setTip("");
        setPregunta("");  
        iniciarEfectoMaquinaEscribir(tips[0], 'tip',0) 
                   
        
      } catch (error) {
        console.error("Error in iniciarEfectoMaquinaEscribir:", error);
      }
    }
  }, [iniciar, autodemo]);

  return (
    <div className="flex bg-greenb2b h-[80vh] sm:h-auto sm:min-h-[100vh]">
  <div className='w-full grid grid-cols-3 md:mt-10' style={{ gridTemplateColumns: '10% auto 10%' }}> {/* Aplicar grid-cols-3 aquí */}
    <div className=''></div>
    <div className=' grid grid-rows-5'>  {/* Establecer diferentes tamaños de columna */}
      <div className=''></div>
      <div className='md:mx-auto text-3xl text-white sm:-mt-8' style={{ maxWidth: '100%', overflow: 'hidden', wordWrap: 'break-word'   }}>{pregunta}</div>
      <div></div>
      <div className='mx-auto w-full text-xl md:-mt-10 sm:-mt-14'>
        <form onSubmit={"handleSubmit"}>
        {esconder === true ? null : (
                <button type="submit" className='bg-white text-black font-bold px-2 py-1 rounded hover:bg-black hover:text-white'>
                  Enviar
                </button>
              )}
        
            <textarea 
            required
            id="respuesta"
            value={respuesta}
            onChange={"handleChange"}
            style={{ resize: 'none' , verticalAlign: 'bottom' }}
            className="text-white w-full h-20 px-4 py-6 bg-greenb2b border-b border-white sm:border-black focus:outline-none focus:border-b "></textarea>    
            <label htmlFor="respuesta" className="flex flex-col items-center block text-gray-300">
            {tip}
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
