import React from "react";
import logoBrand from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="w-full md:h-[300px] bg-[#0F298B] flex flex-col justify-center items-center ">
        <div className="grid sm:grid-cols-1  md:grid-cols-4 gap-4 px-10 py-6 pb-11 text-white ">
          <div className="logo">
            <img src={logoBrand} width={300} alt="logoBrand" />
            <p className="mt-3">Solution for easy and flexible house hunting.You can trust us anywhere through this platform </p>
          </div>

          <div className="m-auto">
            <h2 className="font-bold text-3xl mb-3">Property</h2>
            <ul>
              <li className="mb-2">Learning Modules</li>
              <li className="mb-2">Partnership</li>
              <li className="mb-2">Watch demo</li>
              <li className="mb-2">Event</li>
            </ul>
          </div>
          <div  className="m-auto">
            <h2 className="font-bold text-3xl mb-3">About </h2>
            <ul>
              <li className="mb-2">Our Company </li>
              <li className="mb-2">Career</li>
              <li className="mb-2">Investors Relations</li>
              <li className="mb-2">Social Impact  </li>
            </ul>
          </div>
          <div  className="m-auto">
            <h2 className="font-bold text-3xl mb-3">Resources</h2>
            <ul>
              <li className="mb-2">Contact  </li>
              <li className="mb-2">Give feedback </li>
              <li className="mb-2">System status</li>
              <li className="mb-2">Privacy  Policy </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
