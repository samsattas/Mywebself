import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AboutIcon,
  ContactIcon,
  ExpIcon,
  HomeIcon,
  ResumeIcon,
} from "../assets/icons/heroicons";

const Navbar = () => {
  //TODO: show selected page
  const [selected, setSelected] = useState("home");

  useEffect(() => {
    const path = window.location.hash;
    switch (path) {
      case "#/":
        setSelected("home");
        break;
      case "#/about":
        setSelected("about");
        break;
      case "#/xp":
        setSelected("xp");
        break;
      case "#/contact":
        setSelected("contact");
        break;
      default:
        setSelected("home");
    }
  }, [window.location]);

  return (
    <header className="flex w-full justify-between px-6 sm:px-8 bg-[#1B1B1E] text-white h-14 absolute">
      <h1 className="self-center text-2xl font-extrabold">Mywebself</h1>
      <nav className="flex gap-4 sm:gap-0">
        <NavLink
          className={` ${
            selected === "home" && "bg-none sm:bg-[#373F51]"
          } self-center sm:p-4 transition duration-100 sm:hover:bg-[#373F51] rounded-b-lg`}
          to={"/"}
          onClick={() => setSelected("home")}
        >
          <HomeIcon className={"sm:hidden"} />
          <p className="hidden sm:block">Home</p>
        </NavLink>
        <NavLink
          className={` ${
            selected === "about" && "bg-none sm:bg-[#373F51]"
          } self-center sm:p-4 transition duration-100 sm:hover:bg-[#373F51] rounded-b-lg`}
          to={"/about"}
          onClick={() => setSelected("about")}
        >
          <ResumeIcon className={"sm:hidden"} />
          <p className="hidden sm:block">About</p>
        </NavLink>
        <NavLink
          className={` ${
            selected === "xp" && "bg-none sm:bg-[#373F51]"
          } self-center sm:p-4 transition duration-100 sm:hover:bg-[#373F51] rounded-b-lg`}
          to={"/xp"}
          onClick={() => setSelected("xp")}
        >
          <ExpIcon className={"sm:hidden"} />
          <p className="hidden sm:block">Experience</p>
        </NavLink>
        <NavLink
          className={` ${
            selected === "contact" && "bg-none sm:bg-[#373F51]"
          } self-center sm:p-4 transition duration-100 sm:hover:bg-[#373F51] rounded-b-lg`}
          to={"/contact"}
          onClick={() => setSelected("contact")}
        >
          <ContactIcon className={"sm:hidden"} />
          <p className="hidden sm:block">Contact</p>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
