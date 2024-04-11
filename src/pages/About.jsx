import profile from "../assets/Profile.png";
import Skill from "../components/Skill";

const About = () => {
  return (
    <div className="h-full bg-[#1B1B1E] pt-14 flex flex-col">
      <main className="sm:px-20 lg:px-36 xl:px-80 sm:pb-10 p-6 h-full flex flex-col gap-8">
        <article className="flex flex-col h-fit md:flex-row items-center gap-6 md:gap-16 bg-white rounded-xl p-5 md:p-10 pb-16">
          <h2 className="text-[4vh] text-center md:text-start font-bold w-full border-b-[#1B1B1E] border-b-2 block md:hidden">
            About me
          </h2>
          <img
            src={profile}
            className="rounded-full w-2/3 md:w-1/3 lg:w-1/4 md:rounded-xl md:drop-shadow-[30px_30px_1px_#A9BCD0]"
          />
          <p className="text-justify text-[2.3vh] w-full">
            <h2 className="text-[4vh] text-center md:text-start font-bold w-full border-b-[#1B1B1E] border-b-2 hidden md:block">
              About me
            </h2>
            <br />I am a full-stack developer, certified as a systems engineer,
            with experience in{" "}
            <b>C#, Java, JavaScript, React, Tailwind, SQL, git, Sass</b>, and
            best practices such as{" "}
            <b>
              accessibility, mobile-first, responsive design, atomic design, and
              BEM
            </b>
            . Passionate about creating intuitive and visually appealing user
            experiences.{" "}
            <b>Strong problem-solving skills and a detail-oriented approach</b>{" "}
            to delivering high-quality code. I consider myself a highly
            analytical, creative person with the <b>ability to learn quickly</b>{" "}
            and efficiently.
          </p>
        </article>
        <article className="flex flex-col h-fit items-center gap-6  bg-white rounded-xl p-5 md:p-10 pb-16">
          <h2 className="text-[4vh] text-center md:text-start font-bold w-full border-b-[#1B1B1E] border-b-2 block ">
            Skills
          </h2>
          <div className="w-full flex gap-6 flex-col lg:flex-row">
            <div className="flex flex-col gap-4 w-full">
              <h3 className="text-[3vh] font-bold">Front-end</h3>
              <ul className="flex flex-col gap-2">
                <Skill name="HTML" value={80} />
                <Skill name="CSS" value={75} />
                <Skill name="JavaScript" value={70} />
                <Skill name="React" value={85} />
                <Skill name="Sass" value={65} />
                <Skill name="Tailwind" value={80} />
                <Skill name="Next.js" value={50} />
                <Skill name="UX" value={70} />
                <Skill name="React native" value={50} />
                <Skill name="Responsive design" value={90} />
                <Skill name="Jest" value={40} />
              </ul>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <h3 className="text-[3vh] font-bold">Back-end</h3>
              <ul className="flex flex-col gap-2">
                <Skill name="Java" value={60} />
                <Skill name="C#" value={60} />
                <Skill name="Spring" value={50} />
                <Skill name="SQL" value={70} />
                <Skill name="Node" value={30} />
                <Skill name="S3" value={60} />
                <Skill name="Codecommit" value={60} />
                <Skill name="Git" value={85} />
                <Skill name="JUnit" value={50} />
              </ul>
            </div>
          </div>
          <div className="w-full flex gap-6 flex-col lg:flex-row">
            <div className="flex flex-col gap-4 w-full">
              <h3 className="text-[3vh] font-bold">Other skills</h3>
              <ul className="flex flex-col gap-2">
                <Skill name="Agile methodologies" />
                <Skill name="Adaptability" />
                <Skill name="Attention to detail" />
                <Skill name="Creative" />
                <Skill name="Perceptive" />
                <Skill name="Self-motivated" />
                <Skill name="Assertive communication" />
              </ul>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <h3 className="text-[3vh] font-bold">Languages</h3>
              <ul className="flex flex-col gap-2">
                <Skill name="English: C1" />
                <Skill name="Spanish: Native" />
              </ul>
            </div>
          </div>
        </article>
        <article className="flex flex-col h-fit items-center gap-6  bg-white rounded-xl p-5 md:p-10 pb-16">
          <h2 className="text-[4vh] text-center md:text-start font-bold w-full border-b-[#1B1B1E] border-b-2 block ">
            Education
          </h2>
          <p className="w-full flex flex-col gap-4 text-[2.3vh]">
            <span>
              <b>Systems Engineer degree</b>
              <br /> - Universidad ICESI, Colombia (2018-2023)
            </span>
            <span>
              <b>Student exchange</b>
              <br /> - Goose Creek, SC, United States
            </span>
          </p>
        </article>
      </main>
    </div>
  );
};

export default About;
