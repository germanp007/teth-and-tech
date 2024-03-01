import React, { useEffect, useState } from "react";
import SvgGearBlue from "./components/SvgComponents/SvgGearBlue";
import SvgGearYellow from "./components/SvgComponents/SvgGearYellow";
import Desktop from "./components/navbar/Desktop";
import Mobile from "./components/navbar/Mobile";
import SvgGearDark from "./components/SvgComponents/SvgGearDark";
import "animate.css";

const App = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <main className="min-h-screen">
      <Mobile handleClick={handleClick} />
      <Desktop />
      <article className="w-screen relative flex justify-center items-center text-center">
        <h1 className="animate__animated animate__fadeInDown absolute z-10 text-[28px] px-5 md:text-[42px] text-white font-bold">
          Driving <br />
          <span
            className="text-[36px] md:text-[52px] text-yellow-500 tracking-widest"
            style={{ textShadow: "2px 4px 4px rgba(0,0,0,0.9)" }}
          >
            Business Growth
          </span>{" "}
          <br /> with Customized Software Solutions
        </h1>
        <div className="absolue w-full h-full bg-blue-500 opacity-75 flex justify-center items-center"></div>
        <SvgGearDark
          witdh={150}
          height={150}
          className="animate-spinSlow absolute z-[10] top-[-50px] left-[-50px] transition-all duration-500 hidden sm:block"
        />
        <SvgGearDark
          witdh={90}
          height={90}
          className="animate-spinSlow absolute z-[10] top-[-20px] left-[-20px] transition-all duration-500 block sm:hidden"
        />
        <SvgGearBlue
          witdh={150}
          height={150}
          className="animate-spinSlow absolute z-[10] right-[-50px] bottom-[-30px] transition-all duration-500 hidden sm:block"
        />
        <SvgGearBlue
          witdh={90}
          height={90}
          className="animate-spinSlow absolute z-[10] right-[-20px] bottom-[-30px] transition-all duration-500 block sm:hidden"
        />
        <SvgGearYellow
          witdh={150}
          height={150}
          className="absolute animate-spinMedium rotate-[-180deg] right-[3.2rem] bottom-[3rem] hidden sm:block"
        />
        <SvgGearYellow
          witdh={90}
          height={90}
          className="absolute animate-spinMedium rotate-[-180deg] right-[2.4rem] bottom-[1.5rem] block sm:hidden"
        />
        <div
          className={`absolute z-30 w-[80%] max-w-[300px] h-screen bg-white ${
            click ? "right-0" : "right-[-300px]"
          } transition-all duration-500 flex items-center justify-center`}
        >
          <ul className=" h-[500px] flex flex-col text-xl text-[#27488F]">
            <li className="group cursor-pointer flex flex-col justify-evenly h-full transition-all duration-500 relative ">
              <h3 className="peer">Services</h3>
              <span className="absolute bottom-2 scale-x-0 peer-hover:bg-blue-400 w-full h-2 transform transition-transform duration-500 peer-hover:scale-x-100"></span>
            </li>
            <li className="group cursor-pointer flex flex-col justify-evenly h-full transition-all duration-500 relative ">
              <h3 className="peer">Who We Are</h3>
              <span className="absolute bottom-2 scale-x-0 peer-hover:bg-blue-400 w-full h-2 transform transition-transform duration-500 peer-hover:scale-x-100"></span>
            </li>
            <li className="group cursor-pointer flex flex-col justify-evenly h-full transition-all duration-500 relative ">
              <h3 className="peer">Testimonials</h3>
              <span className="absolute bottom-2 scale-x-0 peer-hover:bg-blue-400 w-full h-2 transform transition-transform duration-500 peer-hover:scale-x-100"></span>
            </li>
            <li className="group cursor-pointer flex flex-col justify-evenly h-full transition-all duration-500 relative ">
              <h3 className="peer">Contact Us</h3>
              <span className="absolute bottom-2 scale-x-0 peer-hover:bg-blue-400 w-full h-2 transform transition-transform duration-500 peer-hover:scale-x-100"></span>
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
};

export default App;
