import Image from "next/image";
import React from "react";
import { FEATURES } from "../constants";

function Features() {
  return (
    <div className="relative padding-container max-container md:py-20 py-16  flex xl:flex-row  justify-end">
      <div
        className=" absolute -z-10 left-0 top-0 h-screen w-screen bg-pattern-2 bg-cover bg-center md:-right-28 "
        style={{ backgroundImage: ' url("/feature-bg.png")' }}
      />
      <img
        src="phone.png"
        width={440}
        height={1000}
        className="feature-phone"
        alt=""
      />

      <div className="flex flex-col w-full lg:w-[60%] z-20 ">
        <div className="relative">
          <Image
            src="/camp.svg"
            alt="camp"
            width={44}
            height={44}
            className="relative top-4"
          />
          <h2 className="bold-64 mb-20">Our Features</h2>
        </div>

        <ul className=" grid md:grid-cols-2 gap-10 flex-1">
          {FEATURES.map((feature) => (
            <FeatureItem
              title={feature.title}
              icon={feature.icon}
              discription={feature.description}
              variant={feature.variant}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
interface IFeatureProps {
  title: string;
  discription: string;
  icon: string;
  variant: string;
}

const FeatureItem = ({ title, icon, discription, variant }: IFeatureProps) => {
  return (
    <li className="">
      <div className=" bg-green-500 rounded-full p-4 w-16 h-16 ">
        <Image src={icon} alt="map" width={30} height={30} />
      </div>
      <h2 className="bold-20 md:bold-32 capitalize mb-3 mt-4">{title}</h2>
      <p className="text-start text-gray-600">{discription}</p>
    </li>
  );
};

export default Features;
