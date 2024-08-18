import React from 'react';
import { Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import photo from '../assets/roojh2.png'
import step2 from '../assets/step2.png'
import step3 from '../assets/roojh3.png'
const HowItWorks = () => {
  return (
    <Box className="bg-white py-10 w-full px-5 md:px-20 hidden lg:block">
      <Typography
        variant="h4"
        style={{fontSize: 46, fontWeight: 700}}
        className="text-center py-16 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-10"
      >
        How Roojh Magic Works?
      </Typography>
<div className='max-w-5xl mx-auto '>
<Box  className="relative flex flex-col items-center justify-center w-full ">
        {/* Vertical dashed line */}
        <div className="absolute left-4 top-0 bottom-0 transform border-l-2 border-dashed border-gray-300"></div>

        {/* Step 1 */}
        <Box className="relative mb-16 w-full  flex -translate-x-6">
          <Box className="relative flex flex-row items-start  ">
            <Box className="flex items-center mb-2  mt-36">
            <div className="flex bg-red-500 rounded-full px-4 py-3 items-center mb-2">
              <Typography variant="h6" className="font-semibold">
                Step 1
              </Typography>
            </div>
            </Box>
            <Box className=" flex flex-col   justify-center  rounded-lg w-[900px]  min-[1054px]:scale-[0.8] bg-no-repeat bg-center  flex-1 p-14 " style={{ backgroundImage: `url(/tiltright.png)` }}>
            <div className='h-12 w-12'></div>
              <h3 variant="h5" className="pl-4 text-gray-600 text-sm font-semibold lg:text-3xl">
                Get your current health data
              </h3>
              <p variant="body2" className="pl-4 text-gray-500 mt-2 max-w-sm">
                Medical files, X-Ray, your sugar level reports, MRI, medical prescriptions, and more
              </p>
              <Box className="w-full h-40  rounded-lg mt-5 flex items-center justify-center">
              <img
              src={photo}
              alt="Chronic Cough"
              className="mt-4 mx-auto absolute right-0 -top-16"
            />
                <Typography>Image Placeholder</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Step 2 */}
        <Box className="relative mb-16 w-full  flex -translate-x-6">
          <Box className="relative flex flex-row items-start  ">
            <Box className="flex items-center mb-2  mt-36">
            <div className="flex bg-red-500 rounded-full px-4 py-3 items-center mb-2">
              <Typography variant="h6" className="font-semibold">
                Step 2
              </Typography>
            </div>
            </Box>
            <Box className=" flex flex-col   justify-center  rounded-lg w-[900px]  min-[1054px]:scale-[0.8] bg-no-repeat bg-center  flex-1 p-14 " style={{ backgroundImage: `url(/tiltleft.png)` }}>
            <div className='h-12 w-12'></div>
              <h3 variant="h5" className="pl-4 text-gray-600 text-sm font-semibold lg:text-3xl">
                Get your current health data
              </h3>
              <p variant="body2" className="pl-4 text-gray-500 mt-2 max-w-sm">
                Medical files, X-Ray, your sugar level reports, MRI, medical prescriptions, and more
              </p>
              <Box className="w-full h-40  rounded-lg mt-5 flex items-center justify-center">
              <img
              src={step2}
              alt="Chronic Cough"
              className="mt-4 mx-auto absolute right-0 top-16"
            />
                <Typography>Image Placeholder</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Step 3 */}
        <Box className="relative mb-16 w-full  flex -translate-x-6">
          <Box className="relative flex flex-row items-start  ">
            <Box className="flex items-center mb-2  mt-36">
            <div className="flex bg-red-500 rounded-full px-4 py-3 items-center mb-2">
              <Typography variant="h6" className="font-semibold">
                Step 3
              </Typography>
            </div>
            </Box>
            <Box className=" flex flex-col  justify-center  rounded-lg w-[900px]  min-[1054px]:scale-[0.8] bg-no-repeat bg-center  flex-1 p-14 " style={{ backgroundImage: `url(/tiltleft.png)` }}>
              <div className='pt-8'>
                <div className='h-12 w-12'></div>
              <h3 variant="h5" className="pl-4 text-gray-600 text-sm font-semibold lg:text-3xl">
                Get your current health data
              </h3>
              <p variant="body2" className="pl-4 text-gray-500 mt-2 max-w-sm">
                Medical files, X-Ray, your sugar level reports, MRI, medical prescriptions, and more
              </p>
              </div>
             
              <Box className="w-full h-40  rounded-lg mt-5 flex items-center justify-center">
              <img
              src={step3}
              alt="Chronic Cough"
              className="mt-4 mx-auto absolute right-24 top-24"
            />
                <Typography>Image Placeholder</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="relative mb-16 w-full  flex -translate-x-6">
          <Box className="relative flex flex-row items-start  ">
            <Box className="flex items-center mb-2  mt-36">
            <div className="flex bg-red-500 rounded-full px-4 py-3 items-center mb-2">
              <Typography variant="h6" className="font-semibold">
                Step 4
              </Typography>
            </div>
            </Box>
            <Box className=" flex flex-col   justify-center  rounded-lg w-[900px]  min-[1054px]:scale-[0.8] bg-no-repeat bg-center  flex-1 p-14 " style={{ backgroundImage: `url(/tiltright.png)` }}>
            <div className='h-12 w-12'></div>
              <h3 variant="h5" className="pl-4 text-gray-600 text-sm font-semibold lg:text-3xl">
                Get your current health data
              </h3>
              <p variant="body2" className="pl-4 text-gray-500 mt-2 max-w-sm">
                Medical files, X-Ray, your sugar level reports, MRI, medical prescriptions, and more
              </p>
              <Box className="w-full h-40  rounded-lg mt-5 flex items-center justify-center">
              <img
              src={photo}
              alt="Chronic Cough"
              className="mt-4 mx-auto absolute right-0 top-16"
            />
                <Typography>Image Placeholder</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
</div>     

    </Box>
  );
};

export default HowItWorks;