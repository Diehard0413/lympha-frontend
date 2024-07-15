import { cn } from "@/app/helpers/utils";

export type TokenCardDetailsType = {
  className?: string;
  icon: string;
  title: string;
  amount: string;
  change: string;
};

const TokenCardDetails = ({
  className = "",
  icon,
  title,
  amount,
  change,
}: TokenCardDetailsType) => {
  return (
    <div
      className={`flex-1 rounded-2xl bg-neutral-white box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-[24px] min-w-[325px] max-w-full text-left text-2xl text-neutral-black-6 font-body-large-bold border-[1px] border-solid border-silver ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <img
          className="w-[59.1px] h-[60px] relative object-contain"
          loading="lazy"
          alt=""
          src={icon}
        />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start">
            <b className="relative leading-8">
              {title}
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-neutral-black-5">
        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-6 pl-0">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative tracking-[-0.02em] leading-[34px] whitespace-nowrap mq450:text-lgi mq450:leading-[27px]">
              ${amount}
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex flex-row items-start justify-start text-lg text-state-success",
            change.includes("-") && "text-state-error"
          )}
        >
          <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[91px]">
            {change}
          </b>
        </div>
      </div>
    </div>
  );
};

export default TokenCardDetails;
