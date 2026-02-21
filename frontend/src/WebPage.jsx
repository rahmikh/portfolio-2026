import { useState } from "react";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { motion } from "motion/react"

import web1 from "../public/web-1.png";
import web2 from "../public/web-2.png";
import web3 from "../public/web-3.png";
import web4 from "../public/web-4.png";
import web5 from "../public/web-5.png";
import web6 from "../public/web-6.png";
import web7 from "../public/web-7.png";

const WebPage = ({ onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const playClickSound = () => {
    const audio = new Audio("/mouse-click.mp3");
    audio.volume = 0.5;
    audio.play();
  };

  const images = [web1, web2, web3, web4, web5, web6, web7];

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    playClickSound();
    prev();
  };

  const handleNext = () => {
    playClickSound();
    next();
  };

  return (
    <section className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
        }}
        className="bg-linear-to-b from-[#C89B5A] via-[#A87434] to-[#7A4E1D]
        border-2 border-[#5B3A16] rounded-3xl shadow-black/40 shadow-2xl
        w-4/5 h-4/5"
      >
        <div className="relative w-full h-full border-l-4 border-t-4 border-white/30 rounded-3xl flex flex-col">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none"></div>

          <button
            onClick={(e) => {
              playClickSound();
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-3 right-4
             w-9 h-9 md:w-10 md:h-10 z-50 rounded-full 
             bg-amber-900/30
             border-2 border-amber-950  
             flex items-center justify-center
             hover:scale-110 active:scale-95 transition-all duration-200"
          >
            <X size={22} className="text-amber-950" />
          </button>

          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-center text-[#5C3B00] mt-6 text-shadow-xs text-shadow-white/40">
            Website
          </h1>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-10 min-h-0">

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                className="z-10 p-2 rounded-full 
                bg-linear-to-b from-yellow-200 via-yellow-400 to-yellow-500
                border-2 border-yellow-600
                shadow-sm shadow-black/30
                hover:scale-110 hover:shadow-xl
                active:scale-95 transition-all duration-200"
              >
                <ChevronLeft size={28} className="text-[#5C3B00]" />
              </button>

              <div className="overflow-hidden w-full h-full">
                <div
                  className="flex h-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="w-full shrink-0 flex items-center justify-center"
                    >
                      <img
                        src={img}
                        alt={`Website ${index + 1}`}
                        className="w-full object-contain shadow-md shadow-black/40"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="z-10 p-2 rounded-full 
                bg-linear-to-b from-green-300 via-green-500 to-green-600
                border-2 border-green-700
                shadow-sm shadow-black/30
                hover:scale-110 hover:shadow-xl
                active:scale-95 transition-all duration-200"
              >
                <ChevronRight size={28} className="text-[#005109]" />
              </button>
            </div>

            <div className="flex flex-col text-white z-10 h-full min-h-0">
              <div
                className="flex-1 min-h-0 overflow-y-auto px-6 mr-4 my-4
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-[#5B3A16]
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-[#c49b63]
                [&::-webkit-scrollbar-thumb]:rounded-full"
              >
                <h2 className="text-lg md:text-xl font-bold">
                  Project Website Library System
                </h2>

                <div className="h-0.5 bg-white/60 w-16 my-4"></div>

                <p className="leading-relaxed text-sm md:text-base font-semibold text-white/90">
                  Developed a fullstack Library Management System using React,
                  Node.js, JavaScript, and TypeScript, handling both frontend
                  interface development and backend API implementation.
                  The application enables efficient management of books.
                </p>

                <div className="text-xs md:text-sm text-white/70 mt-4">
                  Slide {activeIndex + 1} from {images.length}
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WebPage;