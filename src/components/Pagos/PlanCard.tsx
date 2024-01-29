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

      // Obtener el token de acceso
      const tokenResponse = await fetch('https://api-m.paypal.com/v1/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa('ARKt3vRHtSx7Fgc7n5eeRVMzlMsknLn_EQaWrBIWr1MDkoEG5Emphk2SeJQ0LAiNLKcWrEQosa8Jp5qw:EPNuJDqQIWswa4pgTvbLq0I4PXtAIEQDFKVES_I1gpSRj91n-ZFc48WWmwBQ81ITviw6f_zdMmm5ASJk'),
        },
        body: new URLSearchParams({ 'grant_type': 'client_credentials' }),
      });

      const tokenData = await tokenResponse.json();
      const token = 'Bearer ' + tokenData.access_token;

      // Obtener el número de teléfono y el código de país
      const codigo = '0';
      const numero = phoneNumber.replace('+','');

      // Obtener el número de factura
      const invoiceNumberResponse = await fetch('https://api-m.paypal.com/v2/invoicing/generate-next-invoice-number', {
        method: 'POST',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
      });

      const invoiceNumberData = await invoiceNumberResponse.json();
      const invoice_number = invoiceNumberData.invoice_number;

      // Crear la factura
      const date = new Date();
      date.setDate(date.getDate() - 1); // Subtract 1 day
      
      const formatted_date = date.toISOString().split('T')[0];

      if (price == '3.5'){
        var dias = '7'
      }else{
        var dias = '30'
      }
      const plan = `Plan de pago único con acceso por ${dias} días a DaniGPT`;
      const descripcion = 'Habla y apóyate sin límite, cuando más lo necesites y a través de WhatsApp.';

      const invoiceData = {
        detail: {
            invoice_number: invoice_number,
            invoice_date: formatted_date,
            currency_code: 'USD',
            note: 'Gracias por confiar en nosotros ❤. Este pago habilita el acceso automáticamente al asistente emocional y consejero personal basado en Inteligencia Artificial, DaniGPT. Para asegurarte de que tu pago se ha validado, fijate en que recibas el mensaje automático de Dani en el chat, que indicará la fecha de vencimiento del plan que acabas de activar.',
            term: 'No hay reembolsos para planes o suscripciones de duracion menores a un mes, si es que se ha hecho uso parcial del servicio.',
            payment_term: {
                term_type: 'NO_DUE_DATE',
                due_date: formatted_date,
            },
        },
        invoicer: {
            name: {
                given_name: 'Theragen Labs',
                surname: 'LLC',
            },
            address: {
                address_line_1: '1021 Kerlerec St',
                admin_area_2: 'New Orleans',
                admin_area_1: 'LA',
                postal_code: '70116',
                country_code: 'US',
            },
            email_address: 'contacto@theragen.ai',
            website: 'www.theragen.ai',
            logo_url: 'https://prod-bkt-marketing.s3.amazonaws.com/Theragen_logo.png',
        },
        primary_recipients: [
            {
                billing_info: {
                    email_address: 'pagos@theragen.ai',
                    phones: [
                        {
                            country_code: codigo,
                            national_number: numero,
                            phone_type: 'MOBILE',
                        },
                    ],
                },
            },
        ],
        items: [
            {
                name: plan,
                description: descripcion,
                quantity: '1',
                unit_amount: {
                    currency_code: 'USD',
                    value: price,
                },
                discount: {
                    amount: {
                        currency_code: 'USD',
                        value: '0.00',
                    },
                },
                unit_of_measure: 'QUANTITY',
            },
        ],
        configuration: {
            partial_payment: {
                allow_partial_payment: false,
            },
            allow_tip: false,
            tax_calculated_after_discount: true,
            tax_inclusive: false,
            template_id: 'TEMP-0TR810218L787473V',
        },
    };

      const createInvoiceResponse = await fetch('https://api-m.paypal.com/v2/invoicing/invoices', {
        method: 'POST',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(invoiceData),
      });

      const createInvoiceData = await createInvoiceResponse.json();
      console.log(createInvoiceData)
      const id_enviar = createInvoiceData.href.substring(45);

      // Enviar la factura
      const sendInvoiceData = {
        send_to_recipient: true,
      };

      const sendInvoiceResponse = await fetch(`https://api-m.paypal.com/v2/invoicing/invoices/${id_enviar}/send`, {
        method: 'POST',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
          'PayPal-Request-Id': 'b1d1f06c7246c',
        },
        body: JSON.stringify(sendInvoiceData),
      });

      const sendInvoiceDataResponse = await sendInvoiceResponse.json();
      const invoiceId = sendInvoiceDataResponse.href.substring(23);

      console.log(invoiceId)
      window.location.href = 'https://paypal.com/'+invoiceId
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
            <div><a className="font-normal text-4xl">US$ </a>{price} </div>
              
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
