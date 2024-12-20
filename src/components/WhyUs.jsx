import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import wu1 from "../assets/whyus/bulb.svg";
import wu2 from "../assets/whyus/star.svg";
import wu3 from "../assets/whyus/hand.svg";
import wu4 from "../assets/whyus/heart.svg";

export default function WhyUs() {
  return (
    <div className="w-full font-SpicyRice flex flex-col justify-center items-center sm:h-auto md:h-[110vh] sm:py-10">
      <div className="   ">
        <h1 className="sm:text-[50px] flex justify-center items-center sm:py-10 md:text-[80px] font-SpicyRice text-white">
          Why Choose Us?
        </h1>
      </div>

      <div className="grid sm:grid-cols-1 sm:gap-y-10 md:grid-cols-2 lg:grid-cols-4 place-content-center place-items-center w-full h-full ">
        <Card className="h-96 w-72 font-SpicyRice flex flex-col justify-center items-center ">
          <CardBody>
            <img className="mb-4 h-12 w-12 text-gray-900" src={wu1}></img>
            <Typography variant="h5" color="blue-gray" className="mb-2 font-SpicyRice font-extralight">
              Innovative Range of Crackers
            </Typography>
            <Typography className="font-SpicyRice font-extralight">
              We offer crackers that redefine fireworks with inventive designs
              and dazzling effects.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2 font-SpicyRice font-extralight text-light-green-800"
              >
                See Collection
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#118B50"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card className=" h-96 w-72 flex flex-col justify-center items-center">
          <CardBody>
            <img className="mb-4 h-12 w-12 text-gray-900" src={wu2}></img>
            <Typography variant="h5" color="blue-gray" className="mb-2 font-SpicyRice font-extralight">
              Supreme Quality, Affordable Prices
            </Typography>
            <Typography className="font-SpicyRice font-extralight">
              All our products are of supreme quality and are available at
              affordable prices to everyone.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2 text-pink-300 font-SpicyRice font-extralight"
              >
                See Collection
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card className="h-96 w-72 flex flex-col justify-center items-center">
          <CardBody>
            <img className="mb-4 h-12 w-12 text-gray-900" src={wu3}></img>
            <Typography variant="h5" color="blue-gray" className="mb-2 font-SpicyRice font-extralight">
              Best Fireworks Brand in India
            </Typography>
            <Typography className="font-SpicyRice font-extralight">
              We are the best fireworks brand in fountains & children fancy
              category with large varieties.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2 text-red-300 font-SpicyRice font-extralight"
              >
                See Collection
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card className="h-96 w-72 flex flex-col justify-center items-center">
          <CardBody>
            <img className="mb-4 h-12 w-12 text-gray-900" src={wu4}></img>
            <Typography variant="h5" color="blue-gray" className="mb-2 font-SpicyRice font-extralight">
              Trusted Brand since 1974
            </Typography>
            <Typography className="font-SpicyRice font-extralight">
              Pushpa Crackers is a trusted brand since 1974 & offers dedicated
              support service for customers.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2 text-blue-300 font-SpicyRice font-extralight"
              >
                See Collection
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
