import profile from '../assets/Profile.png'
import Skill from '../components/Skill';

const About = () => {
  return(
    <div className='h-full bg-[#1B1B1E] pt-14 flex flex-col'>
      <main className='sm:px-20 sm:pb-10 p-6 h-full flex flex-col gap-8'>
        <article className='flex flex-col h-fit md:flex-row items-center gap-6 md:gap-16 bg-white rounded-xl p-5 md:p-10 pb-16'>
          <h2 className='text-[4vh] text-center md:text-start font-bold w-full border-b-[#1B1B1E] border-b-2 block md:hidden'>About me</h2>
          <img src={profile} className='rounded-full w-2/3 md:w-1/3 lg:w-1/4 md:rounded-xl md:drop-shadow-[30px_30px_1px_#A9BCD0]' />
          <p className='text-justify text-[2.3vh] w-full'>
            <h2 className='text-[4vh] text-center md:text-start font-bold w-full border-b-[#1B1B1E] border-b-2 hidden md:block'>About me</h2>
            <br/>
            I am a junior motivated Front-end Developer, certified as Software System Engineer, with 
            expertise in <b>HTML, CSS, JavaScript, React, Sass,</b> and best practices such as <b>accessibility,
            mobile-first, responsive design, atomic design and BEM</b>. Passionate about creating intuitive
            and visually appealing user experiences. Strong problem-solving abilities and a detail-oriented
            approach to deliver high-quality code. <br />
            During my degree I had the opportunity to develop Backend projects, so I have knowledge in <b>design
            patterns, UML diagrams, unit tests, integration tests</b> and in languages such as <b>Java, Javascript and C#</b>.<br />
            I embrace my identity as a highly creative individual, constantly venturing beyond conventional 
            boundaries. This distinctive perspective enables me to grasp the broader scope of situations and offer 
            innovative ideas that were previously unexplored.
          </p>
        </article>
        <article className='flex flex-col h-fit items-center gap-6  bg-white rounded-xl p-5 md:p-10 pb-16'>
          <h2 className='text-[4vh] text-center md:text-start font-bold w-full border-b-[#1B1B1E] border-b-2 block '>Skills</h2>
          <div className='w-full flex gap-6 flex-col md:flex-row'>
          <div className='flex flex-col gap-4 w-full'>
            <h3 className='text-[3vh] font-bold'>Front-end</h3>
            <ul className='flex flex-col gap-2'>
              <Skill name='HTML' value={80} />
              <Skill name='CSS' value={75} />
              <Skill name='JavaScript' value={65} />
              <Skill name='React' value={80} />
              <Skill name='Sass' value={70} />
            </ul>
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <h3 className='text-[3vh] font-bold'>Back-end</h3>
            <ul className='flex flex-col gap-2'>
              <Skill name='Java' value={60} />
              <Skill name='C#' value={60} />
              <Skill name='Spring' value={50} />
              <Skill name='SQL' value={70} />
              <Skill name='Node' value={30} />
              <Skill name='AWS S3' value={60} />
              <Skill name='AWS codecommit' value={60} />
            </ul>
          </div>
          </div>
        </article>
      </main>
    </div>
  )
}

export default About;