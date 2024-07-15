"use client";

import Navbar from "@/components/common/Navbar";
import TokenCardDetails from "@/components/TokenCardDetail";
import { IoArrowForward } from "react-icons/io5";
import { LuEye, LuEyeOff } from "react-icons/lu";
import LoadingPage from "./loading/page";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="w-full min-h-screen relative [background:linear-gradient(rgba(230,_232,_232,_0.4),_rgba(230,_232,_232,_0.4)),_#fcfdfd] overflow-hidden flex flex-col items-start justify-start font-proxima">
        <Navbar />
        <main className="w-4/5 mx-auto flex flex-row items-start justify-center px-5 py-10">
          <section
            className={`w-4/5 flex flex-col items-start justify-start gap-8 max-w-full text-left text-2xl text-neutral-black-6 font-body-large-bold mq450:gap-[16px] `}
          >
            <div className="self-stretch flex flex-col items-start justify-center">
              <div className="self-stretch flex flex-col items-start justify-start gap-2">
                <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit">
                  Hello User,
                </h3>
                <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[140%] font-normal font-inherit text-neutral-black-4 mq450:text-3xl mq450:leading-[31px]">
                  Your Lympha assets have helped remove 5 tons of CO2e. Thats
                  equivalent to recycling 712,837 plastic bottles. Great work!
                </h3>
              </div>
            </div>
            <div className="self-stretch rounded-3xl bg-neutral-white flex flex-col items-center justify-center p-6 box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq675:flex-wrap">
                  <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[140%] font-bold font-inherit mq450:text-3xl mq450:leading-[31px]">
                    My Portfolio
                  </h3>
                  <div className="rounded-11xl bg-neutral-black-1 flex flex-row items-center justify-start p-1 gap-[4px] text-sm">
                    <button className="cursor-pointer [border:none] py-2 px-[22px] bg-neutral-white rounded-11xl flex flex-row items-center justify-center hover:bg-gainsboro">
                      <b className="relative text-sm tracking-[-0.02em] leading-[20px] inline-block font-body-large-bold text-neutral-black-6 text-left min-w-[56px]">
                        overview
                      </b>
                    </button>
                    <div className="flex flex-row items-center justify-center py-2 px-[18px]">
                      <b className="relative tracking-[-0.02em] leading-[20px] inline-block min-w-[64px]">
                        my tokens
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-2xl bg-neutral-white box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-[16px] max-w-full text-base border-[1px] border-solid border-silver">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="w-[292px] flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative tracking-[-0.02em] leading-[140%]">
                        Current Value
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[16px] text-13xl">
                        <h2 className="m-0 relative text-inherit tracking-wide leading-[45px] font-normal text-3xl">
                          $ Hidden Value
                        </h2>
                        <LuEye
                          className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                          onClick={() => {}}
                        />
                        <LuEyeOff
                          className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                          onClick={() => {}}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] text-lg mq750:flex-wrap">
                    <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq675:flex-wrap">
                      <div className="flex flex-row items-start justify-start gap-[8px]">
                        <div className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[98px]">
                          Total Returns
                        </div>
                        <b className="relative tracking-[-0.02em] leading-[140%] inline-block text-state-success min-w-[91px]">
                          +$8,338.00
                        </b>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px]">
                        <div className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[76px]">
                          1D returns
                        </div>
                        <b className="relative tracking-[-0.02em] leading-[140%] inline-block text-state-error min-w-[53px]">
                          -$8.00
                        </b>
                      </div>
                    </div>
                    <div className="w-[209px] flex flex-row items-start justify-start gap-[8px]">
                      <button className="cursor-pointer py-1.5 px-[22px] bg-lympha-primary flex-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl flex flex-row items-center justify-center whitespace-nowrap border-[2px] border-solid border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-teal">
                        <b className="relative text-sm tracking-[-0.02em] leading-[130%] uppercase inline-block font-body-large-bold text-neutral-white text-left min-w-[52px]">
                          get let
                        </b>
                      </button>
                      <button className="cursor-pointer py-1.5 px-[22px] bg-lympha-primary flex-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl flex flex-row items-center justify-center whitespace-nowrap border-[2px] border-solid border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-teal">
                        <b className="relative text-sm tracking-[-0.02em] leading-[130%] uppercase inline-block font-body-large-bold text-neutral-white text-left min-w-[53px]">
                          get lct
                        </b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                <button className="w-full flex text-lympha-primary border-lympha-primary items-center h-12 py-2 bg-white rounded-3xl border border-stone-300/opacity-60 justify-center gap-2 ">
                  <div className="text-teal-700 text-base font-bold font-['Proxima Nova'] leading-tight">
                    Get Started
                  </div>
                  <IoArrowForward className="text-teal-700 h-4 stroke-[1px]" />
                </button>
              </div>
            </div>
            <div className="w-full h-20 px-6 py-5 bg-neutral-black-4/5 rounded-3xl justify-between items-center inline-flex">
              <div className="w-96 flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="text-gray-600 text-lg font-normal font-['Proxima Nova'] leading-relaxed">
                  You have an investment opportunity?
                </div>
              </div>
              <div className="w-36 px-6 py-2 bg-lympha-primary whitespace-nowrap rounded-3xl shadow border-2 border-emerald-900/opacity-20 justify-center items-center gap-2 flex">
                <div className="text-white text-base">List a project</div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Suspense>
  );
}
