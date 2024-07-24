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
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden font-proxima [background:linear-gradient(rgba(230,_232,_232,_0.4),_rgba(230,_232,_232,_0.4)),_#fcfdfd]">
      <Navbar />
      <main className="flex flex-row items-start justify-center self-stretch px-5 py-10">
        <section className="mx-auto flex max-w-full flex-col items-start justify-start gap-4 py-10 text-left text-sm">
          <form className="w-xl flex flex-col items-center justify-start gap-10">
            <div className="flex flex-col items-center justify-center self-stretch text-neutral-black-6">
              <h1 className="relative self-stretch text-center text-2xl font-semibold leading-10 tracking-tight text-inherit">
                List your project
              </h1>
              <div className="relative self-stretch text-center tracking-tight">
                A lil bit information about listing project and making a
                difference and getting the funding etc etc
              </div>
            </div>
            {!isKYCComplete && (
              <div className="box-border flex flex-row flex-wrap items-center justify-start gap-2 gap-x-10 self-stretch rounded-3xl bg-silver-100 px-6 py-5 text-left text-neutral-black-4">
                <div className="flex min-w-[209px] max-w-full flex-1 flex-col items-start justify-start">
                  <div className="relative self-stretch text-wrap tracking-tight">
                    KYC incomplete. Finish KYC to list a project on Lympha World
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsKYCComplete(true)}
                  className="box-border flex w-[150px] cursor-pointer flex-row items-center justify-center whitespace-nowrap rounded-13xl border-[2px] border-solid border-darkslategray bg-lympha-primary px-[22px] py-2.5 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] hover:box-border hover:border-[2px] hover:border-solid hover:border-teal hover:bg-darkcyan-100"
                >
                  <b className="font-body-large-bold relative inline-block min-w-[102px] text-left text-base leading-[140%] tracking-[-0.02em] text-neutral-white">
                    Complete KYC
                  </b>
                </button>
              </div>
            )}
            <button
              type="button"
              className="flex flex-row items-center justify-center rounded-13xl bg-lympha-primary px-10 py-4 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)]"
              onClick={() => {
                navigator.push("/list-projects/step1");
              }}
            >
              <b className="text-mid font-body-large-bold relative inline-block min-w-[61px] text-left leading-[120%] tracking-[-0.02em] text-neutral-white">
                Get Started
              </b>
              <IoArrowForward className="relative h-5 min-h-[20px] w-5 text-white" />
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default TradingPage;
