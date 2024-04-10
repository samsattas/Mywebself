const Skill = ({ name, value }) => {
  return (
    <li>
      <div className="flex justify-between w-full bg-gray-200 rounded-full">
        <p
          className={`bg-[#58A4B0] text-white rounded-full px-4 flex justify-between`}
          style={{ width: `${value ? value : 100}%` }}
        >
          <div>{name}</div>
          {value && `${value}%`}
        </p>
      </div>
    </li>
  );
};
export default Skill;
