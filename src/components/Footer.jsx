function Footer() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
  return (
    <div>
      <footer className=" grid grid-cols-2 items-start place-items-center footer bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a href="#home" className="link link-hover">
            Home
          </a>
          <a href="#AboutUs" className="link link-hover">
            AboutUs
          </a>
          <a href="#ContactUs" className="link link-hover">
            ContactUs
          </a>
          <a href="#Brands" className="link link-hover">
            Brands
          </a>
          <a href="#OurCollections" className="link link-hover">
            OurCollections
          </a>
          <a href="#OurServices" className="link link-hover">
            OurServices
          </a>
        </nav>
        <div className="w-full flex flex-col justify-center items-start">
          <h6 className="footer-title ">Contact Information</h6>
          <div className="space-y-3">
            <p>
              Address : Pushpa Crackers, 506/465, Thiruthangal village,
              Sivakasi, Virudhunagar, Tamilnadu, 626130
            </p>
            <p className="">
              Phone:{" "}
              <a href="tel:+91 994 417 9753" className="">
                +919944179753
              </a>
            </p>
            <p className="">
              Email:{" "}
              <a href="mailto:info@pushpacrackers.com" className="">
                info@pushpacrackers.com
              </a>
            </p>
          </div>
        </div>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <p>
            Pushpa crackers Pvt Ltd.
            <br />
            Providing reliable crackers since 1992
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://wa.me/919944179753?text=Hey%20There%20I%20Need%20Crackers...!">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                className="fill-current cursor-pointer"
              >
                <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
              </svg>
            </a>
            <a href="mailto:pushpacrackers@gmail.com" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                className="fill-current cursor-pointer"

              >
                <path d="M 6 7.03125 C 5.691406 7.03125 5.402344 7.089844 5.125 7.175781 L 8.039063 9.03125 L 23.960938 9.03125 L 26.875 7.175781 C 26.597656 7.089844 26.308594 7.03125 26 7.03125 Z M 4.113281 7.71875 C 3.4375 8.269531 3 9.097656 3 10.03125 L 3 23.03125 C 3 24.683594 4.347656 26.03125 6 26.03125 L 26 26.03125 C 27.652344 26.03125 29 24.683594 29 23.03125 L 29 10.03125 C 29 9.097656 28.5625 8.269531 27.886719 7.71875 L 16 15.28125 Z M 6 12.445313 L 16 18.8125 L 26 12.445313 L 26 24.03125 L 6 24.03125 Z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
