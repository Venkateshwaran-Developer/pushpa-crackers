import oc1 from "../assets/ourcollections/oc1.png";
import oc2 from "../assets/ourcollections/oc2.png";
import oc3 from "../assets/ourcollections/oc3.png";
import oc4 from "../assets/ourcollections/oc4.png";
import oc5 from "../assets/ourcollections/oc5.png";
import oc6 from "../assets/ourcollections/oc6.png";
import oc7 from "../assets/ourcollections/oc7.png";
import oc8 from "../assets/ourcollections/oc8.png";

function OurCollections() {

  
  return (
    <div id="OurCollections">
      <div  className="bg-white">
        <div className="absolute flex justify-center sm:text-[50px] md:text-[100px] items-center w-full sm:py-20 md:py-48 font-SpicyRice font-extralight text-white  font-extralightd p-5">
          Our Collections
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" viewBox="0 0 1440 320">
          <path
            fill="#881337"
            opacity="1"
            d="M0,96L60,122.7C120,149,240,203,360,197.3C480,192,600,128,720,90.7C840,53,960,43,1080,53.3C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className=" bg-meroon text-burgendi py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center  gap-x-3 gap-y-10 ">
          {" "}
          <div className="   rounded-2xl h-64 w-80 gap-y-8 font-SpicyRice font-extralightd flex flex-col justify-center items-center  ">
            <img src={oc1} className="w-32 h-32 rounded-3xl animate-bounce" />
            <p className="">Flower Pots</p>
          </div>
          <div className="   rounded-2xl h-64 w-80 gap-y-8 font-SpicyRice font-extralightd flex flex-col justify-center items-center  ">
            <img src={oc2} className="w-32 h-32 rounded-3xl animate-pulse" />

            <h1>Bombs</h1>
          </div>
          <div className="   rounded-2xl h-64 w-80 gap-y-8 font-SpicyRice font-extralightd flex flex-col justify-center items-center  ">
            <img src={oc3} className="w-32 h-32 rounded-3xl animate-spin" />

            <h1>Chakkars</h1>
          </div>
          <div className="  rounded-2xl h-64 w-80 gap-y-8 font-SpicyRice font-extralightd flex flex-col justify-center items-center  ">
            <img src={oc5} className="w-32 h-32 rounded-3xl animate-pulse" />

            <h1>Sparklers/Twinklers</h1>
          </div>
          <div className="   rounded-2xl h-64 w-80 gap-y-8 font-SpicyRice font-extralightd flex flex-col justify-center items-center  ">
            <img src={oc4} className="w-32 h-32 rounded-3xl animate-spin" />

            <h1>Festival Celebration</h1>
          </div>
          <div className="   rounded-2xl h-64 w-80 gap-y-8 font-SpicyRice font-extralightd flex flex-col justify-center items-center  ">
            <img src={oc6} className="w-32 h-32 rounded-3xl animate-ping" />

            <h1>Fancy Shots</h1>
          </div>
          <div className="   rounded-2xl h-64 w-80 gap-y-8 font-SpicyRice font-extralightd flex flex-col justify-center items-center  ">
            <img src={oc7} className="w-32 h-32 rounded-3xl animate-bounce" />

            <h1>Rockets/Multishots</h1>
          </div>
          <div className="   rounded-2xl h-64 w-80 gap-y-8 font-SpicyRice font-extralightd flex flex-col justify-center items-center  ">
            <img src={oc8} className="w-32 h-32 rounded-3xl animate-pulse" />

            <h1>Gift Boxes</h1>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#881337"
          opacity="1"
          d="M0,96L60,122.7C120,149,240,203,360,197.3C480,192,600,128,720,90.7C840,53,960,43,1080,53.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default OurCollections;
