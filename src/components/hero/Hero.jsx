import React from "react";
import HeroImage from "../../assets/HeroImage.png"; 
import Logo1 from "../../assets/Logo1.svg"; 
import Logo2 from "../../assets/Logo2.svg"; 
import Logo3 from "../../assets/Logo3.svg"; 
import Logo4 from "../../assets/Logo4.svg"; 
import Logo5 from "../../assets/Logo5.svg"; 

const Hero = () => {
  return (
    <section className="bg-[#232536] text-white">
      <div className="container mx-auto px-6 md:px-20 py-16 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Transform Your Idea <br /> Into Reality with <br /> Finsweet
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            The entire Finsweet team knows what's good with Webflow and <br />
            you can too with 1 week and a good attitude.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-6 rounded-lg inline-flex items-center">
            Request Quote
            <span className="ml-2 text-xl">→</span>
          </button>
        </div>

        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={HeroImage}
            alt="Team discussion"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="bg-[#1A1A23] py-6">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <p className="text-gray-400 text-lg mb-4">Our Clients</p>
          <h3 className="text-xl font-semibold mb-6">We've Worked with</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <img
              src={Logo1}
              alt="Client Logo"
              className="h-50 opacity-75"
            />
            <img
              src={Logo2}
              alt="Client Logo"
              className="h-50 opacity-75"
            />
            <img
              src={Logo3}
              alt="Client Logo"
              className="h-50 opacity-75"
            />
            <img
              src={Logo4}
              alt="Client Logo"
              className="h-50 opacity-75"
            />
            <img
              src={Logo5}
              alt="Client Logo"
              className="h-50 opacity-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
