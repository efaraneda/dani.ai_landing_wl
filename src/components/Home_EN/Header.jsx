import { useState } from "react";
import { Link } from "react-scroll";
import {
  RiMenu3Fill,
  RiCloseLine
} from "react-icons/ri";

const Header = () => {
  const handleClick = () => {
    // Execute dataLayer.push('event') script here
    window.dataLayer.push({
      'event': 'click_cta',
      'language':navigator.language
      });
      closeMenu();
  };
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
    <header style={fixedHeaderStyle} className="bg-navy flex justify-between md:justify-start w-[90%] py-4 px-8 md:px-42 h-[10vh] z-50">
      <div className="xk:w-1/6 flex items-center sm:py-4">
        <img src="../theragen_bold_white.png" className='h-[40px]' alt="Theragen" />
        <a className="text-2xl text-white font-medium ">
          Theragen
        </a>
      </div>

      <nav
        className={`fixed text-white sm:bg-navy font-normal sm:w-[80%] md:ml-32 md:gap-[1vh] lg:gap-[16vh]  h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 md:static flex-1 flex flex-col md:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <Link
          to="funciona2"
          smooth={true}
          duration={1350}
          className="hover:bg-blue-900 px-3 hover:py-2 hover:rounded-lg hover:bg-rounded cursor-pointer md:ml-2 lg:text-lg"
          onClick={closeMenu} // Close the menu when link is clicked
        >
          How does it work?
        </Link>
        <Link
          to="empresas"
          smooth={true}
          duration={1350}
          className="hover:bg-blue-900 px-3 hover:py-2 hover:rounded-lg hover:bg-rounded cursor-pointer md:ml-10 md:mr-8 md:-px-14 lg:text-lg"
          onClick={closeMenu} // Close the menu when link is clicked
        >
          Medical Centers
        </Link>
        <div className="flex flex-row md:px-20 -mr-48">
        
        <a
          href="https://wa.me/message/JBOR5VI34XEAA1"
          target="_blank" 
          rel='nofollow'
          className="sm:-ml-40 sm:mr-6 border-purple-primary dark:border-purple-light bg-crayola from-purple-primary to-purple-dark dark:from-white dark:to-purple-light text-white dark:text-purple-dark hover:brightness-110 focus:ring-purple-primary dark:focus:ring-purple-dark active:ring-purple-primary dark:active:ring-purple-dark transition font-semibold focus:outline-none focus:ring-4 focus:ring-opacity-50 active:ring-4 active:ring-opacity-50 flex shadow-sm  text-base px-4 py-2 rounded-lg text-lg"
          onClick={handleClick} // Close the menu when link is clicked
        >
          Get my results
        </a></div>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="md:hidden text-2xl p-2 text-white"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
