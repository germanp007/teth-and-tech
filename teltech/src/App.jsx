import React, { useEffect, useState } from "react";
import SvgGearBlue from "./SvgComponents/SvgGearBlue";
import SvgGearYellow from "./SvgComponents/SvgGearYellow";
import Desktop from "./navbar/Desktop";
import Mobile from "./navbar/Mobile";
import SvgGearDark from "./SvgComponents/SvgGearDark";
import MentalPeace from "./SvgComponents/MentalPeace";
import Maintenance from "./SvgComponents/Maintenance";

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
    <main className="">
      {width <= 770 ? <Mobile /> : <Desktop />}
      <article className="w-screen relative bg-[url(public/team-process-creation.jpg)] bg-cover flex justify-center items-center">
        <div className="absolue w-full h-full bg-blue-500 opacity-75 flex justify-center items-center">
          <h1 className="text-8xl text-white font-bold">
            Trustworthy Projects
          </h1>
        </div>
        <SvgGearDark witdh={150} height={150} />
        <SvgGearBlue witdh={150} height={150} />
        <SvgGearYellow witdh={150} height={150} />
      </article>
    </main>
  );
};

export default App;
