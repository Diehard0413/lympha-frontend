import { FunctionComponent } from "react";

export type MyHoldingsType = {
  className?: string;
};

const MyHoldings: FunctionComponent<MyHoldingsType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full rounded-2xl bg-neutral-white flex flex-col items-start justify-end p-6 gap-4 shrink-0 text-left text-lg text-neutral-black-4 ${className} divide-y divide-neutral-black-2 gap-y-5`}
    >
      <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[96px]">
        My holdings
      </b>

      <div className="self-stretch flex flex-row items-start justify-between gap-5 text-2xl text-neutral-black-6 py-10">
        <div className="flex flex-col items-start justify-center gap-1">
          <b className="relative tracking-tight leading-8 ">31 tokens</b>
          <div className="relative text-sm tracking-tight leading-5 text-neutral-black-3">
            (average buy price $45900)
          </div>
        </div>
        <div className="flex flex-col items-end justify-center gap-1 text-right">
          <b className="relative tracking-[-0.02em] leading-[34px] inline-block min-w-[84px] whitespace-nowrap mq450:text-lgi mq450:leading-[27px]">
            $53700
          </b>
          <div className="flex flex-col items-end justify-start text-base text-state-success">
            <div className="flex flex-row items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[96px]">
                {`1D +$898 (2%)`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHoldings;
