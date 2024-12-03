import React from "react";
import Image1 from "../../assets/Image1.png"
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";


const HeroCompany = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-orange-500 uppercase mb-2">
            Company
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Award-winning Company <br />
            seen and used by millions <br />
            around the world.
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is decentralized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <img
              src={Image1}
              alt="Office meeting"
              className="rounded-lg w-full"
            />
          </div>
          <div>
            <img
              src={Image2}
              alt="Team collaboration"
              className="rounded-lg w-full"
            />
          </div>
          <div>
            <img
              src={Image3}
              alt="Business discussion"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCompany;
