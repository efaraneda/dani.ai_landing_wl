import PlanCard from './PlanCard'
const Mid = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id_1 = urlParams.get('id_1');
  const id_2 = urlParams.get('id_2');
  return (
    <div  className="flex flex-col items-center p-4">
      <div className="mb-2 mt-12 text-center">
        <h1 className="mb-4 mt-12 text-6xl font-black text-black">Planes</h1 >
        <p className="text-lg text-black md:w-[80vh]">
          ¡Elige el <b>plan de pagos manuales</b> que te acomoda para comenzar a trabajar en tus metas con DaniGPT!
        </p>
      </div>
      
      <div className="flex flex-col gap-8 p-10 xl:flex-row">
        <PlanCard
          color="#e8e8e8ff"
          name="DaniGPT Semanal"
          description='Ideal para empezar'
          features={['Chat de texto y voz ilimitado', 'Sin cobros automáticos', '7 días de acceso']}
          btnText="Acceso Semanal"
          price="3.5"
          id={id_1}
        />
        <PlanCard
          color="#c8e3ffff"
          name="DaniGPT Mensual"
          description='Ideal para renovar'
          features={['Chat de texto y voz ilimitado', 'Sin cobros automáticos', '30 días de acceso']}
          btnText="Acceso Mensual"
          price="11"
          id={id_2}
        />
      </div>
        
    </div>
  );
};

export default Mid;
