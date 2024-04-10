const Skill = ({name, value = 0}) => {
  return (
    <li>
      <div className='flex justify-between w-full bg-gray-200 rounded-full'>
        <p className={`bg-[#58A4B0] text-white rounded-full px-4 flex justify-between`} style={{width: `${value}%`}}>
          <div>{name}</div>{value}%
          </p>
      </div>
    </li>
  )
}
export default Skill;