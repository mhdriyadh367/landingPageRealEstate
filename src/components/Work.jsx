import React from "react";
import iconLocation from '../assets/1.png'
import iconPayment from '../assets/2.png'
import iconMarket from '../assets/3.png'


const Work = () => {
  return (
    <div className="pt-[200px] bg-[#fafafa] w-full md:h-screen">
      <div className="title text-center pb-[80px]">
        <h1 className="text-4xl font-bold text-[#0F298B]">How it works. </h1>
        <p className="text-2xl">This is how our products works </p>
      </div>

      <div className=" grid sm:grid-cols-1 md:grid-cols-3 gap-3 px-10 py-6 justify-center items-center m-auto pb-11">
        <div className="flex justify-center">
          <div className="block px-3 py-11 rounded-lg shadow-lg bg-white max-w-sm text-center">
            <img className="m-auto pb-4" src={iconLocation} alt="iconLocation" />
            <h1 className="font-bold text-2xl">Find Home </h1>
            <p>Our properties are located at prime areas where by there won’t be problem with transportation </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="block px-3 py-11 rounded-lg shadow-lg bg-white max-w-sm text-center">
            <img className="m-auto pb-4" src={iconPayment} alt="iconLocation" />
            <h1 className="font-bold text-2xl">Make payments</h1>
            <p>Our estates comes with good network,portable water , 24hrs light and round the clock security.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="block px-3 py-11 rounded-lg shadow-lg bg-white max-w-sm text-center">
            <img className="m-auto pb-4" src={iconMarket} alt="iconLocation" />
            <h1 className="font-bold text-2xl">Make it Official  </h1>
            <p>We have been in business for over 32 years,for client outside the country you can trust  us to deliver well. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
