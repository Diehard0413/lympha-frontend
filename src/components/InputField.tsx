import { FunctionComponent } from "react";

export type InputFieldType = {
  className?: string;
  label?: string;
  placeHolder?: string;
  helpText?: string;
};

const InputField: FunctionComponent<InputFieldType> = ({
  className = "",
  label,
  placeHolder,
  helpText,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-left text-base text-neutral-black-5 font-body-large-bold ${className}`}
    >
      <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[58px]">
        {label}
      </b>
      <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-row items-center justify-start py-4 pr-[11px] pl-[19px] max-w-full border-[0.5px] border-solid border-neutral-black-2">
        <input
          className="w-full [border:none] [outline:none] font-body-large-bold text-base bg-[transparent] h-[22px] flex-1 relative tracking-[-0.02em] leading-[140%] text-neutral-black-2 text-left inline-block min-w-[194px] whitespace-nowrap max-w-full p-0"
          placeholder={placeHolder}
          type="text"
        />
      </div>
      <div className="w-[189px] relative text-sm tracking-[-0.02em] leading-[140%] text-neutral-white hidden">
        {helpText}
      </div>
    </div>
  );
};

export default InputField;
