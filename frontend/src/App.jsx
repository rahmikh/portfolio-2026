import "./index.css";
import logo from "../public/portofolio.png";
import { Link } from "react-router-dom";

function App() {
  const playClickSound = () => {
    const audio = new Audio("/play.mp3");
    audio.volume = 0.4;
    audio.play();
  };
  return (
    <section
      className="w-full min-h-screen bg-cover bg-bottom bg-no-repeat"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full pb-10">
        <div className="top-0 left-0 bottom-0 w-full h-full flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-full md:w-1/2 lg:w-1/2 object-contain animate-float" />
        </div>
        <Link to={"/greeting"} className="flex items-center justify-center mb-4 ml-6 w-full">
          <button
            onClick={playClickSound}
            className="bg-linear-to-b from-yellow-200 via-yellow-400 to-yellow-500
    border-2 border-yellow-600
  w-3/4 md:w-1/3 lg:w-1/3 h-12 rounded-full 
  shadow-sm transition-all duration-150
  hover:scale-110 hover:shadow-lg hover:brightness-95
  active:scale-95 active:shadow-sm"
          >
            <div className="w-full h-full border-l-2 border-t-2 border-white/40 rounded-full">
              <p className="text-center text-[#5C3B00] font-bold mt-2 text-xl">
                Start Here!
              </p>
            </div>
          </button>
        </Link>
        <div className="flex items-center justify-center mb-4 ml-6">
          <p className="text-center text-white font-extrabold mt-2 text-md md:text-xl lg:text-xl text-shadow-md text-shadow-black/30">
            &copy; 2026 Rahmi Juwita. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;
