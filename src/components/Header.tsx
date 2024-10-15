import { CirclePlay } from "lucide-react";
import logo from "../../public/logo.png";

const Header = () => {
  return (
    <div className="h-8 mx-10 my-4 flex justify-between items-center">
      <div className="h-8 flex justify-normal items-center gap-2">
        <span className="border-2 border-[#0FA958] rounded-full flex justify-center items-center p-[3px]">
          <span className="w-7 h-7 rounded-full flex justify-center items-center bg-[#0FA958]">
            <img src={logo} alt="logo" className="mb-1" />
          </span>
        </span>
        <span className="text-[#000000] font-bold">OpenAGI</span>
      </div>
      <div className="h-8  flex gap-3 ">
        <button className="bg-[#0000004D] h-full px-4 rounded-lg text-[#FFFFFF] font-semibold">
          Deploy
        </button>
        <button className="bg-[#44924C] h-full px-4 rounded-lg text-white flex items-center justify-center gap-1 font-semibold">
          <CirclePlay size={16} />
          Run
        </button>
      </div>
    </div>
  );
};
export default Header;
