import Image from "next/image";

interface Iprops {
  type: "button" | "submit";
  title: string;
  icon?: string;
}
function Button({ type, title, icon }: Iprops) {
  return (
    <button
      type="button"
      className="flex  gap-2 bg-black rounded-full text-xl text-white py-3 px-6 hover:bg-gray-800 "
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label>{title}</label>
    </button>
  );
}

export default Button;
