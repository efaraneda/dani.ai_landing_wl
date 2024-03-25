import { Link } from "react-scroll";

const Hero = () => {

  const handleClick = () => {
    // Execute dataLayer.push('event') script here
    window.dataLayer.push({
      'event': 'click_cta',
      'language':navigator.language
      });
  };

    return (
      <section className="bg-navy h-[80vh] grid grid-cols-1 md:grid-cols-8">
        <div className='md:col-span-5 flex items-center justify-center p-8'> {/*Información CTA*/}
          <div className="">
            <h1 className='md:text-4xl sm:text-3xl sm:-mr-4 font-normal text-white'>
              <a className='text-white font-bold'>Clear Your Mind In Private</a>, <br className="sm:hidden"/>Emotional Assessment 24/7
            </h1>
            <br/>
            <h2>
              <div className='text-white leading-[1.5rem] md:max-w-lg font-thin'>
                <div className="sm:text-lg">
                An innovative self-help tool built on Clinical Foundations.
              </div>
              </div>
            </h2>
            <br/>
            <div className='md:flex items-center gap-4 py-2 sm:grid sm:grid-cols-2'>
                <div>
                  <a href="https://wa.me/message/JBOR5VI34XEAA1" oonClick={handleClick} target="_blank" rel='nofollow' className="sm:w-[150px] sm:justify-center  border-purple-primary dark:border-purple-light bg-crayola from-purple-primary to-purple-dark dark:from-white dark:to-purple-light text-white dark:text-purple-dark hover:brightness-110 focus:ring-purple-primary dark:focus:ring-purple-dark active:ring-purple-primary dark:active:ring-purple-dark transition font-semibold focus:outline-none focus:ring-4 focus:ring-opacity-50 active:ring-4 active:ring-opacity-50 flex shadow-sm  text-base px-4 py-2 rounded-lg text-lg">Evalúate</a>
                </div> <a className="text-sm font-thin text-white sm:-ml-2 md:ml-4"><a className="font-semibold">30 minutes </a>to get ready<br className="md:hidden"/> to tackle your issues.</a>
                <div className="flex flex-col italic"><Link 
                to="funciona2"
                smooth={true}
                duration={1550}
                className=" hover:text-gray-400 sm:px-4 flex text-white hover:shadow-lg-white cursor-pointer"
                >
                  
              </Link>
              </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden  md:col-span-3 flex items-center justify-center relative">
  {/* Content image */}
  <div>
    <div className="relative  p-4 flex flex-col justify-center gap-2 max-h-[70px] max-w-[299px] mx-auto -mt-10">
      {/* ... (content within this div) */}
    </div>
  </div>
  {/* Bottom circle */}
  <div className="hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[250px] h-[250px] md:w-[322px] md:h-[322px] bg-white  rounded-full z-0"></div>
  {/* Image */}
  
  <div className="relative z-10 -ml-12">
    <img
      src="../option1.png"
      className='sm:hidden object-cover -ml-4 md:w-[422px] md:h-[270px] lg:w-[532px] lg:h-[370px] rounded-3xl'
      alt="psicólogo para hombres"
    />
    <div className="absolute top-60 -left-10 w-[32%] hover:shadow px-4 py-2 hover:brightness-110 rounded-xl bg-white z-30">
      <div className="text-xs items-center justify-center text-center font-extralight	"></div> 
    <img 
      src="../Theragen2024.png" 
      alt="Trust icon"   
    />
    </div>
</div>

  {/* Top circle */}
  
  <div className="hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[442px] h-[312px] border-[8px] border-crayola rounded-xl z-20"></div>
</div>



    </section>
  );
};

export default Hero

