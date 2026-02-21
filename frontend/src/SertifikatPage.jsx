import { useState } from "react";
import { motion } from "motion/react";
import BBPVP1 from "../public/BBPVP1.jpg";
import BNSP from "../public/BNSP.png";
import wakaf from "../public/wakaf-salman.png";
import BIJB from "../public/BIJB.png";
import { X } from "lucide-react";

const SertifikatPage = ({ onClose }) => {
  const [index, setIndex] = useState(0);

  const playClickSoundClose = () => {
    const audio = new Audio("/mouse-click.mp3");
    audio.volume = 0.5;
    audio.play();
  };

  const playClickSound = () => {
    const audio = new Audio("/click.mp3");
    audio.volume = 0.4;
    audio.play();
  };

  const handleNext = () => {
    if (index < sertifikatData.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleClickNext = () => {
    playClickSound();
    handleNext();
  };

  const handleClickPrev = () => {
    playClickSound();
    handlePrev();
  };

  const sertifikatData = [
    {
      title: "Web Development with Node.js & React",
      time: "BNSP • 2025",
      img: BNSP,
      description:
        "This competency certificate was issued by Badan Nasional Sertifikasi Profesi (BNSP) as an official recognition of my professional competence as Frontend Development with industry standards."
    },
    {
      title: "Full-Stack Web Development Training with Node.js & React",
      time: "BBPVP Bandung • 2025",
      img: BBPVP1,
      description:
        "Vocational training certificate recognizing completion of a hands-on Frontend Development program focused on practical and industry-ready skills.",
    },
    {
      title: "Operational Web Development",
      time: "Wakaf Salman ITB • 2025",
      img: wakaf,
      description:
        "Certificate of completion for a Fullstack Developer internship program, demonstrating hands-on experience in frontend and backend development within a professional work environment.",
    },
    {
      title: "PT. Bandar Udara Internasional Jawa Barat (BIJB)",
      time: "2025",
      img: BIJB,
      description:
        "Certification in HTML & CSS implementation, demonstrating proficiency in building structured, responsive, and visually consistent web interfaces.",
    },
  ];

  return (
    <section className="fixed inset-0 bg-black/60 w-full h-screen flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
        }}
        className="bg-linear-to-b from-[#C89B5A] via-[#A87434] to-[#7A4E1D]
        border-2 border-[#5B3A16] rounded-3xl shadow-black/40 shadow-2xl
        w-[90%] md:w-4/5 h-[90%] md:h-4/5"
      >
        <div className="relative w-full h-full border-l-4 border-t-4 border-white/30 rounded-3xl flex flex-col overflow-hidden min-h-0">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-[#FFD700]/20 rounded-full blur-3xl pointer-events-none"></div>

          <button
            onClick={(e) => {
              playClickSoundClose();
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

          <h1 className="relative z-10 text-3xl md:text-4xl lg:text-4xl font-semibold text-center text-[#5C3B00] mt-4 text-shadow-xs text-shadow-white/40">
            Certification
          </h1>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex-1 p-6 gap-6 min-h-0">
            
            <div className="flex items-center justify-center">
              <img
                src={sertifikatData[index].img}
                alt={`Sertifikat ${index + 1}`}
                className="w-3/4 md:w-full lg:w-full object-cover"
              />
            </div>
            <div
                className="flex-1 min-h-0 overflow-y-auto px-6 mr-4 my-4
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-[#5B3A16]
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-[#c49b63]
                [&::-webkit-scrollbar-thumb]:rounded-full"
              >
            <div>
              <h2 className="text-lg md:text-xl lg:text-xl text-white font-bold mb-2 text-shadow-sm text-shadow-amber-950/50">
                {sertifikatData[index].title}
              </h2>
              <h2 className="text-base md:text-lg lg:text-lg text-white font-semibold text-shadow-sm text-shadow-amber-950/50">
                {sertifikatData[index].time}
              </h2>

              <div className="h-0.5 bg-white/60 w-16 my-4"></div>

              <p className="text-white font-semibold md:text-base lg:text-base text-sm">
                {sertifikatData[index].description}
              </p>

              <div className="flex justify-between mt-8 w-full">
                <button
                  onClick={handleClickPrev}
                  disabled={index === 0}
                  className={`px-4 md:px-8 py-2 rounded-full font-bold
                  bg-linear-to-b from-yellow-200 via-yellow-400 to-yellow-500
                  border-2 border-yellow-600 text-[#5C3B00] text-sm md:text-base lg:text-base
                  transition-all duration-200
                  ${
                    index === 0
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:scale-110 hover:shadow-xl active:scale-95"
                  }`}
                >
                  Previous
                </button>

                <button
                  onClick={handleClickNext}
                  disabled={index === sertifikatData.length - 1}
                  className={`px-4 md:px-8 py-2 rounded-full font-bold
                  bg-linear-to-b from-green-300 via-green-500 to-green-600
                  border-2 border-green-700 text-[#005109] text-sm md:text-base lg:text-base
                  transition-all duration-200
                  ${
                    index === sertifikatData.length - 1
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:scale-110 hover:shadow-xl active:scale-95"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SertifikatPage;