import React from 'react';
import man from '../assets/man.png'
function GradientSection() {
  const cards = [
    {
      text: "Your recent blood pressure readings are higher than usual. Consider low-sodium meals to help manage it.",
      image: {man}, // Replace with your image path
      large: true, // Mark this as a larger box
    },
    {
      text: "You might be consuming more sugar than recommended. Would you like to explore some low-sugar snack options?",
      image: {man}, // Replace with your image path
      large: false,
    },
    {
      text: "Feeling stressed? Try meditation! Ready for a quick session together?",
      image: "path/to/physical-exam-image.png", // Replace with your image path
      large: false,
    },
    {
      text: "Feeling stressed? Try meditation! Ready for a quick session together?",
      image: "path/to/physical-exam-image.png", // Replace with your image path
      large: false,
    },
    {
      text: "Roojh Your Family Health Assistant",
      image: "path/to/assistant-image.png", // Replace with your image path
      large: true, // Mark this as a larger box
    },
  ];

  return (
    <main  className='overflow-hidden h-[690px] md:h-[800px] bg-white lg:h-[900px] relative z-[9999]'>
  <div className="p-4 max-w-7xl mx-auto z-[9999] mt-5">
      <h1 className="text-center text-2xl md:text-[24px] z lg:text-[52px] font-semibold text-white mb-4">
      Get personalized health advice, just for you
      </h1>
      <p className="text-center text-sm lg::text-xl text-white max-w-4xl mx-auto mb-8">
      Feeling a bit low on energy? Roojh suggests a quick, uplifting workout or recommends a nutritious snack to keep you fueled throughout the day. It’s like having a wellness genie in your pocket!
      </p>
      
      <div className="flex flex-wrap justify-center gap-2 md:gap-6 ">
        <div className="flex w-full flex-col gap-4 md:gap-16 max-w-4xl  mr-4 mt-5">
          <div className="flex-1 md:flex-[1] hidden lg:block">
            <div className="bg-white h-40 relative text-black p-6 rounded-3xl flex items-center">
              <img src={cards[0].image} alt="" className="w-24 h-24 mx-auto mb-4 rounded-full object-cover absolute bottom-0 right-0" />
              <p className="text-center text-base lg:text-xl max-w-lg font-semibold">{cards[0].text}</p>
            </div>
          </div>

          <div className="flex-1 md:flex-[1]">
            <div className="bg-white h-40 relative text-black p-6 rounded-3xl flex items-center">
              <img src={cards[1].image} alt="" className="w-24 h-24 mx-auto mb-4 rounded-full object-cover absolute bottom-0 right-0" />
              <p className="text-center text-base lg:text-xl max-w-lg font-semibold">{cards[1].text}</p>
            </div>
          </div>
          <div className="flex-1 md:flex-[1] ">
            <div className="bg-white h-40 relative text-black p-6 rounded-3xl flex items-center shadow-md ">
              <img src={cards[0].image} alt="" className="w-24 h-24 mx-auto mb-4 rounded-full object-cover absolute bottom-0 right-0" />
              <p className="text-center text-base lg:text-xl max-w-lg font-semibold">{cards[0].text}</p>
            </div>
          </div>
        </div>

       
      </div>

      {/* Download App Button */}
      {/* <div className="fixed bottom-6 right-6">
        <button className="bg-white text-white p-3 rounded-full shadow-lg flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Download App</span>
        </button>
      </div> */}
    </div>
<img src="/gradient.png" className='absolute top-0 h-[900px] w-full -z-10' alt="" />

    </main>
  
  );
}

export default GradientSection;