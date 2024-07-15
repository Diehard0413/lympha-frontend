import TradingChart from "@/components/TradingChart";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { GrExpand } from "react-icons/gr";
import { MdOutlineCandlestickChart, MdOutlineShowChart } from "react-icons/md";

type Props = {};

const TradingChartSection = (props: Props) => {
  return (
    <section className="flex-1">
      <div className="flex-1 rounded-3xl bg-neutral-white flex flex-col items-start justify-start py-4 px-6 box-border relative gap-4 min-w-[520px] max-w-full">
        <div className="w-full flex items-center justify-between">
          <div className="w-max flex flex-col items-start justify-start gap-2">
            <div className="flex flex-row items-end justify-start gap-4">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-10 font-semibold inline-block text-3xl">
                    794,674
                  </div>
                </div>
              </div>
              <b className="relative text-xl leading-[120%] inline-block text-state-success min-w-[55px] mq450:text-base mq450:leading-[19px]">
                +2.4%
              </b>
            </div>
            <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[20px] text-neutral-black-5">
              Date
            </div>
          </div>
          <button>
            <GrExpand className="h-5 w-5 relative overflow-hidden shrink-0" />
          </button>
        </div>

        <div className="w-full border">
          <TradingChart />
        </div>

        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-right text-sm mq450:flex-wrap">
          <div className="flex flex-row items-center justify-start py-1 px-0 gap-[16px]">
            <div className="relative tracking-[-0.02em] leading-[20px] inline-block min-w-[20px]">
              5m
            </div>
            <div className="relative tracking-[-0.02em] leading-[20px] inline-block min-w-[24px]">
              15m
            </div>
            <div className="w-7 relative tracking-[-0.02em] leading-[20px] inline-block min-w-[28px]">
              30m
            </div>
            <div className="w-[13px] relative tracking-[-0.02em] leading-[20px] inline-block min-w-[13px]">
              1h
            </div>
            <div className="relative tracking-[-0.02em] leading-[20px] inline-block min-w-[12px]">
              M
            </div>
            <FaChevronDown className="h-5 w-5 relative overflow-hidden shrink-0 min-h-5" />
          </div>
          <div className="h-[25px] flex flex-row items-center justify-start py-0 px-0 box-border gap-[4px]">
            <div className="h-[26px] w-px relative box-border border-r-[1px] border-solid border-neutral-black-1" />
            <MdOutlineShowChart className="h-5 w-5 relative overflow-hidden shrink-0" />
            <div className="h-[26px] w-px relative box-border border-r-[1px] border-solid border-neutral-black-1" />
            <MdOutlineCandlestickChart className="h-5 w-5 relative overflow-hidden shrink-0" />
            <div className="h-[26px] w-px relative box-border border-r-[1px] border-solid border-neutral-black-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingChartSection;
