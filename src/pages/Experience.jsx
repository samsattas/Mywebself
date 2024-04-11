import ExperienceItem from "../components/ExperienceItem";

const Experience = () => {
  const experiences = [
    {
      company: "Dissau",
      position: "Fullstack developer",
      date: "August 2023 - Today",
      image: "https://agcreative.com.co/wp-content/uploads/2023/08/2.png",
      description:
        "On the front-end side, I was responsible for creating components and screens based on UX using React.js with libraries such as Material UI and Tailwind. I implemented responsive design to ensure optimal viewing from any device, handled user validation and authentication, consumed APIs, and provided customer support for continuous improvement to better align with their needs. On the back-end, I took charge of C# development to create, enhance, and deploy new endpoints, as well as manage the PostgreSQL database to meet specific requirements.",
    },
    {
      company: "Endava",
      position: "Front-end developer",
      date: "January 2023 - July 2023",
      image:
        "https://companieslogo.com/img/orig/DAVA-d4ea9241.png?t=1632326300",
      description:
        "I was in charge to develop components and pages based on figma mockups usin React.js and SASS, connect with the back-end consuming APIs and test the components using Vitest and Jest. The main task was to make a bank app where regular users and stores can log in and make transactions. This app was made responsive, so any user can access from any device. Also was made maintaining the accessibility so anybody can use all functionalities. I collaborated with a team made by back-end, a front-end, a DevOps and a QA using Scrum to be agile and organized.",
    },
    {
      company: "Remote",
      position: "Private teacher",
      date: "November 2021 - Today",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8so3S0pGKm0S25g2v2sHtYQgCoTShJQrcxkvDx7da1g&s",
      description:
        "During this time I gave private lessons to Interactive media design students where I taught them the Object Oriented Programming basics using JavaScript. The classes were given based on projects the students had in different academic subjects, for which later I taught them TypeScript to develop a software even more consistent, robust and scalable.",
    },
    {
      company: "Universidad ICESI",
      position: "Course assistant",
      date: "August 2021- December 2021",
      image: "https://media.tutellus.com/libraries/45/01/lib/1360445882784.jpg",
      description:
        "Give feedback to multiple homework and tests from students who were taking the subject Introduction to engineering and systems, and collaborate with the professor in the formulation of laboratories, tests and homework.",
    },
  ];

  return (
    <div className="h-full bg-[#1B1B1E] pt-14 flex flex-col">
      <main className="sm:px-20 lg:px-36 xl:px-80 md:pb-10 p-6 h-full">
        <article className="flex flex-col h-fit  items-center gap-6 md:gap-16 bg-white rounded-xl p-5 md:p-10 pb-16 [2.3vh]">
          <h2 className="text-[4vh] text-center md:text-start font-bold w-full border-b-[#1B1B1E] border-b-2 block ">
            Experience
          </h2>
          <p className="text-justify text-[2.3vh] w-full flex flex-col gap-8">
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} experience={experience} />
            ))}
          </p>
        </article>
      </main>
    </div>
  );
};

export default Experience;
