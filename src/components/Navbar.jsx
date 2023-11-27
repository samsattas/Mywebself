import { NavLink, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();
  return(
    <header className="flex w-full justify-between px-8 bg-[#1B1B1E] text-white">
      <h1 className="self-center text-2xl font-extrabold">Mywebself</h1>
      <nav className="flex">
        <NavLink className="hover:bg-[#373F51] p-4 transition duration-100 after:scale-0 after:w-full after:h-[2px] after:bg-red-600 after:absolute after:bottom-0 after:left-0 hover:after:scale-100
        " to={''}>Home</NavLink>
        <NavLink className="hover:bg-[#373F51] p-4 transition duration-100" to={'/about'}>About</NavLink>
        <NavLink className="hover:bg-[#373F51] p-4 transition duration-100" to={'/resume'}>Resume</NavLink>       
        <NavLink className="hover:bg-[#373F51] p-4 transition duration-100" to={'/xp'}>Experience</NavLink>  
        <NavLink className="hover:bg-[#373F51] p-4 transition duration-100" to={'/contact'}>Contact</NavLink>
      </nav>
    </header>
  )
}

export default Navbar;