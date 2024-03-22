import Image from "next/image";
import React from "react";

function GetApp() {
  return (
    <div className=" my-10 max-container">
      <div className="get-app flex flex-col lg:flex-row justify-center items-center">
        <div className="z-20 w-full flex flex-1 flex-col gap-12 justify-center items-start">
          <h2 className="lg:bold-64 2xl:w-1/2 w-[500px] bold-40">
            Get for free now !
          </h2>
          <p>Available on ios and android</p>
          <div className="flex flex-col lg:flex-row gap-5 w-full">
            <button className="bold-16   bg-white text-green-600 flex justify-center items-center py-5 px-10 rounded-full max-w-[500px]">
              <img className="mr-5" src="apple.svg" alt="" />
              App Store
            </button>
            <button className="bold-16 flex border-2 border-gray-100 justify-center items-center py-5 px-10 rounded-full max-w-[500px]">
              <img className="mr-5" src="android.svg" alt="" />
              Play Store
            </button>
          </div>
        </div>

        <div>
          <Image
            src="/phones.png"
            alt="phone"
            width={440}
            height={1000}
            className="flex flex-1"
          />
        </div>
      </div>
    </div>
  );
}

export default GetApp;
