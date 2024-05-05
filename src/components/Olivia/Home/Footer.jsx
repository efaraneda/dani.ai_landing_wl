import { Link } from "react-scroll";


const Hero = () => {


    return (
      <section className="font-sans bg-[#791E3F] md:h-[70vh] sm:h-full w-full "  >
            
            <div className="md:flex md:flex-col md:grid md:grid-cols-6 h-[66vh]" style={{ gridTemplateColumns: '15% 4% 16% 18% 41% 6%' }} >
                <div className="sm:py-10"></div>
                <div className="md:mt-20"> <div className="py-0.5"></div>
                    <img src="logob2b-white.png" alt="" className="w-1/2 mx-auto sm:hidden" /></div>
                <div className=" ml-8 text-left md:mt-20 font-semibold text-white md:grid md:grid-rows-8 text-base"> Herramientas
                    <div className="font-light text-sm   sm:py-2">Índice de Clima Escolar</div>
                    <div className="font-light text-sm  sm:py-2">Índice de Bienestar</div>
                    <div className="font-light text-sm  sm:py-2">School Analytics</div>
                </div>
                <div className="ml-8 text-left mt-20 font-semibold text-white grid md:grid-rows-8 sm:grid-rows-6 text-base"> Theragen
                    <div className="font-light sm:flex text-sm sm:py-2">
                        <a
                         href="https://calendly.com/efaraneda/30min"
                        target="_blank" 
                        rel='nofollow'
                        className="hover:text-white"
                        >Agendar un reunión</a>
                    </div>
                    <div className="font-light text-sm"><Link 
                    to="demo"
                    smooth={true}
                    duration={1550}
                    className="hover:text-white sm:flex sm:py-2"
                    ><a href="">Diseñado para Alumnos</a></Link></div>
                    <div className="font-light text-sm"><Link 
                    to="demo"
                    smooth={true}
                    duration={1550}
                    className="hover:text-white sm:flex sm:py-2"
                    ><a href="">Calidad de datos</a></Link></div>
                    <div className="font-light text-sm"></div>
                    
                </div>
                <div className="sm:hidden md:mt-20 text-center md:text-xl font-semibold justify-center text-white">Data y Métricas para Escuelas<br/><br/>
                    <div className="sm:hidden font-light text-gray-300 text-lg px-14"   >Da el siguiente paso, y comienza a tomar decisiones para el bienestar escolar con datos a mano.</div></div>
                <div className=""></div>
            </div>
            <div className="bg-black md:grid grid-cols-5 h-[4vh] sm:mt-20" style={{ gridTemplateColumns: '15% 20% 30% 20% 15%' }}>
                <div className=""></div>
                <div className="flex items-center text-center text-gray-400 sm:ml-8">2024 Theragen Labs, LLC. </div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>

            </div>
        
    </section>
  )
}

export default Hero

