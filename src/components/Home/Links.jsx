import { Link } from "react-scroll";
const Links = () => {
  return (
    <div className="text-white min-auto sm:min-h-[90vh] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 w-full py-14 bg-navy">
      
      <div className="md:hidden sm:w-[90%] sm:ml-4">
  <div className=" md:ml-12 sm:col-span-1 sm:mb-4">
    <div className="sm:mb-4 flex items-center">
      <img src="../theragen_bold_white.png" className='h-[40px]' alt="Theragen" />
      <a className="text-2xl text-white font-medium ml-2">
        Theragen
      </a>
    </div>

    <p className="sm:mt-0 px-4 sm:px-2 py-4 sm:py-0 text-gray-300">
      Te ayudamos a trabajar en tu salud mental usando tecnología.
    </p>
  </div>

  <div className="sm:col-span-1 sm:mb-4 md:ml-28 sm:px-2">
    <h4 className="py-4 mb-2 text-white font-bold">Navega</h4>
    <div className="flex flex-col">
      <a href='https://theragen.ai/privacidad' className="md:h-10 md:w-auto hover:text-white py-2 text-gray-300" rel='nofollow'>Privacidad</a>
      <a href="https://theragen.ai" className="md:h-10 md:w-auto hover:text-white py-2 text-gray-300">¿Cómo funciona?</a>
      <Link
          to="equipo"
          smooth={true}
          duration={1350}
          className="py-2 md:h-10 md:w-auto hover:text-white flex items-center text-gray-300"
        >
          Equipo
        </Link>
        <a href="https://www.trustpilot.com/review/theragen.ai" target="_blank" className="py-2 hover:text-white text-gray-300" rel='nofollow'>Tu opinión importa</a>
    </div>
  </div>

  <div className="sm:col-span-1 md:ml-10 sm:px-2">
    <h4 className="py-4 mb-2 text-white font-bold">Redes</h4>
    <div className="flex flex-col">
      <a href="https://www.linkedin.com/company/theragen-ai/about/" target="_blank" className="py-2 hover:text-white text-gray-300" rel='nofollow'>LinkedIn</a>
      <a href="https://www.instagram.com/dani.gpt/" target="_blank" className="py-2 hover:text-white text-gray-300" rel='nofollow'>Instagram</a>
      <a href="https://www.youtube.com/channel/UCbyIp7bIEp3cdfEoSmzjm0Q" target="_blank" className="py-2 hover:text-white text-gray-300" rel='nofollow'>Youtube</a>
    </div>
  </div>
  </div>
  <div className="sm:hidden md:ml-12 sm:col-span-1 sm:mb-4">
    <div className="sm:mb-4 flex items-center">
      <img src="../theragen_bold_white.png" className='h-[40px]' alt="Theragen" />
      <a className="text-2xl text-white font-medium ml-2">
        Theragen
      </a>
    </div>

    <p className="sm:mt-0 px-4 sm:px-2 py-4 sm:py-0 text-gray-300">
    Te ayudamos a trabajar en tu salud mental usando tecnología.
    </p>
    <p className="sm:mt-0 px-4 sm:px-2 py-2 sm:py-0 text-gray-300">
    © 2024 Theragen Labs LLC. <br/>All rights reserved.
    </p>
  </div>

  <div className="sm:hidden sm:col-span-1 sm:mb-4 md:ml-28 sm:px-2">
    <h4 className="py-4 mb-2 text-white font-bold">Navega</h4>
    <div className="flex flex-col">
      <a href='https://theragen.ai/privacidad' className="md:h-10 md:w-auto hover:text-white py-2 text-gray-300" rel='nofollow'>Privacidad</a>
      <a href="https://theragen.ai" className="md:h-10 md:w-auto hover:text-white py-2 text-gray-300">¿Cómo funciona?</a>
      <Link
          to="equipo"
          smooth={true}
          duration={1350}
          className="py-2 md:h-10 md:w-auto hover:text-white flex items-center text-gray-300"
        >
          Equipo
        </Link>
      <a href="https://www.trustpilot.com/review/theragen.ai" target="_blank" className="py-2 hover:text-white text-gray-300" rel='nofollow'>Tu opinión importa</a>
    </div>
  </div>

  <div className="sm:hidden sm:col-span-1 md:ml-10 sm:px-2">
    <h4 className="py-4 mb-2 text-white font-bold">Redes</h4>
    <div className="flex flex-col">
      <a href="https://www.linkedin.com/company/theragen-ai/about/" target="_blank" className="py-2 hover:text-white text-gray-300" rel='nofollow'>LinkedIn</a>
      <a href="https://www.instagram.com/dani.gpt/" target="_blank" className="py-2 hover:text-white text-gray-300" rel='nofollow'>Instagram</a>
      <a href="https://www.youtube.com/channel/UCbyIp7bIEp3cdfEoSmzjm0Q" target="_blank" className="py-2 hover:text-white text-gray-300" rel='nofollow'>Youtube</a>
    </div>
  </div>
  </div>

  );
};

export default Links;

