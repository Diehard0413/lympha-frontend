"use client";

import Navbar from "@/components/common/Navbar";
import { useRouter } from "next/navigation";
import React from "react";
import { FiUpload } from "react-icons/fi";
import { IoArrowForward } from "react-icons/io5";

type Props = {};

const Step1 = (props: Props) => {
  const navigator = useRouter();
  return (
    <div className="w-full min-h-screen relative [background:linear-gradient(rgba(230,_232,_232,_0.4),_rgba(230,_232,_232,_0.4)),_#fcfdfd] overflow-hidden flex flex-col items-start justify-start font-proxima">
      <Navbar />
      <main className="self-stretch flex flex-row items-start justify-center px-5 box-border max-w-full py-10">
        <section className="mx-auto flex flex-col items-start justify-start  gap-4 max-w-full text-left text-sm py-10">
          <div
            className={
              "w-lg mx-auto flex flex-col items-start justify-start gap-10 text-left text-13xl text-neutral-black-6"
            }
          >
            <div className="self-stretch flex flex-col items-start justify-start">
              <h1 className="m-0 self-stretch relative text-lg tracking-tight leading-10 font-bold">
                List your project
              </h1>
              <div className="relative text-lg tracking-[-0.02em] leading-[140%]">
                Please provide the necessary information to verify and list the
                project.
              </div>
            </div>

            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-base text-neutral-black-5">
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[95px]">
                  Project Name
                </b>
                <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-row items-center justify-start py-4 pr-[11px] pl-[19px] max-w-full border-[0.5px] border-solid border-neutral-black-2">
                  <input
                    className="w-full [border:none] [outline:none] font-body-large-bold text-base bg-[transparent] h-[22px] flex-1 relative tracking-[-0.02em] leading-[140%] text-neutral-black-4 text-left inline-block min-w-[250px] max-w-full p-0"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="w-[189px] relative text-sm tracking-[-0.02em] leading-[140%] text-neutral-white hidden">{`helper text lorem ipsum dolor sit `}</div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                <b className="relative tracking-[-0.02em] leading-[140%]">
                  Conservation Methodology
                </b>
                <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-row items-center justify-start py-4 pr-[11px] pl-[19px] gap-[12px] max-w-full text-neutral-black-2 border-[0.5px] border-solid border-neutral-black-2">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[140%] inline-block max-w-[calc(100%_-_30px)]">
                    Select Mathod
                  </div>
                  <img
                    className="h-[18px] w-[18px] relative"
                    alt=""
                    src="/icontrailing.svg"
                  />
                </div>
                <div className="w-[189px] relative text-sm tracking-[-0.02em] leading-[140%] text-neutral-white hidden">{`helper text lorem ipsum dolor sit `}</div>
              </div>
              <div
                className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-base text-neutral-black-5`}
              >
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                  <b className="relative tracking-[-0.02em] leading-[140%]">
                    Country
                  </b>
                  <div className="w-[189px] relative text-sm tracking-[-0.02em] leading-[140%] text-neutral-white hidden">
                    helper text lorem ipsum dolor sit
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-neutral-black-3">
                    <div className="self-stretch rounded-lg bg-gainsboro-600 flex flex-col items-center justify-center py-[46px] pr-5 pl-7 gap-[4px] border-[1px] border-dashed border-neutral-black-2">
                      <FiUpload className="w-6 h-6 relative overflow-hidden shrink-0" />
                      <b className="relative tracking-[-0.02em] leading-[140%]">
                        Select a file to upload
                      </b>
                      <div className="relative text-sm tracking-[-0.02em] leading-[20px]">
                        or drag and drop it here
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-neutral-black-5">
                      <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-row flex-wrap items-center justify-start py-3 pr-[11px] pl-[19px] gap-[12px] max-w-full text-neutral-black-4 border-[0.5px] border-solid border-neutral-black-2">
                        <div className="flex-1 relative tracking-[-0.02em] leading-[140%] inline-block min-w-[71px] max-w-full">
                          Or paste URL
                        </div>
                        <button className="cursor-pointer [border:none] py-2 px-4 bg-lympha-disabled rounded-13xl flex flex-row items-center justify-center hover:bg-gainsboro-200">
                          <b className="relative text-3xs leading-[130%] uppercase inline-block font-body-large-bold text-lympha-primary text-left min-w-[40px]">
                            upload
                          </b>
                        </button>
                      </div>
                      <div className="w-[189px] relative text-sm tracking-[-0.02em] leading-[140%] text-neutral-white hidden">{`helper text lorem ipsum dolor sit `}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigator.push("/list-projects/step2")}
              className="cursor-pointer border-none p-0 bg-transparent self-stretch flex flex-col items-start justify-start"
            >
              <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl bg-lympha-primary flex flex-row items-center justify-center py-[17px] pr-5 pl-7 gap-[8px] border-[2px] border-solid border-darkslategray">
                <b className="relative text-mid tracking-[-0.02em] leading-[120%] inline-block font-body-large-bold text-neutral-white text-left min-w-[61px]">
                  Proceed
                </b>
                <IoArrowForward className="h-5 w-5 relative min-h-[20px] text-white" />
              </div>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Step1;
