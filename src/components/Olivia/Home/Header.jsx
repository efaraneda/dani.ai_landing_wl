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
  
    // Function to toggle the menu
    const toggleMenu = () => {
        if (showMenu) {
          // If the menu is open, close it
          closeMenu();
        } else {
          // If the menu is closed, open it
          setShowMenu(true);
        }
      };
      

  const fixedHeaderStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 50
  };

  return (
    <header style={fixedHeaderStyle} className="font-sans bg-white flex justify-between md:justify-start w-full md:py-4 border-b border-gray-200">
        <div className='w-full grid grid-cols-3 bg-white' style={{ gridTemplateColumns: '1% auto 1%' }}>
        <div className="py-2 sm:py-1"></div>
        <div className="flex">
            <div className="xk:w-1/6 flex items-center sm:py-2">
                <img src="logo.png" className='h-auto max-h-[40px] min-h-[20px] sm:max-w-[190px]' alt="Theragen" />
                <a className="text-2xl text-black font-medium ">
                
                </a>
            </div>

          <div className="self-end ml-auto items-center flex flex-col self-center	mr-2 -mb-0.5">
            <nav
                className={`fixed text-black font-semibold bg-white sm:w-[80%]   h-full ${
                showMenu ? "left-0" : "-left-full"
                } top-0 md:static flex flex-col md:flex-row items-center justify-center sm:gap-10 md:gap-8 transition-all duration-500 z-50`}
            >
                    <Link
                    to="mental"
                    smooth={true}
                    duration={1350}
                    className="hover:text-yellowb2b hover:shadow-lg-black cursor-pointer mx-auto"
                    onClick={closeMenu} // Close the menu when link is clicked
                    >
                    </Link>
                    <Link
                    to="Herramientas"
                    smooth={true}
                    duration={1350}
                    className="hidden hover:text-yellowb2b hover:shadow-lg-black cursor-pointer mx-auto flex"
                    onClick={closeMenu} // Close the menu when link is clicked
                    >Analítica Escolar</Link>
                    <Link
                    to="Analitica"
                    smooth={true}
                    duration={1350}
                    className="hidden hover:text-yellowb2b hover:shadow-lg-black md:mr-14  cursor-pointer mx-auto"
                    onClick={closeMenu} // Close the menu when link is clicked
                    >
                    Herramientas
                    </Link>

                <div className="items-center justify-center  md:my-auto flex sm:flex-col gap-4">
                
                  <Link 
                    to="demo"
                    smooth={true}
                    duration={1550}
                    className="sm:hidden text-center bg-yellowb2b font-semibold flex shadow-sm hover:bg-greenb2b hover:text-white  text-black hover:text-black hover:shadow-lg-black cursor-pointer text-base md:py-1 sm:py-2 md:px-3 sm:px-1 rounded-3xl"
                    onClick={toggleMenu}
                  >
                  Probar Demo
                  </Link>        
                    <Link 
                  to="demo_sm"
                  smooth={true}
                  duration={1550}
                  className="md:hidden text-center bg-yellowb2b font-semibold flex shadow-sm hover:bg-greenb2b hover:text-white  text-gray-700 hover:text-black hover:shadow-lg-black cursor-pointer text-base md:py-1 sm:py-2 md:px-3 sm:px-1 rounded-3xl"
                  onClick={toggleMenu}
                  >
                  Probar Demo
                  </Link>        
                  <a
                  href="https://calendly.com/efaraneda/30min"
                  target="_blank" 
                  rel='nofollow'
                  className="text-center bg-white text-gray-700 font-semibold hover:bg-greenb2b hover:text-white flex shadow-sm  text-base  hover:text-black hover:shadow-lg-black cursor-pointer md:py-1 sm:py-2 md:px-3 sm:px-1 rounded-3xl border border-black"
                  >
                  Agendar Reunión
                  </a>
                </div>
                
            </nav><a
                  href="https://calendly.com/efaraneda/30min"
                  target="_blank" 
                  rel='nofollow'
                  className="items-center md:hidden text-center bg-greenb2b text-white font-semibold hover:bg-white hover:text-greenb2b flex text-base  text-black cursor-pointer sm:py-1  sm:px-2 rounded-3xl border hover:border-black"
                  >
                  Agendar Reunión
                  </a>
          </div>
      </div>            
      <button onClick={toggleMenu} className="hidden text-2xl -ml-6 text-black">
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
      <div className=""></div>
      </div>
    </header>
  );
};

export default Header;
