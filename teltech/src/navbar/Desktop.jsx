import LogoComponent from "./LogoNav";

const Desktop = () => {
  return (
    <nav className="h-[80px]  w-screen flex justify-between shadow-sm">
      <LogoComponent width={150} height={80} />
      <ul className=" h-full flex justify-center items-center gap-14 mr-32  text-xl text-[#27488F]">
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
    </nav>
  );
};

export default Desktop;
