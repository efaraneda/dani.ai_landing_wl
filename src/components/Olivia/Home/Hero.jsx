import { TbPlayerTrackNextFilled } from 'react-icons/tb';

import {
    PiNumberCircleOne, 
    PiNumberCircleTwo, 
    PiNumberCircleThree, 
    PiNumberCircleFour
        } from 'react-icons/pi';

import { Link } from "react-scroll";

const Hero = () => {


    return (
      <section className="font-sans bg-white h-[auto]"  >
        
      <div className="bg-white mt-28"  ></div>
        <div className="grid grid-cols-3 w-full flex flex-col" style={{ gridTemplateColumns: '16% auto 16%' }}>
            <div className=''> {/*Información CTA*/}
            </div>
            <div className="items-center flex flex-col">
                <h1 className=' sm:w-[130%] text-center md:text-6xl font-semibold sm:text-4xl text-gray-800'>
                Impulsa la Convivencia <br className='sm:hidden'/> Escolar <div className='sm:hidden'>y Salud Mental</div></h1>
                <h2 className='text-center md:text-xl  sm:text-3xl text-gray-500 mt-10 sm:text-lg'>
                ¡No más Google Forms! Aplica herramientas interactivas para estudiantes. <br className='sm:hidden'/> <div className='sm:hidden'>Elige qué quieres medir, recibe el análisis y toma medidas preventivas.</div> </h2>
                
                <div className="items-center justify-center  md:flex  gap-4 mt-4">
                
                <Link 
                    to="demo"
                    smooth={true}
                    duration={1550}
                    className="sm:hidden sm:flex sm:flex-col text-center bg-yellowb2b font-semibold flex shadow-sm hover:bg-greenb2b hover:text-white  text-black hover:text-black hover:shadow-lg-black cursor-pointer text-base md:py-1 sm:py-2 md:px-3 sm:px-1 rounded-3xl"
                    
                    >
                    Ver Demostración
                    </Link>        
                    
                    <Link 
                    to="demo_sm"
                    smooth={true}
                    duration={1550}
                    className="md:hidden sm:flex sm:flex-col text-center bg-yellowb2b font-semibold flex shadow-sm hover:bg-greenb2b hover:text-white  text-black hover:text-black hover:shadow-lg-black cursor-pointer text-base md:py-1 sm:py-2 md:px-3 sm:px-1 rounded-3xl"
                    
                    >
                    Ver Demostración
                    </Link>     
                    <a
                    href="https://calendly.com/efaraneda/30min"
                    target="_blank" 
                    rel='nofollow'
                    className="sm:mt-4 sm:flex sm:flex-col text-center bg-white text-greenb2b font-semibold hover:bg-greenb2b hover:text-white flex shadow-sm  text-base  hover:text-black hover:shadow-lg-black cursor-pointer md:py-1 sm:py-2 md:px-3 sm:px-1 rounded-3xl border border-black"
                    >
                    Hablemos - Agendar Reunión
                    </a>

                </div>
                <div className="text-green-b2b w-full justify-center text-center flex flex-col md:flex-row mt-24 mx-auto mb-5 ">
    <div className='flex items-center flex-col'>
        <PiNumberCircleOne className='text-greenb2b w-auto h-[30px]' />
        <div className='font-bold text-lg mt-2'>Selecciona la herramienta</div>
    </div>
    <div className='flex items-center flex-col mt-6 md:mt-0 mx-4'>
        <PiNumberCircleTwo className='text-greenb2b w-auto h-[30px]' />
        <div className='font-bold text-lg mt-2'>Añade o quita preguntas</div>
    </div>
    <div className='flex items-center flex-col mt-6 md:mt-0 mx-4'>
        <PiNumberCircleThree className='text-greenb2b w-auto h-[30px]' />
        <div className='font-bold text-lg mt-2'>Recibe el análisis</div>
    </div>
    <div className='flex items-center flex-col mt-6 md:mt-0 mx-4'>
        <PiNumberCircleFour className='text-greenb2b w-auto h-[30px]' />
        <div className='font-bold text-lg mt-2 sm:mb-16'>Toma acción preventiva</div>
    </div>
</div>



            </div>

            <div className="">
            </div>      


        </div>
    </section>
  );
};

export default Hero

