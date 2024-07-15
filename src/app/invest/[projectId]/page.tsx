"use client";
import Navbar from "@/components/common/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdArrowBack, MdOutlineFileDownload } from "react-icons/md";

type Props = {};

const ProjectDetailPage = (props: Props) => {
  const project = {
    id: "1",
    title: "Project Title",
    method: "XYZ",
    description:
      "The Convertible project is bringing new solutions to the automotive and...",
    minInvest: 2000,
    tokensOffered: 47333834,
  };

  const navigate = useRouter();
  return (
    <div className="w-full min-h-screen relative [background:linear-gradient(rgba(230,_232,_232,_0.4),_rgba(230,_232,_232,_0.4)),_#fcfdfd] overflow-hidden flex flex-col items-start justify-start font-proxima">
      <Navbar />
      <main className="w-2/3 border border-red-500 mx-auto self-stretch flex flex-row items-start justify-center px-5 box-border max-w-full py-10">
        <section className="w-full flex flex-col items-start justify-start  gap-4 max-w-full text-left text-sm text-neutral-white">
          <button
            onClick={() => {
              navigate.back();
            }}
            className="self-stretch flex flex-row flex-wrap items-center justify-start gap-2 shrink-0 max-w-full"
          >
            <MdArrowBack className="h-6 w-6 relative min-h-[24px] text-neutral-black-6" />
            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[499px] max-w-full mq750:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <b className="relative tracking-tight inline-block text-neutral-black-6">
                  Back to profile
                </b>
              </div>
            </div>
          </button>
          <div className="self-stretch rounded-2xl bg-orange box-border flex flex-row items-center justify-center py-3 px-6 shrink-0 max-w-full border border-solid border-state-warning">
            <div className="flex-1 flex flex-row  items-center justify-start gap-2">
              <FaInfoCircle className="h-6 w-6 relative text-neutral-black-6" />
              <p className="w-full bg-transparent h-7 overflow-hidden text-lg font-light text-neutral-black-5">
                This project is under review.
              </p>
            </div>
          </div>
          <h2 className="pt-5 relative text-2xl tracking-wide leading-8 font-bold font-inherit text-neutral-black-6 shrink-0">
            {project.title}
          </h2>
          <div className="self-stretch rounded-2xl flex flex-row items-start justify-start pt-0 pb-7 pr-0.5 pl-0 box-border gap-[16px] shrink-0 max-w-full text-lg text-neutral-black-4 mq750:flex-wrap">
            <div className="flex-1 rounded-11xl flex flex-col items-start justify-start gap-[16px] max-w-full mq450:min-w-full">
              <div className="self-stretch h-72 rounded-3xl overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/images/image-1.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[8px] max-w-full">
                <div className="self-stretch flex flex-row items-center justify-center max-w-full">
                  <b className="flex-1 relative tracking-[-0.02em] leading-[140%] inline-block max-w-full">
                    The Convertible project is providing new solutions to help
                    solve the automotive and freight transportation industry
                    problems! Through our unique proprietary hardware and
                    software innovations.
                  </b>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center max-w-full text-sm">
                  <div className="h-[360px] flex-1 relative tracking-[-0.02em] leading-[140%] inline-block max-w-full">
                    <p className="m-0">
                      Worldwide, the auto industry wastes more than $100B every
                      year on inefficient automotive transportation largely due
                      to SINGLE PURPOSE EQUIPMENT that is designed to only haul
                      vehicles. The traditional design of these trucks means
                      they are more often than not delivering their load of
                      vehicles and then coming back EMPTY! This is known in the
                      industry as “Turn and Burn”. This wasted space on the
                      return trips means 42% of auto transport miles are logged
                      as EMPTY. These empty backhauls result in over 2 billion
                      gallons of wasted diesel fuel globally and over 22 million
                      tons of needless CO2 emitted into the atmosphere every
                      year.
                    </p>
                    <p className="m-0"> </p>
                    <p className="m-0">
                      Our vision is to provide innovative solutions that will
                      transform the way that both the automotive and freight
                      industries operate, and goods are moved. Our goal is to
                      change the old, accepted adage of “Turn and Burn” into
                      “Turn and Earn”. To do so, we have taken the traditional
                      automotive transport trailer and created our patented
                      Convertible Trailer: a multi-purpose asset that can haul a
                      full automotive load and then convert down into a flatbed
                      style trailer that can carry nearly any style of general
                      freight. NO MORE EMPTY MILES!! Combine that with our
                      patented AutoBox: a uniquely sized container that pairs
                      with our Convertible Trailer to create dry space for
                      individually contained shipments along in our mission to
                      eliminate this waste and make Convertibility the new
                      industry standard!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[254px] flex flex-col items-start justify-start gap-[16px] min-w-[254px] text-sm mq750:flex-1">
              <div className="self-stretch rounded-3xl bg-neutral-white flex flex-col items-start justify-start py-6 px-4 gap-[24px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[8px] text-lg">
                    <b className="relative tracking-[-0.02em] leading-[140%]">{`Conservation Method: `}</b>
                    <div className="w-[105px] relative tracking-[-0.02em] leading-[140%] inline-block">
                      Method xyz
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/line-6.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                    <div className="relative tracking-[-0.02em] leading-[20px] inline-block min-w-[68px]">
                      Min invest
                    </div>
                    <div className="w-12 relative tracking-[-0.02em] leading-[20px] text-right inline-block shrink-0 whitespace-nowrap">
                      $2000
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                    <div className="relative tracking-[-0.02em] leading-[20px] inline-block min-w-[89px]">
                      Tokens offered
                    </div>
                    <div className="w-[94px] relative tracking-[-0.02em] leading-[20px] text-right inline-block shrink-0">
                      47,333,834
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[17px]">
                    <div className="relative tracking-[-0.02em] leading-[20px] inline-block min-w-[111px]">
                      Total Token Supply
                    </div>
                    <div className="w-[94px] relative tracking-[-0.02em] leading-[20px] text-right inline-block shrink-0">
                      200,000,000
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer py-[9px] px-5 bg-lympha-primary self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl flex flex-row items-center justify-center opacity-[0.4] border-[2px] border-solid border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-teal">
                  <b className="relative text-base tracking-[0.15px] leading-[24px] inline-block font-body-large-bold text-neutral-white text-left min-w-[45px]">
                    Invest
                  </b>
                </button>
              </div>
              <div className="self-stretch rounded-3xl bg-neutral-white flex flex-row items-start justify-start py-6 px-4">
                <div className="flex-1 flex flex-col items-start justify-start gap-[15.8px]">
                  <b className="w-[139px] relative text-base tracking-[-0.02em] leading-[140%] inline-block">
                    View Documents
                  </b>
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-neutral-black-1" />
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <div className="w-[68px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                      <div className="self-stretch relative tracking-[-0.02em] leading-[20px]">
                        PDD
                      </div>
                    </div>
                    <MdOutlineFileDownload className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="relative tracking-[-0.02em] leading-[20px]">
                        Subscription Agreement
                      </div>
                    </div>
                    <MdOutlineFileDownload className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[28px]">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="relative tracking-[-0.02em] leading-[20px]">
                        Disclosures and Assertations
                      </div>
                    </div>
                    <MdOutlineFileDownload className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetailPage;
