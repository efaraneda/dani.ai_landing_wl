import React from 'react';
import { HiLightBulb } from 'react-icons/hi';
import { VscChecklist } from 'react-icons/vsc';
import { GiHumanTarget } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';
import { IoThunderstorm } from 'react-icons/io5';
import { BsHeartbreakFill } from 'react-icons/bs';
 

const WidgetComponent = () => {
  return (
<section className='sm:mb-32 mt-28 md:mt-36 flex flex-col items-center md:-mb-24' id="deserve">
<h4 className="font-bold text-center text-3xl lg:text-4xl mb-4 sm:w-[75%]">Mereces más. Empieza con Mia ❤</h4>
    <p       className="text-lg text-black justify-center text-center items-center md:w-[50%] mb-4">
    La herramienta de autoayuda ideal para personas que quieren un espacio íntimo para compartir, afinar ideas y planes, y cumplir sus metas personales.</p>
  <div className='bg-white w-full md:w-[70%] sm:w-[74%]'>
  </div>
  {/* div color navy */}
  <div className='md:grid md:grid-cols-4 md:w-[70%] md:h-[400px] 
  bg-navy md:rounded-lg sm:w-full sm:h-auto'>

          <div className='max-h-[400px] sm:max-w-[82%] sm:mt-24 sm:-mb-8'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <GiHumanTarget className='text-4xl text-crayola'/>  
              </div>
              <div className='sm:ml-12 sm:text-center md:ml-7 sm:text-xl md:text-lg font-bold text-white'>
              Control de emociones
              </div>
              <div className='sm:mt-32  sm:text-center  text-white text-sm font-light md:mt-14    
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>
                &#10003; Necesitas un enfoque práctico<br/>
                &#10003; Quieres manejar emociones negativas
                 
              </div>
          </div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <HiLightBulb className='text-4xl text-crayola'/>
              </div>
              <div className='sm:ml-12 sm:text-center sm:text-xl md:text-lg ml-7 font-bold text-white'>
              Toma de decisiones
              </div>
              <div><div className='sm:mt-32   sm:text-center text-white text-sm font-light  md:mt-14   
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>
                &#10003; Necesitas una 2da opinión o consejo<br/>
                &#10003; Quieres planificar<br/>
                &#10003; Quieres preveer situaciones

</div></div></div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
            <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <AiFillHeart className='text-4xl text-crayola' /></div>
          <div className='sm:ml-12 sm:text-center sm:text-xl md:text-lg md:ml-7 font-bold  text-white'>
          Ansiedad
              </div>
        <div><div className='sm:mt-32 sm:text-center  text-white text-sm font-light  md:mt-14   
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>
                &#10003; Buscas controlar tu ansiedad<br/>
                &#10003; Situaciones concretas<br/> 
                &#10003; Prácticar técnicas

                </div></div></div>
  </div>
{/* div color navy 2 - version small devices */}
  <div className='md:hidden md:grid md:grid-cols-4 md:w-[70%] md:h-[400px]  
  bg-navy md:rounded-lg sm:w-full sm:h-[auto]'>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-14 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <IoThunderstorm className='text-4xl text-crayola'/>  
              </div>
              <div className='sm:ml-12 sm:text-center text-xl md:ml-7 font-bold text-white'>
              Manejo de emociones
              </div>
              <div className='sm:mt-32 text-center text-white text-sm font-light md:mt-14    
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'> 
              &#10003;Manage jealousy and insecurities<br/>   
              &#10003;Navigate serious disputes<br/> 
              &#10003;Overcome infidelity


              </div>
          </div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <VscChecklist className='text-4xl text-crayola'/>
              </div>
              <div className='sm:ml-12 sm:text-center text-xl md:ml-7 font-bold text-white'>
              Ansiedad
                            </div>
              <div><div className='sm:mt-32 text-center text-white text-sm font-light md:mt-14    
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>
                &#10003; Buscas controlar tu ansiedad<br/>
                &#10003; Situaciones concretas<br/> 
                &#10003; Prácticar técnicas
                
</div></div></div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
            <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <BsHeartbreakFill className='text-4xl text-crayola h-[55%] w-auto' /></div>
          <div className='sm:ml-12 sm:text-center md:ml-7 text-xl font-bold text-white'>
          Ruptura de pareja
              </div>
        <div><div className='sm:mt-32 text-center text-white text-sm font-light  md:mt-14   
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>
                &#10003; Supera el dolor emocional<br/>
                &#10003; Reconstruye confianza<br/>
                &#10003; Prepárate para amar de nevo
</div></div></div>
  </div>
  {/* div that should be displayed just below the one that's color navy, but at the same time under the one that's color lavanda*/}
  <div className='sm:hidden md:grid md:grid-cols-4 md:w-[70%] md:h-[400px]  
  rounded-lg sm:w-full sm:h-[300vh]'>
          <div>
              <div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <IoThunderstorm className='text-4xl text-crayola'/>  
              </div>
              <div className='ml-7 md:text-lg font-bold text-black'>
              Autoestima

              </div>
              <div className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 w-[80%] md:mt-36'> 
              &#10003; Manejar celos e inseguridad<br/>   
              &#10003; Superar infidelidad<br/> 
              &#10003; Superación y crecimiento
              </div>
          </div>
          <div>
              <div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <VscChecklist className='text-4xl text-crayola'/>
              </div>
              <div className='ml-7 md:text-lg font-bold text-black w-[80%]'>
            Metas Personales

              </div>
              <div><div className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 w-[80%] md:mt-36'>
                &#10003; Desarrollo de carrera<br/> 
                &#10003; Desarrollo de hábitos<br/> 
                &#10003; Metas en general
          </div></div></div>
          <div><div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <BsHeartbreakFill className='text-4xl text-crayola  h-[55%] w-auto' /></div>
          <div className='ml-7 md:text-lg font-bold text-black w-[60%]'>
          Ruptura
              </div>
        <div><div id="empresas" className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 md:w-[82%] w-[80%] md:mt-36'>
                     &#10003; Supera el dolor emocional<br/>
                &#10003; Reconstruye confianza<br/>
                &#10003; Prepárate para amar de nevo
                </div></div></div>

  </div>

      {/* div color lavanda */}
      <div className='sm:hidden left-1/3 transform -translate-y-80 -mt-80 -translate-x-1/2 relative w-[18%] h-[450px] ml-60 sm:ml-0 z-20'>
  <img src="free_iphonex_mockup.png" alt="free_iphonex_mockup" className='w-full h-auto overflow-x-visible z-25' />

  {/* Position the WhatsApp notification */}
  
  <div  className="absolute inset-0 flex justify-center items-center">
    <div id="dividir-2-filas" className=' xl:mt-36 flex w-[80%] flex justify-center items-center '>
        <div  className="bg-gray-50   bg-opacity-50 rounded-lg text-black grid grid-cols-2 gap-0 text-center py-2 w-[100%]">
          <div class=' w-[50%]  flex flex-col items-center justify-center place-items-center relative'>
            <img src="mia.jpeg" className='rounded-full w-[35px] h-[35px]' />
            <img src="whatsapp_logo.png" alt="WhatsApp Icon"  className="w-[32px] h-[32px] z-40 absolute -mr-6 mt-6"></img>
          </div>
          <div  className="w-[141%] justify-between items-center ml-[-48%]">
            <div  className="flex justify-between items-center -mt-1">              
              <p  className="font-bold text-sm ">Mia</p>
              <p  className="text-xs text-slate-500 ">1 min</p>
            </div>
            <div>
              <p  className="font-normal text-left text-xs ">Hola, ¿Cómo te ha ido esta semana?</p>
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
