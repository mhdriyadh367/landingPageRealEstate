import React from 'react'
import {FaAngleDown, FaSearch} from 'react-icons/fa'
const CardSearch = () => {
  return (
    <div className='px-11 bg-[#fafafa] '>
      <div className='max-w-[1000px]  m-auto w-full h-full bg-[#fff] text-white py-4 rounded-2xl'>
        <div className="grid sm:grid-cols-1  md:grid-cols-4 gap-4 px-10 py-6 justify-center items-center m-auto">
          <div>
            <h1 className='text-[#0F298B] text-2xl font-bold flex'>Location <FaAngleDown /></h1>
            <p className='text-[#666666]'>Lekki </p>
          </div>
          <div>
            <h1 className='text-[#0F298B] text-2xl font-bold flex'>Property Type <FaAngleDown /></h1>
            <p className='text-[#666666]'>Duplex</p>
          </div>
          <div>
            <h1 className='text-[#0F298B] text-2xl font-bold flex'>Max Price <FaAngleDown /></h1>
            <p className='text-[#666666]'>$10,000 </p>
          </div>
          <div className='text-right flex justify-end'>
            <button className='bg-[#2549D3] px-4 py-2 rounded-md flex '><FaSearch className='my-[3px] mx-[6px]' /> Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSearch