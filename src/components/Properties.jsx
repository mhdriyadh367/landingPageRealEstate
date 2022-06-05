import React from "react";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";
import bg5 from "../assets/bg5.png";

const Properties = () => {
  return (
    <div>
      <div className="w-full md:h-screen bg-[#fafafa]">
        <div className="title text-center pb-[80px]">
          <h1 className="text-4xl font-bold text-[#0F298B]">
            Our Featured Properties.{" "}
          </h1>
          <p className="text-2xl">
            One of our biggest product to be featured and that has sold <br />{" "}
            out the most.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 px-10 py-6 justify-center items-center m-auto pb-11">
          <div className="flex justify-center">
            <div className="block px-8 py-11 rounded-lg shadow-lg bg-white max-w-sm">
              <img className="m-auto pb-4" src={bg3} alt="iconLocation" />
              <div className="grid grid-cols-2 gap-2">
                <p className="font-bold">
                  The Palace <br />
                  <span className="text-[15px] font-light">Lekki,phase 2</span>
                </p>
                <p className="text-right">
                  Duplex <br />
                  <span className="text-[#0F298B] font-bold">$2,000</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="block px-8 py-11 rounded-lg shadow-lg bg-white max-w-sm">
              <img className="m-auto pb-4" src={bg4} alt="iconLocation" />
              <div className="grid grid-cols-2 gap-2">
                <p className="font-bold">
                  The Palace <br />
                  <span className="text-[15px] font-light">Lekki,phase 2</span>
                </p>
                <p className="text-right">
                  Duplex <br />
                  <span className="text-[#0F298B] font-bold">$2,000</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="block px-8 py-11 rounded-lg shadow-lg bg-white max-w-sm">
              <img className="m-auto pb-4" src={bg5} alt="iconLocation" />
              <div className="grid grid-cols-2 gap-2">
                <p className="font-bold">
                  IVY RORY <br />
                  <span className="text-[15px] font-light">Lekki,phase 2</span>
                </p>
                <p className="text-right">
                  REXONA <br />
                  <span className="text-[#0F298B] font-bold">$2,000</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
