import PlanCard from './PlanCard'
const Mid = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id_1 = urlParams.get('id_1');
  const id_2 = urlParams.get('id_2');
  return (
    <div  className="flex flex-col items-center p-4">
      <div className="mb-2 text-center">
        <h1 className="mb-4 text-4xl font-black text-black">Pricing</h1 >
        <p className="text-lg text-black md:w-[90vh]">
          Choose the best option for you. Start working on your goals today!
        </p>
      </div>
      
      <div className="flex flex-col gap-8 p-10 xl:flex-row">
        <PlanCard
          color="#000000"
          name="Mia Weekly"
          description='Ideal to start'
          features={['Unlimited Voice & Text Messages', 'No automatic charges', '7 days access']}
          btnText="Weekly Access"
          price="3.5"
          id={id_1}
        />
        <PlanCard
          color="#000080"
          name="Mia Monthly"
          description='Ideal to renew'
          features={['Unlimited Voice & Text Messages', 'No automatic charges', '30 days access']}
          btnText="Monthly Access"
          price="11"
          id={id_2}
        />
      </div>
        
    </div>
  );
};

export default Mid;
