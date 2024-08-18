import React from 'react';
import { Button } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import '../App.css';
import img from '../assets/roojh.png';
function Landing() {
  return (
    <>
    <div className="flex flex-col items-center justify-center  bg-white">
      <div className="text-center mt-28 z-10 relative">
        <div className="text-[48px] md:text-[60px] lg:text-[180px] z-30 relative font-bold text-transparent py-4 bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">
          Roojh
        </div>
          <span className='text-[120px] md:text-[150px] lg:text-[290px] font-bold absolute text-neutral-500/5 right-1/2 translate-x-1/2 -top-20 z-[2]'>Roojh</span>

        <p className="my-4 text-base break-words md:text-2xl font-medium text-gray-400">Your personal AI health advisor</p>
        <div className="my-16">

          <div className="relative inline-flex items-center justify-center w-20 h-20  bg-red-100 rounded-full">
            <MicIcon className="text-red-500" style={{ fontSize: 40 }} />
            <div className="absolute inset-0 w-full h-full rounded-full animate-ping bg-red-300"></div>
          </div>
        </div>

        <p className="mt-8 text-2xl md:text-3xl font-semibold text-gray-400">
          We are ready to answer <br /><span className="text-transparent text-3xl md:text-4xl font-bold py-2 bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">your health related questions</span>
        </p>
      </div>

      <div className="mt-12">
        <Button variant="contained" style={{paddingTop:12, paddingBottom: 12, paddingLeft:8, paddingRight: 8, borderRadius:12}} color="error" size="large">
          Download Roojh App
        </Button>
      </div>
      <div className="text-center mt-14">
       <h2 className="text-xl text-gray-500 font-semibold flex items-center justify-center space-x-2">
       <span className="h-1 w-16 bg-gradient-to-r from-red-500 to-orange-500"></span>
        
         <span>Built By Doctors</span>
         <span className="h-1 w-16 bg-gradient-to-r from-red-500 to-orange-500"></span>
       </h2>
     </div>
     <div className="text-center  mt-8">
       <p className="text-gray-600 text-lg">
         ✨ Government of India ABDM approved PHR and EHR App ✨
       </p>
      
     </div>
    </div>
     <div className="py-8 gap-12 bg-white flex flex-col items-center justify-center space-y-6">
     <div className="bg-red-100 text-red-400 rounded-2xl inline-flex items-center px-6 py-2 space-x-2">
         <span className="text-2xl">🔒</span>
         <span className='text-xs md:text-xl'>Protected by the strongest data privacy</span>
       </div>

     <div className="flex justify-center flex-wrap gap-6">
        {/* Dummy images using Material-UI for logos */}
        <img src={img} alt="Logo 1" className="h-24 object-contain" />
        <img src={img} alt="Logo 2" className="h-24 object-contain" />
        <img src={img} alt="Logo 3" className="h-24 object-contain" />
        <img src={img} alt="Logo 4" className="h-24 object-contain" />
        <img src={img} alt="Logo 5" className="h-24 object-contain" />
      </div>
     </div>
     </>
  );
}

export default Landing;
