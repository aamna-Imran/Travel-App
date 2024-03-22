import Image from "next/image";
import React from "react";

const Campsite = () => {
  return (
    <div className="my-10 py-10 realtive overflow-x-hidden flex gap-8 max-container ">
      <div className="flex relative h-[340px] min-w-[1100px] w-full items-start justify-start  lg:h-[400px] xl:h-[640px] overflow-x-auto">
        <img
          className=" bg-bg-img-1 w-full h-full bg-cover bg-center  xl:rounded-r-[50px] 2xl:rounded-[50px]"
          alt=""
        />
        <div className="flex gap-8 flex-col">
          <div className="absolute top-8  bg-green-600 rounded-full w-16 h-16 left-10 text-white">
            <img
              className="absolute top-4 left-4 "
              src="/folded-map.svg"
              alt="map"
              width={30}
              height={30}
            />
          </div>
          <div className="flex flex-col absolute top-10 left-32">
            <h2 className="font-bold text-white">Putuk Truno Camp</h2>
            <p className="text-white">Prigen, Pasuruan</p>
          </div>
        </div>
      </div>


      <div className="flex relative h-[340px] min-w-[1100px] w-full items-start justify-start  lg:h-[400px] xl:h-[640px] overflow-x-auto">
        <img
          className=" bg-bg-img-2 w-full h-full bg-cover bg-center  xl:rounded-r-[50px] 2xl:rounded-[50px]"
          alt=""
        />
        <div className="flex gap-8 flex-col">
          <div className="absolute top-8  bg-green-600 rounded-full w-16 h-16 left-10 text-white">
            <img
              className="absolute top-4 left-4 "
              src="/folded-map.svg"
              alt="map"
              width={30}
              height={30}
            />
          </div>
          <div className="flex flex-col absolute top-10 left-32">
            <h2 className="font-bold text-white">Mountain Camp</h2>
            <p className="text-white">somewhere, Pasuruan</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Campsite;
