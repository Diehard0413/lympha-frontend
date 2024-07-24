"use client";

import Navbar from "@/components/common/Navbar";
import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

type Props = {};

const Step1 = (props: Props) => {
  const navigator = useRouter();
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden font-proxima [background:linear-gradient(rgba(230,_232,_232,_0.4),_rgba(230,_232,_232,_0.4)),_#fcfdfd]">
      <Navbar />
      <main className="box-border flex max-w-full flex-row items-start justify-center self-stretch px-5 py-10">
        <section className="mx-auto flex max-w-full flex-col items-start justify-start gap-4 py-10 text-left text-sm">
          <div
            className={
              "w-md mx-auto flex flex-col items-center justify-start gap-10 text-neutral-black-6"
            }
          >
            <div className="flex flex-col items-center justify-center gap-y-5 self-stretch">
              <img
                className="size-20"
                src="/icons/check-mark-complete.svg"
                alt=""
              />
              <h1 className="relative self-stretch text-center text-4xl font-bold leading-10 tracking-tighter">
                Project Submitted
              </h1>
              <div className="relative max-w-sm text-center text-lg leading-[140%] tracking-[-0.02em]">
                Your KYC information has been submitted. We will notify you once
                it is verified.
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigator.push("/")}
              className="flex cursor-pointer flex-col items-start justify-start self-stretch border-none bg-transparent p-0"
            >
              <div className="flex flex-row items-center justify-center gap-[8px] self-stretch rounded-13xl border-[2px] border-solid border-darkslategray bg-lympha-primary py-[17px] pl-7 pr-5 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)]">
                <b className="text-mid font-body-large-bold relative inline-block min-w-[61px] text-left leading-[120%] tracking-[-0.02em] text-neutral-white">
                  Back to dashboard
                </b>
                <IoArrowForward className="relative h-5 min-h-[20px] w-5 text-white" />
              </div>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Step1;
