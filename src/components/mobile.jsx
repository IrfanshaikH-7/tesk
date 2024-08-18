// src/components/DigitalHealthcare.js
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import image from '../assets/mobile.png';
const DigitalHealthcare = () => {
  return (
    <Box className="flex items-center justify-between px-10 py-20 h-full overfl  bg-gray-50">
      {/* Left Section */}
      <Box className="space-y-12 max-w-3xl">
        <Typography
          variant="h3"
          style={{fontWeight: 500}}
          className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 font-bold"
        >
          Participate in India's digital healthcare revolution
        </Typography>
        <Typography style={{fontSize: 16}} className="text-gray-600 ">
          Create ABHA and store all your medical records with Roojh <br />(Government of India ABDM approved PHR App)
        </Typography>
        <Button
          variant="contained"
          style={{backgroundColor: '#f87171'}}
          className="bg-red-400 text-white rounded-full px-6 py-3 mt-4"
        >
          Create ABHA
        </Button>
        <Box className="flex space-x-3 mt-4">
          <Button
            variant="outlined"
            style={{borderRadius: 40, fontSize:10}}
            className="rounded-full border-gray-300 text-gray-600 px-4 py-2"
          >
            53 crores Indians have already created ABHA
          </Button>
          <Button
            variant="outlined"
            style={{borderRadius: 40, fontSize:10}}
            className="rounded-full border-gray-300 text-gray-600 px-4 py-2"
          >
            Official partner of Government of India
          </Button>
        </Box>
      </Box>

      {/* Right Section (Image) */}
      <Box className="hidden md:block">
        <img
          src={image}  // Replace with your image path
          alt="Roojh App"
          className="w-full h-auto"
        />
      </Box>
    </Box>
  );
};

export default DigitalHealthcare;
