import React from 'react';
import { MdMemory } from 'react-icons/md';
import { BiSolidConversation } from 'react-icons/bi';
import { VscChecklist } from 'react-icons/vsc';
import { BiSolidLockAlt } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { GiHumanTarget } from 'react-icons/gi';

const WidgetComponent = () => {
  return (
<section className=' md:mt-28 sm:py-14 sm:mb-4 sm:bg-navy md:mt-36 flex flex-col items-center'>
  <div className='bg-white w-full md:w-[70%]'>
  </div>
  {/* div color navy */}
  <div className='md:grid md:grid-cols-4 md:w-[70%] md:h-[400px] 
  bg-navy md:rounded-lg sm:w-full'>

          <div className='max-h-[400px] sm:mx-auto sm:max-w-[80%] sm:mt-24 sm:-mb-8'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform md:translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <BiSolidLockAlt className='text-4xl text-crayola'/>  
              </div>
              <div className='sm:text-center md:ml-7 md:w-[100%] sm:text-xl md:text-lg font-bold text-white'>
              Confidencialidad
              </div>
              <div className='sm:mt-32  text-justify  text-white text-sm font-light md:mt-14    
              items-center   -translate-y-28 md:ml-7 md:w-[80%] md:mt-36 sm:text-lg'>Tu conversaciones son privadas, seguras y anónimas. Tratamos todos los datos de usuario como Información de Salud Protegida (PHI) y cumplimos totalmente con las regulaciones de HIPAA para garantizar que tu información esté protegida.
   
              </div>
          </div>
          <div className='sm:mx-auto  max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform md:translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <GiHumanTarget className='text-4xl text-crayola'/>
              </div>
              <div className='sm:text-center md:ml-7 sm:text-xl md:text-lg font-bold text-white'>
              Resultados precisos
              </div>
              <div><div className='sm:mt-32  text-justify  text-white text-sm font-light md:mt-14    
              items-center   -translate-y-28 md:ml-7 md:w-[80%] md:mt-36 sm:text-lg'>Empleamos algunos de los modelos de IA más sofisticados disponibles para garantizar la mayor precisión posible en nuestros resultados. Antes de introducir nuestro producto en el mercado, realizamos pruebas exhaustivas.</div></div></div>
          <div className='sm:mx-auto  max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform md:translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>

          <VscChecklist className='text-4xl text-crayola' /></div>
          <div className='sm:text-center sm:text-xl md:text-lg md:ml-7 font-bold text-white'>
            Fundamentos clínicos
              </div>
        <div><div className='sm:mt-32  text-justify  text-white text-sm font-light md:mt-14    
              items-center   -translate-y-28 md:ml-7 md:w-[80%] md:mt-36 sm:text-lg'>La evaluación se basa en los métodos de la terapia cognitivo-conductual (TCC), ampliamente considerada como el "estándar de oro" en la psicoterapia contemporánea. Su efectividad está bien documentada en numerosos estudios.
              </div></div></div>
  </div>
{/* div color navy 2 - version small devices */}
  <div className='md:hidden md:grid md:grid-cols-4 md:w-[70%] md:h-[400px]  
  bg-navy md:rounded-lg sm:w-full sm:h-[auto]'>
          <div className='sm:mx-auto  max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <AiFillHeart className='text-4xl text-crayola'/>  
              </div>
              <div className='sm:text-center text-xl md:ml-7 font-bold text-white'>
              Acceso simple
              </div>
              <div className='sm:mt-32  text-justify  text-white text-sm font-light md:mt-14    
              items-center   -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'> Realiza la evaluación cuando te convenga. Siéntete libre de pausar y reanudar según tu conveniencia. Todo lo que necesitas es un dispositivo con WhatsApp y conexión a internet.   
              </div>
          </div>
          <div className='sm:mx-auto  max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform md:translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <MdMemory className='text-4xl text-crayola'/>
              </div>
              <div className='sm:text-center text-xl md:ml-7 font-bold text-white'>
              10x más eficiente
                            </div>
              <div><div className='sm:mt-32  text-justify  text-white text-sm font-light md:mt-14    
              items-center   -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>Salta los procedimientos, las listas de espera y los inconvenientes de agendar. Un informe similar al que produce Dani podría llevar 5 sesiones tradicionales de psicoterapia, pero Dani lo hace en solo 30 minutos.              </div></div></div>
                    <div className='sm:mx-auto  max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform md:translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <BiSolidConversation className='text-4xl text-crayola h-[55%] w-auto' /></div>
          <div className=' sm:text-center md:ml-7 text-xl font-bold text-white'>
          Una simple conversación
              </div>
        <div><div className='sm:mt-32  text-justify  text-white text-sm font-light md:mt-14    
              items-center   -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>Chat como lo harías con un amigo, respondiendo preguntas directas con un lenguaje cotidiano. No es necesario utilizar jerga psicológica o revelaciones personales extensas para completar la evaluación.</div></div></div>
  </div>
  {/* div that should be displayed just below the one that's color navy, but at the same time under the one that's color lavanda*/}
  <div className='sm:hidden md:grid md:grid-cols-4 md:w-[70%] md:h-[400px]  
  rounded-lg sm:w-full sm:h-[300vh]'>
          <div>
              <div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <AiFillHeart className='text-4xl text-crayola'/>  
              </div>
              <div className='ml-7 md:text-lg font-bold text-black'>
              Acceso simple
              </div>
              <div className='sm:mt-20 sm:ml-20 text-justify  sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 w-[80%] md:mt-36'>Realiza la evaluación cuando te convenga. Siéntete libre de pausar y reanudar según tu conveniencia. Todo lo que necesitas es un dispositivo con WhatsApp y conexión a internet.</div>
          </div>
          <div>
              <div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <MdMemory className='text-4xl text-crayola'/>
              </div>
              <div className='ml-7 md:text-lg font-bold text-black w-[80%]'>
              10x más eficiente
              </div>
              <div><div className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 text-justify  ml-3 w-[80%] md:mt-36'>Salta los procedimientos, las listas de espera y los inconvenientes de agendar. Un informe similar al que produce Dani podría llevar 5 sesiones tradicionales de psicoterapia, pero Dani lo hace en solo 30 minutos.</div></div></div>
          <div><div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <BiSolidConversation className='text-4xl text-crayola  h-[55%] w-auto' /></div>
          <div className='ml-7 md:text-lg font-bold text-black w-[90%]'>
          Habla con naturalidad 
              </div>
        <div><div id="empresas" className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 text-justify text-justify  md:w-[82%] w-[80%] md:mt-36'>Chat como lo harías con un amigo, respondiendo preguntas directas con un lenguaje cotidiano. No es necesario utilizar jerga psicológica o revelaciones personales extensas para completar la evaluación. </div></div></div>

  </div>

      {/* div color lavanda */}
      <div className='sm:hidden left-1/3 transform -translate-y-80 -mt-80 -translate-x-1/2 relative w-[18%] h-[450px] ml-60 sm:ml-0 z-20'>
  <img src="../free_iphonex_mockup.png" alt="free_iphonex_mockup" className='w-full h-auto overflow-x-visible z-25' />

  {/* Position the WhatsApp notification */}
  
  <div  className="absolute inset-0 flex justify-center items-center">
    <div id="dividir-2-filas" className=' xl:mt-36 flex grid gris-rows-2  w-[80%] flex justify-center items-center gap-2 mt-6'>
        <div  className="bg-gray-50   bg-opacity-50 rounded-lg text-black grid grid-cols-2 gap-0 text-center py-2 w-[100%]">
          <div className=' w-[50%]  flex flex-col items-center justify-center place-items-center relative'>
            <img src="../new_dani.png " className='rounded-full w-[35px] h-[35px]' />
            <img src="../whatsapp_logo.png" alt="WhatsApp Icon"  className="w-[32px] h-[32px] z-40 absolute -mr-6 mt-6"></img>
          </div>
          <div  className="w-[141%] justify-between items-center ml-[-48%]">
            <div  className="flex justify-between items-center -mt-1">              
              <p  className="font-bold text-sm ">Dani</p>
              <p  className="text-xs text-slate-500 ">1 min</p>
            </div>
            <div>
              <p  className="font-normal text-left text-xs ">Entiendo, y ¿has ido a terapia antes por esto?</p>
            </div>
          </div>
        </div>


        <div  className="bg-gray-50  bg-opacity-50 rounded-lg text-black grid grid-cols-2 gap-0 text-center py-2 w-[100%]">
          <div className=' w-[50%]  flex flex-col items-center justify-center place-items-center relative'>
            <img src="../new_dani.png" className='rounded-full w-[35px] h-[35px]' />
            <img src="../whatsapp_logo.png" alt="WhatsApp Icon"  className="w-[32px] h-[32px] z-40 absolute -mr-6 mt-6"></img>
          </div>
          <div  className="w-[141%] justify-between items-center ml-[-48%]">
            <div  className="flex justify-between items-center -mt-1">              
              <p  className="font-bold text-sm ">Dani</p>
              <p  className="text-xs text-slate-500 ">2 min</p>
            </div>
            <div>
              <p  className="font-normal text-left text-xs ">¿Por qué crees que te da ansiedad en los momentos familiares?</p>
            </div>
          </div>
        </div>
    </div>

</div>

</div>
    

    </section>
  );
};


export default WidgetComponent;
