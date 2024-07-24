"use client";

import React from "react";
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import CustomSlider from "./CustomSlider";
import { IoSwapHorizontal } from "react-icons/io5";

type Props = {};

const BuySellTradingSection = (props: Props) => {
  return (
    <section className="mq450:pt-5 mq450:pb-5 mq450:box-border box-border flex max-w-full shrink-0 flex-col items-start justify-start gap-[24px] self-stretch rounded-13xl bg-neutral-white px-4 py-6 shadow-[0px_2px_36px_rgba(0,_0,_0,_0.08)]">
      <div className="mq750:flex-wrap flex max-w-full flex-col items-start justify-between gap-[20px] self-stretch text-neutral-black-5 md:flex-row">
        <div className="flex flex-row items-start justify-start gap-[12px]">
          <div className="rounded-mid flex flex-row items-start justify-start bg-neutral-black-1 px-2 py-0.5">
            <b className="relative inline-block min-w-[34px] leading-[23px] tracking-[-0.02em]">
              Limit
            </b>
          </div>
          <div className="flex flex-col items-start justify-start px-0 pb-0 pt-0.5">
            <b className="relative inline-block min-w-[49px] leading-[23px] tracking-[-0.02em]">
              Market
            </b>
          </div>
          <div className="flex flex-col items-start justify-start px-0 pb-0 pt-0.5">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <b className="relative inline-block min-w-[67px] leading-[23px] tracking-[-0.02em]">
                Stop-limit
              </b>
              <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[1.5px]">
                <IoMdArrowDropdown className="relative h-6 min-h-[24px] w-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-1 gap-y-4">
          <div className="flex flex-col items-start justify-start pb-0 pl-0 pr-2 pt-[2.5px]">
            <div className="rounded-mid flex flex-row items-start justify-start bg-neutral-black-1 px-2 py-0.5">
              <b className="relative inline-block min-w-[57px] leading-[23px] tracking-[-0.02em]">
                Transfer
              </b>
            </div>
          </div>
          <div className="box-border flex h-[28.5px] flex-col items-start justify-start pb-0 pl-0 pr-[7px] pt-[3.5px]">
            <div className="relative box-border h-[26px] w-px border-r-[1px] border-solid border-neutral-black-1" />
          </div>
          <div className="flex flex-col items-start justify-start pb-0 pl-0 pr-2 pt-[2.5px]">
            <div className="rounded-mid flex flex-row items-start justify-start bg-neutral-black-1 px-2 py-0.5">
              <b className="relative inline-block min-w-[80px] leading-[23px] tracking-[-0.02em]">
                Auto-Invest
              </b>
            </div>
          </div>
          <div className="box-border flex h-[28.5px] flex-col items-start justify-start pb-0 pl-0 pr-[7px] pt-[3.5px]">
            <div className="relative box-border h-[26px] w-px border-r-[1px] border-solid border-neutral-black-1" />
          </div>
          <div className="flex flex-row items-center justify-start px-0 pb-0">
            <div className="relative leading-6 tracking-tight">Buy with</div>
            <div className="bg-neutral-white1 box-border flex w-20 flex-row items-center justify-center rounded-full border border-neutral-black-1 px-3 py-1">
              <b className="relative min-w-7">USD</b>
              <IoIosArrowForward className="relative h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex max-w-full flex-row items-start justify-start self-stretch px-2 py-0 text-neutral-black-2">
        <div className="grid w-full max-w-full grid-cols-1 flex-col items-start justify-start gap-20 gap-x-20 gap-y-20 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col justify-start gap-5 self-stretch">
            <div
              className={`w-full max-w-full flex-1 gap-4 text-left text-sm text-neutral-black-5`}
            >
              <div className="relative flex flex-row items-start justify-start self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white text-neutral-black-2">
                <input
                  placeholder="Price"
                  className="relative h-full flex-1 appearance-none rounded-lg border-none px-5 py-4 text-base tracking-tight text-neutral-black-4 outline-none placeholder:text-neutral-black-2"
                />
                <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center text-base text-neutral-black-5">
                  <div className="flex items-center justify-start gap-2 rounded-full">
                    <b className="">431</b>
                    <b className="relative mt-[-1px] inline-block min-w-[30px] leading-[120%] tracking-[-0.02em]">
                      LCT
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-full max-w-full flex-1 gap-4 text-left text-sm text-neutral-black-5`}
            >
              <div className="relative flex flex-row items-start justify-start self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white text-neutral-black-2">
                <input
                  placeholder="Amount"
                  className="relative h-full flex-1 appearance-none rounded-lg border-none px-5 py-4 text-base tracking-tight text-neutral-black-4 outline-none placeholder:text-neutral-black-2"
                />
                <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center text-base text-neutral-black-5">
                  <div className="flex items-center justify-start gap-2 rounded-full">
                    <b className="">0</b>
                    <b className="relative mt-[-1px] inline-block min-w-[30px] leading-[120%] tracking-[-0.02em]">
                      LCT
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <CustomSlider value={0} onChange={() => {}} />
            <div
              className={`w-full max-w-full flex-1 gap-4 text-left text-sm text-neutral-black-5`}
            >
              <div className="relative flex flex-row items-start justify-start self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white text-neutral-black-2">
                <input
                  placeholder="Total"
                  className="relative h-full flex-1 appearance-none rounded-lg border-none px-5 py-4 text-base tracking-tight text-neutral-black-4 outline-none placeholder:text-neutral-black-2"
                />
                <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center text-base text-neutral-black-5">
                  <div className="flex items-center justify-start gap-2 rounded-full">
                    <b className="">339</b>
                    <b className="relative mt-[-1px] inline-block min-w-[30px] leading-[120%] tracking-[-0.02em]">
                      LCT
                    </b>
                  </div>
                </div>
              </div>
            </div>

            <button className="box-border flex w-full min-w-[309px] max-w-full flex-1 cursor-pointer flex-row items-start justify-center whitespace-nowrap rounded-13xl border-[2px] border-solid border-darkslategray bg-state-success px-5 py-[17px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] hover:box-border hover:border-[2px] hover:border-solid hover:border-teal hover:bg-mediumseagreen">
              <b className="text-mid font-body-large-bold relative inline-block min-w-[68px] text-left leading-[120%] tracking-[-0.02em] text-neutral-white">
                BUY LCT
              </b>
            </button>
          </div>

          <button
            onClick={() => {}}
            className="absolute left-1/2 top-1/2 box-border flex h-12 w-12 shrink-0 -translate-x-1/2 -translate-y-1/2 rotate-90 flex-row items-center justify-center overflow-hidden rounded-13xl border-[1px] border-solid border-neutral-black-2 bg-neutral-white px-[11px] py-3 md:rotate-0"
          >
            <IoSwapHorizontal className="relative h-6 min-h-[24px] w-6 text-ketto-primary" />
          </button>

          <div className="flex flex-col gap-5 self-stretch">
            <div
              className={`w-full max-w-full flex-1 gap-4 text-left text-sm text-neutral-black-5`}
            >
              <div className="relative flex flex-row items-start justify-start self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white text-neutral-black-2">
                <input
                  placeholder="Price"
                  className="relative h-full flex-1 appearance-none rounded-lg border-none px-5 py-4 text-base tracking-tight text-neutral-black-4 outline-none placeholder:text-neutral-black-2"
                />
                <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center text-base text-neutral-black-5">
                  <div className="flex items-center justify-start gap-2 rounded-full">
                    <b className="">431</b>
                    <b className="relative mt-[-1px] inline-block min-w-[30px] leading-[120%] tracking-[-0.02em]">
                      LCT
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-full max-w-full flex-1 gap-4 text-left text-sm text-neutral-black-5`}
            >
              <div className="relative flex flex-row items-start justify-start self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white text-neutral-black-2">
                <input
                  placeholder="Amount"
                  className="relative h-full flex-1 appearance-none rounded-lg border-none px-5 py-4 text-base tracking-tight text-neutral-black-4 outline-none placeholder:text-neutral-black-2"
                />
                <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center text-base text-neutral-black-5">
                  <div className="flex items-center justify-start gap-2 rounded-full">
                    <b className="">0</b>
                    <b className="relative mt-[-1px] inline-block min-w-[30px] leading-[120%] tracking-[-0.02em]">
                      LCT
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <CustomSlider value={0} onChange={() => {}} />
            <div
              className={`w-full max-w-full flex-1 gap-4 text-left text-sm text-neutral-black-5`}
            >
              <div className="relative flex flex-row items-start justify-start self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white text-neutral-black-2">
                <input
                  placeholder="Total"
                  className="relative h-full flex-1 appearance-none rounded-lg border-none px-5 py-4 text-base tracking-tight text-neutral-black-4 outline-none placeholder:text-neutral-black-2"
                />
                <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center text-base text-neutral-black-5">
                  <div className="flex items-center justify-start gap-2 rounded-full">
                    <b className="">339</b>
                    <b className="relative mt-[-1px] inline-block min-w-[30px] leading-[120%] tracking-[-0.02em]">
                      LCT
                    </b>
                  </div>
                </div>
              </div>
            </div>

            <button className="flex max-w-full flex-1 cursor-pointer flex-row items-start justify-center whitespace-nowrap rounded-full border-[2px] border-solid border-darkslategray bg-state-error px-5 py-4 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] hover:box-border hover:border-[2px] hover:border-solid hover:border-teal hover:bg-crimson">
              <b className="font-body-large-bold inline-block text-neutral-white">
                SELL LCT
              </b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySellTradingSection;
