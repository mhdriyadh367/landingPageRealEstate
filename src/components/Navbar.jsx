import React, {useState} from 'react'
import logoBrand from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  {

  }
  return (

    <div className='fixed w-full h-[80px] flex justify-between items-center px-11 border-b-2 bg-[#fafafa]'>

      <div className="logo">
        <img src={logoBrand} alt="logoBrand" />
      </div>
       {/* menu */}
       
        <ul className='hidden md:flex'>
          <li className='px-4'>Home</li>
          <li className='px-4'>Rend</li>
          <li className='px-4'>Land</li>
          <li className='px-4'>Agent</li>
          <li className='px-4'>Contact Us</li>
        </ul>
      
      <div className='hidden md:flex'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Get Started</button>
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#fafafa] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>Rend</li>
        <li className='py-6 text-4xl'>Land</li>
        <li className='py-6 text-4xl'>Agent</li>
        <li className='py-6 text-4xl'>Contact Us</li>
      </ul>

      {/* humberger icon */}
      
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>
      

      

    </div>
  )
}

export default Navbar