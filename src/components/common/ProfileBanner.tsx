import React from "react";
import UploadModal from "../UploadModal";
import { cn } from "@/app/helpers/utils";
import { useSession } from "next-auth/react";

type Props = {};
const radius = 49.5;
const circumference = 2 * Math.PI * radius;

const ProfileBanner = (props: Props) => {
  const [profileProgress, setProfileProgress] = React.useState(85);
  const [isUploadStatus, setIsUploadStatus] = React.useState(false);
  const offset = circumference - (profileProgress / 100) * circumference;
  const session = useSession();
  const user = session.data?.user;
  const [progress, setProgress] = React.useState(10);

  return (
    <div className="w-full rounded-2xl bg-gray-500 font-sans text-neutral-white">
      <div className="flex w-full flex-col items-start justify-start gap-y-3 divide-y divide-neutral-black-2 self-stretch rounded-2xl p-4">
        <div className="flex flex-1 flex-row items-center justify-start gap-6">
          <div className="relative flex flex-row items-center justify-between">
            <div className="items-cente flex size-20 flex-row justify-center p-1.5 md:size-24 lg:size-28">
              <div className="border-gainsboro-400 size-full rounded-full [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.09)_inset)]">
                <div className="z-[2] flex size-full items-center justify-center rounded-full bg-cadetblue mix-blend-normal">
                  <h1 className="relative m-auto text-2xl font-bold tracking-tight text-inherit text-white">
                    {user?.name?.charAt(0).toUpperCase()}
                  </h1>
                </div>
              </div>
            </div>

            <svg
              className="absolute inset-0 size-20 shrink-0 md:size-24 lg:size-28"
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
          <div className="box-border flex flex-row items-start justify-start px-0 py-0 font-proxima text-xl text-neutral-black-5 md:text-2xl">
            <div className="flex shrink-0 flex-col items-start justify-start gap-1">
              <h2 className="relative font-bold leading-7 tracking-tight text-inherit">
                {session.data?.user?.name}
              </h2>
              <div className="text-neutral-black-3 relative whitespace-nowrap text-sm leading-5 tracking-tight md:text-base">
                {user?.email || ""}
              </div>
            </div>
          </div>
        </div>
        <div className="relative self-stretch font-proxima text-neutral-black-5 md:text-lg">
          <div className="flex h-full w-full max-w-full flex-col items-center justify-center gap-2 rounded-lg py-4 md:px-5">
            <div className="flex flex-row items-start justify-center self-stretch">
              <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-2">
                <div className="mq725:flex-wrap flex flex-row items-center justify-between gap-[20px] self-stretch">
                  <div className="flex flex-col items-start">
                    <b className="relative leading-[140%] tracking-tight">
                      Project Title
                    </b>
                    <b className="flex items-center">
                      <span className="text-sm font-normal leading-tight">
                        $ 50,000{" "}
                      </span>
                      <span className="text-sm font-normal leading-tight">
                        raised out of $ 5,00,000
                      </span>
                    </b>
                  </div>

                  <div className="flex flex-col items-start justify-start whitespace-nowrap rounded-xl bg-state-warning px-2.5 py-0.5 text-xs text-neutral-white">
                    <b className="relative inline-block min-w-[69px] leading-[17px] tracking-tight">
                      under review
                    </b>
                  </div>
                </div>
                {!isUploadStatus && <UploadModal />}
                <div className="flex w-full items-center gap-x-3">
                  <div className="h-4 flex-1 rounded-full bg-white">
                    <div
                      style={{ width: `${progress}%` }}
                      className={cn("h-full rounded-full bg-lympha-primary")}
                    />
                  </div>
                  <div>
                    <b className="text-center text-base font-bold leading-snug text-neutral-black-5">
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
