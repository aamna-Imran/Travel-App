import React from "react";

function Guide() {
  return (
    <>
      <section className="max-container padding-container my-20 flex gap-8 flex-col">
        <div className="w-full flex gap-8 items-center justify-start  flex-col lg:flex-row ">
          <div className=" flex flex-col ">
            <img src="/camp.svg" alt="camp" width={60} />
            <p className="text-green-700 w-full">WE ARE HERE FOR YOU</p>
            <h1 className="lg:bold-88 lg:w-[600px] min-w-[300px] bold-52 ">
              Guide You to Easy Path
            </h1>
          </div>
          <div className=" text-gray-600 text-justify">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </div>
        </div>
      </section>

      <section className="max-container relative py-10 w-full h-full bg-cover bg-center mb-10">
        <img src="boat.png" alt="" />
        <div className="absolute lg:top-32 left-28 top-8 bg-white w-72 h-56 p-5 rounded-3xl flex items-center flex-row text-white shadow-2xl border-2 border-gray-300 ">
          <div>
            <img src="meter.svg" alt="meter" width={28} />
          </div>
          <div className="flex flex-col gap-12 text-[18px] ml-6">
            <div>
              <p className="text-gray-500 mb-2">
                Destination{" "}
                <span className="ml-5 text-green-600 font-bold"> 48 min</span>
              </p>
              <h3 className="text-black font-bold">Aguas Calientes</h3>
            </div>
            <div>
              <p className="text-gray-500 mb-2">Start track</p>
              <h3 className="text-black font-bold">Wonorejo Pasuruan</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Guide;
