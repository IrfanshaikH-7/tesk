import React from 'react';
import left from '../assets/pink-left.png'
import right from '../assets/right-pink.png'
import bLeft from '../assets/b-left-pink.png'
import bRight from '../assets/b-right-pink.png'
function HealthDashboard() {
  const cards = [
    {
      text: "How is Dad’s sugar level in the past 3 months?",
      image: left, 
      large: true, 
    },
    {
      text: "Did Mom see the doctor?",
      image: right, 
      large: false,
    },
    {
      text: "How was the latest physical exam of my child?",
      image: bLeft, 
      large: false,
    },
    {
      text: "Roojh Your Family Health Assistant",
      image:bRight, 
      large: true, 
    },
  ];

  return (
    <main className='bg-white w-full'>
  <div className="p-6 max-w-4xl mx-auto bg-white">
      <h1 className="text-center text-3xl font-semibold text-red-500 mb-4">
        Take care of your <span className="text-blue-500">loved ones</span>
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Add health profiles of your loved ones and support them with medication reminders, health tips, and valuable resources. Because distance shouldn’t limit the warmth of your care.
      </p>
      
      <div className="flex flex-wrap justify-center gap-6">
        {/* First row */}
        <div className="flex w-full md:flex-row flex-col gap-6">
          {/* Large box */}
          <div className="flex-1 md:flex-[1] h-72">
            <div className={`relative text-white p-6 rounded-3xl  h-full z-20`} style={{ backgroundImage: `url(${cards[0].image})` }}>
              {/* <img src={left} fill alt=""className=" mx-auto z-[9] mb-4 rounded-3xl object-cover absolute bottom-0 right-0" /> */}
              <p className="text-start p-6 font-semibold max-w-sm text-2xl z-10 "
>{cards[0].text}</p>
            </div>
          </div>

          {/* Smaller box */}
          <div className=" h-full">
            <div className=" text-white p-6 rounded-3xl h-full" style={{ backgroundImage: `url(${cards[1].image})` }}>
              <p className="text-start p-6 font-semibold max-w-sm text-2xl "
>{cards[1].text}</p>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex w-full md:flex-row flex-col gap-6">
          {/* Smaller box */}
          <div className="w-full h-72  ">
            <div className=" text-white p-6 rounded-3xl h-full bg-no-repeat"  style={{ backgroundImage: `url(${cards[3].image})` }}>
              {/* <img src={cards[2].image} alt=""className="w-24 h-24 mx-auto mb-4 rounded-full object-cover absolute bottom-0 right-0" /> */}
              <p className="text-start p-6 font-semibold max-w-sm text-2xl "
>{cards[2].text}</p>
            </div>
          </div>

          {/* Large box */}
          <div className=" h-full">
            <div className=" text-white p-6 rounded-3xl h-full bg-no-repeat"  style={{ backgroundImage: `url(${cards[2].image})` }}>
              {/* <img src={cards[3].image} alt=""className="w-24 h-24 mx-auto mb-4 rounded-full object-cover absolute bottom-0 right-0" /> */}
              <p className="text-start p-6 font-semibold max-w-sm text-2xl "
>{cards[3].text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Download App Button */}
      {/* <div className="fixed bottom-6 right-6">
        <button className="bg-red-500 text-white p-3 rounded-full shadow-lg flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Download App</span>
        </button>
      </div> */}
    </div>
    </main>
  
  );
}

export default HealthDashboard;