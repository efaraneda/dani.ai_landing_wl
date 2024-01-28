import React, { useState, useEffect } from 'react';
import Spinner from './Spinner'; // Import the Spinner component

interface PlanCardProps {
  name: string;
  description: string;
  btnText?: string;
  price?: string;
  features: string[];
  color: string;
}

export default function PlanCard({
  name,
  description,
  price,
  features,
  color,
  btnText = 'Start Trial',
}: PlanCardProps) {
  const [inputVisible, setInputVisible] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPaymentInProgress, setPaymentInProgress] = useState(false);
 

  useEffect(() => {
    // Extraer el valor del parámetro 't' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const tParam = urlParams.get('t');

    if (tParam) {
      setPhoneNumber("+"+tParam.replace(" ",""));
    }
  }, []);

  const handleButtonClick = () => {
    setButtonClicked(true);
    setInputVisible(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleValidationAndPayment = async () => {
    if (isPaymentInProgress) {
      return; // Evitar múltiples clics mientras el pago está en progreso
    }
    // Aquí puedes agregar la lógica para validar y procesar el pago
    console.log('Validar y Pagar con el número:', phoneNumber);
    console.log('inicia')
    try {
      setPaymentInProgress(true); // Marcar el inicio del proceso de pago

      const access_token = 'APP_USR-1842037423248391-110422-538e699208ca77a1def75b55e2150b7c-1535393369';  // Reemplaza con tu token de acceso real
const url = `https://api.mercadopago.com/checkout/preferences?access_token=${access_token}`;

const headers = {
  'Content-Type': 'application/json',
};

const moneda = 'CLP';

const phone = phoneNumber.replace('+','');  // Replace with the actual phone number
const amount = Number(price.replace('.',''));
if (price == '3.500'){
  var dias = '7'
}else{
  var dias = '30'
}
const data = {
  items: [
    {
      title: `DaniGPT te aconseja sin límite por ${dias} días`,
      description: 'Estás a un paso de terminar tu pago',
      quantity: 1,
      currency_id: moneda,
      unit_price: amount,
    },
  ],
  notification_url: `https://yvjdr2hlvvf4swtxtmjahttlzu0asqns.lambda-url.us-east-1.on.aws/?t=${phone}&amount=${amount}`,
};

fetch(url, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data),
})
  .then(response => response.json())
  .then(result => {
    console.log(result);
    const preference_id = result.id;
    console.log(`Preference ID: ${preference_id}`);
    window.location.href = `https://www.mercadopago.cl/checkout/v1/payment/redirect/?source=link&preference-id=${preference_id}&sniffing-rollout=sniffing-api&router-request-id=d407abcc-44fd-4ba8-a82a-0293f8381970`
    return preference_id;
  })
  .catch(error => console.error('Error:', error));
} catch (error) {
      console.error('Error:', error);

    }
  };


  return (
    <div
      style={{ backgroundColor: color }}
      className="flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8"
    >
      <h2 className="mb-5 text-xl font-medium">{name}</h2>
      <div className="mb-5 flex items-end text-6xl font-black">
      

        {price ? (
          <>
            <div>
            <a className="font-normal text-4xl">CL$</a>
              {price}{' '}

            </div>
          </>
        ) : (
          ''
        )}
      </div>
      <p className="mb-5">{description}</p>
      <ul className="mb-10 flex flex-col gap-y-2">
        {features.map((feature) => (
          <li className="flex items-center" key={feature}>
         

          <svg className="w-6 h-6 mr-1 text-gray-800 dark:text-white" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 24 24">
            <path 
              fillRule="evenodd" 
              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm13.7-1.3a1 1 0 0 0-1.4-1.4L11 12.6l-1.8-1.8a1 1 0 0 0-1.4 1.4l2.5 2.5c.4.4 1 .4 1.4 0l4-4Z" 
              clipRule="evenodd"/>
          </svg>
  

            {feature}
          </li>
        ))}
      </ul>
      {buttonClicked ? null : (
        <button
          className="mt-auto rounded-xl bg-black py-3 px-6 text-lg font-medium text-white hover:bg-bizantino"
          onClick={handleButtonClick}
        >
          {btnText}
        </button>
      )}
      {inputVisible && (
        <div className="-mt-4">
          <p className="text-bizantino text-xs font-semibold px-auto mb-0.5">* Verifica que el número que tendrá acceso esté correcto</p>
          <input
            type="text"
            className="outline-2 text-center outline outline-bizantino rounded-lg border-black border w-[255px]"
            placeholder="Ejemplo: +56931782413"
            value={phoneNumber}
            onChange={handleInputChange}
          />

<button
  className="mt-1 rounded-lg bg-black py-1 w-[255px] text-sm font-medium text-white hover:bg-bizantino"
  onClick={handleValidationAndPayment}
  disabled={isPaymentInProgress} // Deshabilitar el botón mientras el pago está en progreso
>
  Ir a Pagar
</button>{isPaymentInProgress && <div className='flex items-center justify-center mt-1'>Cargando<Spinner/></div>} {/* Render Spinner only when isLoading is true */}
        </div>
      )}
    </div>
  );
}
