import  'aws-sdk/dist/aws-sdk.js';

import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from '../../../env.js';

const invocarLambda = async (usuario, mensaje) => {
  try {
    // Configura la región

    const region = 'us-east-1';
    AWS.config.update({ region: region,
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
       });

    // Crea un nuevo objeto de cliente de Lambda
    const lambda = new AWS.Lambda();

    // Define los parámetros para la llamada a la función Lambda
    const params = {
      FunctionName: 'prod_olivia', // Nombre de tu función Lambda
      InvocationType: 'RequestResponse', // Puedes usar 'Event' si no necesitas una respuesta inmediata
      Payload: JSON.stringify({
        usuario: usuario,
        mensaje: mensaje
      })
    };

    // Realiza la llamada a la función Lambda
    const data = await lambda.invoke(params).promise();

    // Obtiene la respuesta de la función Lambda
    const responsePayload = JSON.parse(data.Payload);
    console.log(responsePayload);
    return responsePayload; // Devuelve la respuesta de la función Lambda
  } catch (err) {
    console.error('Error al invocar la función Lambda:', err);
    throw err; // Reenvía el error para que pueda ser manejado en otro lugar
  }
};

export default invocarLambda;
