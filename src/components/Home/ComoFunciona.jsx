import React from 'react';
import { MdMemory } from 'react-icons/md';
import { HiLightBulb } from 'react-icons/hi';
import { VscChecklist } from 'react-icons/vsc';
import { BiSolidLockAlt } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';
import { Link } from "react-scroll";


const WidgetComponent = () => {
  return (
<section className='mt-28 md:mt-10 flex flex-col items-center'>
  <div className='bg-white'>
  <h3 id="funciona" className='mb-2 -mt-12 text-3xl font-bold items-center w-full flex justify-center text-oxford'>¿Cómo funciona?</h3>
  <h4 className='mb-8 text-l text-center w-full text-gray-500 items-center justify-center sm:w-[50vh]'>
    Fácil. Envía un mensaje de WhatsApp de texto o audio, saluda 👋 y comienza la terapia.
  </h4>
  </div>

  {/* div color navy */}
  <div className='md:grid md:grid-cols-4 md:w-[70%] md:h-[400px] 
  bg-navy md:rounded-lg sm:w-full sm:h-[154vh]'>

          <div className='max-h-[400px] sm:max-w-[80%] sm:mt-28 sm:-mb-8'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <MdMemory className='text-4xl text-crayola'/>  
              </div>
              <div className='sm:ml-12 sm:text-center md:ml-7 sm:text-xl md:text-lg font-bold text-white'>
                Memoria & Personalización
              </div>
              <div className='sm:mt-32 sm:ml-8 sm:text-center  text-white text-sm font-light md:mt-14    
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36'>Nuestro Agente Terapeuta<a className='font-bold'> recordará lo que compartas</a> en WhatsApp y sea relevante para la terapia, como tu nombre, edad, síntomas, etc.   
              </div>
          </div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <HiLightBulb className='text-4xl text-crayola'/>
              </div>
              <div className='sm:ml-12 sm:text-center sm:text-xl md:text-lg ml-7 font-bold text-white'>
                Capacidad de reflexión
              </div>
              <div><div className='sm:mt-32 sm:text-center  sm:ml-8 text-white text-sm font-light  md:mt-14   
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36'>Cada mensaje que envías puede activar hasta 14 algoritmos que procesan información, por eso la <a className='font-bold'>conversación siempre es asertiva y enriquecedora</a>.</div></div></div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
            <div className='sm:mt-12 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <VscChecklist className='text-4xl text-crayola' /></div>
          <div className='sm:ml-12 sm:text-center sm:text-xl md:text-lg md:ml-7 font-bold text-white'>
                Metodología & principios
              </div>
        <div><div className='sm:mt-32 sm:text-center  sm:ml-8 text-white text-sm font-light  md:mt-14   
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36'>La terapia se divide en <a className='font-bold'>7 etapas</a>, comenzando en la introducción y finalizando en el <a className='font-bold'>establecimiento de metas</a>. En la etapa 6, Dani generará un documento con la ficha de tu caso. </div></div></div>
  </div>
{/* div color navy 2 - version small devices */}
  <div className='md:hidden md:grid md:grid-cols-4 md:w-[70%] md:h-[400px]  
  bg-navy md:rounded-lg sm:w-full sm:h-[174vh]'>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <BiSolidLockAlt className='text-4xl text-crayola'/>  
              </div>
              <div className='sm:ml-12 sm:text-center  text-xl md:ml-7 font-bold text-white'>
              Privado
              </div>
              <div className='sm:mt-32 sm:text-center sm:ml-8 text-white text-sm font-light md:mt-14    
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36'> Lo que compartas es privado. Siempre puedes ejercer tu "Derecho a ser olvidado" (<a href="https://gdpr.eu/right-to-be-forgotten/" className='underline' target="_blank" rel='nofollow'>leer más aquí</a>), y solicitar que se elimine toda la información que has compartido con Theragen.   
              </div>
          </div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <AiFillHeart className='text-4xl text-crayola'/>
              </div>
              <div className='sm:ml-12 sm:text-center text-xl  ml-7 font-bold text-white'>
                Fácil
              </div>
              <div><div className='sm:mt-32 sm:text-center  sm:ml-8 text-white text-sm font-light  md:mt-14   
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36'>Abre <a className='font-bold'>WhatsApp, saluda 👋 y ¡comienza la terapia!</a> No más trámites, listas de espera, ni agendas.</div></div></div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
            <div className='sm:mt-12 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <MdAttachMoney className='text-4xl text-crayola' /></div>
          <div className='sm:ml-12 sm:text-center md:ml-7 text-xl font-bold text-white'>
          Barato
              </div>
        <div><div className='sm:mt-32 sm:text-center sm:ml-8 text-white text-sm font-light  md:mt-14   
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36'>La versión actual es de <a className='font-bold'>uso gratuito</a>. Nuestro objetivo es desarrollar Inteligencia Artificial útil y barata para todos.  </div></div></div>
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
              items-center transform translate-x-4 -translate-y-28 ml-3 w-[80%] md:mt-36'> Lo que compartas es privado. Siempre puedes ejercer tu "Derecho a ser olvidado" (<a href="https://gdpr.eu/right-to-be-forgotten/" className='underline' target="_blank" rel='nofollow'>leer más aquí</a>), y solicitar que se elimine toda la información que has compartido con Theragen.</div>
          </div>
          <div>
              <div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <AiFillHeart className='text-4xl text-crayola'/>
              </div>
              <div className='ml-7 md:text-lg font-bold text-black w-[60%]'>
                Fácil
              </div>
              <div><div className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 w-[80%] md:mt-36'>Abre <a className='font-bold'>WhatsApp, saluda 👋 y ¡comienza la terapia!</a> No más trámites, listas de espera, ni agendas.</div></div></div>
          <div><div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <MdAttachMoney className='text-4xl text-crayola' /></div>
          <div className='ml-7 md:text-lg font-bold text-black w-[60%]'>
                Barato
              </div>
        <div><div className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 w-[80%] md:mt-36'>La versión actual es de <a className='font-bold'>uso gratuito</a>. Nuestro objetivo es desarrollar Inteligencia Artificial útil y barata para todos. </div></div></div>

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

              <p class="font-normal text-xs -mt-1 -ml-2 -mr-14">Hi, how are you doing?</p>
            </div>
          
    </div>
  </div>

  <img src="dani_picture.jpg" className='rounded-full w-[40px] h-[40px] -ml-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30' />
  <img src="whatsapp_logo.png" alt="WhatsApp Icon" class="w-[34px] h-[34px] -ml-12 mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"></img>

</div>

    
      <div className='w-full -mt-20 h-[20vh] flex justify-center items-center bg-lavanda'>            
        <Link
          to="acceso"
          smooth={true}
          duration={1050}
          className="hover:text-gray-400 cursor-pointer"
        >
          <button className="bg-crayola hover:shadow-xl text-white font-bold py-2 px-6 rounded-xl text-xl hover:bg-bizantino">Acceder</button>
        </Link>
      </div>
    </section>
  );
};


export default WidgetComponent;
