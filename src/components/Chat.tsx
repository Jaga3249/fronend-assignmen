import { Send } from "lucide-react";
import writeIcon from "../../public/writeIcon.png";

const Chat = () => {
  return (
    <div className="bg-white w-full h-full rounded-lg  flex flex-col cursor-pointer">
      {/* top section */}
      <div className="flex justify-center items-center gap-2 border-b py-2">
        <span className="bg-[#C7E4FF] w-10 h-10 rounded-full flex items-center justify-center">
          <img src={writeIcon} alt="write" className="w-5 h-5" />
        </span>
        <h1 className="text-center font-bold text-xl">AI Assistant</h1>
      </div>
      {/* bottom section */}
      <div className="relative flex-1 flex flex-col justify-center items-center">
        <div className="max-w-[430px]">
          <p className="text-center font-bold my-3">
            Ask the AI Assistant Anything
          </p>
          <p className="text-[#666F8D] text-sm text-center">
            Ask me anything, and I'll do my best to provide you with accurate
            and helpful information, whether you're looking for answers,
            guidance, or just curious about the world around you.
          </p>
        </div>
        <div className="absolute bottom-6 w-full flex justify-center">
          {/* input section */}
          <div className=" px-2 flex items-center w-full max-w-[520px] border-[1px] border-[#F0F2F5] shadow-md rounded-lg">
            <input
              type="text"
              className="flex-1 border-none p-4 outline-none"
              placeholder="Type your message..."
            />

            <span className="w-9 h-9 rounded-md flex justify-center items-center bg-[#44924C] text-white">
              <Send size={15} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
