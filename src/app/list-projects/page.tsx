"use client";

import Navbar from "@/components/common/Navbar";
import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

type Props = {};

const TradingPage = (props: Props) => {
  const [isKYCComplete, setIsKYCComplete] = React.useState(false);
  const navigator = useRouter();
  return (
    <div className="w-full min-h-screen relative [background:linear-gradient(rgba(230,_232,_232,_0.4),_rgba(230,_232,_232,_0.4)),_#fcfdfd] overflow-hidden flex flex-col items-start justify-start font-proxima">
      <Navbar />
      <main className="self-stretch flex flex-row items-start justify-center px-5 py-10">
        <section className="mx-auto flex flex-col items-start justify-start  gap-4 max-w-full text-left text-sm py-10">
          <form className="w-xl flex flex-col items-center justify-start gap-10">
            <div className="self-stretch flex flex-col items-center justify-center text-neutral-black-6">
              <h1 className="self-stretch relative text-inherit text-2xl tracking-tight leading-10 text-center font-semibold">
                List your project
              </h1>
              <div className="self-stretch relative tracking-tight text-center">
                A lil bit information about listing project and making a
                difference and getting the funding etc etc
              </div>
            </div>
            {!isKYCComplete && (
              <div className="self-stretch rounded-3xl bg-silver-100 flex flex-row flex-wrap items-center justify-start py-5 px-6 box-border gap-2 text-left text-neutral-black-4 gap-x-10">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[209px] max-w-full">
                  <div className="self-stretch relative tracking-tight text-wrap">
                    KYC incomplete. Finish KYC to list a project on Lympha World
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsKYCComplete(true)}
                  className="cursor-pointer py-2.5 px-[22px] bg-lympha-primary w-[150px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl box-border flex flex-row items-center justify-center whitespace-nowrap border-[2px] border-solid border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-teal"
                >
                  <b className="relative text-base tracking-[-0.02em] leading-[140%] inline-block font-body-large-bold text-neutral-white text-left min-w-[102px]">
                    Complete KYC
                  </b>
                </button>
              </div>
            )}
            <button
              type="button"
              className="shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl bg-lympha-primary flex flex-row items-center justify-center py-4 px-10"
              onClick={() => {
                navigator.push("/list-projects/step1");
              }}
            >
              <b className="relative text-mid tracking-[-0.02em] leading-[120%] inline-block font-body-large-bold text-neutral-white text-left min-w-[61px]">
                Get Started
              </b>
              <IoArrowForward className="h-5 w-5 relative min-h-[20px] text-white" />
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default TradingPage;
