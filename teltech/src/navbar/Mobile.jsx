import LogoComponent from "./LogoNav";

const Mobile = () => {
  return (
    <nav className="h-20 w-full flex justify-between items-center">
      <LogoComponent width={120} height={100} />
      <img
        src="../public/logo/menu_2976215.png"
        alt="menu"
        className="w-8 h-8"
      />
    </nav>
  );
};

export default Mobile;
