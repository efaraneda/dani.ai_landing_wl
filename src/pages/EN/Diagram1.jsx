import Dona1 from './Dona1'
import Dona2 from './Dona2'
import Bar from './Bar1'
import Checkbox from '../../../src/components/Olivia/Home/Checkbox'

const Hero = () => {


    return (
      <section className="font-sans"  >
        
        <div className="md:grid md:grid-cols-3 md:flex md:flex-col" style={{ gridTemplateColumns: '16% auto 16%' }}>
            <div className='sm:w-screen'> {/*Información CTA*/}
            </div>
            <div className='md:hidden items-center flex flex-col text-center w-full h-auto'>
      <img src="screen.png" className="w-[90%] h-auto " alt=""  />
    </div>
            <div className="sm:hidden grid grid-cols-3  gap-x-4 w-full flex flex-col h-[90%] border-b border-gray-200" style={{ gridTemplateColumns: '8% auto 56%' }}>
                <div className="bg-greenb2b  rounded-tl-xl shadow-2xl  h-[90%]"><div> <img src="logob2b-white.png" alt="" className="w-1/2 mx-auto mt-6" /></div></div>
                <div className="shadow-2xl -ml-5 h-[90%]">

                    <div className="font-bold text-xl text-greenb2b ml-8 mt-4 ">
                    Jefferson High School
                    </div>
                    <div className="font-semibold text-greenb2b ml-7 mt-4 flex gap-2 grid grid-row-2">
                        <div className='flex gap-2'>
                            <Checkbox/>7th grade
                        </div>
                        <div className='ml-6 flex gap-2 opacity-40'>
                            <Checkbox/> Applied Tools 
                        </div>
                        <div className='ml-11 flex gap-2 opacity-40'>
                            <Checkbox/> Climate Index
                        </div>
                        <div className='ml-11 flex gap-2 opacity-40'>
                            <Checkbox/> Student Wellness Index
                        </div>
                        <div className='ml-6 flex gap-2'>
                            <Checkbox/> Data Analysis & Reports
                        </div>
                    </div>
                    
                    <div className='w-[80%] ml-8 mt-16 items-center justify-center '>
                        <div className="bg-gray-100 h-4 rounded-md mb-2"></div>
                        <div className="bg-gray-100 h-4 rounded-md mb-2"></div>
                        <div className="bg-gray-100 h-4 rounded-md mb-2"></div>
                        <div className="bg-gray-100 h-4 rounded-md mb-2"></div>
                        <div className="bg-gray-100 h-4 rounded-md mb-2"></div>
                        <div className="bg-gray-100 h-4 rounded-md mb-2"></div>
                        <div className="bg-gray-100 h-4 rounded-md mb-2"></div>
                        <div className="bg-gray-100 h-4 rounded-md mb-2"></div>
                        <div className="bg-gray-100 h-4 rounded-md mb-2 sm:hidden"></div>
                        <div className="bg-gray-100 h-4 rounded-md mb-2 sm:hidden"></div>
                    </div>
                </div>
                <div className="grid grid-rows-2 gap-l-4">
                    <div className="shadow-xl rounded-xl h-[100%]">
                        
                    <div className='py-6'></div>
                        
                    <div className='items-center flex justify-center gap-16'>

                            <div className='text-center font-semibold text-gray-400 text-lg'>
                            
                                School Climate Index<Dona1 ></Dona1>
                           </div>
                           <div className='text-center font-semibold text-gray-400 text-lg'>

                                Situations to Prevent<Dona2></Dona2>
                            </div>
                        </div>
                        <div className='w-[80%] ml-12 -mt-2 items-center justify-center'>
                        <div className="bg-gray-100 h-4 rounded-md mb-2"></div>
                        <div className="bg-gray-100 h-4 rounded-md mb-2"></div>
                    </div>
                        <div className='py-4'></div>
                    
                    </div>

                    <div className="shadow-xl w-[80%] h-[80%] ">
                        
                        <div className='items-center  justify-center flex flex-col'>
                            <div className='py-2'></div>
                            <div className='text-center font-semibold text-gray-400 text-lg'>
                                Risk Factors v/s Protective Factors
                            </div>
                            <div className="text-xs ">
                        <Bar></Bar>
                        </div>
                        <div className='w-[80%] ml-1 mt-4 items-center justify-center' id="demo">
                    
                    </div>

                        </div>
                    </div>
                </div>
                    
            </div>

            
            <div className=''>
            </div>      


        </div>
    </section>
  );
};

export default Hero

