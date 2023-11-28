import { NavLink } from 'react-router-dom';
import landinImg1 from '../assets/landingImg1.png'

const LandingPage = () => {
  return(
    <div className='h-full bg-[#1B1B1E] pt-14 flex flex-col'>
      <main className='md:px-20 md:pb-10 p-6 h-full'>
        <article className='flex flex-col h-full md:flex-row items-center bg-white rounded-xl p-10'>
          <p className='text-justify md:px-20 md:text-3xl text-base'>
            Welcome to my personalized webpage! Delve into a treasure trove
            of information about me. Feel free to explore to your heart's 
            content and discover the various facets that make up who I am.
            Whether you're here for a casual browse or a deep dive, I hope
            you find something intriguing and enjoyable. Happy exploring!
          </p>
          <img src={landinImg1} className='md:w-1/3 w-full '/>
          {/* <a href="https://lovepik.com/images/png-web.html">Web Png vectors by Lovepik.com</a> */}
        </article>
      </main>
      <aside className='w-full h-1/2 bg-[#373F51] flex flex-col items-center justify-center gap-4 pb-8'>
        <p className='md:text-2xl text-xl text-white py-4 w-3/4 md:w-1/3 border-b-2 border-white text-center'>
          Start exploring my webpage 💻
        </p>
        <NavLink to="/about" className="text-xl overflow-hidden rounded relative inline-flex group items-center justify-center px-14 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#58A4B0] active:shadow-none shadow-lg bg-gradient-to-tr from-[#58A4B0] to-[#58A4B0] border-[#3B747D] text-white">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">Go to About </span>
        </NavLink>
      </aside>
    </div>
  )
}

export default LandingPage;