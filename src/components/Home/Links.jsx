import { Link } from "react-scroll";

const Links = () => {
  return (
    <div>
     <div className='w-full md:mt-20 h-[20vh] flex justify-center items-center bg-lavanda'>            
    
      <a href="https://wa.me/56985877944?text=Hola" className="bg-crayola hover:shadow-xl text-white font-bold py-2 px-6 rounded-xl text-xl hover:bg-bizantino" >Acceder</a>
      </div>
    <div className="text-secondarytext h-[50vh] sm:h-[90vh] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 w-full py-14">
     
      <div className="sm:-mb-56 flex flex-col items-center justify-left">
        <div className="sm:w-[60%] text-4xl text-primarytext font-bold relative bg-white -ml-16">
        <div className="xk:w-1/6 flex items-center sm:py-4">
        <img src="Theragen_bold.png" className='h-[40px]' alt="Theragen" />
        <a className="text-2xl text-navy font-medium ">
          Theragen
        </a>
      </div>

        </div>

        <p className="sm:-mt-10 px-14 py-10 h-auto md:ml-14 sm:-mr-2 sm:mb-14">
        Theragen es un laboratorio de Inteligencia Artificial, dedicado a desarrollar Agentes Inteligentes capaces de brindar terapia psicológica efectiva.
        </p>
      </div>

      <div className="sm:px-14 sm:py-6 flex sm:flex-row flex-col items-center justify-left">
        <div className="flex items-center">

            <div className="sm:-mb-40">
               <h4 className="py-4 sm:py-6 mb-2 sm:-mb-0 text-primary sm:font-bold">Navega</h4>
               <div className="flex flex-col">
                  <a href='https://dani.chat/privacidad' className="items-center md:h-10 md:w-auto
                  text-center hover:text-primary py-2 flex items-center " rel='nofollow'>Privacidad</a>
                  <Link
                    to="acceso"
                    smooth={true}
                    duration={1350}
                    className="items-center md:h-10 md:w-auto
                    text-center hover:text-primary py-2 flex items-center "
                    >
                    ¿Cómo funciona?
                  </Link>        
                  <Link
                    to="acceso"
                    smooth={true}
                    duration={1350}
                    className="items-center py-2 md:h-10 md:w-auto
                    text-center hover:text-primary  flex items-center "
                    >
                    Más información
                  </Link>
                 </div>
                

            </div>
        </div>
      </div>

      <div className="sm:-mb-60 sm:px-14 flex sm:flex-row flex-col items-center justify-left">
          <div className="flex items-center">
              <div >
              <h4 className="py-4 sm:py-1 mb-2 text-primary sm:font-bold">Redes</h4>

                <div className="flex flex-col ">
                <a href="https://www.linkedin.com/company/theragen-ai/about/" target="_blank" className="py-2 hover:text-blue-600" rel='nofollow'>
                  LinkedIn 
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61550567952924" 
                      target="_blank" 
                      className="py-2 hover:text-blue-500" rel='nofollow'>
                  Facebook</a>
                  <a href="https://www.youtube.com/channel/UCbyIp7bIEp3cdfEoSmzjm0Q" 
                      target="_blank" 
                      className="py-2 hover:text-red-500" rel='nofollow'>
                  Youtube</a>
                  

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
          </div>
      </div>
   </div>
   </div>
  );
};

export default Links;

