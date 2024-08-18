// src/components/HealthTracker.js
import React from "react";
import { Box, Typography } from "@mui/material";
import photo from "../assets/roojh2.png";
import photos from "../assets/roojh3.png";

import cough from '../assets/caough.png'
import left from '../assets/left-meter.png'
import right from '../assets/right-meter.png'
const HealthTracker = () => {
  return (
    <Box className="p-10 bg-white">
      {/* Heading */}
      <Typography
        variant="h3"
        style={{fontSize: 42, fontWeight:700, maxWidth: 800,margin:'auto'}}
        align="center"
        className="text-transparent mx-auto bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
      >
        Track your health journey with ease
      </Typography>
      <Typography
      style={{ maxWidth: 800,margin:'auto', marginTop:6}}
      align="center" className="text-gray-500 mt-4">
        Feeling under the weather? Wondering if your chronic condition is acting up?
        Roojh helps you keep tabs on your health data, from blood pressure to your
        serum iron level and beyond.
      </Typography>

      {/* Flex Container */}
      <Box className="mt-10 flex flex-col space-y-5 max-w-4xl mx-auto gap-8">
        {/* First Row */}
        <Box className='relative'>
        <Typography variant="h5" className="text-gray-700 max-w-sm z-30 absolute left-8 top-8">
              Are you noticing any unusual symptoms like chronic cough?
            </Typography>
            <Box className=" flex relative h-72 py-12  rounded-lg w-full max-w-full text-center">
           
           <img
             src={cough}
             alt="Chronic Cough"
             className="mt-4 mx-auto absolute bottom-0 right-0"
           />
         </Box>
        </Box>
        

        {/* Second Row */}
        <Box className="flex  justify-between space-x-8 h-full">
          <Box className="p-5 h-72  rounded-lg relative flex-1 text-center">
            <Typography variant="h6" className="text-gray-700 text-start z-40">
              Are you noticing any changes in your heart rate?
            </Typography>
            <img
              src={left}
              alt="Heart Rate"
              className="mt-4 mx-auto z-10 absolute fill object-cover bottom-0 right-0"
            />
          </Box>
          <Box className="p-5 h-72 relative  rounded-lg flex-1 text-center">
            <Typography variant="h6" className="text-gray-700 text-start">
              Is your blood sugar level abnormal?
            </Typography>
            <img
              src={right}
              alt="Blood Sugar"
              className="mt-4 mx-auto fill object-cover absolute bottom-0 right-0"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HealthTracker;
