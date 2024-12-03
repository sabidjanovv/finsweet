import React from "react";
import Image from "../../assets/Image.png";

const HeroCareers = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-sm font-semibold text-orange-500 uppercase mb-2">
          Career at Finsweet
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          We hire people who are <br />
          Always Passionate about <br />
          what they do
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          Through True Rich Attended does no end it his mother since real had
          half <br /> every him case in packages enquire we up ecstatic unsatiable saw.
        </p>

        <div className="relative flex justify-center">
          <img src={Image} alt="Career" className="mx-auto" />
        </div>

        <p className="text-gray-800 text-lg mt-8">
          See Our open positions <span className="text-yellow-500">👇</span>
        </p>
      </div>
    </section>
  );
};

export default HeroCareers;
