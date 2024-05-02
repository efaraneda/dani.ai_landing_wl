
const Hero = () => {


    return (
      <section className="font-sans bg-[#791E3F] h-[70vh] w-full "  >
            <div className="md:hidden flex flex-col grid grid-cols-6 h-[66vh]" style={{ gridTemplateColumns: '15% 5% 15% 15% 35% 15%' }} >
            </div>
            <div className="sm:hidden flex flex-col grid grid-cols-6 h-[66vh]" style={{ gridTemplateColumns: '15% 5% 15% 15% 35% 15%' }} >
                <div className=""></div>
                <div className="mt-20"> <div className="py-0.5"></div><img src="logob2b-white.png" alt="" className="w-1/2 mx-auto" /></div>
                <div className=" ml-8 text-left mt-20 font-semibold text-gray-400 grid grid-rows-10 text-base"> Herramientas
                    <div className="font-light text-sm">Eval. de clima Smart</div>
                    <div className="font-light text-sm">Eval. psicológica Smart</div>
                    <div className="font-light text-sm">Sociograma Smart</div>
                    <div className="font-light text-sm">Analítica Escolar</div>
                    <div className="font-light text-sm">Derivación clínica</div>
                </div>
                <div className=" ml-8 text-left mt-20 font-semibold text-gray-400 grid grid-rows-10 text-base"> Theragen
                    <div className="font-light text-sm">Hablemos</div>
                    <div className="font-light text-sm">Cómo funciona</div>
                    <div className="font-light text-sm">Acceso</div>
                    <div className="font-light text-sm"></div>
                </div>
                <div className="mt-20 text-center md:text-2xl font-semibold sm:text-xl text-white">Bring Data-Driven Prevention to your Practice.<br/>
                Take the next step in supporting student well-being with evidence-based solutions.</div>
                <div className=""></div>
            </div>
            <div className="sm:hidden bg-black grid grid-cols-5 h-[4vh]" style={{ gridTemplateColumns: '15% 20% 30% 20% 15%' }}>
                <div className=""></div>
                <div className="flex items-center text-center text-gray-400">2024 Theragen Labs, LLC - 1021 Kerlerec St, New Orleans, LA, 70116 </div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>

            </div>
        
    </section>
  )
}

export default Hero

