
const Hero = () => {



    return (
      <section className="bg-primary h-[80vh] grid grid-cols-1 md:grid-cols-8">
        <div className='md:col-span-5 flex items-center justify-center p-8'> {/*Información CTA*/}
          <div>
            <h1 className='text-4xl font-normal  text-white'>
              <span className='text-white font-bold'>ChatBot </span>psicológico,<br/>apoyo <span className='text-white font-bold'> 
                  emocional 24/7</span>
            </h1>
            <br/>
            <h2>
              <div className='text-white leading-[1.5rem] xl:max-w-lg font-thin'>
                <div>
                 Dani es un <a href='https://arxiv.org/abs/2304.03442' target="_blank" rel='nofollow'>Agente Generativo
                  </a>, basado en ChatGPT. Entrenado para ayudar a personas con depresión y ansiedad, a 
                  través del método de<a> Terapia Cognitivo Conductual</a>
  
                
                  </div>
              </div>
            </h2>
            <br/>
            <div className='xl:flex items-center gap-4 py-2'>
                <a href="https://wa.me/56985877944?text=Hola" className="bg-crayola hover:shadow-xl text-white font-bold py-2 px-6 rounded-xl text-xl hover:bg-bizantino">Acceder</a>

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

