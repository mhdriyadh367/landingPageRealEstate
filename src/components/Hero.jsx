import React from 'react'
import bgHero from '../assets/bg1.png'


const Hero = () => {
  return (
    <div name='home' className='w-full md:h-screen bg-[#fafafa]'>
      {/* Container */}
      <div className='mx-auto px-11 flex flex-col justify-center md:h-screen sm:pb-3'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-3'>
          <div className='my-8'>
            <h1 className='text-6xl text-[#0F298B] font-bold'>Helping you find the property of your dreams.</h1>
            <p className='text-3xl py-4'>Creating quality urban lifestyles,building stronger communities</p>
            <button className='bg-blue-700 hover:bg-blue-600 py-2 px-4 rounded text-white'>Learn More</button>
          </div>
          <div>
            <img src={bgHero} alt="" />
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Hero