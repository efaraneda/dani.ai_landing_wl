import React from 'react';
import { MdMemory } from 'react-icons/md';
import { HiLightBulb } from 'react-icons/hi';
import { VscChecklist } from 'react-icons/vsc';
import { BiSolidLockAlt } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { FaShield } from 'react-icons/fa6';


const WidgetComponent = () => {
  return (
<section className='mt-28 md:mt-36 flex flex-col items-center'>
  <div className='bg-white w-full md:w-[70%] sm:w-[74%]'>
  </div>
  {/* div color navy */}
  <div className='md:grid md:grid-cols-4 md:w-[70%] md:h-[400px] 
  bg-navy md:rounded-lg sm:w-full sm:h-auto'>

          <div className='max-h-[400px] sm:max-w-[82%] sm:mt-24 sm:-mb-8'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <MdMemory className='text-4xl text-crayola'/>  
              </div>
              <div className='sm:ml-12 sm:text-center md:ml-7 sm:text-xl md:text-lg font-bold text-white'>
                Memoria & Personalización
              </div>
              <div className='sm:mt-32 sm:ml-8 sm:text-justify  text-white text-sm font-light md:mt-14    
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>DaniGPT<a className='font-bold'> recordará lo que compartas</a> en WhatsApp y sea relevante para la terapia, como tu historia, edad, síntomas, etc.   
              </div>
          </div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <HiLightBulb className='text-4xl text-crayola'/>
              </div>
              <div className='sm:ml-12 sm:text-center sm:text-xl md:text-lg ml-7 font-bold text-white'>
                Capacidad de reflexión
              </div>
              <div><div className='sm:mt-32 sm:text-justify  sm:ml-8 text-white text-sm font-light  md:mt-14   
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>Cada mensaje que envías puede activar hasta 25 algoritmos que procesan información. Ese diseño permite mantener el contexto e indagar en tu caso personal.</div></div></div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
            <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <VscChecklist className='text-4xl text-crayola' /></div>
          <div className='sm:ml-12 sm:text-center sm:text-xl md:text-lg md:ml-7 font-bold text-white'>
                Metodología & principios
              </div>
        <div><div className='sm:mt-32 sm:text-justify  sm:ml-8 text-white text-sm font-light  md:mt-14   
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>La evaluación se divide en <a className='font-bold'>7 etapas</a>. Esta estructura está basada en las recomendaciones de Judith Beck para la práctica de la Terapia Cognitivo Conductual. </div></div></div>
  </div>
{/* div color navy 2 - version small devices */}
  <div className='md:hidden md:grid md:grid-cols-4 md:w-[70%] md:h-[400px]  
  bg-navy md:rounded-lg sm:w-full sm:h-[auto]'>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-14 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <BiSolidLockAlt className='text-4xl text-crayola'/>  
              </div>
              <div className='sm:ml-12 sm:text-center text-xl md:ml-7 font-bold text-white'>
              Privado
              </div>
              <div className='sm:mt-32 text-justify sm:ml-8 text-white text-sm font-light md:mt-14    
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'> Lo que compartas es privado, encriptado y anonimizado. Sabemos que los datos de pacientes son datos sensibles. Por eso, trabajamos sobre la base de la protección de la vida privada y salud de las personas.   
              </div>
          </div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <AiFillHeart className='text-4xl text-crayola'/>
              </div>
              <div className='sm:ml-12 sm:text-center text-xl md:ml-7 font-bold text-white'>
              Fácil
              </div>
              <div><div className='sm:mt-32 text-justify sm:ml-8 text-white text-sm font-light md:mt-14    
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>Abre <a className='font-bold'>WhatsApp, saluda 👋 y ¡comienza la evaluación!</a> No más trámites, listas de espera, ni agendas.</div></div></div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
            <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <FaShield className='text-4xl text-crayola h-[55%] w-auto' /></div>
          <div className='sm:ml-12 sm:text-center md:ml-7 text-xl font-bold text-white'>
          Seguro
              </div>
        <div><div className='sm:mt-32 text-justify sm:ml-8 text-white text-sm font-light  md:mt-14   
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>Tanto los datos en "tránsito" y como en "reposo", son <a className='font-bold'>encriptados</a> y <a className='font-bold'>almacenados</a> de manera segura bajo llaves, para que puedas aprovechar las funcionalidades de Dani.</div></div></div>
  </div>
  {/* div that should be displayed just below the one that's color navy, but at the same time under the one that's color lavanda*/}
  <div className='sm:hidden md:grid md:grid-cols-4 md:w-[70%] md:h-[400px]  
  rounded-lg sm:w-full sm:h-[300vh]'>
          <div>
              <div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <BiSolidLockAlt className='text-4xl text-crayola'/>  
              </div>
              <div className='ml-7 md:text-lg font-bold text-black'>
                Privado
              </div>
              <div className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 w-[80%] md:mt-36'> Lo que compartas es privado, encriptado y anonimizado. Sabemos que los datos de pacientes son datos sensibles. Por eso, trabajamos sobre la base de la protección de la vida privada y salud de las personas.</div>
          </div>
          <div>
              <div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <AiFillHeart className='text-4xl text-crayola'/>
              </div>
              <div className='ml-7 md:text-lg font-bold text-black w-[60%]'>
                Fácil
              </div>
              <div><div className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 w-[80%] md:mt-36'>Abre <a className='font-bold'>WhatsApp, saluda 👋 y ¡comienza la evaluación!</a> No más trámites, listas de espera, ni agendas.</div></div></div>
          <div><div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <FaShield className='text-4xl text-crayola  h-[55%] w-auto' /></div>
          <div className='ml-7 md:text-lg font-bold text-black w-[60%]'>
                Seguro
              </div>
        <div><div className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 md:w-[82%] w-[80%] md:mt-36'>Tanto los datos en "tránsito" y como en "reposo", son <a className='font-bold'>encriptados</a> y <a className='font-bold'>almacenados</a> de manera segura bajo llaves, para que puedas aprovechar las funcionalidades de Dani.</div></div></div>

  </div>

      {/* div color lavanda */}
      <div className='sm:hidden left-1/3 transform -translate-y-80 -mt-80 -translate-x-1/2 relative w-[18%] h-[450px] ml-60 sm:ml-0 z-20'>
  <img src="free_iphonex_mockup.png" alt="free_iphonex_mockup" className='w-full h-auto overflow-x-visible z-25' />

  {/* Position the WhatsApp notification */}
  
        <div class="absolute inset-0 flex justify-center items-center">
          <div class="bg-gray-50 bg-opacity-50 rounded-lg text-black text-center px-2 py-2 w-[80%]">
            <div class="flex justify-between items-center px-4">
              <div class="flex items-center">
                
              </div>
              <p class="font-bold text-sm -mt-1 -ml-7">Dani</p>

              <div class="text-xs -mt-1 -mr-4">1 min</div>
            </div>
            <div class="px-10 py-2">

              <p class="font-normal text-xs -mt-1 -ml-6 -mr-14">Hola, ¿cómo estás?</p>
            </div>
          
    </div>
  </div>

  <img src="dani_picture.jpg" className='rounded-full w-[40px] h-[40px] -ml-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30' />
  <img src="whatsapp_logo.png" alt="WhatsApp Icon" class="w-[34px] h-[34px] -ml-12 mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"></img>

</div>
    <div className='-mb-24'></div>
    

    </section>
  );
};


export default WidgetComponent;
