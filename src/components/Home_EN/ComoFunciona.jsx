import React from 'react';
import { MdMemory } from 'react-icons/md';
import { BiSolidConversation } from 'react-icons/bi';
import { VscChecklist } from 'react-icons/vsc';
import { BiSolidLockAlt } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { GiHumanTarget } from 'react-icons/gi';

const WidgetComponent = () => {
  return (
<section className=' md:mt-28 sm:py-14 sm:mb-4 sm:bg-navy md:mt-36 flex flex-col items-center'>
  <div className='bg-white w-full md:w-[70%]'>
  </div>
  {/* div color navy */}
  <div className='md:grid md:grid-cols-4 md:w-[70%] md:h-[400px] 
  bg-navy md:rounded-lg sm:w-full'>

          <div className='max-h-[400px] sm:mx-auto sm:max-w-[80%] sm:mt-24 sm:-mb-8'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform md:translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <BiSolidLockAlt className='text-4xl text-crayola'/>  
              </div>
              <div className='sm:text-center md:ml-7 sm:text-xl md:text-lg font-bold text-white'>
              Safety & Privacy
              </div>
              <div className='sm:mt-32  sm:text-justify  text-white text-sm font-light md:mt-14    
              items-center   -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>Your conversations are private, secure, and anonymous. We treat all user data as Protected Health Information (PHI) and fully comply with HIPAA regulations to ensure your information is protected.
   
              </div>
          </div>
          <div className='sm:mx-auto  max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform md:translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <GiHumanTarget className='text-4xl text-crayola'/>
              </div>
              <div className='sm:text-center md:ml-7 sm:text-xl md:text-lg font-bold text-white'>
              Accurate results
              </div>
              <div><div className='sm:mt-32  sm:text-justify  text-white text-sm font-light md:mt-14    
              items-center   -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>We employ some of the most sophisticated AI models available to guarantee the highest possible accuracy in our results. Before introducing our product to the market, we carried out extensive testing.</div></div></div>
          <div className='sm:mx-auto  max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform md:translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>

          <VscChecklist className='text-4xl text-crayola' /></div>
          <div className='sm:text-center sm:text-xl md:text-lg md:ml-7 font-bold text-white'>
            Clinical Foundations
              </div>
        <div><div className='sm:mt-32  sm:text-justify  text-white text-sm font-light md:mt-14    
              items-center   -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>Our evaluation draws on the methods of cognitive behavioral therapy (CBT), widely regarded as the "gold standard" in contemporary psychotherapy. Its effectiveness is well-documented across numerous studies.
              </div></div></div>
  </div>
{/* div color navy 2 - version small devices */}
  <div className='md:hidden md:grid md:grid-cols-4 md:w-[70%] md:h-[400px]  
  bg-navy md:rounded-lg sm:w-full sm:h-[auto]'>
          <div className='sm:mx-auto  max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <AiFillHeart className='text-4xl text-crayola'/>  
              </div>
              <div className='sm:text-center text-xl md:ml-7 font-bold text-white'>
              Access Made Simple
              </div>
              <div className='sm:mt-32  sm:text-justify  text-white text-sm font-light md:mt-14    
              items-center   -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'> Take the assessment whenever it suits you. Feel free to pause and resume at your convenience. All you need is a device with WhatsApp and an internet connection.   
              </div>
          </div>
          <div className='sm:mx-auto  max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform md:translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <MdMemory className='text-4xl text-crayola'/>
              </div>
              <div className='sm:text-center text-xl md:ml-7 font-bold text-white'>
              10x More Efficient
                            </div>
              <div><div className='sm:mt-32  sm:text-justify  text-white text-sm font-light md:mt-14    
              items-center   -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>Skip the procedures, waiting lists, and scheduling hassles. A report similar to what DaniGPT produces could take five traditional psychotherapy sessions, but Dani gets it done in just 30 minutes.              </div></div></div>
                    <div className='sm:mx-auto  max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform md:translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <BiSolidConversation className='text-4xl text-crayola h-[55%] w-auto' /></div>
          <div className=' sm:text-center md:ml-7 text-xl font-bold text-white'>
          Conversational
              </div>
        <div><div className='sm:mt-32  sm:text-justify  text-white text-sm font-light md:mt-14    
              items-center   -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>Chat as you would with a friend, responding to straightforward questions in everyday language. There's no need for psychological jargon or extensive personal disclosures to complete the assessment.</div></div></div>
  </div>
  {/* div that should be displayed just below the one that's color navy, but at the same time under the one that's color lavanda*/}
  <div className='sm:hidden md:grid md:grid-cols-4 md:w-[70%] md:h-[400px]  
  rounded-lg sm:w-full sm:h-[300vh]'>
          <div>
              <div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <AiFillHeart className='text-4xl text-crayola'/>  
              </div>
              <div className='ml-7 md:text-lg font-bold text-black'>
              Access Made Simple
              </div>
              <div className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 w-[80%] md:mt-36'>Take the assessment whenever it suits you. Feel free to pause and resume at your convenience. All you need is a device with WhatsApp and an internet connection.</div>
          </div>
          <div>
              <div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <MdMemory className='text-4xl text-crayola'/>
              </div>
              <div className='ml-7 md:text-lg font-bold text-black w-[80%]'>
              10x More Efficient
              </div>
              <div><div className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 w-[80%] md:mt-36'>Skip the procedures, waiting lists, and scheduling hassles. A report similar to what DaniGPT produces could take five traditional psychotherapy sessions, but Dani gets it done in just 30 minutes.</div></div></div>
          <div><div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <BiSolidConversation className='text-4xl text-crayola  h-[55%] w-auto' /></div>
          <div className='ml-7 md:text-lg font-bold text-black w-[82%]'>
          Conversational 
              </div>
        <div><div id="empresas" className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 md:w-[82%] w-[80%] md:mt-36'>Chat as you would with a friend, responding to straightforward questions in everyday language. There's no need for psychological jargon or extensive personal disclosures to complete the assessment. </div></div></div>

  </div>

      {/* div color lavanda */}
      <div className='sm:hidden left-1/3 transform -translate-y-80 -mt-80 -translate-x-1/2 relative w-[18%] h-[450px] ml-60 sm:ml-0 z-20'>
  <img src="../free_iphonex_mockup.png" alt="free_iphonex_mockup" className='w-full h-auto overflow-x-visible z-25' />

  {/* Position the WhatsApp notification */}
  
  <div  className="absolute inset-0 flex justify-center items-center">
    <div id="dividir-2-filas" className=' xl:mt-36 flex grid gris-rows-2  w-[80%] flex justify-center items-center gap-2 mt-6'>
        <div  className="bg-gray-50   bg-opacity-50 rounded-lg text-black grid grid-cols-2 gap-0 text-center py-2 w-[100%]">
          <div className=' w-[50%]  flex flex-col items-center justify-center place-items-center relative'>
            <img src="../new_dani.png " className='rounded-full w-[35px] h-[35px]' />
            <img src="../whatsapp_logo.png" alt="WhatsApp Icon"  className="w-[32px] h-[32px] z-40 absolute -mr-6 mt-6"></img>
          </div>
          <div  className="w-[141%] justify-between items-center ml-[-48%]">
            <div  className="flex justify-between items-center -mt-1">              
              <p  className="font-bold text-sm ">DaniGPT</p>
              <p  className="text-xs text-slate-500 ">1 min</p>
            </div>
            <div>
              <p  className="font-normal text-left text-xs ">Have you ever been to therapy before, James?</p>
            </div>
          </div>
        </div>


        <div  className="bg-gray-50  bg-opacity-50 rounded-lg text-black grid grid-cols-2 gap-0 text-center py-2 w-[100%]">
          <div className=' w-[50%]  flex flex-col items-center justify-center place-items-center relative'>
            <img src="../new_dani.png" className='rounded-full w-[35px] h-[35px]' />
            <img src="../whatsapp_logo.png" alt="WhatsApp Icon"  className="w-[32px] h-[32px] z-40 absolute -mr-6 mt-6"></img>
          </div>
          <div  className="w-[141%] justify-between items-center ml-[-48%]">
            <div  className="flex justify-between items-center -mt-1">              
              <p  className="font-bold text-sm ">DaniGPT</p>
              <p  className="text-xs text-slate-500 ">2 min</p>
            </div>
            <div>
              <p  className="font-normal text-left text-xs ">What is the main issue causing distress for you right now?</p>
            </div>
          </div>
        </div>
    </div>

</div>

</div>
    

    </section>
  );
};


export default WidgetComponent;
