import { CopyIcon } from "../assets/icons/heroicons";

const ContactItem = ({ Icon, text, color, link }) => {
  const handleNavTo = () => {
    window.open(link, "_blank");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <li className="flex gap-6 items-center w-full border rounded-md justify-between overflow-hidden">
      <button
        onClick={handleNavTo}
        className={`h-9 w-9 flex items-center justify-center bg-[${color}] text-white fill-white`}
      >
        <Icon />
      </button>
      <p>{text}</p>
      <button
        className="h-9 w-9 flex items-center justify-center bg-gray-200 hover:bg-gray-300"
        onClick={handleCopy}
      >
        <CopyIcon />
      </button>
    </li>
  );
};

export default ContactItem;
