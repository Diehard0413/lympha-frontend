import TradingChart from "@/components/TradingChart";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { GrExpand } from "react-icons/gr";
import { MdOutlineCandlestickChart, MdOutlineShowChart } from "react-icons/md";

type Props = {};

const TradingChartSection = (props: Props) => {
  return (
    <section className="w-full flex-1">
      <div className="relative box-border flex max-w-full flex-1 flex-col items-start justify-start gap-4 rounded-3xl bg-neutral-white px-6 py-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-max flex-col items-start justify-start gap-2">
            <div className="flex flex-row items-end justify-start gap-4">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative inline-block text-3xl font-semibold leading-10">
                    ---
                  </div>
                </div>
              </div>
              <b className="mq450:text-base mq450:leading-[19px] relative inline-block min-w-[55px] text-xl leading-[120%] text-state-success">
                +---%
              </b>
            </div>
            <div className="relative self-stretch text-sm leading-[20px] tracking-[-0.02em] text-neutral-black-5">
              Date
            </div>
          </div>
          <button>
            <GrExpand className="relative h-5 w-5 shrink-0 overflow-hidden" />
          </button>
        </div>

        <div className="w-full">
          <TradingChart />
        </div>

        {/* Trading Footer */}
        <div className="mq450:flex-wrap flex flex-row items-center justify-between gap-[20px] self-stretch text-right text-sm">
          <div className="flex flex-row items-center justify-start gap-[16px] px-0 py-1">
            <div className="relative inline-block min-w-[20px] leading-[20px] tracking-[-0.02em]">
              5m
            </div>
            <div className="relative inline-block min-w-[24px] leading-[20px] tracking-[-0.02em]">
              15m
            </div>
            <div className="relative inline-block w-7 min-w-[28px] leading-[20px] tracking-[-0.02em]">
              30m
            </div>
            <div className="relative inline-block w-[13px] min-w-[13px] leading-[20px] tracking-[-0.02em]">
              1h
            </div>
            <div className="relative inline-block min-w-[12px] leading-[20px] tracking-[-0.02em]">
              M
            </div>
            <FaChevronDown className="relative h-5 min-h-5 w-5 shrink-0 overflow-hidden" />
          </div>
          <div className="box-border flex h-[25px] flex-row items-center justify-start gap-[4px] px-0 py-0">
            <div className="relative box-border h-[26px] w-px border-r-[1px] border-solid border-neutral-black-1" />
            <MdOutlineShowChart className="relative h-5 w-5 shrink-0 overflow-hidden" />
            <div className="relative box-border h-[26px] w-px border-r-[1px] border-solid border-neutral-black-1" />
            <MdOutlineCandlestickChart className="relative h-5 w-5 shrink-0 overflow-hidden" />
            <div className="relative box-border h-[26px] w-px border-r-[1px] border-solid border-neutral-black-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingChartSection;
