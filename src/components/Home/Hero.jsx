import { Link } from "react-scroll";

const Hero = () => {



    return (
      <section className="bg-navy h-[80vh] grid grid-cols-1 md:grid-cols-8">
        <div className='md:col-span-5 flex items-center justify-center p-8'> {/*Información CTA*/}
          <div>
            <h1 className='text-4xl sm:text-3xl font-normal  text-white'>
              <span className='text-white font-bold'>Chat </span>psicológico,<br/>evaluación <span className='text-white font-bold'> 
                  emocional 24/7</span>
            </h1>
            <br/>
            <h2>
              <div className='text-white leading-[1.5rem] md:max-w-lg font-thin'>
                <div>
                Evaluación Psicológica completa en 30 minutos. Sistema autónomo diseñado para brindarte un plan de trabajo claro basado en fundamentos clínicos. Ahorra tiempo, dinero y entrega resultados concretos.         
                
              </div>
              </div>
            </h2>
            <br/>
            <div className='md:flex items-center gap-4 py-2'>
                <a href="https://wa.me/message/UEPODIF6XTSYK1" target="_blank" rel='nofollow' className="sm:w-[150px] sm:justify-center  border-purple-primary dark:border-purple-light bg-crayola from-purple-primary to-purple-dark dark:from-white dark:to-purple-light text-white dark:text-purple-dark hover:brightness-110 focus:ring-purple-primary dark:focus:ring-purple-dark active:ring-purple-primary dark:active:ring-purple-dark transition font-semibold focus:outline-none focus:ring-4 focus:ring-opacity-50 active:ring-4 active:ring-opacity-50 flex shadow-sm  text-base px-4 py-2 rounded-lg text-lg">Evalúate</a>
                <Link 
                to="acceso"
                smooth={true}
                duration={1350}
                className="sm:hidden hover:text-gray-400 sm:px-4 text-white hover:shadow-lg-white cursor-pointer italic"
                >
                  Mira cómo
              </Link>.

          </div>
        </div>
      </div>

      <div className="sm:hidden md:col-span-3 flex items-center justify-center relative">
  {/* Content image */}
  <div>
    <div className="relative  p-4 flex flex-col justify-center gap-2 max-h-[70px] max-w-[299px] mx-auto -mt-10">
      {/* ... (content within this div) */}
    </div>
  </div>
  {/* Bottom circle */}
  <div className="sm:hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[250px] h-[250px] md:w-[322px] md:h-[322px] bg-white  rounded-full z-0"></div>
  {/* Image */}
  <div className="relative z-10">
    <img
      src="ret.png"
      className='object-cover -mt-22 h-[300px] -mx-16'
      alt="psicólogo gratis"
    />
  </div>
  {/* Top circle */}
  <div className="sm:hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[250px] h-[250px] md:w-[322px] md:h-[322px] border-[11px] border-crayola rounded-full z-20"></div>
</div>


    </section>
  );
};

export default Hero

