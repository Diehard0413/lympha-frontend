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
      className={`font-body-large-bold border-silver box-border flex min-w-[325px] max-w-full flex-1 flex-col items-start justify-start gap-[24px] rounded-2xl border-[1px] border-solid bg-neutral-white px-[23px] py-[22px] text-left text-2xl text-neutral-black-6 ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <img
          className="relative h-[60px] w-[59.1px] object-contain"
          loading="lazy"
          alt=""
          src={icon}
        />
        <div className="flex flex-col items-start justify-start self-stretch">
          <div className="flex flex-col items-start justify-start">
            <b className="relative leading-8">{title}</b>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch text-neutral-black-5">
        <div className="flex flex-row items-center justify-start self-stretch py-0 pl-0 pr-6">
          <div className="flex flex-1 flex-col items-start justify-start">
            <div className="mq450:text-lgi mq450:leading-[27px] relative self-stretch whitespace-nowrap leading-[34px] tracking-[-0.02em]">
              ${amount}
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex flex-row items-start justify-start text-lg text-state-success",
            change.includes("-") && "text-state-error",
          )}
        >
          <b className="relative inline-block min-w-[91px] leading-[140%] tracking-[-0.02em]">
            {change}
          </b>
        </div>
      </div>
    </div>
  );
};

export default TokenCardDetails;
