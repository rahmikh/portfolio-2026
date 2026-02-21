import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import sertifikat from "../public/sertifikat.png";
import desain from "../public/desain.png";
import web from "../public/web.png";
import SertifikatPage from "./SertifikatPage";
import DesignPage from "./DesignPage";
import WebPage from "./WebPage";

const cards = [
  { id: 1, name: "Design Graphic", image: desain, link: "/design" },
  { id: 2, name: "Website", image: web, link: "/website" },
  { id: 3, name: "Certification", image: sertifikat, link: "/sertifikat" },
];

const CARD_WIDTH = 220;
const GAP = 32;
const SLOT = CARD_WIDTH + GAP;

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();

  const playClickSound = () => {
    const audio = new Audio("/mouse-click.mp3");
    audio.volume = 0.5;
    audio.play();
  };

  const playClickSoundCard = () => {
    const audio = new Audio("/click.mp3");
    audio.volume = 0.4;
    audio.play();
  };

  const prev = () => {
  setActiveIndex((prev) => {
    if (prev === 0) {
      navigate("/profil"); 
      return prev;
    }

    return prev - 1;
  });
};

  const next = () => {
  setActiveIndex((prev) => {
    if (prev === cards.length - 1) {
      navigate("/contact-me");
      return prev;
    }
    return prev + 1;
  });
};

const handlePrev = () => {
  playClickSound();
  prev();
}

const handleNext = () => {
  playClickSound();
  next();
}

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div
        className="absolute w-[500px] h-[500px] bg-yellow-500/40 blur-3xl rounded-full 
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></div>

      <div className="relative flex flex-col justify-center items-center h-full animate-slideFade">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 text-center text-shadow-lg text-shadow-yellow-700">
          Let’s see my project!
        </h1>

        <div className="absolute flex h-full top-1/2 left-10 z-20">
          <button
            onClick={handlePrev}
            className=" w-14 h-14 rounded-full
            bg-linear-to-b from-green-300 via-green-500 to-green-600
            border-2 border-green-700
          text-[#005109] text-2xl font-bold
            shadow-lg shadow-black/30
            active:translate-y-2 active:shadow-none
            flex items-center justify-center
            hover:scale-110 transition-all duration-200"
          >
            <ChevronLeft size={28} />
          </button>
        </div>

        <div className="w-[756px] mt-16">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(50% - ${
                activeIndex * SLOT + CARD_WIDTH / 2
              }px))`,
            }}
          >
            {cards.map((card, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={card.id}
                  className={`w-[220px] h-full shrink-0
                  transition-all duration-500 py-10
                  ${
                    isActive
                      ? "scale-110 z-20"
                      : "scale-90 opacity-50 blur-[1px]"
                  }
                  ${index < activeIndex ? "-rotate-6" : ""}
                  ${index > activeIndex ? "rotate-6" : ""}
                  `}
                >

                  <button
                    onClick={() => {
                      playClickSoundCard();
                      if (isActive) {
                        setActiveModal(card.link);
                      }
                    }}
                    className={` relative w-full h-full rounded-3xl px-5 py-12
                    flex flex-col items-center justify-center
                    border-4 
                    ${
                      isActive
                        ? "bg-linear-to-b from-yellow-300 to-yellow-500 border-white/30 animate-float hover:scale-105 shadow-[0_0_40px_rgba(255,200,0,0.7)]"
                        : "bg-linear-to-b from-yellow-200 to-orange-300 border-yellow-500 shadow-xl"
                    }
                    transition-all duration-500`}
                  >
                    <div className="absolute w-[180px] h-[180px] bg-amber-600/60 blur-xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative w-4/5 z-20">
                      <img
                        src={card.image}
                        alt="Foto Profil"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h2 className="relative z-20 font-bold text-2xl text-white text-shadow-sm text-shadow-amber-700">
                      {card.name}
                    </h2>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute flex h-full top-1/2 right-10 z-20">
          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full
            bg-linear-to-b from-green-300 via-green-500 to-green-600
            border-2 border-green-700
          text-[#005109] text-2xl font-bold
            shadow-lg shadow-black/30
            active:translate-y-2 active:shadow-none
            flex items-center justify-center
            hover:scale-110 transition-all duration-200"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
      {activeModal && (
        <>
          {activeModal === "/design" && (
            <DesignPage onClose={() => setActiveModal(null)} />
          )}
          {activeModal === "/website" && (
            <WebPage onClose={() => setActiveModal(null)} />
          )}
          {activeModal === "/sertifikat" && (
            <SertifikatPage onClose={() => setActiveModal(null)} />
          )}
        </>
      )}
    </section>
  );
};

export default Project;
