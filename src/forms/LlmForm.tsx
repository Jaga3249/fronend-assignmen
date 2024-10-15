import { Cog, Dot } from "lucide-react";

const LlmForm = () => {
  // llm content
  const LLMContent = {
    id: "llmEngine",
    title: "LLM ENGINE",
    description: "Lorem ipsum sic dolar amet",
    fields: [
      {
        label: "Model Name",
        placeholder: "gpt-3.5",
        type: "text",
      },
      {
        label: "OpenAI API Base",
        placeholder: "Type something",
        type: "text",
      },
      {
        label: "OpenAI Key",
        placeholder: "Type something",
        type: "text",
      },
      {
        label: "Max Tokens",
        placeholder: "Type something",
        type: "text",
      },
      {
        label: "Temperature",
        placeholder: "0.5",
        type: "number",
      },
      {
        label: "Input",
        placeholder: "Connect input",
        type: "connection",
      },
    ],
  };
  return (
    <div className="w-72 rounded-xl border-[#FFFFFF] border-[1px] bg-[#FFFFFF] shadow-md flex flex-col gap-1">
      <div className="flex justify-between px-3">
        <span className="flex gap-3 items-center font-semibold">
          <Cog size={20} />
          {LLMContent.title}
        </span>
        <Dot size={20} />
      </div>
      <p className="bg-[#EEF4FF] text-sm px-3 py-2 my-2">
        {LLMContent.description}
      </p>

      {LLMContent.fields.map((field, index) => (
        <div key={index} className="flex flex-col gap-1 px-3">
          <span className="flex gap-3 items-center font-medium text-sm ">
            {field.label}
          </span>
          <input
            type={field.type}
            placeholder={field.placeholder}
            className="border-[1px] border-[#66666659] px-2 py-1 outline-none rounded-md"
          />
        </div>
      ))}

      <p className="text-start text-sm text-[#666666] px-3 ">Input</p>
      <p className="text-end text-sm text-[#666666] px-3 mb-2">Output</p>
    </div>
  );
};
export default LlmForm;
