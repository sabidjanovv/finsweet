import React from "react";

const HeroService = () => {
  return (
    <section className="bg-[#FFE7D4] text-black py-16">
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-start">
        <div className="md:w-2/3">
          <p className="text-lg font-medium text-[#534585] mb-2">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We Build Software <br />
            Solutions that Solve <br />
            Clients Business Challenges
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-6 rounded-lg inline-flex items-center">
            Request A Quote
            <span className="ml-2 text-xl">→</span>
          </button>
        </div>

        <div className="md:w-1/3 mt-10 md:mt-0">
          <ul className="space-y-4 text-lg">
            <li className="hover:text-blue-600 cursor-pointer font-medium">
              Technical support
            </li>
            <li className="hover:text-blue-600 cursor-pointer font-medium">
              Development →
            </li>
            <li className="hover:text-blue-600 cursor-pointer font-medium">
              AWS/Azure
            </li>
            <li className="hover:text-blue-600 cursor-pointer font-medium">
              Consulting
            </li>
            <li className="hover:text-blue-600 cursor-pointer font-medium">
              Information Technology
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroService;
