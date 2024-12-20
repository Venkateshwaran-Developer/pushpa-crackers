import kaleeswari from "../assets/marquee/mq-2.png";
import krishna from "../assets/marquee/mq-3.png";
import bluejay from "../assets/marquee/mq-4.png";
import pooja from "../assets/marquee/mq-5.jpg";
import stark from "../assets/marquee/mq-6.png";
import anil from "../assets/marquee/mq-7.jpg";
import sony from "../assets/marquee/mq-8.png";
import slight from "../assets/marquee/mq-9.jpg";
import spec from "../assets/marquee/mq-10.png";

function Marqueetag() {
  const items = [
    {
      image: [kaleeswari],
    },
    {
      image: [krishna],
    },
    {
      image: [bluejay],
    },
    {
      image: [pooja],
    },
    {
      image: [stark],
    },
    {
      image: [anil],
    },
    {
      image: [sony],
    },
    {
      image: [slight],
    },
    {
      image: [spec],
    },
  ];

  return (
    <div>
      <div className="bg-white text-black text-3xl font-SpicyRice flex justify-center">
        <h1>Our Partners</h1>
      </div>

      <div className="relative flex bg-white items-center">
        <div className="relative flex max-w-[100vw] overflow-hidden py-5">
          <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="h-full px-2.5">
                <div className="relative h-full w-[15rem] rounded-2xl border border-white/5 bg-white/5 px-8 py-6">
                  <img src={item.image} className="h-full w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marqueetag;
