import { useState } from "react";
import { Link } from "react-scroll";
import {
  RiMenu3Fill,
  RiCloseLine
} from "react-icons/ri";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setShowMenu(false);
  };

  const fixedHeaderStyle = {
    position: "fixed",
    top: 0,
    backgroundColor: "primary", // You might need to adjust this
    width: "100%",
    zIndex: 50
  };

  return (
    <header style={fixedHeaderStyle} className="bg-navy flex justify-between xl:justify-start w-full py-4 px-8 xl:px-42 h-[10vh] z-50">
      <div className="xk:w-1/6 flex items-center sm:py-4">
        <img src="theragen_bold_white.png" className='h-[40px]' alt="Theragen" />
        <a className="text-2xl text-white font-medium ">
          Theragen
        </a>
      </div>

      <nav
        className={`fixed text-white sm:bg-navy font-normal  sm:w-[80%] md:ml-52  h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-16 transition-all duration-500 z-50`}
      >
        <Link
          to="acceso"
          smooth={true}
          duration={1350}
          className="hover:text-gray-400 hover:shadow-lg-white cursor-pointer md:ml-10"
          onClick={closeMenu} // Close the menu when link is clicked
        >
          ¿Cómo funciona?
        </Link>
        <a
          href="https://theragen.ai/privacidad"
          target="_blank" 
          rel='nofollow'
          className=" hover:text-gray-400 cursor-pointer"
          onClick={closeMenu} // Close the menu when link is clicked
        >
          Privacidad de datos
        </a>
        <div className="flex flex-row gap-4">
        
        <a
          href="https://wa.me/message/UEPODIF6XTSYK1"
          target="_blank" 
          rel='nofollow'
          className="bg-crayola hover:bg-bizantino shadow-xl text-white  py-2 px-6 rounded-xl text-sm font-bold hover:bg-bizantino"
          onClick={closeMenu} // Close the menu when link is clicked
        >
          Evalúate ahora
        </a></div>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2 text-white"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
