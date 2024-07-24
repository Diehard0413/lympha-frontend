"use client";

import React from "react";
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import CustomSlider from "./CustomSlider";
import { IoSwapHorizontal } from "react-icons/io5";

type Props = {};

const BuySellTradingSection = (props: Props) => {
  return (
    <section className="self-stretch shadow-[0px_2px_36px_rgba(0,_0,_0,_0.08)] rounded-13xl bg-neutral-white flex flex-col items-start justify-start py-6 px-4 box-border gap-[24px] shrink-0 max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
      <div className="self-stretch flex flex-col md:flex-row items-start justify-between max-w-full gap-[20px] text-neutral-black-5 mq750:flex-wrap">
        <div className="flex flex-row items-start justify-start gap-[12px]">
          <div className="rounded-mid bg-neutral-black-1 flex flex-row items-start justify-start py-0.5 px-2">
            <b className="relative tracking-[-0.02em] leading-[23px] inline-block min-w-[34px]">
              Limit
            </b>
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <b className="relative tracking-[-0.02em] leading-[23px] inline-block min-w-[49px]">
              Market
            </b>
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <b className="relative tracking-[-0.02em] leading-[23px] inline-block min-w-[67px]">
                Stop-limit
              </b>
              <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <IoMdArrowDropdown className="h-6 w-6 relative min-h-[24px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-start gap-1 gap-y-4 max-w-full">
          <div className="flex flex-col items-start justify-start pt-[2.5px] pb-0 pr-2 pl-0">
            <div className="rounded-mid bg-neutral-black-1 flex flex-row items-start justify-start py-0.5 px-2">
              <b className="relative tracking-[-0.02em] leading-[23px] inline-block min-w-[57px]">
                Transfer
              </b>
            </div>
          </div>
          <div className="h-[28.5px] flex flex-col items-start justify-start pt-[3.5px] pb-0 pr-[7px] pl-0 box-border">
            <div className="w-px h-[26px] relative box-border border-r-[1px] border-solid border-neutral-black-1" />
          </div>
          <div className="flex flex-col items-start justify-start pt-[2.5px] pb-0 pr-2 pl-0">
            <div className="rounded-mid bg-neutral-black-1 flex flex-row items-start justify-start py-0.5 px-2">
              <b className="relative tracking-[-0.02em] leading-[23px] inline-block min-w-[80px]">
                Auto-Invest
              </b>
            </div>
          </div>
          <div className="h-[28.5px] flex flex-col items-start justify-start pt-[3.5px] pb-0 pr-[7px] pl-0 box-border">
            <div className="w-px h-[26px] relative box-border border-r-[1px] border-solid border-neutral-black-1" />
          </div>
          <div className="flex flex-row items-center justify-start px-0 pb-0">
            <div className="relative tracking-tight leading-6">Buy with</div>
            <div className="w-20 rounded-full bg-neutral-white1 box-border flex flex-row items-center justify-center py-1 px-3 border border-neutral-black-1">
              <b className="relative  min-w-7">USD</b>
              <IoIosArrowForward className="w-3.5 h-3.5 relative" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative self-stretch flex flex-row items-start justify-start py-0 px-2 max-w-full text-neutral-black-2">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 flex-col items-start justify-start  gap-20 gap-y-20  md:gap-20 max-w-full gap-x-20">
          <div className="self-stretch flex flex-col justify-start gap-5">
            <div
              className={`w-full flex-1 gap-4 max-w-full text-left text-sm text-neutral-black-5`}
            >
              <div className="relative self-stretch rounded-lg bg-neutral-white  flex flex-row items-start justify-start  text-neutral-black-2 border-[0.5px] border-solid border-neutral-black-2 ">
                <input
                  placeholder="Price"
                  className="flex-1 h-full relative text-base tracking-tight text-neutral-black-4 placeholder:text-neutral-black-2 py-4 px-5 border-none outline-none appearance-none rounded-lg"
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-2 text-base  text-neutral-black-5 flex items-center">
                  <div className="rounded-full justify-start gap-2 flex items-center ">
                    <b className="">431</b>
                    <b className="mt-[-1px] relative tracking-[-0.02em] leading-[120%] inline-block min-w-[30px]">
                      LCT
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-full flex-1 gap-4 max-w-full text-left text-sm text-neutral-black-5`}
            >
              <div className="relative self-stretch rounded-lg bg-neutral-white  flex flex-row items-start justify-start  text-neutral-black-2 border-[0.5px] border-solid border-neutral-black-2 ">
                <input
                  placeholder="Amount"
                  className="flex-1 h-full relative text-base tracking-tight text-neutral-black-4 placeholder:text-neutral-black-2 py-4 px-5 border-none outline-none appearance-none rounded-lg"
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-2 text-base  text-neutral-black-5 flex items-center">
                  <div className="rounded-full justify-start gap-2 flex items-center ">
                    <b className="">0</b>
                    <b className="mt-[-1px] relative tracking-[-0.02em] leading-[120%] inline-block min-w-[30px]">
                      LCT
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <CustomSlider value={0} onChange={() => {}} />
            <div
              className={`w-full flex-1 gap-4 max-w-full text-left text-sm text-neutral-black-5`}
            >
              <div className="relative self-stretch rounded-lg bg-neutral-white  flex flex-row items-start justify-start  text-neutral-black-2 border-[0.5px] border-solid border-neutral-black-2 ">
                <input
                  placeholder="Total"
                  className="flex-1 h-full relative text-base tracking-tight text-neutral-black-4 placeholder:text-neutral-black-2 py-4 px-5 border-none outline-none appearance-none rounded-lg"
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-2 text-base  text-neutral-black-5 flex items-center">
                  <div className="rounded-full justify-start gap-2 flex items-center ">
                    <b className="">339</b>
                    <b className="mt-[-1px] relative tracking-[-0.02em] leading-[120%] inline-block min-w-[30px]">
                      LCT
                    </b>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full cursor-pointer py-[17px] px-5 bg-state-success flex-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl box-border flex flex-row items-start justify-center min-w-[309px] whitespace-nowrap max-w-full border-[2px] border-solid border-darkslategray hover:bg-mediumseagreen hover:box-border hover:border-[2px] hover:border-solid hover:border-teal">
              <b className="relative text-mid tracking-[-0.02em] leading-[120%] inline-block font-body-large-bold text-neutral-white text-left min-w-[68px]">
                BUY LCT
              </b>
            </button>
          </div>

          <button
            onClick={() => {}}
            className="h-12 w-12 rotate-90 md:rotate-0 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-13xl bg-neutral-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-[11px] border-[1px] border-solid border-neutral-black-2"
          >
            <IoSwapHorizontal className="h-6 w-6 relative min-h-[24px] text-ketto-primary" />
          </button>

          <div className="self-stretch flex flex-col gap-5">
            <div
              className={`w-full flex-1 gap-4 max-w-full text-left text-sm text-neutral-black-5`}
            >
              <div className="relative self-stretch rounded-lg bg-neutral-white  flex flex-row items-start justify-start  text-neutral-black-2 border-[0.5px] border-solid border-neutral-black-2 ">
                <input
                  placeholder="Price"
                  className="flex-1 h-full relative text-base tracking-tight text-neutral-black-4 placeholder:text-neutral-black-2 py-4 px-5 border-none outline-none appearance-none rounded-lg"
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-2 text-base  text-neutral-black-5 flex items-center">
                  <div className="rounded-full justify-start gap-2 flex items-center ">
                    <b className="">431</b>
                    <b className="mt-[-1px] relative tracking-[-0.02em] leading-[120%] inline-block min-w-[30px]">
                      LCT
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-full flex-1 gap-4 max-w-full text-left text-sm text-neutral-black-5`}
            >
              <div className="relative self-stretch rounded-lg bg-neutral-white  flex flex-row items-start justify-start  text-neutral-black-2 border-[0.5px] border-solid border-neutral-black-2 ">
                <input
                  placeholder="Amount"
                  className="flex-1 h-full relative text-base tracking-tight text-neutral-black-4 placeholder:text-neutral-black-2 py-4 px-5 border-none outline-none appearance-none rounded-lg"
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-2 text-base  text-neutral-black-5 flex items-center">
                  <div className="rounded-full justify-start gap-2 flex items-center ">
                    <b className="">0</b>
                    <b className="mt-[-1px] relative tracking-[-0.02em] leading-[120%] inline-block min-w-[30px]">
                      LCT
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <CustomSlider value={0} onChange={() => {}} />
            <div
              className={`w-full flex-1 gap-4 max-w-full text-left text-sm text-neutral-black-5`}
            >
              <div className="relative self-stretch rounded-lg bg-neutral-white  flex flex-row items-start justify-start  text-neutral-black-2 border-[0.5px] border-solid border-neutral-black-2 ">
                <input
                  placeholder="Total"
                  className="flex-1 h-full relative text-base tracking-tight text-neutral-black-4 placeholder:text-neutral-black-2 py-4 px-5 border-none outline-none appearance-none rounded-lg"
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-2 text-base  text-neutral-black-5 flex items-center">
                  <div className="rounded-full justify-start gap-2 flex items-center ">
                    <b className="">339</b>
                    <b className="mt-[-1px] relative tracking-[-0.02em] leading-[120%] inline-block min-w-[30px]">
                      LCT
                    </b>
                  </div>
                </div>
              </div>
            </div>

            <button className="cursor-pointer py-4 px-5 bg-state-error flex-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-full flex flex-row items-start justify-center whitespace-nowrap max-w-full border-[2px] border-solid border-darkslategray hover:bg-crimson hover:box-border hover:border-[2px] hover:border-solid hover:border-teal">
              <b className=" inline-block font-body-large-bold text-neutral-white">
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
