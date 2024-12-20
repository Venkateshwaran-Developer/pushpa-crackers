import bg_video from "../assets/bg_video.mp4";
import { useState } from "react";
import {
  FaBars
} from "react-icons/fa"; // Import icons from react-icons
import logo from '../assets/pc_logo.png';

function WaitingList() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <video className="w-[100%] h-[100vh] object-cover blur-[5px] " autoPlay loop muted>
        <source src={bg_video} type="video/webm" />
      </video>
      
      <header className="absolute font-SpicyRice font-normal bg-transparent  w-full h-auto justify-between top-0 z-50 ">
        <div className=" mx-auto px-5 w-full flex flex-row justify-between items-center">
          <div className=" h-16 w-16 text-white">
            <img src={logo} />
          </div>
          <nav className="text-white hidden lg:flex justify-between space-x-4 ml-5 mr-5">
            <a
              href="#"
              className="flex items-center
          "
            >
              Products
            </a>
            <a
              href="#"
              className="flex items-center
          "
            >
              Safety Tips
            </a>
            <a href="#" className="flex items-center">
              Brands
            </a>
            <a href="#" className="flex items-center">
              WholeSale
            </a>
            <a href="#" className="flex items-center">
              Download
            </a>
            <a href="#" className="flex items-center">
              About
            </a>
            <a href="#" className="flex items-center">
              Contact
            </a>
          </nav>
          <div className=" flex  gap-5">
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
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <FaBars size={24} /> {/* Hamburger icon for mobile */}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav
            className="lg:hidden block text-black bg-white p-4
       space-y-2 ml-2 mr-2"
          >
            <a href="#" className="flex items-center">
              Products
            </a>
            <a href="#" className="flex items-center">
              Safety Tips
            </a>
            <a href="#" className="flex items-center">
              Brands
            </a>
            <a href="#" className="flex items-center">
              WholeSale
            </a>
            <a href="#" className="flex items-center">
              Download
            </a>
            <a href="#" className="flex items-center">
              About
            </a>
            <a href="#" className="flex items-center">
              Contact
            </a>
          </nav>
        )}
      </header>
      <div className=" absolute w-full h-[100%] sm:pt-40 top-0 grid sm:grid-cols-1 md:grid-cols-2 place-items-center place-self-center ">
        <div className="   flex flex-col w-full h-auto px-8  items-center  text-white">
          <h1 className="font-normal font-SpicyRice md:text-[80px] tracking-widest">
            Our New Website is On the Way
          </h1>
          
        </div>
        <div className="flex flex-col w-full font-normal font-SpicyRice h-auto items-center overflow-x-hidden  text-purple-700">
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label className="block  mb-2 text-2xl  text-white">
                Name
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm  border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-2xl  text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
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
                type="text"
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
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 font-normal hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="text-white font-light bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-cente"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WaitingList;
