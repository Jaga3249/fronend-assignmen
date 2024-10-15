import { MessageCircleMore } from "lucide-react";
import logo from "../../public/logo.png";

const chatlist = [
  {
    id: 1,
    title: "New Conversation",
    icon: <MessageCircleMore size={18} />,
    status: "active",
  },
  {
    id: 2,
    title: "Create 10 poems for a scenario",
    icon: <MessageCircleMore size={18} />,
    status: "inactive",
  },
  {
    id: 3,
    title: "Generate a poem on designing",
    icon: <MessageCircleMore size={18} />,
    status: "inactive",
  },
  {
    id: 4,
    title: "Create 5 liner poem",
    icon: <MessageCircleMore size={18} />,
    status: "inactive",
  },
  {
    id: 5,
    title: "Create a rich in metaphor poem",
    icon: <MessageCircleMore size={18} />,
    status: "inactive",
  },
];

const SideBar = () => {
  function truncateString(str: string) {
    const maxLength = 16;
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  }
  return (
    <div>
      <div className="h-8 flex justify-normal items-center gap-5">
        <span className="border-2 border-[#0FA958] rounded-full flex justify-center items-center p-[3px]">
          <span className="w-7 h-7 rounded-full flex justify-center items-center bg-[#0FA958]">
            <img src={logo} alt="logo" className="mb-1" />
          </span>
        </span>
        <span className="text-[#000000] font-bold">OpenAGI</span>
      </div>
      <div className="flex justify-center border-[1px] border-[#000000] rounded-md py-1 my-6 bg-white cursor-pointer">
        +<span>Start new chat</span>
      </div>
      {/* chat list */}
      <div className="flex flex-col gap-5">
        <span className="text-[#66666680] text-sm font-semibold tracking-wider">
          CHAT HISTORY
        </span>

        <div className="flex flex-col gap-2">
          {chatlist.map((item, i) => (
            <div
              className={`flex gap-2 items-center py-2 px-2 ${
                item.status === "active"
                  ? "bg-[#FFFFFF] shadow-sm "
                  : "text-[#666F8D] text-sm"
              } rounded-lg cursor-pointer hover:bg-[#F0F3F8] `}
              key={i}
            >
              {item.icon} <span>{truncateString(item.title)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
