import bg_video from "../assets/bg_video.mp4";
import { useState } from "react";
import {
  FaBars
} from "react-icons/fa"; // Import icons from react-icons
import logo from '../assets/pc_logo.png';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

function Header() {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [purpose, setPurpose] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_o1ji7yd";
    const templateId = "template_n9u6cmp";
    const publicKey = "24DQFIBUGvx7FbHuj";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      from_purpose: purpose,
      to_name: "Pushpa Crackers",
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setName('');
      setEmail('');
      setPhone('');
      setPurpose('');
      toast.success('Response Submitted Successfully')
    }
    )
    .catch((error) => {
      console.log('FAILED...', error);
    });





  }


  return (
    <div id="home" className="  transform w-[100%] h-[100%]">
      <video className="w-[100%] h-[100vh] object-cover blur-[5px] " autoPlay loop muted>
        <source src={bg_video} type="video/webm" />
      </video>
      
      <header className=" absolute font-SpicyRice  font-normal bg-transparent  w-full h-auto  top-0 z-50 ">
        <div className=" mx-auto px-5 w-full flex flex-row justify-around items-center">
          <a href="#"  className=" h-16 w-16 text-white">
            <img src={logo}  />
          </a>
          <nav className="text-white hidden  lg:flex  space-x-4 ml-5 mr-5">
          <a href="#AboutUs"  className=" flex items-center">
              AboutUs
            </a>
            <a href="#ContactUs" className="flex items-center">
              ContactUs
            </a>
          <a href="#Brands" className="flex items-center">
              Brands
            </a>
            <a href="#OurCollections" className="flex items-center">
              OurCollections
            </a>
            <a href="#OurServices" className="flex items-center">
              OurServices
            </a>
            
           
          </nav>
          {/* <div className=" flex  gap-5">
            <button
              className="flex items-center
           bg-white text-black px-2 py-1 rounded-md"
            >
              Sign In
            </button>

            <button
              className="flex items-center
           bg-white text-black px-2 py-1 rounded-md "
            >
              Register
            </button>
          </div> */}

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <FaBars size={24} /> {/* Hamburger icon for mobile */}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav
            className="lg:hidden flex flex-col justify-center items-center text-black bg-white p-4
       space-y-6 ml-2 mr-2"
          >
          <a href="#AboutUs"  className=" flex items-center">
              AboutUs
            </a>
            <a href="#ContactUs" className="flex items-center">
              ContactUs
            </a>
          <a href="#Brands" className="flex items-center">
              Brands
            </a>
            <a href="#OurCollections" className="flex items-center">
              OurCollections
            </a>
            <a href="#OurServices" className="flex items-center">
              OurServices
            </a>
            
            
          </nav>
        )}
      </header>
      <div className=" absolute w-full h-[100%] sm:pt-16 top-0 grid sm:grid-cols-1 md:grid-cols-2 place-items-center place-self-center ">
        <div className="   flex flex-col w-full h-auto px-8  items-center  text-white">
          <h1 className="font-normal font-SpicyRice px-8 sm:text-[30px] md:text-[50px] lg:text-[80px] tracking-widest">
            Our New Website is On the Way
          </h1>
          
        </div>
        <div className="flex flex-col w-full font-normal font-SpicyRice h-auto items-center overflow-x-hidden  text-purple-700">
          <form onSubmit={(e) => handleSubmit(e)} className="max-w-sm mx-auto">
            <div className="mb-5">
              <label className="block  mb-2 text-2xl  text-white">
                Name
              </label>
              <input
                type="text"
                value={name}
                className="shadow-sm  border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter your name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-2xl  text-white">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm  border text-white border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="you@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-2xl   text-white ">
                Choose an Option
              </label>

              <select
                name="cars"
                id="cars"
                onChange={(e) => setPurpose(e.target.value)}
                value={purpose}
                className="shadow-sm font-sm  border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option value="Retail" className="font-normal">
                  Retail
                </option>
                <option
                  value="WholeSale"
                  className="shadow-sm font-normal border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  WholeSale
                </option>
              </select>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-2xl  text-white">
                Contact Number
              </label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter contact number"
                className="shadow-sm  border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>

            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label className="ms-2 text-sm font-normal text-white dark:text-gray-300">
                I agree with the terms and conditions
                
              </label>
            </div>
            <button
              type="submit"
              className="text-white font-light bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-cente"
              
            >
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
