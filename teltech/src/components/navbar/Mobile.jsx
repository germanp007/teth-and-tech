import { useState } from "react";
import LogoComponent from "./LogoNav";
import burguerMenu from "../../../public/logo/menu_2976215.png";
const Mobile = ({ handleClick }) => {
  return (
    <>
      <nav className="h-20 w-full flex justify-between items-center navResponsive:hidden">
        <LogoComponent width={120} height={100} />
        <button onClick={handleClick}>
          <img src={burguerMenu} alt="menu" className="w-8 h-8 mr-8" />
        </button>
      </nav>
    </>
  );
};

export default Mobile;
