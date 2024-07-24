import { FunctionComponent } from "react";

export type LabelsType = {
  className?: string;
};

const Labels: FunctionComponent<LabelsType> = ({ className = "" }) => {
  return (
    <div
      className={`font-body-large-bold flex min-w-[309px] max-w-full flex-1 flex-col items-start justify-start gap-[16px] text-left text-sm text-neutral-black-5 ${className}`}
    >
      <div className="mq750:flex-wrap box-border flex max-w-full flex-row items-start justify-start gap-[12px] self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white py-4 pl-[19px] pr-[11px] text-base text-neutral-black-2">
        <div className="relative inline-block min-w-[26px] max-w-full flex-1 leading-[140%] tracking-[-0.02em]">
          Price
        </div>
        <div className="text-mid flex flex-col items-start justify-start px-0 pb-0 pt-0.5 text-neutral-black-5">
          <div className="flex h-[18px] flex-row items-start justify-start gap-[8px] rounded-13xl">
            <b className="relative mt-[-1px] inline-block min-w-[29px] leading-[120%] tracking-[-0.02em]">
              783
            </b>
            <b className="relative mt-[-1px] inline-block min-w-[30px] leading-[120%] tracking-[-0.02em]">
              LCT
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labels;
