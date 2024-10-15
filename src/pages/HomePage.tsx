import {
  Cog,
  FileInput,
  FileOutput,
  Menu,
  MessageCircleMore,
} from "lucide-react";
import Header from "../components/Header";
import groupImg from "../../public/Group.png";
import { useState } from "react";
import InputForms from "../forms/InputForms";
import LlmForm from "../forms/LlmForm";
import OutPutForm from "../forms/OutPutForm";
import { useNavigate } from "react-router-dom";
const sideBarConten = [
  {
    id: 1,
    title: "Input",
    icon: <FileInput size={20} />,
  },
  {
    id: 2,
    title: "LLM Engine",
    icon: <Cog size={20} />,
  },
  {
    id: 3,
    title: "Output",
    icon: <FileOutput size={20} />,
  },
];
const initialState = [
  {
    title: "Input",
    isShow: false,
    component: <InputForms />,
  },
  {
    title: "LLM Engine",
    isShow: false,
    component: <LlmForm />,
  },
  {
    title: "Output",
    isShow: false,
    component: <OutPutForm />,
  },
];
const HomePage = () => {
  const [dragItem, setDragItem] = useState<string>("");
  // const [showInputForm, setShowInputForm] = useState<boolean>(false);
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const handleDrag = (e: React.DragEvent<HTMLDivElement>, item: string) => {
    console.log(e);
    setDragItem(item);
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const updatedFormData = formData.map((item) => ({
      ...item,
      isShow: item.title === dragItem,
    }));

    setFormData(updatedFormData);
    setDragItem("");
  };
  console.log("formData", formData);
  console.log("dragItem", dragItem);
  return (
    <div className="w-screen h-screen  overflow-hidden">
      {/* header section */}
      <div className="h-16 bg-[#FFFFFF] border-[1px] border-b shadow-sm cursor-pointer ">
        <Header />
      </div>
      {/* sidebar section */}
      <div className="relative w-full h-full ">
        <div className="w-[251px] h-[80%] border-[1px] border-[#E4E8EE] shadow-md absolute top-7 left-7   rounded-2xl bg-[#FFFFFF]">
          <div className="flex flex-col justify-start p-5">
            <h1 className="font-semibold text-xl">Components</h1>
            <div className="h-[0.1px] border-0 bg-[#94A3B8] my-4" />
            <p className=" mb-4 text-[#94A3B8] text-sm font-normal">
              Drag and Drop
            </p>
            <div className="flex justify-center items-center flex-col gap-5">
              {sideBarConten.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between w-52 h-9 px-3 py-5 cursor-pointer hover:bg-[#F0F3F8] border-[0.8px] border-[#94A3B8] rounded-md"
                  draggable
                  onDrag={(e) => handleDrag(e, item.title)}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <p>{item.title}</p>
                  </div>
                  <Menu size={20} className="text-[#9EACBF]" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          // className=" w-[80%]  ml-auto  flex items-center justify-center "
          className="relative  w-[80%] ml-auto h-full flex justify-center items-center "
          onDrop={handleDragDrop}
          onDragOver={handleDragOver}
        >
          <div className="w-56 h-28  flex flex-col items-center justify-between ">
            <div className="w-16 h-16 flex justify-center items-center bg-[#DEFBEA] rounded-full">
              <img src={groupImg} alt="group" className="w-10 h-10" />
            </div>
            <p className="text-[#000000] font-semibold">
              Drag & drop to get started
            </p>
          </div>
          <span
            className="w-12 h-12 rounded-full flex justify-center items-center bg-[#44924C] text-white absolute top-[75%] right-4 bottom-7 cursor-pointer animate-bounce"
            onClick={() => navigate("/chat")}
          >
            <MessageCircleMore size={25} className="" />
          </span>

          {/* {formData.map((item) => (item.isShow ? item.component : null))} */}
        </div>
      </div>
      <div
        className="absolute top-0 z-[-2] h-screen w-screen  bg-[#ffffff] bg-[radial-gradient(#00000033_1px,#ffffff_1px)] bg-[size:20px_20px] overflow-hidden"
        aria-hidden="true"
      />
    </div>
  );
};
export default HomePage;
