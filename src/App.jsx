import React from 'react'
import Landing from './components/Landing'
import HowItWorks from './components/how_is_it_work'
import HealthTracker from './components/third'
import HealthDashboard from './components/hralthdashboard.jsx'
import DigitalHealthcare from './components/mobile.jsx'
import GradientSection from './components/GradientSection.jsx'


export default function App() {
  return (
    <div className='h-full w-screen'>
      <Landing />
      <HowItWorks/>
      <HealthTracker />
      <HealthDashboard/>
      <div className='h-full'>

      <GradientSection />
      </div>
      <DigitalHealthcare/>
      
    </div>
  )
}
