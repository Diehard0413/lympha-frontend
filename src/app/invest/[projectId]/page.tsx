"use client";
import { getProjectById, invest, execute } from "@/actions/project";
import Navbar from "@/components/common/Navbar";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdArrowBack, MdOutlineFileDownload } from "react-icons/md";
import { useSession } from "next-auth/react";

import { toast } from "react-toastify";

type Props = {};

type ProjectType = {
  _id: string;
  title: string;
  email: string;
  lctId: string;
  lctTreasuryId: string;
  lctTreasuryKey: string;
  lctTotalSupply: number;
  lctAmount: number;
  letAmount: number;
  method: string;
  description: string;
  minInvest: number;
  tokensOffered: number;
  approve: boolean;
  openTrading: boolean;
}

const ProjectDetailPage = (props: Props) => {

  const router = useRouter();
  const pathname = usePathname();
  const session = useSession();
  const user = session.data?.user;
  
  const projectId = pathname.split('/').filter(Boolean).pop();
  const [project, setProject] = useState<ProjectType>();
  const [investAmount, setInvestAmount] = useState<string>("");

  const [isInvesting, setIsInvesting] = useState(false);

  const onInvest = async () => {
    if (!investAmount || Number(investAmount) <= 0 || !project || !user?.email) return;
    setIsInvesting(true);
    try {
      const investResponse = await invest(project._id, user.email, Number(investAmount));
      console.log("investResponse", investResponse);
      if (investResponse.error) {
        toast.error(investResponse.error);
      } else {
        toast.success("Invest successfully");
      }
    } catch (error) {
      console.log(error);
    }
    setIsInvesting(false);
  }

  useEffect(() => {
    const fetchProject = async () => {
      const response = await getProjectById(projectId || "");
      const project = response.data;
      console.log(project);
      setProject(project);
    }

    fetchProject();
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden font-proxima [background:linear-gradient(rgba(230,_232,_232,_0.4),_rgba(230,_232,_232,_0.4)),_#fcfdfd]">
      <Navbar />
      <main className="mx-auto flex w-11/12 max-w-full flex-col items-start justify-center self-stretch py-10 md:w-5/6 md:px-5 lg:w-3/4 xl:w-2/3">
        <button
          onClick={() => {
            router.back();
          }}
          className="flex max-w-full shrink-0 flex-row items-center justify-start gap-2 self-stretch"
        >
          <MdArrowBack className="relative h-6 min-h-6 w-6 shrink-0 text-neutral-black-6" />
          <div className="mq750:min-w-full box-border flex min-w-[499px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-px">
            <div className="mq450:flex-wrap flex flex-row items-start justify-between gap-[20px] self-stretch">
              <b className="relative inline-block tracking-tight text-neutral-black-6">
                Back to profile
              </b>
            </div>
          </div>
        </button>
        {!project?.approve && <div className="my-3 box-border flex w-full max-w-full shrink-0 flex-row items-center justify-center rounded-2xl border border-state-warning bg-orange px-6 py-3">
          <div className="flex flex-1 flex-row items-center justify-start gap-2">
            <FaInfoCircle className="relative h-6 w-6 text-neutral-black-6" />
            <p className="h-7 w-full overflow-hidden bg-transparent text-lg font-light text-neutral-black-5">
              This project is under review.
            </p>
          </div>
        </div>
        }
        <h2 className="font-inherit relative shrink-0 pt-5 text-2xl font-bold leading-8 tracking-wide text-neutral-black-6">
          {project?.title}
        </h2>
        <section className="box-border flex shrink-0 flex-col items-start justify-start gap-4 self-stretch rounded-2xl py-3 text-lg text-neutral-black-4 md:flex-row">
          <article className="flex max-w-full flex-1 flex-col items-start justify-start gap-4 rounded-11xl">
            <div className="flex h-72 shrink-0 flex-col items-start justify-start self-stretch overflow-hidden rounded-3xl">
              <img
                className="relative max-h-full max-w-full flex-1 self-stretch overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="/images/image-1.png"
              />
            </div>
            <div className="box-border flex max-w-full flex-col items-start justify-start gap-2 self-stretch">
              <div className="flex max-w-full flex-row items-center justify-center self-stretch">
                <b className="relative inline-block max-w-full flex-1 leading-5 tracking-tight">
                  The Convertible project is providing new solutions to help
                  solve the automotive and freight transportation industry
                  problems! Through our unique proprietary hardware and software
                  innovations.
                </b>
              </div>
              <div className="flex max-w-full flex-row items-center justify-center self-stretch text-sm">
                <div className="relative inline-block max-w-full flex-1 tracking-tight">
                  <p className="">
                    Worldwide, the auto industry wastes more than $100B every
                    year on inefficient automotive transportation largely due
                    to SINGLE PURPOSE EQUIPMENT that is designed to only haul
                    vehicles. The traditional design of these trucks means they
                    are more often than not delivering their load of vehicles
                    and then coming back EMPTY! This is known in the industry as
                    “Turn and Burn”. This wasted space on the return trips
                    means 42% of auto transport miles are logged as EMPTY. These
                    empty backhauls result in over 2 billion gallons of wasted
                    diesel fuel globally and over 22 million tons of needless
                    CO2 emitted into the atmosphere every year.
                  </p>
                  <p className="">
                    Our vision is to provide innovative solutions that will
                    transform the way that both the automotive and freight
                    industries operate, and goods are moved. Our goal is to
                    change the old, accepted adage of “Turn and Burn” into “Turn
                    and Earn”. To do so, we have taken the traditional
                    automotive transport trailer and created our patented
                    Convertible Trailer: a multi-purpose asset that can haul a
                    full automotive load and then convert down into a flatbed
                    style trailer that can carry nearly any style of general
                    freight. NO MORE EMPTY MILES!! Combine that with our
                    patented AutoBox: a uniquely sized container that pairs with
                    our Convertible Trailer to create dry space for individually
                    contained shipments along in our mission to eliminate this
                    waste and make Convertibility the new industry standard!
                  </p>
                </div>
              </div>
            </div>
          </article>
          <aside className="flex w-full flex-col items-start justify-start gap-4 text-sm md:w-64">
            <div className="flex flex-col items-start justify-start gap-6 self-stretch rounded-3xl bg-neutral-white px-4 py-6">
              <div className="flex flex-col items-start justify-start gap-4 self-stretch">
                <div className="flex flex-col items-start justify-start gap-[8px] self-stretch py-0 pl-0 pr-5 text-lg">
                  <b className="relative tracking-tight">{`Conservation Method: `}</b>
                  <div className="relative inline-block tracking-tight">
                    Method xyz
                  </div>
                </div>
                <div className="relative box-border h-px self-stretch border-t-[1px] border-solid border-neutral-black-1" />

                <div className="flex flex-row items-center justify-between gap-[20px] self-stretch">
                  <div className="relative inline-block min-w-[68px] leading-[20px] tracking-tight">
                    Min invest
                  </div>
                  <div className="relative inline-block w-12 shrink-0 whitespace-nowrap text-right leading-[20px] tracking-tight">
                    {project?.minInvest}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between gap-[20px] self-stretch">
                  <div className="relative inline-block min-w-[89px] leading-[20px] tracking-tight">
                    Tokens offered
                  </div>
                  <div className="relative inline-block w-[94px] shrink-0 text-right leading-[20px] tracking-tight">
                    {project?.tokensOffered}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between gap-[17px] self-stretch">
                  <div className="relative inline-block min-w-[111px] leading-[20px] tracking-tight">
                    Total Token Supply
                  </div>
                  <div className="relative inline-block w-[94px] shrink-0 text-right leading-[20px] tracking-tight">
                    {project?.lctTotalSupply}
                  </div>
                </div>
              </div>
              <input disabled={isInvesting || !project?.approve} placeholder="Invest Amount" value={investAmount} onChange={(e) => setInvestAmount(e.target.value)} className="w-full appearance-none rounded-lg border-[0.5px] border-solid border-neutral-black-2 px-3 py-2 text-base tracking-tight text-neutral-black-4 outline-none placeholder:text-neutral-black-2" />
              <button disabled={isInvesting || !project?.approve} onClick={(e) => { onInvest(); }} className="flex cursor-pointer flex-row items-center justify-center self-stretch rounded-13xl border-[2px] border-solid border-darkslategray bg-lympha-primary px-5 py-[9px] disabled:opacity-[0.4] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] hover:box-border hover:border-[2px] hover:border-solid hover:border-teal hover:bg-darkcyan-100">
                {isInvesting && (
                  <svg
                    className="-ml-1 mr-2 h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                <b className="font-body-large-bold relative inline-block min-w-[45px] text-left text-base leading-6 tracking-[0.15px] text-neutral-white">
                  Invest
                </b>
              </button>
            </div>
            <div className="flex flex-row items-start justify-start self-stretch rounded-3xl bg-neutral-white px-4 py-6">
              <div className="flex flex-1 flex-col items-start justify-start gap-[15.8px]">
                <b className="relative inline-block w-[139px] text-base tracking-tight">
                  View Documents
                </b>
                <div className="relative box-border h-px self-stretch border-t-[1px] border-solid border-neutral-black-1" />
                <div className="flex flex-row items-center justify-between self-stretch">
                  <div className="box-border flex w-[68px] flex-col items-start justify-start px-0 pb-0 pt-0.5">
                    <div className="relative self-stretch leading-[20px] tracking-tight">
                      PDD
                    </div>
                  </div>
                  <MdOutlineFileDownload
                    onClick={() => { }}
                    className="relative h-6 min-h-6 w-6 shrink-0 cursor-pointer overflow-hidden"
                  />
                </div>
                <div className="flex flex-row items-center justify-between self-stretch">
                  <div className="flex flex-col items-start justify-start px-0 pb-0 pt-0.5">
                    <div className="relative leading-[20px] tracking-tight">
                      Subscription Agreement
                    </div>
                  </div>
                  <MdOutlineFileDownload
                    onClick={() => { }}
                    className="relative h-6 min-h-6 w-6 shrink-0 cursor-pointer overflow-hidden"
                  />{" "}
                </div>
                <div className="flex flex-row items-center justify-between self-stretch">
                  <div className="flex flex-col items-start justify-start px-0 pb-0 pt-0.5">
                    <div className="relative leading-[20px] tracking-tight">
                      Disclosures and Assertations
                    </div>
                  </div>
                  <MdOutlineFileDownload
                    onClick={() => { }}
                    className="relative h-6 min-h-6 w-6 shrink-0 cursor-pointer overflow-hidden"
                  />{" "}
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetailPage;
