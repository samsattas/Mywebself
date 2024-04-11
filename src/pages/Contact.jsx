import {
  ContactIcon,
  GithubIcon,
  LinkedinIcon,
} from "../assets/icons/heroicons";
import ContactItem from "../components/ContactItem";

const Contact = () => {
  return (
    <div className="h-full bg-[#1B1B1E] pt-14 flex flex-col">
      <main className="sm:px-20 lg:px-36 xl:px-80 md:pb-10 p-6 h-full">
        <article className="flex flex-col h-fit  items-center gap-6 md:gap-10 bg-white rounded-xl p-5 md:p-10 pb-16 [2.3vh]">
          <h2 className="text-[4vh] text-center md:text-start font-bold w-full border-b-[#1B1B1E] border-b-2 block ">
            Contact me
          </h2>
          <p className="text-justify text-[2.3vh] w-full">
            Find me on:
            <ul className="flex flex-col gap-2 w-full p-10 sm:w-80 sm:p-4">
              <ContactItem
                Icon={ContactIcon}
                text={"Email"}
                color={"#58A4B0"}
                link={"mailto:samuelsatizabaltascon@gmail.com"}
              />
              <ContactItem
                Icon={LinkedinIcon}
                text={"LinkedIn"}
                color={"#373F51"}
                link={"https://www.linkedin.com/in/samuel-satizabal-397062239/"}
              />
              <ContactItem
                Icon={GithubIcon}
                text={"GitHub"}
                color={"#1B1B1E"}
                link={"https://github.com/samsattas"}
              />
            </ul>
          </p>
        </article>
      </main>
    </div>
  );
};

export default Contact;
