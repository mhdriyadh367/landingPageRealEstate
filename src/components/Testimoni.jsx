import React from "react";

const Testimoni = () => {
  return (
    <div>
      <div className="w-full md:h-screen bg-[#fafafa]">
        <div className="title text-center pb-[80px]">
          <h1 className="text-4xl font-bold text-[#0F298B]">Testimonials.</h1>
          <p className="text-2xl">This is what our client are saying</p>
          <div className="flex justify-end px-11 pt-11">
            <button className="bg-[#2549D3] hover:bg-[#1d3dbf] rounded-lg px-8 py-3 text-white">
              View More
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 px-10 py-6 justify-center items-center m-auto pb-11">
          <div className="flex justify-center">
            <div className="block px-8 py-11 rounded-lg shadow-lg bg-white max-w-sm">
              <div className="title">
                <h1 className="font-bold text-2xl">Alex Godwin </h1>
                <p className="text-[13px] mb-3">South Africa </p>
                <p className="text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
                  ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum
                  netus
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="block px-8 py-11 rounded-lg shadow-lg bg-white max-w-sm">
              <div className="title">
                <h1 className="font-bold text-2xl">Alex Godwin </h1>
                <p className="text-[13px] mb-3">South Africa </p>
                <p className="text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
                  ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum
                  netus
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="block px-8 py-11 rounded-lg shadow-lg bg-white max-w-sm">
              <div className="title">
                <h1 className="font-bold text-2xl">Alex Godwin </h1>
                <p className="text-[13px] mb-3">South Africa </p>
                <p className="text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
                  ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum
                  netus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
