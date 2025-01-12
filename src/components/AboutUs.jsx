import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AboutUs = () => {

  
  return (
    <div id="AboutUs" className=" flex flex-col font-SpicyRice text-black items-center justify-center h-auto bg-gray-100 p-4">
    <div className="text-center">
    <h1 className="sm:text-[50px] md:text-[100px]  mb-4">About Us</h1>
      <p className="font-extralight text-[20px] px-5 text-blue-gray-400 text-center max-w-2xl">
        Welcome to Pushpa Crackers! We are dedicated to providing the best
        quality crackers for all your festive needs. Our mission is to bring joy
        and excitement to your celebrations with our wide range of products.
        Thank you for choosing us!
      </p>
    </div>
      
      <div className="grid sm:grid-cols-1  md:grid-cols-3 place-items-center place-content-center ">
     
<div className="h-[200px] w-[400px]">
<DotLottieReact
      src="https://lottie.host/4f1c6c30-6d73-4e89-8a5e-351b830fa9df/rzAww3rL0I.lottie"
      loop
      autoplay
      speed={0.5}
    />
</div>
<div className="h-[100px] w-[180px]">
<DotLottieReact
      src="https://lottie.host/271b5276-b1aa-4e2f-9aa8-ab440a192a96/gp4i9nVdJ6.lottie"
      loop
      autoplay
    />
</div>
<div className="h-[400px] w-[400px]">
<DotLottieReact
      src="https://lottie.host/ac609b25-2360-40fa-86fe-75c19ff53b66/EcGdprc18A.lottie"
      loop
      autoplay
        speed={0.5}
   />
</div>
   
    
      </div>
      
    </div>
  );
};

export default AboutUs;
