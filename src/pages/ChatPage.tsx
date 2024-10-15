import Chat from "../components/Chat";
import SideBar from "../components/SideBar";

const ChatPage = () => {
  return (
    <div className="bg-[#FAFAFB] h-screen flex  ">
      {/* left side bar */}
      <div className="w-[240px] bg-[#FAFAFB] p-4">
        <SideBar />
      </div>
      {/* right side bar */}
      <div className="p-4 w-full h-full ">
        <Chat />
      </div>
    </div>
  );
};
export default ChatPage;
