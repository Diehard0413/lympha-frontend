import React from "react";
import { IoArrowForward } from "react-icons/io5";
import TokenCardDetails from "../TokenCardDetail";
import Link from "next/link";

type Props = {};

const TokenOfferrings = (props: Props) => {
  return (
    <div className="mq450:pt-5 mq450:pb-5 mq450:box-border box-border flex max-w-full flex-col items-center justify-center self-stretch rounded-3xl bg-neutral-white p-6">
      <div className="flex max-w-full flex-col items-start justify-start gap-6 self-stretch">
        <div className="flex flex-row items-center justify-start self-stretch">
          <h3 className="font-inherit mq450:text-3xl mq450:leading-[31px] relative m-0 font-bold leading-[140%] tracking-[-0.02em] text-inherit">
            Token Offerings
          </h3>
        </div>
        <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-6 self-stretch text-5xl">
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
          className="border-stone-300/opacity-60 group flex h-12 w-full items-center justify-center gap-2 rounded-3xl border border-lympha-primary bg-white py-2 text-lympha-primary transition-all duration-500 ease-in-out hover:bg-lympha-primary"
        >
          <div className="text-teal-700 font-['Proxima Nova'] text-base font-bold leading-tight group-hover:text-neutral-white">
            Get Started
          </div>
          <IoArrowForward className="text-teal-700 h-4 stroke-[1px] group-hover:text-neutral-white" />
        </Link>
      </div>
    </div>
  );
};

export default TokenOfferrings;
