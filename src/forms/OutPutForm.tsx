import { Dot, FileInput } from "lucide-react";

const OutPutForm = () => {
  return (
    <div className="w-72 py-5 rounded-xl border-[#FFFFFF] border-[1px] bg-[#FFFFFF] shadow-md flex flex-col gap-4 ">
      <div className="flex justify-between px-3">
        <span className="flex gap-3 items-center font-semibold">
          <FileInput size={20} />
          Output
        </span>
        <Dot className="w-10 h-10" />
      </div>
      <p className="bg-[#EEF4FF] text-sm px-3 py-2">
        Write the input/ question you want to ask
      </p>
      <div className="flex flex-col  gap-3 px-3 flex-1">
        <label>Output Response</label>
        <input
          type="text"
          placeholder="Type something..."
          className="border-[1px] border-[#66666659] px-2 py-1 outline-none rounded-md"
        />
        <p className=" text-sm text-[#666666]">LLM Engine</p>
      </div>
    </div>
  );
};
export default OutPutForm;
