import delivery from "../assets/ourservices/os2.png";
import helpline from '../assets/ourservices/os3.png';
import ourproducts from '../assets/ourservices/os6.png';
import ourstore from '../assets/ourservices/os5.png';
import payment from '../assets/ourservices/os4.png';
import ourpartner from '../assets/ourservices/os1.png';


function OurServices() {

  
  return (
    <div id="OurServices" className="brands py-8 ">
    <div className="flex justify-center font-SpicyRice font-extralight sm:text-[50px] md:text-[100px]  pb-3 ">
        Our Services
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 place-items-center gap-x-3 gap-y-10 ">
      
      <div className="  rounded-2xl h-64 w-96 gap-x-8 px-10  flex justify-center items-center  ">
        <img src={delivery} className="w-32 h-32 rounded-3xl " />
        <div className="">
        <h1 className="pb-2 font-SpicyRice font-extralight">Delivery</h1>
        <p className="text-sm font-SpicyRice font-extralight">Get crackers delivered to your nearest Hub. On time delivery</p>
        </div>
      </div>
      <div className="   rounded-2xl h-64 w-96 gap-x-8 flex px-10 justify-center items-center  ">
        <img src={helpline} className="w-32 h-32 rounded-3xl " />
        <div>
        <h1 className="pb-2 font-SpicyRice font-extralight" >Helpline</h1>
        <p className="text-sm font-SpicyRice font-extralight">Call us any time <a href="tel:+919944179753">@+919944179753</a></p>
        </div>
      </div>
      
      <div className="  rounded-2xl h-64 w-96 gap-x-8 flex px-10  justify-center items-center  ">
        <img src={ourstore} className="w-32 h-32 rounded-3xl " />
        <div>
        <h1 className="pb-2 font-SpicyRice font-extralight">OurStore</h1>
        <p className="text-sm font-SpicyRice font-extralight">Come Visit us @ Pushpa Crackers, 506/465, Thiruthangal village, Sivakasi, Virudhunagar, Tamilnadu, 626130</p>
        </div>
      </div>
      

      <div className="  rounded-2xl h-64 w-96 gap-x-8 px-10 flex justify-center items-center  ">
        <img src={payment} className="w-32 h-32 rounded-3xl " />
        <div>
        <h1 className="pb-2 font-SpicyRice font-extralight">Payment</h1>
        <p className="text-sm font-SpicyRice font-extralight">Hasle free Payments Secured using Razorpay</p>
        </div>
      </div>
      <div className="  rounded-2xl h-64 w-96 gap-x-8 px-10 flex justify-center items-center  ">
        <img src={ourpartner} className="w-32 h-32 rounded-3xl " />
        <div>
        <h1 className="pb-2 font-SpicyRice font-extralight">OurPartner</h1>
        <p className="text-sm font-SpicyRice font-extralight">The Brand you can trust Safety is our Priority</p>
        </div>
      </div>
      <div className="  rounded-2xl h-64 w-96 gap-x-8 px-10 flex justify-center items-center  ">
        <img src={ourproducts} className="w-32 h-32 rounded-3xl " />
        <div>
        <h1 className="pb-2 font-SpicyRice font-extralight">OurProducts</h1>
        <p className="text-sm font-SpicyRice font-extralight">We are promissing your product Safety with care</p>

        </div>
      </div>
      
    </div>
    </div>
  );
}

export default OurServices;
