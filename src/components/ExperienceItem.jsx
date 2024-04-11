const ExperienceItem = ({ experience }) => {
  return (
    <div className="flex flex-row-reverse w-full border-l-[#58A4B0] border-l-8 pl-4 text-[2.3vh]">
      <div className="flex flex-col gap-2 w-full">
        <h3 className="text-[3vh] font-bold">{experience.position} </h3>
        <p className="">
          {experience.company} | {experience.date}
        </p>
        <p className="">{experience.description}</p>
      </div>
      <img
        src={experience.image}
        alt=""
        className="max-w-xs max-h-32 object-contain absolute opacity-20"
      />
    </div>
  );
};

export default ExperienceItem;
