import React from "react";
import { Link } from "react-router-dom";

const ContactMe = () => {
  const playClickSound = () => {
    const audio = new Audio("../public/click.mp3");
    audio.volume = 0.5; 
    audio.play();
  };

  const playClickSoundSubmit = () => {
    const audio = new Audio("../public/play.mp3");
    audio.volume = 0.4;
    audio.play();
  };
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative flex justify-center items-center h-full p-6 md:p-0">
        
        <div
          className="relative bg-linear-to-b from-[#C89B5A] via-[#A87434] to-[#7A4E1D]
          border-2 border-[#5B3A16] rounded-3xl shadow-2xl shadow-black/50
          w-full h-5/6 md:w-3/5 md:h-4/5 backdrop-blur-md p-10 flex flex-col justify-center items-center
          animate-float transition-all duration-500"
        >
          <div className="absolute inset-0 rounded-3xl border-t-4 border-l-4 border-white/30 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-[#FFD700]/20 rounded-full blur-3xl pointer-events-none"></div>          
          <h1 className="relative z-10 text-3xl md:text-4xl lg:text-4xl font-bold text-[#5C3B00] text-center text-shadow-xs text-shadow-white/50 mt-0 md:mt-6 lg:mt-10">
            Contact Me
          </h1>

          <form
            action="https://formspree.io/f/xzdaawey"
            method="POST"
            className="w-full h-full"
          >
            <div className="relative z-10 flex flex-col gap-4 w-full h-full py-4 md:p-8">
              <div className="flex flex-row gap-4 h-12 w-full">
                <div className="flex justify-center items-center pl-2 md:pl-4 bg-[#785329] rounded-lg w-1/2 h-full shadow-inner shadow-black/30">
                  <input
                    type="email"
                    name="email"
                    className="bg-transparent text-white text-xs md:text-sm placeholder:text-[#C89B5A] font-bold placeholder:font-bold w-full h-full focus:outline-0 focus-ring-0"
                    placeholder="your@email.com"
                  ></input>
                </div>
                <div className="flex justify-start items-center bg-[#785329] rounded-lg w-1/2 h-full shadow-inner shadow-black/30">
                  <p className="text-white font-bold pl-2 text-xs md:text-sm">rahmijuwita2@gmail.com</p>
                </div>
              </div>

              <div className="h-0.5 bg-black/40 w-full"></div>

              <div className="flex bg-[#785329] rounded-lg shadow-inner shadow-black/30 w-full h-42 justify-start items-center">
                <textarea name="message" className="px-4 py-2 text-white text-xs md:text-sm placeholder:text-[#C89B5A] font-bold placeholder:font-bold w-full h-full resize-none focus:outline-none focus-ring-0" placeholder="Your Message"></textarea>
              </div>

              <div className="flex flex-row w-full gap-4">
                <Link to="/"
                onClick={playClickSound}
                className="w-1/2 md:px-8 px-4 py-2 rounded-2xl
    bg-linear-to-b from-yellow-200 via-yellow-400 to-yellow-500
    border-2 border-yellow-600
    text-[#5C3B00] font-bold items-center justify-center flex
              shadow-sm shadow-black/30 hover:scale-105
              active:scale-100 active:shadow-none
              transition-all duration-200"
              >
                Back To Home
              </Link>
                <button
                onClick={playClickSoundSubmit}
                type="submit"
                className="w-1/2 px-8 py-2 rounded-2xl font-bold
              bg-linear-to-b from-green-300 via-green-500 to-green-600
              border-2 border-green-700 text-[#005109]
              shadow-sm shadow-black/30 hover:scale-105
              active:scale-100 active:shadow-none
              transition-all duration-200"
              >
                Send
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
