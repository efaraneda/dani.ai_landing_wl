const SaberMas = () => {
  return (
    <div className="sm:items-center sm:justify-center bg-white-200 flex flex-col items-center relative h-auto md:mt-14 sm:mt-24 sm:mb-14">
      

      <h4 className="text-3xl font-bold mt-14 mb-14">¿Quieres saber más?</h4>
      <div className="sm:w-[90%] md:grid items-start text-center relative md:grid-cols-3 md:w-[90%] md:gap-4">
      <div className="hover:border border-1 bg-slate-100 rounded-lg md:h-[40vh] px-3 py-3 sm:mb-4">

        <div className="flex sm:ml-2 md:grid-cols-2 md:gap-6 sm:gap-4 sm:mb-10">
          <div className="text-left">
            <b>Conoce GPT</b><br />
            <a className="text-sm">Uno de los componentes principales de la arquitectura de Dani, son los modelos de lenguaje con tecnología GPT. <a rel='nofollow' href="https://openai.com/research/overview" target="_blank" >Ver más sobre esta tecnología.</a></a>
          </div>
          <img src="image.avif" className="md:mt-0 sm:mt-4 rounded-lg h-[110px] w-[110px]"></img>
        </div>
        </div>
        <div className="hover:border border-1 bg-slate-100 rounded-lg md:h-[40vh] px-3 py-3 sm:mb-4">
        <div className="flex sm:ml-2 md:grid-cols-2 md:gap-6  sm:gap-4 sm:mb-10">
          <div className="text-left">
            <b>Research</b><br />
            <a className="text-sm">"Simulacra of human behavior". <a rel='nofollow' href="https://arxiv.org/abs/2304.03442" target="_blank" >Lee más sobre los hallazgos de esta publicación y lo que puede lograr genAI con la arquitectura correcta.</a></a>
          </div>
          <img src="research.png" className="md:mt-0 sm:mt-4 sm:items-end rounded-lg h-[110px] w-[110px]"></img>
        </div>
        </div>
      <div className="hover:border border-1 bg-slate-100 rounded-lg md:h-[40vh] px-3 py-3">
        <div className="flex sm:ml-2 md:grid-cols-2 sm:gap-4 md:gap-6">
          <div className="text-left">
            <b>Components</b><br />
            <a className="italic text-sm"> "Dani NO es otro chatbot que te invita a hacer ejercicio cada vez que le escribes(...) Diseñamos una arquitectura de componentes muy específica, que le permite entender el contexto, emociones, priorizar y planificar(...)".</a> <a className="text-sm">Lee la nota aquí.</a>
          </div>
          <img src="dani_picture.jpg" className="md:mt-0 sm:mt-4 rounded-lg h-[110px] w-[110px]"></img>
        </div>
        </div>
      </div>
      <div className="h-[90px] bg-white-200 w-full sm:hidden"></div>
    </div>
  );
};

export default SaberMas;

