import React from "react";
import UploadModal from "../UploadModal";
import { cn } from "@/app/helpers/utils";

type Props = {};
const radius = 49.5;
const circumference = 2 * Math.PI * radius;


const ProfileBanner = (props: Props) => {
  const [profileProgress, setProfileProgress] = React.useState(85);
  const [isUploadStatus, setIsUploadStatus] = React.useState(false);

  const offset = circumference - (profileProgress / 100) * circumference;

  const [progress, setProgress] = React.useState(10);

  return (
    <div className="w-full rounded-2xl bg-gray-500 text-neutral-white font-sans">
      <div className="self-stretch rounded-2xl flex flex-col items-start justify-start p-4 w-full divide-y divide-neutral-black-2 gap-y-3">
        <div className="flex-1 flex flex-row items-center justify-start gap-6 ">
          <div className="flex flex-row items-center justify-between relative ">
            <div className="flex flex-row items-cente justify-center size-28 p-1.5">
              <div className=" size-full [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.09)_inset)] rounded-full border-gainsboro-400">
                <div className="size-full flex items-center justify-center rounded-full bg-cadetblue mix-blend-normal z-[2]">
                  <h1 className="relative text-white m-auto text-inherit tracking-tight font-bold text-2xl">
                    A
                  </h1>
                </div>
              </div>
            </div>

            <svg
              className="size-28 shrink-0 absolute inset-0"
              viewBox="0 0 114 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_35_4809)">
                <circle
                  cx="56.8706"
                  cy="56.5586"
                  r="49.5"
                  stroke="#D8E2EB"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                <circle
                  cx="56.8706"
                  cy="56.5586"
                  r="49.5"
                  stroke="#066e79"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                />
              </g>

              <defs>
                <filter
                  id="filter0_i_35_4809"
                  x="0.370605"
                  y="0.0585938"
                  width="113"
                  height="117"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_35_4809"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className=" flex flex-row items-start justify-start py-0 px-0 box-border text-2xl text-neutral-black-5 font-proxima">
            <div className="flex flex-col items-start justify-start gap-1 shrink-0">
              <h2 className="relative text-inherit tracking-tight leading-7 font-bold">
                Arushi Parasrampuria
              </h2>
              <div className="relative text-base tracking-tight leading-5 text-neutral-black-3 whitespace-nowrap">
                arushi.parasrampuria@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-lg text-neutral-black-5 font-proxima">
          <div className="rounded-lg w-full flex flex-col items-center justify-center py-4 px-5 gap-2 max-w-full h-full">
            <div className="self-stretch flex flex-row items-start justify-center">
              <div className="flex-1 flex flex-col items-start justify-start gap-2 max-w-full">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq725:flex-wrap">
                  <div className="flex flex-col items-start">
                    <b className="relative tracking-tight leading-[140%]">
                      Project Title
                    </b>
                    <b className="flex items-center">
                      <span className=" text-sm font-normal leading-tight">
                        $ 50,000{" "}
                      </span>
                      <span className=" text-sm font-normal leading-tight">
                        raised out of $ 5,00,000
                      </span>
                    </b>
                  </div>

                  <div className="rounded-xl bg-state-warning flex flex-col items-start justify-start py-0.5 px-2.5 whitespace-nowrap text-xs text-neutral-white">
                    <b className="relative tracking-tight leading-[17px] inline-block min-w-[69px]">
                      under review
                    </b>
                  </div>
                </div>
                {!isUploadStatus && <UploadModal />}
                <div className="flex w-full items-center gap-x-3">
                  <div className="h-4 flex-1 bg-white rounded-full ">
                    <div
                      style={{ width: `${progress}%` }}
                      className={cn("h-full rounded-full bg-lympha-primary")}
                    />
                  </div>
                  <div>
                    <b className="text-center text-neutral-black-5 text-base font-bold leading-snug">
                      {progress}%
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
