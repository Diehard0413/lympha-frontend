import Link from "next/link";
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { IoIosArrowForward } from "react-icons/io";

export type ProjectCardType = {
  className?: string;
  project: {
    id: string;
    title: string;
    method: string;
    description: string;
    minInvest: number;
    tokensOffered: number;
  };
};

const ProjectCard: FunctionComponent<ProjectCardType> = ({
  className = "",
  project,
}) => {
  return (
    <Link
      href={`/invest/${project.id}`}
      className={`shadow-[0px_0px_20px_rgba(0,_0,_0,_0.04)] rounded-2xl bg-neutral-white overflow-hidden flex flex-col items-start justify-start text-left text-lg text-neutral-black-6 font-body-large-bold ${className}`}
    >
      <div className="self-stretch h-[140px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/images/image-1.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start p-4 gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[94px]">
              {project.title}
            </b>
            <div className="self-stretch flex flex-col items-start justify-start text-sm text-neutral-black-4">
              <b className="self-stretch relative tracking-[-0.02em] leading-[20px]">
                Method: {project.method}
              </b>
              <div className="self-stretch relative tracking-[-0.02em] leading-[140%]">
                {project.description}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[24px] text-xs text-neutral-black-4">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
            <div className="relative tracking-[-0.02em] leading-[17px] inline-block min-w-[94px]">
              Min Invest: ${project.minInvest}
            </div>
            <div className="self-stretch h-[17px] relative tracking-[-0.02em] leading-[140%] inline-block">
              Tokens Offered: {project.tokensOffered}
            </div>
          </div>
          <div className="w-[50px] flex flex-row items-start justify-start text-sm text-neutral-white">
            <div className="flex-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl bg-lympha-primary flex flex-row items-center justify-center py-1.5 px-3.5 gap-[8px] border-[2px] border-solid border-darkslategray">
              <b className="self-stretch w-[52px] relative tracking-[-0.02em] leading-[130%] uppercase hidden">
                get let
              </b>
              <IoIosArrowForward className="h-[18px] w-[18px] relative" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
