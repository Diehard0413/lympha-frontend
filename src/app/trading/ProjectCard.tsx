"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { approveProject } from "@/actions/project";
import { useRouter } from "next/navigation";

export type ProjectCardType = {
  className?: string;
  project: {
    _id: string;
    title: string;
    email: string;
    method: string;
    description: string;
    minInvest: number;
    tokensOffered: number;
    approved: boolean;
  };
};

const ProjectCard: FC<ProjectCardType> = ({ className = "", project }) => {
  const router = useRouter();

  const [isApproving, setIsApproving] = useState(false);

  const onApprove = async () => {
    setIsApproving(true);
    try {
      const response = await approveProject(project._id, true);
      if (response.result) {
        router.push("/invest");
      }
    } catch (error) {
      console.log(error);
    }
    setIsApproving(false);
  }

  return (
    <div
      className={`flex flex-col items-start justify-start overflow-hidden rounded-2xl bg-neutral-white text-left text-lg text-neutral-black-6 shadow-[0px_0px_20px_rgba(0,_0,_0,_0.04)] ${className} group`}
    >
      <div className="group flex h-36 flex-col items-start justify-start self-stretch overflow-hidden">
        <img
          className="relative max-h-full max-w-full flex-1 self-stretch overflow-hidden object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
          loading="lazy"
          alt=""
          src="/images/image-1.png"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[24px] self-stretch p-4">
        <div className="flex flex-col items-start justify-start self-stretch">
          <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
            <b className="relative inline-block min-w-[94px] leading-[140%] tracking-[-0.02em]">
              {project.title}
            </b>
            <div className="flex flex-col items-start justify-start self-stretch text-sm text-neutral-black-4">
              <b className="relative self-stretch leading-[20px] tracking-[-0.02em]">
                Method: {project.method}
              </b>
              <div className="relative self-stretch leading-[140%] tracking-[-0.02em]">
                {project.description}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[24px] self-stretch text-xs text-neutral-black-4">
          <div className="flex flex-1 flex-col items-start justify-start py-0 pl-0 pr-[11px]">
            <div className="relative inline-block min-w-[94px] leading-[17px] tracking-[-0.02em]">
              Min Invest: ${project.minInvest}
            </div>
            <div className="relative inline-block h-[17px] self-stretch leading-[140%] tracking-[-0.02em]">
              Tokens Offered: {project.tokensOffered}
            </div>
          </div>
          {project.approved ?
            <Link
              href={`/invest/${project._id}`}
              className="flex w-[50px] flex-row items-start justify-start text-sm text-neutral-white"
            >
              <div className="flex flex-1 flex-row items-center justify-center gap-[8px] rounded-13xl border-[2px] border-solid border-darkslategray bg-lympha-primary px-3.5 py-1.5 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)]">
                <b className="relative hidden w-[52px] self-stretch uppercase leading-[130%] tracking-[-0.02em]">
                  get let
                </b>
                <IoIosArrowForward className="relative h-[18px] w-[18px]" />
              </div>
            </Link> :
            <button disabled={isApproving} onClick={(e) => { onApprove(); }} className="text-sm font-body-large-bold text-neutral-white uppercase leading-[130%] tracking-[-0.02em] gap-[8px] rounded-13xl border-[2px] border-solid border-darkslategray bg-lympha-primary px-3.5 py-1.5 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)]">
              {isApproving && (
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
              Approve
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
