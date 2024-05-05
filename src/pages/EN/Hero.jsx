import {
    PiNumberCircleOne, 
    PiNumberCircleTwo, 
    PiNumberCircleThree
        } from 'react-icons/pi';

import { Link } from "react-scroll";

const Hero = () => {
    return (
      <section className="font-sans bg-white h-[auto]"  >
        
      <div className="bg-white mt-28"  ></div>
        <div className="grid grid-cols-3 w-full flex flex-col" style={{ gridTemplateColumns: '16% auto 16%' }}>
            <div className=''> {/*Información CTA*/}
            </div>
            <div className="items-center flex flex-col ">
                <h1 className=' sm:w-[130%] text-center md:text-6xl font-semibold sm:text-4xl text-gray-800'>
                Effortless Data-Driven <br className='sm:hidden'/> School Counseling Practice</h1>
                <h2 className='text-center md:text-xl  sm:text-3xl text-gray-500 mt-10 sm:text-lg sm:w-[135%]'>
                Start Measuring in Minutes, Track Objective Progress, Enhance Well-being & Prevent Crises.<br className='sm:hidden'/> </h2>
                
                <div className="items-center justify-center  md:flex  gap-4 mt-4">
                
                    <div className='sm:hidden relative flex'>
                        <span className='px-6 py-1'><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        className="h-16 w-16 absolute top-0"
                        >
                        <path
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                            d="M 50, 20 Q -15,20 30,80"
                            
                        />
                        </svg></span>
                        
                        <div className='relative flex flex-col'>
                            <Link 
                        to="demo"
                        smooth={true}
                        duration={1550}
                        className="sm:hidden sm:flex sm:flex-col text-center bg-yellowb2b font-semibold flex shadow-sm hover:bg-greenb2b hover:text-white  text-black hover:text-black hover:shadow-lg-black cursor-pointer text-base md:py-1 sm:py-2 md:px-3 sm:px-1 rounded-3xl"                        
                        >
                        Smart Forms Designed for Students - Watch Demo
                        </Link>        
                        <span className='text-gray-400 text-sm text-left flex items-start justify-start mt-2 -mb-4 italic'>Say goodbye to random responses. Get valuable data every time.</span>
                        
                        </div>
                    </div>
                    <div className='md:hidden relative flex '>
                        <span className='px-2'><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        className="h-24 w-16 absolute top-0"
                        >
                        <path
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                            d="M 30, 100 Q -20,40 20,20"
                            
                        />
                        </svg></span>
                        
                        <div className='relative flex flex-col'>
                            <Link 
                        to="demo_sm"
                        smooth={true}
                        duration={1550}
                        className="md:hidden text-center bg-yellowb2b font-semibold flex shadow-sm hover:bg-greenb2b hover:text-white  text-black hover:text-black hover:shadow-lg-black cursor-pointer text-base sm:py-2 sm:px-1 rounded-3xl"                        
                        >
                        Smart Forms Designed for Students - Watch Demo
                        </Link>        
                        <span className='text-gray-400 text-sm text-left flex items-start justify-start mt-2 -mb-4 italic ml-3'>Say goodbye to random responses. Get valuable data every time.</span>
                        
                        </div>
                    </div>

                </div>
                    
                <div className="text-green-b2b w-full justify-center text-center flex flex-col md:flex-row mt-24 mx-auto mb-5 md:gap-14 ">
    <div className='flex items-center flex-col'>
        <PiNumberCircleOne className='text-greenb2b w-auto h-[30px]' />
        <div className='font-bold text-lg mt-2'>Choose a Tool</div>
    </div>
    <div className='flex items-center flex-col mt-6 md:mt-0 mx-4'>
        <PiNumberCircleTwo className='text-greenb2b w-auto h-[30px]' />
        <div className='font-bold text-lg mt-2'>Get the Analysis</div>
    </div>
    <div className='flex items-center flex-col mt-6 md:mt-0 mx-4'>
        <PiNumberCircleThree className='text-greenb2b w-auto h-[30px]' />
        <div className='font-bold text-lg mt-2 sm:mb-16'>Take Action</div>
    </div>
</div>



            </div>

            <div className="">
            </div>      


        </div>
    </section>
  );
};

export default Hero

