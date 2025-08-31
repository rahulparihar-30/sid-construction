import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Home = () => {
  return (
    <div className="Home" id="Home" >
      <div
        className="w-full brightness-50 h-screen bg-cover bg-center transition-all duration-500 relative"
        style={{
          backgroundImage: `url(/sid-construction.jpg)`,
        }}
      ></div>
      <div className="home-overlay lg:w-[40%] w-[80%] align-center p-5 mx-15">
        <h3 className=" text-white font-normal">
          <span className="bg-amber-700 p-1 mr-1">#1</span>Construction Company
          in the City
        </h3>
        <h1 className="text-white lg:text-7xl">
          From Dream <span>To Reality</span>
        </h1>
        <p className="text-white">
          We transform ideas into structures that last. With expert planning,
          skilled execution, and a commitment to quality, Siddharth Group brings
          your vision to life one project at a time.
        </p>
        <div className="btns md:justify-start" id="btn">
          <button
            id="whatsapp"
            className="bg-[#ffc247ad] text-white transition border-[#FFC247] delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-amber-400"
          >
            <WhatsAppIcon /> Chat Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
