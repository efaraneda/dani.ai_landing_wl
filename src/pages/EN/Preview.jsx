import React, { useState } from 'react';
import Form from './form';
import { Link } from "react-scroll";

const Preview = () => {
  const [iniciar, setIniciar] = useState(0); // Define el estado iniciar y su función setIniciar
  const [mostrarBoton, setMostrarBoton] = useState(true);
  const handleClick = () => {
    setIniciar(1);
    setMostrarBoton(false);
};

    return (
      <section className="font-sans bg-white h-[auto]" >
        
      <div className="bg-white mt-28" ></div>
        <div className="grid grid-cols-3 w-full flex flex-col" style={{ gridTemplateColumns: '16% auto 16%' }}>
            <div className=''> {/*Información CTA*/}
            </div>
            <div className="items-center flex flex-col">
                <h1 className='text-center  font-semibold text-gray-800 sm:w-[140%] text-center md:text-6xl font-semibold sm:text-4xl'>
                Students Do Not Want<br className='sm:hidden'/> to Fill Out Forms</h1>
                <h2 className='text-center md:text-xl  sm:text-2xl text-gray-500 mt-10 sm:w-[130%]' id="demo_sm">
                Our Smart Forms offer enhanced data gathering capabilities and an engaging experience. </h2>
                
                <div className="items-center justify-center  flex  gap-4 mt-4" id="demo">
                

                {mostrarBoton && (<Link 
                    id="form"
                    to="form"
                    smooth={true}
                    duration={1050}
                    className="text-center bg-greenb2b text-white font-semibold hover:bg-white hover:text-greenb2b flex shadow-sm  text-base  hover:text-black hover:shadow-lg-black cursor-pointer md:py-1 sm:py-2 md:px-3 md:-ml-2 sm:px-4 rounded-3xl border hover:border-black"
                    onClick={handleClick}
                    >
                    Try it Yourself
                    </Link>)}

                </div>

            </div>

            <div className="">
            </div>      
        </div>
        <div className="mt-10" >
        <Form iniciar={iniciar}/>
      </div>

    </section>
  );
};

export default Preview

