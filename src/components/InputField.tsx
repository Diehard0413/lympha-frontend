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
      className={`font-body-large-bold flex max-w-full flex-col items-start justify-start gap-[4px] self-stretch text-left text-base text-neutral-black-5 ${className}`}
    >
      <b className="relative inline-block min-w-[58px] leading-[140%] tracking-[-0.02em]">
        {label}
      </b>
      <div className="box-border flex max-w-full flex-row items-center justify-start self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white py-4 pl-[19px] pr-[11px]">
        <input
          className="font-body-large-bold relative inline-block h-[22px] w-full min-w-[194px] max-w-full flex-1 whitespace-nowrap bg-[transparent] p-0 text-left text-base leading-[140%] tracking-[-0.02em] text-neutral-black-2 [border:none] [outline:none]"
          placeholder={placeHolder}
          type="text"
        />
      </div>
      <div className="relative hidden w-[189px] text-sm leading-[140%] tracking-[-0.02em] text-neutral-white">
        {helpText}
      </div>
    </div>
  );
};

export default InputField;
