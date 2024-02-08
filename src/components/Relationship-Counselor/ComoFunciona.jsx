import React from 'react';
import { HiLightBulb } from 'react-icons/hi';
import { VscChecklist } from 'react-icons/vsc';
import { GiHumanTarget } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';
import { IoThunderstorm } from 'react-icons/io5';
import { BsHeartbreakFill } from 'react-icons/bs';
 
 
const WidgetComponent = () => {
  return (
<section className='sm:mb-32 mt-28 md:mt-36 flex flex-col items-center md:-mb-24' id="deserve">
<h4 className="font-bold text-center text-3xl lg:text-4xl mb-4 sm:w-[75%]">You deserve more. Get Mia ❤</h4>
    <p       className="text-lg text-black justify-center text-center items-center md:w-[50%] mb-4">
    Ideal for women who want a successful relationship and need an intimate space to share, be heard, and move to the next level.</p>
  <div className='bg-white w-full md:w-[70%] sm:w-[74%]'>
  </div>
  {/* div color navy */}
  <div className='md:grid md:grid-cols-4 md:w-[70%] md:h-[400px] 
  bg-navy md:rounded-lg sm:w-full sm:h-auto'>

          <div className='max-h-[400px] sm:max-w-[82%] sm:mt-24 sm:-mb-8'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <GiHumanTarget className='text-4xl text-crayola'/>  
              </div>
              <div className='sm:ml-12 sm:text-center md:ml-7 sm:text-xl md:text-lg font-bold text-white'>
              Finding a Partner
              </div>
              <div className='sm:mt-32  sm:text-center  text-white text-sm font-light md:mt-14    
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>
                &#10003; Troubles finding a partner<br/>
                &#10003; Doubts and anxiety<br/>
                &#10003; Fear of rejection
                 
              </div>
          </div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <HiLightBulb className='text-4xl text-crayola'/>
              </div>
              <div className='sm:ml-12 sm:text-center sm:text-xl md:text-lg ml-7 font-bold text-white'>
              Starting a Relationship
              </div>
              <div><div className='sm:mt-32   sm:text-center text-white text-sm font-light  md:mt-14   
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>
                &#10003; Don't know how to progress<br/>
                &#10003; Establish trust & boundaries<br/>
                &#10003; Communication issues

</div></div></div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
            <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <AiFillHeart className='text-4xl text-crayola' /></div>
          <div className='sm:ml-12 sm:text-center sm:text-xl md:text-lg md:ml-7 font-bold md:-mr-9 text-white'>
          Maintaining a Relationship
              </div>
        <div><div className='sm:mt-32 sm:text-center  text-white text-sm font-light  md:mt-14   
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>
                &#10003; Keep the feelings alive<br/>
                &#10003; Get into the next level<br/>
                &#10003; Deal with conflicts

                </div></div></div>
  </div>
{/* div color navy 2 - version small devices */}
  <div className='md:hidden md:grid md:grid-cols-4 md:w-[70%] md:h-[400px]  
  bg-navy md:rounded-lg sm:w-full sm:h-[auto]'>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-14 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <IoThunderstorm className='text-4xl text-crayola'/>  
              </div>
              <div className='sm:ml-12 sm:text-center text-xl md:ml-7 font-bold text-white'>
              Navigating Challenges
              </div>
              <div className='sm:mt-32 text-center text-white text-sm font-light md:mt-14    
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'> 
              &#10003;Manage jealousy and insecurities<br/>   
              &#10003;Navigate serious disputes<br/> 
              &#10003;Overcome infidelity


              </div>
          </div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
              <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <VscChecklist className='text-4xl text-crayola'/>
              </div>
              <div className='sm:ml-12 sm:text-center text-xl md:ml-7 font-bold text-white'>
              Considering Breakup
                            </div>
              <div><div className='sm:mt-32 text-center text-white text-sm font-light md:mt-14    
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>
                &#10003; Coping with emotional distress<br/>
                &#10003; Communicating the decision<br/> 
                &#10003; Decision paralysis
                
</div></div></div>
          <div className='max-h-[400px] sm:max-w-[80%] sm:-mb-6'>
            <div className='sm:mt-16 sm:mx-auto md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <BsHeartbreakFill className='text-4xl text-crayola h-[55%] w-auto' /></div>
          <div className='sm:ml-12 sm:text-center md:ml-7 text-xl font-bold text-white'>
          Post-Breakup
              </div>
        <div><div className='sm:mt-32 text-center text-white text-sm font-light  md:mt-14   
              items-center transform translate-x-4 -translate-y-28 md:ml-3 md:w-[80%] md:mt-36 sm:text-lg'>
                &#10003; Healing from emotional pain<br/>
                &#10003; Rebuilding self-confidence<br/>
                &#10003; Preparing to love again
</div></div></div>
  </div>
  {/* div that should be displayed just below the one that's color navy, but at the same time under the one that's color lavanda*/}
  <div className='sm:hidden md:grid md:grid-cols-4 md:w-[70%] md:h-[400px]  
  rounded-lg sm:w-full sm:h-[300vh]'>
          <div>
              <div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <IoThunderstorm className='text-4xl text-crayola'/>  
              </div>
              <div className='ml-7 md:text-lg font-bold text-black'>
              Navigating Challenges

              </div>
              <div className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 w-[80%] md:mt-36'> 
              &#10003; Manage jealousy & insecurities<br/>   
              &#10003; Overcome infidelity<br/> 
              &#10003; Navigate serious disputes
              </div>
          </div>
          <div>
              <div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
                <VscChecklist className='text-4xl text-crayola'/>
              </div>
              <div className='ml-7 md:text-lg font-bold text-black w-[80%]'>
              Considering Breakup
              </div>
              <div><div className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 w-[80%] md:mt-36'>
                &#10003; Decision paralysis<br/> 
                &#10003; Communicate the decision<br/> 
                &#10003; Coping with emotional distress
          </div></div></div>
          <div><div className='sm:mt-12 sm:ml-4 md:mt-14 flex justify-center items-center transform translate-x-1/2 -translate-y-1/2 rounded-full w-[56px] h-[56px] bg-lavanda'>
          <BsHeartbreakFill className='text-4xl text-crayola  h-[55%] w-auto' /></div>
          <div className='ml-7 md:text-lg font-bold text-black w-[60%]'>
          Post-Breakup
              </div>
        <div><div id="empresas" className='sm:mt-20 sm:ml-20 sm:w-[30vh] text-black text-sm font-light sm:mt-12 sm:ml-4 md:mt-14   
              items-center transform translate-x-4 -translate-y-28 ml-3 md:w-[82%] w-[80%] md:mt-36'>
                     &#10003; Heal from emotional pain<br/>
                &#10003; Rebuild self-confidence<br/>
                &#10003; Prepare to love again
                </div></div></div>

  </div>

      {/* div color lavanda */}
      <div className='sm:hidden left-1/3 transform -translate-y-80 -mt-80 -translate-x-1/2 relative w-[18%] h-[450px] ml-60 sm:ml-0 z-20'>
  <img src="free_iphonex_mockup.png" alt="free_iphonex_mockup" className='w-full h-auto overflow-x-visible z-25' />

  {/* Position the WhatsApp notification */}
  
        <div  className="absolute inset-0 flex justify-center items-center">
          <div  className="bg-gray-50 bg-opacity-50 rounded-lg text-black text-center px-2 py-2 w-[80%]">
            <div  className="flex justify-between items-center px-4">
              <div  className="flex items-center">
                
              </div>
              <p  className="font-bold text-sm -mt-1 -ml-7">Mia</p>

              <div  className="text-xs -mt-1 -mr-4">1 min</div>
            </div>
            <div  className="px-10 py-2">

              <p  className="font-normal text-xs -mt-1 -ml-6 -mr-14">Hey, how's it going?</p>
            </div>
          
    </div>
  </div>

  <img src="Mia.png" className='rounded-full w-[40px] h-[40px] -ml-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30' />
  <img src="whatsapp_logo.png" alt="WhatsApp Icon"  className="w-[34px] h-[34px] -ml-12 mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"></img>

</div>
    

    </section>
  );
};


export default WidgetComponent;
