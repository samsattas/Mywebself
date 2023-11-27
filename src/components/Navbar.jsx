import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AboutIcon, ContactIcon, ExpIcon, HomeIcon, ResumeIcon } from "../assets/icons/heroicons";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return(
    <header className="flex w-full justify-between px-4 sm:px-8 bg-[#1B1B1E] text-white h-14">
      <h1 className="self-center text-2xl font-extrabold">Mywebself</h1>
      <nav className="flex gap-4 sm:gap-0">
        <NavLink className="hover:bg-[#373F51] self-center sm:p-4 transition duration-100" to={''}>
          <HomeIcon className={'sm:hidden'} />
          <p className="hidden sm:block">Home</p>
        </NavLink>
        <NavLink className="hover:bg-[#373F51] self-center sm:p-4 transition duration-100" to={'/Mywebself/about'}>
          <AboutIcon className={'sm:hidden'} />
          <p className="hidden sm:block">About</p>
        </NavLink>
        <NavLink className="hover:bg-[#373F51] self-center sm:p-4 transition duration-100" to={'/Mywebself/resume'}>
          <ResumeIcon className={'sm:hidden'} />
          <p className="hidden sm:block">Resume</p>
        </NavLink>       
        <NavLink className="hover:bg-[#373F51] self-center sm:p-4 transition duration-100" to={'/Mywebself/xp'}>
          <ExpIcon className={'sm:hidden'} />
          <p className="hidden sm:block">Experience</p>
        </NavLink>  
        <NavLink className="hover:bg-[#373F51] self-center sm:p-4 transition duration-100" to={'/Mywebself/contact'}>
          <ContactIcon className={'sm:hidden'} />
          <p className="hidden sm:block">Contact</p>
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar;