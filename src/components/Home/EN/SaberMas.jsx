const SaberMas = () => {
  return (
    <div className="sm:w-[90%] sm:items-center flex flex-col items-center relative h-auto md:mt-8 sm:mt-24 sm:mb-14">
      <h4 className="text-2xl font-bold mt-14 mb-14">Do you want to know more?</h4>
      <div className="md:grid items-start text-center relative md:grid-cols-3 md:w-[90%] md:gap-10">
        <div className="flex sm:ml-8 md:grid-cols-2 md:gap-6 sm:gap-4 sm:mb-10">
          <div className="text-left">
            <b>Know more about GPT</b><br />
            <a className="text-sm">One of the main components of Dani's architecture is language models with GPT technology. <a rel='nofollow' href="https://openai.com/research/overview" target="_blank" >Learn more about this technology.</a></a>
          </div>
          <img src="image.avif" className="md:mt-0 sm:mt-4 rounded-lg h-[110px] w-[110px]"></img>
        </div>

        <div className="flex sm:ml-8 md:grid-cols-2 md:gap-6 sm:gap-4 sm:mb-10">
          <div className="text-left">
            <b>Research</b><br />
            <a className="text-sm">"Simulacra of Human Behavior". <a rel='nofollow' href="https://arxiv.org/abs/2304.03442" target="_blank" >Read more about the findings of this publication and what genAI can achieve with the right architecture.</a></a>
          </div>
          <img src="research.png" className="md:mt-0 sm:mt-4 sm:items-end rounded-lg h-[110px] w-[110px]"></img>
        </div>

        <div className="flex sm:ml-8 md:grid-cols-2 sm:gap-4 md:gap-6">
          <div className="text-left">
            <b>Components</b><br />
            <a className="italic text-sm"> "Dani is NOT just another chatbot that encourages you to exercise every time you write to it(...) We've designed a highly specific component architecture that enables it to understand context, emotions, prioritize, and plan(...)".</a> <a className="text-sm">Read more here.</a>
          </div>
          <img src="dani_picture.jpg" className="md:mt-0 sm:mt-4 rounded-lg h-[110px] w-[110px]"></img>
        </div>
      </div>
      {/* Rest of your content */}
    </div>
  );
};

export default SaberMas;

