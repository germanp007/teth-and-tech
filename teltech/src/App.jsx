import React, { useEffect, useState } from "react";
import SvgGearBlue from "./SvgComponents/SvgGearBlue";
import SvgGearYellow from "./SvgComponents/SvgGearYellow";
import Desktop from "./navbar/Desktop";
import Mobile from "./navbar/Mobile";
import SvgGearDark from "./SvgComponents/SvgGearDark";
import "animate.css";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {width <= 770 ? <Mobile /> : <Desktop />}
      <article className="w-screen relative bg-[url(public/team-process-creation.webp)] bg-cover flex justify-center items-center text-center">
        <h1 className="animate__animated animate__fadeInDown absolute z-10 text-[42px] text-white font-bold">
          Driving{" "}
          <span
            className="text-[52px] text-yellow-500"
            style={{ textShadow: "2px 4px 4px rgba(0,0,0,0.9)" }}
          >
            Business Growth
          </span>{" "}
          <br /> with Customized Software Solutions
        </h1>
        <div className="absolue w-full h-full bg-blue-400 opacity-75 flex justify-center items-center"></div>
        <SvgGearDark witdh={150} height={150} />
        <SvgGearBlue witdh={150} height={150} />
        <SvgGearYellow witdh={150} height={150} />
      </article>
    </main>
  );
};

export default App;
