import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { motion } from "motion/react";

import story1 from "../public/story1.png";
import story2 from "../public/story2.png";
import story3 from "../public/story3.png";
import story4 from "../public/story4.png";

import feeds1 from "../public/feeds1.png";
import feeds2 from "../public/feeds2.png";
import feeds3 from "../public/feeds3.png";
import feeds4 from "../public/feeds4.png";
import feeds5 from "../public/feeds5.jpeg";
import feeds6 from "../public/feeds6.jpeg";
import feeds7 from "../public/feeds7.jpeg";
import feeds8 from "../public/feeds8.jpeg";

const DesignPage = ({ onClose }) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const playClickSound = () => {
    const audio = new Audio("../public/mouse-click.mp3");
    audio.volume = 0.5;
    audio.play();
  };

  const baseSlides = [
    {
      type: "story",
      images: [story1, story2, story3, story4],
    },
    {
      type: "feeds",
      images: [feeds1, feeds2, feeds3, feeds4],
    },
    {
      type: "feeds2",
      images: [feeds5, feeds6, feeds7, feeds8],
    },
  ];

  const slides = isMobile
    ? baseSlides.flatMap((slide) => [
        { type: slide.type, images: slide.images.slice(0, 2) },
        { type: slide.type, images: slide.images.slice(2, 4) },
      ])
    : baseSlides;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    playClickSound();
    nextSlide();
  };

  const handlePrev = () => {
    playClickSound();
    prevSlide();
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
        w-[95%] md:w-4/5 h-[90%] md:h-4/5"
      >
        <div className="relative w-full h-full border-l-4 border-t-4 border-white/30 rounded-3xl flex flex-col">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-[#FFD700]/20 rounded-full blur-3xl pointer-events-none"></div>
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
            <X size={20} className="text-amber-950" />
          </button>

          <h1 className="relative z-10 text-3xl md:text-4xl font-semibold text-center text-[#5C3B00] mt-6 text-shadow-xs text-shadow-white/40">
            Design Graphic
          </h1>

          <div className="relative flex-1 flex items-center justify-center px-6 md:px-16 z-10">
            <button
              onClick={handlePrev}
              className="absolute z-10 left-2 md:left-4 p-2 rounded-full 
              bg-linear-to-b from-yellow-200 via-yellow-400 to-yellow-500
              border-2 border-yellow-600
              hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <ChevronLeft className="text-[#5C3B00]" />
            </button>

            <div className="w-full flex flex-col items-center">
              <div className="overflow-hidden w-full flex justify-center">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {slides.map((slide, slideIndex) => (
                    <div
                      key={slideIndex}
                      className="min-w-full flex justify-center items-center"
                    >
                      <div
                        className={`grid gap-6 ${
                          isMobile
                            ? "grid-cols-2"
                            : "grid-cols-2 md:grid-cols-4"
                        }`}
                      >
                        {slide.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt="design"
                            className={`rounded-xl ${
                              slide.type === "story"
                                ? "h-full w-40 object-cover shadow-md shadow-black/30"
                                : "h-48 w-48 object-cover shadow-md shadow-black/30"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-6 md:mt-8">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      index === i
                        ? "bg-white scale-125"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-2 md:right-4 p-2 rounded-full 
              bg-linear-to-b from-green-300 via-green-500 to-green-600
              border-2 border-green-700
              hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <ChevronRight className="text-[#005109]" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DesignPage;
