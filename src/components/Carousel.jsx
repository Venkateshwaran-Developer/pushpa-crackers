import { Carousel} from "@material-tailwind/react";
import banner1 from '../assets/banner/banner1.jpg';
import banner2 from '../assets/banner/banner2.jpg';
import banner3 from '../assets/banner/banner3.jpg';
import banner4 from '../assets/banner/banner4.png';
import banner5 from '../assets/banner/banner5.jpg';
import banner6 from '../assets/banner/banner6.jpg';

 
export function CarouselWithContent() {
  return (
    <Carousel  className="relative" transition={{ duration: 1.5 }}>
      <div className=" h-[500px] w-full">
        <img
          src={banner1}
          alt="image 1"
          className="h-[500px] w-full object-cover"
        />
        {/* <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            
          </div>
        </div> */}
      </div>
      <div className=" h-[500px] w-full">
        <img
          src={banner2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        {/* <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            
          </div>
        </div> */}
      </div>
      <div className=" h-[500px] w-full">
        <img
          src={banner3}
          className="h-[500px] w-full object-cover"
        />
        {/* <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            
          </div>
        </div> */}
      </div>
      <div className=" h-[500px] w-full">
        <img
          src={banner4}
          alt="image 3"
          className="h-[500px] w-full object-cover"
        />
        {/* <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            
          </div>
        </div> */}
      </div>
      <div className=" h-[500px] w-full">
        <img
          src={banner5}
          alt="image 3"
          className="h-[500px] w-full object-cover"
        />
        {/* <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            
          </div>
        </div> */}
      </div>
      <div className=" h-[500px] w-full">
        <img
          src={banner6}
          alt="image 3"
          className="h-[500px] w-full object-cover"
        />
        {/* <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            
          </div>
        </div> */}
      </div>
    </Carousel>
  );
}