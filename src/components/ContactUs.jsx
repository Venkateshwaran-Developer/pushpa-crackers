import { motion } from "framer-motion";

const ContactUs = () => {

  
  return (
    <div id="ContactUs" className="min-h-screen  bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="sm:text-[50px] md:text-[100px] font-SpicyRice text-center text-black mb-12">
          Contact Us
        </h1>

        <div className=" gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-1 rounded-3xl  md:grid-cols-2 h-[100%] font-SpicyRice text-blue-gray-600 bg-white  drop-shadow-xl p-6 mb-6">
              <div>
                <div className="flex justify-center items-center w-auto h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59853.80535492656!2d77.78061829917588!3d9.45706809919468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06ce993890a575%3A0x8d0edde645ef275b!2sCrackers%20Shope!5e1!3m2!1sen!2sin!4v1734853806322!5m2!1sen!2sin"
                    width="600"
                    height="450"
                   
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="w-full sm:py-20 h-auto sm:px-5 md:px-8 lg:px-16 flex flex-col justify-center items-start">
                <h2 className="sm:text-[40px] md:text-[40px] lg:text-[60px]  mb-4">Contact Information</h2>
                <div className="space-y-3">
                <h1 className="text-2xl"> Corporate Office:</h1>
                  <p>
                   Pushpa Crackers, 506/465, Thiruthangal village, Sivakasi, Virudhunagar, Tamilnadu, 626130
                  </p>
                  <p className="sm:text-xl text-2xl">
                    Phone: <a href="tel:+91 994 417 9753" className="sm:text-base text-xl ">+919944179753</a> 
                  </p>
                  <p className="sm:text-xl text-2xl">
                    Email: <a href="mailto:info@pushpacrackers.com" className="sm:text-base text-xl ">info@pushpacrackers.com</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
