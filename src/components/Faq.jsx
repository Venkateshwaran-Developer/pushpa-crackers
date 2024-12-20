import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function Faq() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="flex flex-col font-extralight font-SpicyRice py-10 items-center text-black justify-center bg-white">
    <div className="text-3xl py-10 font-SpicyRice text-black ">
        <h1>
            General Questions and Answers
        </h1>
    </div>
      <Accordion open={open === 1} className="mb-2  rounded-lg border w-[80%] py-2 bg-pink-50 border-blue-gray-100  px-8">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0  transition ease-in-out delay-1000 duration-1000 ${
            open === 1 ? "" : ""
          }`}
        >
          What do you mean by Green Crackers?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Green crackers are the low emission crackers with 30% less emission when compared with the convectional crackers with an additive as approved by CSIR NEERI, Nagpur and PESO.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2  rounded-lg border w-[80%] py-2 bg-pink-50 border-blue-gray-100 px-8">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition ease-in-out delay-1000 duration-1000 ${
            open === 2 ? "" : ""
          }`}
        >
          Which is the fireworks capital of India?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Sivakasi in Tamilnadu is the fireworks capital of India.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="mb-2  rounded-lg border w-[80%] py-2 bg-pink-50 border-blue-gray-100 px-8">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition ease-in-out delay-1000 duration-1000 ${
            open === 3 ? "" : ""
          }`}
        >
          What is the speciality of Pushpa Crackers?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Pushpa Crackers have a wide variety of crackers with innovative functions and attractive packaging, which are adding colours to all celebrations.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} className="mb-2  rounded-lg border w-[80%] py-2 bg-pink-50 border-blue-gray-100 px-8">
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition ease-in-out delay-1000 duration-1000 ${
            open === 4 ? "" : ""
          }`}
        >
          When was Pushpa Crackers started?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Pushpa Crackers was started in the year 1992.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} className="mb-2  rounded-lg border w-[80%] py-2 bg-pink-50 border-blue-gray-100 px-8">
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={`border-b-0 transition ease-in-out delay-1000 duration-1000 ${
            open === 5 ? "" : ""
          }`}
        >
          Which company makes the biggest fountain crackers in India?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Pushpa Crackers makes the biggest fountain crackers in India, the cracker name is Chelsa.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} className="mb-2  rounded-lg border w-[80%] py-2 bg-pink-50 border-blue-gray-100 px-8">
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className={`border-b-0 transition ease-in-out delay-1000 duration-1000 ${
            open === 6 ? "" : ""
          }`}
        >
          How can we buy Pushpa Crackers crackers?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Customers can buy Pushpa Crackers crackers though our dealers across India and for customers within Tamilnadu can buy though our direct outlet located at Sivakasi.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} className="mb-2  rounded-lg border w-[80%] py-2 bg-pink-50 border-blue-gray-100 px-8">
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className={`border-b-0 transition ease-in-out delay-1000 duration-1000 ${
            open === 7 ? "" : ""
          }`}
        >
          Which company has the largest variety of children Fireworks In India?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Pushpa Crackers has the largest variety of children Fireworks in India with 135 products.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8} className="mb-2  rounded-lg border w-[80%] py-2 bg-pink-50 border-blue-gray-100 px-8">
        <AccordionHeader
          onClick={() => handleOpen(8)}
          className={`border-b-0 transition ease-in-out delay-1000 duration-1000 ${
            open === 8 ? "" : ""
          }`}
        >
         How many new products, Pushpa Crackers are launching this Diwali?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Pushpa Crackers in launching 26 New products this Diwali.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 9} className="mb-2  rounded-lg border w-[80%] py-2 bg-pink-50 border-blue-gray-100 px-8">
        <AccordionHeader
          onClick={() => handleOpen(9)}
          className={`border-b-0 transition ease-in-out delay-1000 duration-1000 ${
            open === 9 ? "" : ""
          }`}
        >
          What is the vision of Pushpa Crackers?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        To make children happy in their celebrations with innovative fireworks.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 10} className="mb-2  rounded-lg border w-[80%] py-2 bg-pink-50 border-blue-gray-100 px-8">
        <AccordionHeader
          onClick={() => handleOpen(10)}
          className={`border-b-0 transition ease-in-out delay-1000 duration-1000 ${
            open === 10 ? "" : ""
          }`}
        >
         Are Pushpa Crackers Products available, throughout the year?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Yes, Pushpa Crackers products are available throughout the year through our dealers and our direct retail oulet.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 11} className="mb-2  rounded-lg border w-[80%] py-2 bg-pink-50 border-blue-gray-100 px-8">
        <AccordionHeader
          onClick={() => handleOpen(11)}
          className={`border-b-0 transition ease-in-out delay-1000 duration-1000 ${
            open === 11 ? "" : ""
          }`}
        >
          How to Contact Pushpa Crackers for inquiries?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Pushpa Crackers can be contacted via email enquiry@pushpacrackers.co.in or pushpacrackers@gmail.com or via mobile Numbers +91 9944179753
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 12} className="mb-2  rounded-lg border w-[80%] py-2 bg-pink-50 border-blue-gray-100 px-8">
        <AccordionHeader
          onClick={() => handleOpen(12)}
          className={`border-b-0 transition ease-in-out delay-1000 duration-1000 ${
            open === 12 ? "" : ""
          }`}
        >
          Where to find the functions of Pushpa Crackers crackers online?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Pushpa Crackers functions can be viewed through our website www.pushpacrackers.co.in or in Youtube page – @pushpacrackerssivakasi
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 13} className="mb-2 w-[80%] py-2 bg-pink-50 rounded-lg border border-blue-gray-100 px-8">
        <AccordionHeader
          onClick={() => handleOpen(13)}
          className={`border-b-0 transition-colors ${
            open === 13 ? "" : ""
          }`}
        >
          Under which law does Fireworks Industry belong to?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Fireworks comes under The Explosive Act of 2008.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 14} className="rounded-lg border w-[80%] py-2 bg-pink-50 border-blue-gray-100 px-8">
        <AccordionHeader
          onClick={() => handleOpen(14)}
          className={`border-b-0 transition-colors ${
            open === 14 ? "" : ""
          }`}
        >
         When was the first fireworks factory stated in Sivakasi?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        The first fireworks factory was stated in Sivakasi in the year 1923.
        </AccordionBody>
      </Accordion>
    </div>
  );
}