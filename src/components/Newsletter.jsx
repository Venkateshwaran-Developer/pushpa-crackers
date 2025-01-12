import  { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

function Newsletter() {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_lbk6e4r";
    const templateId = "template_sdr0rde";
    const publicKey = "24DQFIBUGvx7FbHuj";

    const templateParams = {
      
      from_email: email,
      to_name: "Pushpa Crackers",
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setEmail('');
      toast.success('Response Submitted Successfully')
    }
    )
    .catch((error) => {
      console.log('FAILED...', error);
    });





  }

  return (
    <div className="bg-white text-black  py-8 font-SpicyRice font-extralight">
      <section>
  
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    
    <div className="bg-blue-50 p-8 text-center sm:p-10 md:p-16">
      
      <h2 className="mb-4 sm:text-[50px] md:text-[100px]">Get Latest Product Updates</h2>
      <p className="mx-auto mb-6 max-w-2xl text-[#647084] md:mb-10">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
      
      <form name="email-form" method="get" className="relative mx-auto mb-4 flex w-full max-w-2xl flex-col items-start justify-center sm:flex-row">
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="mb-3 mr-6 block h-9 w-full bg-white px-6 py-7 text-sm text-[#333333] focus:border-[#3898ec]" placeholder="Enter your email" required="" />
        <input type="submit" onClick={(e)=>handleSubmit(e)} value="Subscribe" className="inline-block w-full cursor-pointer bg-[#276ef1] px-6 py-3 text-center font-extralight text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] sm:w-28" />
        <ToastContainer />
      </form>
    </div>
  </div>
</section>
    </div>
  );
}

export default Newsletter;
