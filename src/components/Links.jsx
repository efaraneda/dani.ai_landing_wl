import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import {Link} from "react-router-dom";

const Links = () => {
  return (
    <div className="bg-primary flex justify-between xl:justify-start w-full py-4 px-8 xl:px-42 h-[10vh] z-50">
    <div className="xk:w-1/6 flex items-center sm:py-4">
      <img src="theragen_bold_white.png" className='h-[40px]' alt="Theragen" />
      <a className="text-2xl text-white font-medium ">
        Theragen
      </a>        <p className="px-14 py-10 h-[40px] -mr-2">
          Theragen es un laboratorio de Inteligencia Artificial, dedicado a desarrollar Agentes Inteligentes capaces de brindar terapia psicológica efectiva.
        </p>

    </div>


      <div className="sm:px-14 sm:py-6 flex sm:flex-row flex-col items-center justify-left">
        <div className="flex items-center">

            <div>
               <h4 className="py-4 sm:py-6 mb-2 sm:mb-0 text-primary sm:font-bold">Navega</h4>
               <div className="flex flex-col">
                
                
         <Link to='/' className="items-center md:h-10 md:w-20
                 text-center hover:text-primary hover:font-bold flex items-center">Inicio</Link>
             <Link to='/privacidad' className="items-center md:h-10 md:w-20
                 hover:text-primary hover:font-bold flex items-center">Privacidad</Link>

{/*
                <Link to='/roadmap' className="items-center md:h-10 md:w-20
                  hover:text-primary hover:font-bold flex items-center">Roadmap</Link> 
                
   
                <Link to='/research' className="items-center md:h-10 md:w-20
                 text-center hover:text-primary hover:font-bold flex items-center">Research</Link>
                 */}
                 </div>
                

            </div>
        </div>
      </div>

      <div className="sm:px-14 flex sm:flex-row flex-col items-center justify-left">
          <div className="flex items-center">
              <div >
              <h4 className="py-4 sm:py-1 mb-2 text-primary sm:font-bold">Comparte</h4>

                <div className="flex flex-col ">
                <a href="https://wa.me/?text=Mira, Esto está bacán!! https://dani.chat" target="_blank" 
                data-action="share/whatsapp/share" className="py-2 hover:text-green-400 hover:font-bold" rel='nofollow'>
                  Compartir en WhatsApp 
                  </a>
                  <a href="https://t.me/share/url?url=https://dani.chat&text=Mira, Esto está bacán!!" 
                      target="_blank" 
                      className="py-2 hover:text-blue-500 hover:font-bold" rel='nofollow'>
                  Compartir en Telegram</a>
                  

                </div>
              </div>
          </div>
      </div>
      <div className="sm:px-14 sm:py-10 flex sm:flex-row flex-col items-center justify-left">
          <div className="flex items-center">
          <div>

              </div>
          </div>
          <div className="absolute sm:flex sm:flex-row py-10 sm:py-1 mb-10 text-primary sm:font-bold">
          <div className="py-6">  
            <a href="https://psicologogratis.ar/"><img src="arg-flag.webp" alt="Bandera de Argentina" className="w-[40px] h-[26px] rounded opacity-70 hover:opacity-100" rel='nofollow'></img></a>
            </div>
              <div className="-py-4 sm:py-6 sm:px-2">
                <a href="https://psicologogratis.cl/"><img src="cl-flag.svg" alt="Bandera de Chile" className="w-[40px] h-[26px] rounded opacity-70 hover:opacity-100" rel='nofollow'></img></a>
              </div>
          </div>
      </div>
   </div>
  );
};

export default Links;

