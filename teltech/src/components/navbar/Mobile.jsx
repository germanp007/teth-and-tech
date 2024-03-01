import LogoComponent from "./LogoNav";
import Hamburger from "hamburger-react";
const Mobile = ({ handleClick }) => {
  return (
    <>
      <nav className="h-20 w-full flex justify-between items-center navResponsive:hidden">
        <LogoComponent width={120} height={100} />
        <button onClick={handleClick} className="mr-5">
          <Hamburger color="#27488F" />
        </button>
      </nav>
    </>
  );
};

export default Mobile;
