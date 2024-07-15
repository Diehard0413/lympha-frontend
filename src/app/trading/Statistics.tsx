import React from "react";

type Props = {};

const Statistics = (props: Props) => {
  return (
    <div className=" w-64 rounded-3xl bg-neutral-white flex flex-col items-start justify-start py-6 px-4 text-lg text-neutral-black-4">
      <div className="self-stretch flex flex-col items-start justify-start gap-y-1 divide-y divide-neutral-black-2">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5">
          <b className="">Statistics</b>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-5 text-sm text-neutral-black-3 gap-y-2">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <div className="relative  inline-block min-w-[28px]">Slabs</div>
            <div className="relative  text-right inline-block">Value</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-4 text-sm text-neutral-black-4 font-medium">
            <div className="self-stretch flex flex-row items-center justify-between gap-4">
              <div className="w-[68px] relative leading-[17px] uppercase inline-block shrink-0">
                24H
              </div>
              <div className="w-[42px] relative leading-[17px] uppercase text-right inline-block shrink-0">
                +2.4%
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="relative leading-[17px] uppercase inline-block min-w-[68px]">
                24H High
              </div>
              <div className="w-[57px] relative leading-[17px] uppercase text-right inline-block shrink-0 min-w-[57px] whitespace-nowrap">
                $66,000
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="relative leading-[17px] uppercase inline-block min-w-[68px]">
                24H Low
              </div>
              <div className="w-[94px] relative leading-[17px] uppercase text-right inline-block shrink-0 min-w-[94px] whitespace-nowrap">
                $62,350.0003
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="relative leading-[17px] uppercase inline-block min-w-[92px]">
                24H Volume
              </div>
              <div className="w-[68px] relative leading-[17px] uppercase text-right inline-block shrink-0">
                0.0392
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
