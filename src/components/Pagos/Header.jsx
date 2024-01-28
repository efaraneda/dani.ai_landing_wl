
const Header = () => {



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
        <img src="../theragen_bold_white.png" className='h-[40px]' alt="Theragen" />
        <a className="text-2xl text-white font-medium ">
          Theragen
        </a>
      </div>

    </header>
  );
};

export default Header;
