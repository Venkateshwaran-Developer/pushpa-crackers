import standard from "../assets/brand/brand_standard.jpeg";
import kaleeswari from '../assets/brand/brand_kaleeswari.png';
import krishna from '../assets/brand/brand_krishna.png';
import bluejay from '../assets/brand/brand_bluejay.png';
import pooja from '../assets/brand/brand_pooja.jpeg';
import stark from '../assets/brand/brand_stark.png';
import anil from '../assets/brand/brand_anil.png';
import sony from '../assets/brand/brand_sony.png';


function Brands() {
  return (
    <div className="brands bg-white text-black py-8 font-SpicyRice font-extralight">
    <div className="flex justify-center text-[100px] font-SpicyRice  pb-3 ">
        Brands
    </div>
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  place-items-center gap-x-3 gap-y-10 ">
      {" "}
      <div className="  hover:shadow-2xl rounded-2xl h-64 w-80 gap-y-8  flex flex-col justify-center items-center  ">
        <img src={standard} className="w-32 h-32 rounded-3xl " />
        <p className="">Standard</p>
      </div>
      <div className="  hover:shadow-2xl rounded-2xl h-64 w-80 gap-y-8  flex flex-col justify-center items-center  ">
        <img src={anil} className="w-32 h-32 rounded-3xl " />

        <h1 >Anil</h1>
      </div>
      <div className="  hover:shadow-2xl rounded-2xl h-64 w-80 gap-y-8  flex flex-col justify-center items-center  ">
        <img src={sony} className="w-32 h-32 rounded-3xl " />

        <h1>Sony</h1>
      </div>
      <div className="  hover:shadow-2xl rounded-2xl h-64 w-80 gap-y-8  flex flex-col justify-center items-center  ">
        <img src={kaleeswari} className="w-32 h-32 rounded-3xl " />

        <h1>Kaleeswari</h1>
      </div>
      <div className=" hover:shadow-2xl rounded-2xl h-64 w-80 gap-y-8  flex flex-col justify-center items-center  ">
        <img src={krishna} className="w-32 h-32 rounded-3xl " />

        <h1>Krishna</h1>
      </div>
      <div className="  hover:shadow-2xl rounded-2xl h-64 w-80 gap-y-8  flex flex-col justify-center items-center  ">
        <img src={bluejay} className="w-32 h-32 rounded-3xl " />

        <h1>Bluejay</h1>
      </div>
      <div className="  hover:shadow-2xl rounded-2xl h-64 w-80 gap-y-8  flex flex-col justify-center items-center  ">
        <img src={pooja} className="w-32 h-32 rounded-3xl " />

        <h1>Pooja</h1>
      </div>
      <div className="  hover:shadow-2xl rounded-2xl h-64 w-80 gap-y-8  flex flex-col justify-center items-center  ">
        <img src={stark} className="w-32 h-32 rounded-3xl " />

        <h1>Stark</h1>
      </div>
    </div>
    </div>
  );
}

export default Brands;
