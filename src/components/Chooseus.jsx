import React from "react";
import bgChoose from "../assets/bg2.png";
import { FaRegCheckSquare } from "react-icons/fa";
const Chooseus = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[#fafafa]  ">
        <div className="hidden mx-auto px-11 md:flex flex-col justify-center h-full">
          <div className="grid grid-cols-2 gap-3 items-center">
            <div>
              <img src={bgChoose} width={550} alt="bg2" />
            </div>
            <div className="my-8">
              <h1 className="text-5xl text-[#0F298B] font-bold">
                Why you should choose us.
              </h1>
              <p className="text-2xl py-4">
                Creating quality urban lifestyles,building stronger communities
              </p>
              <div className="grid grid-cols-2 gap-2 font-bold">
                <div className="flex items-center">
                  <FaRegCheckSquare className="mr-4 text-[#2549D3]" size={25}/>
                  <p>World class</p>
                </div>
                <div className="flex items-center">
                  <FaRegCheckSquare className="mr-4  text-[#2549D3]" size={25} />
                  <p>Affordable</p>
                </div>
                <div className="flex items-center">
                  <FaRegCheckSquare className="mr-4 text-[#2549D3]"  size={25}/>
                  <p>Trusted</p>
                </div>
                <div className="flex items-center">
                  <FaRegCheckSquare className="mr-4 text-[#2549D3]"  size={25}/>
                  <p>Amenities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
