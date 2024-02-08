import PlanCard from './PlanCard'
const Mid = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id_1 = urlParams.get('id_1');
  const id_2 = urlParams.get('id_2');
  return (
    <div  className="flex flex-col items-center p-4">
      <div className="mb-2 text-center">
        <h1 className="mb-4 text-4xl font-black text-black">Precios</h1 >
        <p className="text-lg text-black md:w-[90vh]">
          Elige la mejor opción para ti. Empieza a trabajar en tus metas hoy!
        </p>
      </div>
      
      <div className="flex flex-col gap-8 p-10 xl:flex-row">
        <PlanCard
          color="#000000"
          name="DaniGPT Semanal"
          description='Ideal para empezar'
          features={['Mensajes de Texto & Voz ilimitados', 'Sin cobros automáticos', '7 días de acceso']}
          btnText="Acceso Semanal"
          price="3.5"
          id={id_1}
        />
        <PlanCard
          color="#000080"
          name="DaniGPT Mensual"
          description='Ideal para renovar'
          features={['Mensajes de Texto & Voz ilimitados', 'Sin cobros automáticos', '30 días de acceso']}
          btnText="Acceso Mensual"
          price="11"
          id={id_2}
        />
      </div>
        
    </div>
  );
};

export default Mid;
