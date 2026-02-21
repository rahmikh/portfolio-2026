import React from "react";
import { motion } from "motion/react";
import fotoprofil from "../public/foto-profil.jpg";
import { Link } from "react-router-dom";

const Profil = () => {
  const playClickSound = () => {
    const audio = new Audio("/click.mp3");
    audio.volume = 0.4;
    audio.play();
  };

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-black/30 via-transparent to-black/40"></div>

      <div className="relative flex flex-col items-center justify-center w-full min-h-screen">
        <div className="relative w-[90%] md:w-5/6 h-[80vh] flex items-center justify-center">
          <div
            className="absolute w-full h-full translate-x-2 translate-y-2
            bg-[#835320] border-2 border-[#5B3A16] rounded-3xl"
          ></div>

          <div
            className="relative w-full h-full
            bg-linear-to-b from-[#C89B5A] via-[#A87434] to-[#7A4E1D]
            border-2 border-[#D6B485]
            rounded-3xl shadow-2xl shadow-black/50
            backdrop-blur-md p-2 md:p-6 overflow-hidden"
          >
            <div className="relative w-full h-full min-h-full">
              <div
                className="w-full h-full overflow-y-auto md:overflow-y-hidden px-6
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-[#5B3A16]
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-[#c49b63]
                [&::-webkit-scrollbar-thumb]:rounded-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full md:h-[calc(100%-1px)]">
                  
                  <div className="relative bg-linear-to-b from-[#FCF9EB] to-[#F0DB99] rounded-2xl w-full h-full flex items-center justify-center border-2 border-[#FCF9EB] shadow-lg shadow-black/30">
                    <div className="absolute inset-0 overflow-hidden rounded-3xl">
                      <div className="absolute top-0 left-0 w-1/4 h-full bg-amber-800/5 skew-x-30"></div>
                    </div>

                    <div className="flex justify-center items-center w-full h-full z-10 animate-slideFade">
                      <div className="w-2/3 h-5/6 -rotate-2">
                        <div className="w-full h-full bg-white shadow-md shadow-black/30 p-2">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 120,
                              damping: 10,
                            }}
                            className="w-full h-4/5 overflow-hidden"
                          >
                            <img
                              src={fotoprofil}
                              alt="Foto Profil"
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        </div>

                        <div
                          className="absolute -top-3 left-1/2 -translate-x-1/2 
                          w-28 h-8 bg-[#5B3A16]/40"
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-b from-[#FCF9EB] to-[#F0DB99] rounded-2xl w-full h-full flex items-center justify-center border-2 border-[#FCF9EB] shadow-lg shadow-black/30">
                    <div className="flex flex-col gap-4 w-full p-2">
                      <div className="bg-[#DED8BA] rounded-xl p-4 flex shadow-inner shadow-black/30">
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: 0.6,
                          }}
                        >
                          <h2 className="text-sm font-bold text-[#5B3A16]">
                            Hi! I'm{" "}
                            <span className="text-[#A87434]">Rahmi</span>, a
                            passionate frontend developer with a love for
                            crafting beautiful and functional web experiences.
                            With a strong foundation in HTML, CSS, and
                            JavaScript, I specialize in creating responsive and
                            user-friendly interfaces. I am always eager to learn
                            new technologies to enhance my skills. When I'm not
                            coding, you can find me exploring design trends.
                            Let's build something amazing together!
                          </h2>
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[#DED8BA] rounded-xl py-2 px-4 flex flex-col shadow-inner shadow-black/30">
                          <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: 1.2,
                          }}
                        >
                          <h2 className="text-md font-bold text-[#5B3A16] mb-0">
                            Experiences
                          </h2>
                          <ul className="list-disc marker:text-[#5B3A16] mx-4">
                            <li>
                              <p className="text-xs font-bold text-[#5B3A16]">
                                Fullstack Developer at Wakaf Salman ITB (2025)
                              </p>
                            </li>
                            <li>
                              <p className="text-xs font-bold text-[#5B3A16]">
                                Certified Frontend Development (2025)
                              </p>
                            </li>
                            <li>
                              <p className="text-xs font-bold text-[#5B3A16]">
                                HTML and CSS Implementation at PT. BIJB (2022)
                              </p>
                            </li>
                          </ul>
                          </motion.div>
                        </div>


                        <div className="bg-[#DED8BA] rounded-xl py-2 px-4 flex flex-col shadow-inner shadow-black/30">
                          <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: 1.8,
                          }}
                        >
                          <h2 className="text-md font-bold text-[#5B3A16] mb-0">
                            Technical Skills
                          </h2>
                          <ul className="list-disc marker:text-[#5B3A16] mx-4">
                            <li>
                              <p className="text-xs font-bold text-[#5B3A16]">
                                Frontend: React.js, Tailwind, HTML, CSS,
                                JavaScript, PHP
                              </p>
                            </li>
                            <li>
                              <p className="text-xs font-bold text-[#5B3A16]">
                                Backend: Node.js
                              </p>
                            </li>
                            <li>
                              <p className="text-xs font-bold text-[#5B3A16]">
                                Tools: Git, GitHub, Postman
                              </p>
                            </li>
                          </ul>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Link to="/greeting" className="absolute left-6 top-1/2 -translate-y-1/2">
        <button
          onClick={playClickSound}
          className="w-14 h-14 rounded-full 
              bg-linear-to-b from-yellow-200 via-yellow-400 to-yellow-500
              border-2 border-yellow-600
              text-[#5C3B00] text-2xl font-bold
              shadow-lg shadow-black/30
              hover:scale-110 hover:shadow-xl
              active:scale-95 transition-all duration-200"
        >
          &lt;
        </button>
      </Link>

      <Link to="/project" className="absolute right-6 top-1/2 -translate-y-1/2">
        <button
          onClick={playClickSound}
          className="w-14 h-14 rounded-full 
              bg-linear-to-b from-green-300 via-green-500 to-green-600
              border-2 border-green-700
              text-[#005109] text-2xl font-bold
              shadow-lg shadow-black/30
              hover:scale-110 hover:shadow-xl
              active:scale-95 transition-all duration-200"
        >
          &gt;
        </button>
      </Link>
    </section>
  );
};

export default Profil;
