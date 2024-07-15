"use client";

import Navbar from "@/components/common/Navbar";
import { useRouter } from "next/navigation";
import React from "react";
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
              "w-md mx-auto flex flex-col items-center justify-start gap-10 text-neutral-black-6"
            }
          >
            <div className="self-stretch flex flex-col items-center justify-center gap-y-5">
              <img
                className="size-20"
                src="/icons/check-mark-complete.svg"
                alt=""
              />
              <h1 className="self-stretch relative  tracking-tighter leading-10 font-bold text-center text-4xl">
                Project Submitted
              </h1>
              <div className="relative text-lg tracking-[-0.02em] leading-[140%] text-center max-w-sm ">
                Your KYC information has been submitted. We will notify you once
                it is verified.
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigator.push("/")}
              className="cursor-pointer border-none p-0 bg-transparent self-stretch flex flex-col items-start justify-start"
            >
              <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl bg-lympha-primary flex flex-row items-center justify-center py-[17px] pr-5 pl-7 gap-[8px] border-[2px] border-solid border-darkslategray">
                <b className="relative text-mid tracking-[-0.02em] leading-[120%] inline-block font-body-large-bold text-neutral-white text-left min-w-[61px]">
                  Back to dashboard
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
