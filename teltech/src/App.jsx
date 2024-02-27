import React from "react";
import SvgGearBlue from "./SvgComponents/SvgGearBlue";
import SvgGearYellow from "./SvgComponents/SvgGearYellow";
import Desktop from "./navbar/Desktop";
const App = () => {
  return (
    <main>
      <Desktop />
      <article className=" w-screen h-screen overflow-hidden ">
        <SvgGearBlue witdh={200} height={200} />
        <SvgGearYellow witdh={200} height={200} />
      </article>
    </main>
  );
};

export default App;
