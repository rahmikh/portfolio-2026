import { useState } from "react";
import { Link } from "react-router-dom";

const Greeting = () => {
  const [index, setIndex] = useState(0);

  const playClickSound = () => {
    const audio = new Audio("/click.mp3");
    audio.volume = 0.4;
    audio.play();
  };

  const texts = [
    "Hello! This portfolio website was created to showcase my projects and achievements as a Frontend Developer. Here, you can explore information about my background, technical skills, and selected projects that I have developed. Thank you for visiting my website, and I invite you to explore it further to learn more about my work and experience.",
    "This website was built using React and Tailwind CSS, along with various tools such as HTML, CSS, and JavaScript, also supported by various frameworks and libraries to ensure a responsive and visually engaging user experience. All designs and content featured on this website are my original work, including the background and logo, which were created using Canva and Ibis Paint. The overall design reflects both my technical expertise and creativity as a Frontend Developer.",
  ];

  const handleNext = () => {
    if (index < texts.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleClickPrev = () => {
    playClickSound();
    handlePrev();
  };

  const handleClickNext = () => {
    playClickSound();
    handleNext();
  };

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-black/30 via-transparent to-black/40"></div>
      <div className="relative flex justify-center items-center h-full">
        <div 
        className="relative bg-linear-to-b from-[#C89B5A] via-[#A87434] to-[#7A4E1D]
        border-2 border-[#5B3A16] rounded-3xl shadow-2xl shadow-black/50
        w-4/5 h-4/5 backdrop-blur-md p-10 flex flex-col justify-center items-center
        animate-float transition-all duration-500"
        >
          <div className="absolute inset-0 rounded-3xl border-t-4 border-l-4 border-white/30 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-[#FFD700]/30 rounded-full blur-3xl z-0 pointer-events-none"></div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#5C3B00] text-center text-shadow-xs text-shadow-white/50">
            Welcome to my portfolio website
          </h1>

          <p
            key={index}
            className="z-10 mt-6 md:mt-10 lg:mt-12 text-white text-sm md:text-xl font-bold leading-relaxed text-center max-w-4xl animate-slideFade"
          >
            {texts[index]}
          </p>

          {/* Buttons */}
          <div className="flex justify-center mt-6 gap-6 md:mt-10">
            {index > 0 && (
              <button
                onClick={handleClickPrev}
                className="px-6 py-2 text-sm md:text-base md:px-10 md:py-3 lg:text-base lg:px-10 lg:py-3 rounded-full font-bold
            bg-linear-to-b from-yellow-200 via-yellow-400 to-yellow-500
            border-2 border-yellow-600 text-[#5C3B00]
            hover:scale-110 hover:shadow-xl
            active:scale-95 transition-all duration-200"
              >
                Previous
              </button>
            )}

            {index < texts.length - 1 ? (
              <button
                onClick={handleClickNext}
                className="px-6 py-2 text-sm md:text-base md:px-10 md:py-3 lg:text-base lg:px-10 lg:py-3 rounded-full font-bold
            bg-linear-to-b from-green-300 via-green-500 to-green-600
            border-2 border-green-700
            text-[#005109]
            hover:scale-110 hover:shadow-xl
            active:scale-95 transition-all duration-200"
              >
                Next
              </button>
            ) : (
              <Link to="/profil">
                <button
                onClick={playClickSound}
                  className="px-6 py-2 text-sm md:text-base md:px-10 md:py-3 lg:text-base lg:px-10 lg:py-3 rounded-full font-bold bg-linear-to-b from-green-300 via-green-500 to-green-600
              border-2 border-green-700
              text-[#005109]
              hover:scale-110 hover:shadow-xl
              active:scale-95 transition-all duration-200"
                >
                  Enter
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
