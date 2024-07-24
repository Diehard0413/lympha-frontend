import React from "react";

type Props = {};

const Statistics = (props: Props) => {
  return (
    <div className="flex w-full flex-col items-start justify-start rounded-3xl bg-neutral-white px-4 py-6 text-lg text-neutral-black-4 md:w-64">
      <div className="flex flex-col items-start justify-start gap-y-1 divide-y divide-neutral-black-2 self-stretch">
        <div className="flex flex-col items-start justify-start self-stretch py-0 pr-5">
          <b className="">Statistics</b>
        </div>
        <div className="text-neutral-black-3 flex flex-col items-start justify-start gap-y-2 self-stretch py-5 text-sm">
          <div className="flex flex-row items-center justify-between gap-[20px] self-stretch">
            <div className="relative inline-block min-w-[28px]">Slabs</div>
            <div className="relative inline-block text-right">Value</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 self-stretch text-sm font-medium text-neutral-black-4">
            <div className="flex flex-row items-center justify-between gap-4 self-stretch">
              <div className="relative inline-block w-[68px] shrink-0 uppercase leading-[17px]">
                24H
              </div>
              <div className="relative inline-block w-[42px] shrink-0 text-right uppercase leading-[17px]">
                +2.4%
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-[20px] self-stretch">
              <div className="relative inline-block min-w-[68px] uppercase leading-[17px]">
                24H High
              </div>
              <div className="relative inline-block w-[57px] min-w-[57px] shrink-0 whitespace-nowrap text-right uppercase leading-[17px]">
                $66,000
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-[20px] self-stretch">
              <div className="relative inline-block min-w-[68px] uppercase leading-[17px]">
                24H Low
              </div>
              <div className="relative inline-block w-[94px] min-w-[94px] shrink-0 whitespace-nowrap text-right uppercase leading-[17px]">
                $62,350.0003
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-[20px] self-stretch">
              <div className="relative inline-block min-w-[92px] uppercase leading-[17px]">
                24H Volume
              </div>
              <div className="relative inline-block w-[68px] shrink-0 text-right uppercase leading-[17px]">
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
