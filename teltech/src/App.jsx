import React, { useEffect, useState } from "react";
import SvgGearBlue from "./SvgComponents/SvgGearBlue";
import SvgGearYellow from "./SvgComponents/SvgGearYellow";
import Desktop from "./navbar/Desktop";
import Mobile from "./navbar/Mobile";

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
      <article className="w-screen h-screen bg-blue-50">
        <SvgGearBlue witdh={200} height={200} />
        <SvgGearYellow witdh={200} height={200} />
      </article>
    </main>
  );
};

export default App;
