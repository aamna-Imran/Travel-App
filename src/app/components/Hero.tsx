import Image from "next/image";

function Hero() {
  return (
    <div className="max-container flex xl:flex-row padding-container ">
      <div className="hero-map mt-10 -z-10" />

      <div className="flex flex-col">
        <Image
          src="camp.svg"
          alt="camp"
          width={64}
          height={64}
          className="relative top-4 right-2"
        />
        <h1 className="bold-52 lg:bold-88 min-w-1/2 lg:w-[570px]">
          Putuk Truno Camp Area
        </h1>
        <p className="lg:w-1/2 max-w-[780px] text-gray-500 mt-6">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        <div className="flex justify-start items-center lg:min-w-1/2 mt-5">
          <div className="flex flex-row gap-1">
            <Image src="star.svg" alt="Ratings" width={27} height={27} />
            <Image src="star.svg" alt="Ratings" width={27} height={27} />
            <Image src="star.svg" alt="Ratings" width={27} height={27} />
            <Image src="star.svg" alt="Ratings" width={27} height={27} />
            <Image src="star.svg" alt="Ratings" width={27} height={27} />
          </div>
          <h4 className="text-gray-600 ml-3 text-[18px]">
            <span className="font-extrabold mr-2 text-gray-900">198k</span>
            Excellent Reviews
          </h4>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row gap-5 mt-10">
          <button className="bg-green-600 rounded-full py-5 px-2 text-white w-52 font-extrabold">
            Download
          </button>
          <button className=" bg-gray-100 shadow-xl flex items-center gap-2 rounded-full py-4 px-8 text-black w-60 font-bold">
            <Image src="/play.svg" alt="play" width={27} height={27} /> How we
            work?
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
