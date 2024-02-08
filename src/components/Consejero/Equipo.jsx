

const Equipo = () => {
  return (
<section className="flex flex-col items-center justify-center w-full mb-16" >
<h4 className="font-bold text-center text-3xl lg:text-4xl mt-24">Equipo fundador</h4>
<p className="mt-4 text-lg text-black sm:text-center">Combinando Psicología Clínica e Ingeniería.</p>
<div className="grid md:grid-cols-2 sm:grid-rows-2 mt-10">
<div className="px-20 w-80% flex flex-col items-center justify-center bg-white-500">
    <div className="flex items-center justify-center"> 
      <img alt="" src="Anastasia-removebg.png" className="w-[130px] h-auto rounded-full" />
    </div>
    <p className="text-2xl mt-2">Anastasia Batkhina</p>
    <p className="text-center text-slate-500 text-base">Ph.D., Directora Clínica & Co-fundadora</p>
    <div className="flex items-center justify-center mt-2"> 
      <a href="https://www.linkedin.com/in/anastasia-batkhina-phd-986b9b10b/" className="bg-red-200 hover:brightness-110 mr-4">
        <img src="linkedin.png" className="w-[20px] h-auto" alt="LinkedIn" />
      </a>
      <div className="-mt-1 -mr-1">|</div>
      <a href="https://www.researchgate.net/profile/Anastasia-Batkhina" className=" hover:brightness-110 ml-4">
        <img src="researchgate1714.jpg" className="w-[120px] h-auto" alt="ResearchGate" />
      </a>
    </div>
    <p className="mt-4 md:h-[22vh] text-justify">
      Investigadora, Psicóloga clínica y Doctorado en Psicología. 
      Fue Directora Académica en la National Research University de Moscú. 
      Tiene experiencia construyendo productos digitales y chatbots de psicología.
    </p>

    </div>
    <div className="px-20 w-80% flex flex-col items-center justify-center bg-white-500">
    <div className="md:mt-8 flex items-center justify-center"> 
      <img alt="" src="Emiliano-removebg-preview.png" className="w-[130px] h-auto rounded-full md:-mt-8" />
    </div>
    <p className="text-2xl mt-2">Emiliano Araneda</p>
    <p className="text-slate-500 text-base mb-2">CTO & Co-fundador</p>
      <a href="https://www.linkedin.com/in/efaraneda/" className=" hover:brightness-110">
        <img src="linkedin.png" className="items-center justify-center w-[20px] h-auto" alt="LinkedIn" />
      </a>
    <p className="mt-4   md:h-[22vh] text-justify">
          Ingeniero de Datos. Magíster en Administración y Estrategia. 
          Candidato a Magíster en Ciencia de Datos. 
          Especialista en optimización de Modelos de Lenguage de Inteligencia Artificial.
    </p>

    </div>
    
  </div>
</section>

  );
};



export default Equipo