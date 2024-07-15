import { FunctionComponent } from "react";

export type LabelsType = {
  className?: string;
};

const Labels: FunctionComponent<LabelsType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[309px] max-w-full text-left text-sm text-neutral-black-5 font-body-large-bold ${className}`}
    >
      <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-row items-start justify-start py-4 pr-[11px] pl-[19px] gap-[12px] max-w-full text-base text-neutral-black-2 border-[0.5px] border-solid border-neutral-black-2 mq750:flex-wrap">
        <div className="flex-1 relative tracking-[-0.02em] leading-[140%] inline-block min-w-[26px] max-w-full">
          Price
        </div>
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-mid text-neutral-black-5">
          <div className="h-[18px] rounded-13xl flex flex-row items-start justify-start gap-[8px]">
            <b className="mt-[-1px] relative tracking-[-0.02em] leading-[120%] inline-block min-w-[29px]">
              783
            </b>
            <b className="mt-[-1px] relative tracking-[-0.02em] leading-[120%] inline-block min-w-[30px]">
              LCT
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labels;
