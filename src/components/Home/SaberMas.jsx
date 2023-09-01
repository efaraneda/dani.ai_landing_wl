const SaberMas = () => {
  return (
    <div className="sm:w-[90%] sm:items-center flex flex-col items-center relative h-auto md:mt-8 sm:mt-14 sm:mb-14">
      <h4 className="text-2xl font-bold mt-14 mb-14">¿Quieres saber más?</h4>
      <div className="md:grid items-start text-center relative md:grid-cols-3 md:w-[90%] md:gap-10">
        <div className="flex sm:ml-8 md:grid-cols-2 md:gap-6 sm:gap-4 sm:mb-10">
          <div className="text-left">
            <b>Conoce GPT</b><br />
            <a className="text-sm">Uno de los componentes principales de la arquitectura de Dani, son los modelos de lenguaje con tecnología GPT. <a rel='nofollow' href="https://openai.com/research/overview" target="_blank" >Ver más sobre esta tecnología.</a></a>
          </div>
          <img src="image.avif" className="md:mt-0 sm:mt-4 rounded-lg h-[110px] w-[110px]"></img>
        </div>

        <div className="flex sm:ml-8 md:grid-cols-2 md:gap-6 sm:gap-4 sm:mb-10">
          <div className="text-left">
            <b>Research</b><br />
            <a className="text-sm">"Simulacro del comportamiento humano". <a rel='nofollow' href="https://arxiv.org/abs/2304.03442" target="_blank" >Lee más sobre los hallazgos de esta publicación y lo que puede lograr genAI con la arquitectura correcta.</a></a>
          </div>
          <img src="research.png" className="md:mt-0 sm:mt-4 sm:items-end rounded-lg h-[110px] w-[110px]"></img>
        </div>

        <div className="flex sm:ml-8 md:grid-cols-2 sm:gap-4 md:gap-6">
          <div className="text-left">
            <b>Componentes</b><br />
            <a className="italic text-sm"> "Dani NO es otro chatbot que te invita a hacer ejercicio cada vez que le escribes(...) Diseñamos una arquitectura de componentes muy específica, que le permite entender el contexto, emociones, priorizar y planificar(...)".</a> <a className="text-sm">Lee la nota aquí.</a>
          </div>
          <img src="dani_picture.jpg" className="md:mt-0 sm:mt-4 rounded-lg h-[110px] w-[110px]"></img>
        </div>
      </div>
      {/* Rest of your content */}
    </div>
  );
};

export default SaberMas;

