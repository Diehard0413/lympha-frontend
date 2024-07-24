import React from "react";
import { IoArrowForward } from "react-icons/io5";
import TokenCardDetails from "../TokenCardDetail";
import Link from "next/link";

type Props = {};

const TokenOfferrings = (props: Props) => {
  return (
    <div className="self-stretch rounded-3xl bg-neutral-white flex flex-col items-center justify-center p-6 box-border max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
        <div className="self-stretch flex flex-row items-center justify-start">
          <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[140%] font-bold font-inherit mq450:text-3xl mq450:leading-[31px]">
            Token Offerings
          </h3>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-6 max-w-full text-5xl">
          <TokenCardDetails
            title="Lympha Earth Token (LET)"
            icon="/images/coins/let-coin.svg"
            amount="78, 338.00"
            change="+$8,338.00"
          />
          <TokenCardDetails
            icon="/images/coins/lct-coin.svg"
            title="Lympha Carbon Token (LCT)"
            amount="78, 338.00"
            change="+$8,338.00"
          />
        </div>
        <Link
          href="/trading"
          className="w-full group flex text-lympha-primary border-lympha-primary hover:bg-lympha-primary transition-all duration-500 ease-in-out items-center h-12 py-2 bg-white rounded-3xl border border-stone-300/opacity-60 justify-center gap-2 "
        >
          <div className="text-teal-700 text-base font-bold font-['Proxima Nova'] leading-tight group-hover:text-neutral-white">
            Get Started
          </div>
          <IoArrowForward className="text-teal-700 h-4 stroke-[1px] group-hover:text-neutral-white" />
        </Link>
      </div>
    </div>
  );
};

export default TokenOfferrings;
