import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Links from "../../components/Links";


function Privacidad() {

  return (
    <div>
      <Header />
      <div className="h-7 sm:h-5"></div>
      <div className="bg-white  flex flex-col items-center sm:h-600 py-28 sm:py-0 text-justify">
      <div className="sm:h-20"></div>
      <div className="max-w-[70%]">
        <h1 className="flex flex-col items-left text-3xl sm:text-xl font-bold text-oxford mb-10 sm:max-w-xs h-16">
        POLÍTICA DE PRIVACIDAD
              </h1>
        <div>
        Última actualización: 14-11-2023
        </div><h2 className="flex flex-col items-left  text-3xl sm:text-xl font-bold 
          text-oxford mb-14 sm:max-w-xs h-16 py-12">
              GENERALIDADES

                </h2>
        <p className="py-8">
        Este documento regula los términos y condiciones bajo los cuales Ud. tiene derecho a acceder y usar los servicios del sitio Web theragen.ai y de cualquier información, texto, vídeo, aplicación, servicio u otro material comunicado en por Theragen.

Le recomendamos que lea detenidamente estas Condiciones e imprima o guarde una copia de las mismas en la unidad de disco local para su información.

Estos Términos y Condiciones serán aplicados y se entenderán incorporados en cada uno de los contratos que celebre con Theragen SpA (Theragen) por medio de este sitio web.

El uso de este sitio web, la aplicación de estos Términos y Condiciones, los actos que ejecute y los contratos que celebre por medio de este sitio web, se encuentran sujetos y sometidos a las leyes de la República de Chile y en especial a la ley 19.496 de protección de los derechos de los consumidores.

Theragen por lo tanto, aplicará estrictamente todos los beneficios, garantías y derechos reconocidos en favor de los consumidores en la ley 19.496. Además, Theragen adhiere en todas sus partes al Código de Buenas Prácticas para el Comercio Electrónico de la Cámara de Comercio de Santiago.<p/>
          <h2 className="flex flex-col items-left  text-3xl sm:text-xl font-bold 
          text-oxford mb-14 sm:max-w-xs h-16 py-12 sm:mb-36">
LIBERTAD DE NAVEGACIÓN y ACEPTACIÓN DE LOS TÉRMINOS Y CONDICIONES

                </h2>

                <p className="my-10">
                La mera visita de este sitio no impone ningún tipo de obligación para el usuario, a menos que éste exprese de forma inequívoca, por medio de actos positivos, su voluntad de contratar con la empresa para adquirir bienes o servicios, en la forma indicada en estos términos y condiciones.

Para aceptar estos Términos y Condiciones, el usuario deberá registrarse en el sitio web y aplicaciones de Theragen. Esto corresponde a dar su consentimiento inequívoco respecto de la aceptación.
          </p>
          <h2 className="flex flex-col items-left justify-left text-3xl sm:text-xl
          font-bold text-oxford mb-10 sm:max-w-xs h-16 mt-20">
REGISTRO Y RECOLECCIÓN DE DATOS


                </h2>
                <p>
                En el caso de los Usuarios, el registro se realiza automáticamente al iniciar una conversación con DaniGPT. La información recopilada, incluye:
Numero de telefono, Información de inicio de sesión y atribución de marketing digital, Información sobre el uso de nuestro sitio web y servicios, como las páginas que visitas y la interacción con las mismas.
Además, podemos recopilar datos personales automáticamente a través de cookies y otras tecnologías de seguimiento cuando visitas nuestra landing page.
Información compartida explícita y libremente con DaniGPT.


En el caso de los Psicólogos, el registro se realiza a través del formulario de derivación de pacientes, y es requisito obligatorio para la integración del servicio, contar con una cuenta de Google. Esto facilita el acceso personalizado, confidencial y seguro al sitio.

El psicólogo, deberá darle acceso a Theragen a su calendario de Google.

Respecto de la confidencialidad del usuario y contraseña de la cuenta de Google será responsable el usuario.
          </p>
          <h2 className="flex flex-col items-left justify-left  text-3xl sm:text-xl
          font-bold text-oxford mb-10 sm:max-w-xs h-16 mt-20">
          SEGURIDAD DE LOS DATOS PERSONALES
          </h2>

          Tomamos medidas de seguridad técnicas para proteger los datos personales de nuestros usuarios de la pérdida, el acceso no autorizado, la alteración y la divulgación. Además, trabajamos con herramientas de analítica con altos estándares, de proveedores como Twilio.

          <h2 className="flex flex-col items-left justify-left text-3xl sm:text-xl
          font-bold text-oxford mb-10 sm:max-w-xs h-16 mt-20">
          TUS DERECHOS DE PRIVACIDAD
          </h2>
          <p>
          Tienes ciertos derechos en relación con tus datos personales, cuando navegas por internet, que incluyen el derecho a acceder, rectificar y eliminar los datos que tenemos sobre ti. Si deseas ejercer alguno de estos derechos, contáctanos.
          </p>
          <h2 className="flex flex-col items-left justify-left  text-3xl sm:text-xl
          font-bold text-oxford mb-10 sm:max-w-xs h-16 mt-20">CAMBIOS EN LA POLÍTICA DE PRIVACIDAD</h2>
          <p className="sm:mb-44 md:mb-14 sm:mt-20">

          Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Cualquier cambio importante se publicará en nuestra landing page y se te notificará por correo electrónico. Te recomendamos que revises esta política de privacidad regularmente para mantenerte informado sobre cómo protegemos tu privacidad.
          Si tienes preguntas o comentarios sobre esta política de privacidad o cómo procesamos tus datos personales, contáctanos a través de legal@theragen.ai.
          </p>
        </p>
      </div>
      </div>
      



      <Links />
      <Footer />
    </div>
    
  )
}


export default Privacidad
