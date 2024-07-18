"use client";

import React from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import ProfileBanner from "../common/ProfileBanner";
import {
  MdCampaign,
  MdOutlineAccountBalance,
  MdOutlineAccountBalanceWallet,
  MdQuiz,
} from "react-icons/md";
import { RiSettings3Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { cn } from "@/app/helpers/utils";
import { FaArrowLeft } from "react-icons/fa6";

type Props = {
  onClose: () => void;
};

const LinkedBankAccountSidebar = (props: Props) => {
  const navigate = useRouter();
  return (
    <div className="w-full flex flex-col gap-y-5">
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-2 max-w-full">
          <button onClick={props.onClose}>
            <FaArrowLeft className="h-6 w-6 relative min-h-[24px]" />
          </button>
          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[289px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[46px]">
                Profile
              </b>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)] [backdrop-filter:blur(80px)] rounded-13xl bg-gray-300 max-w-full overflow-hidden flex flex-col items-start justify-start pt-20 px-[60px] pb-[635px] box-border gap-[32px] leading-[normal] tracking-[normal] text-left text-base text-neutral-black-3 font-body-large-bold mq298:gap-[16px] mq298:pl-5 mq298:pr-5 mq298:box-border `}
      >
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/iconsnavigate-before.svg"
          />
          <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[20px] mq468:hidden">
            <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[81px] whitespace-nowrap">
              My account
            </b>
            <b className="h-[19px] w-[58px] relative leading-[120%] inline-block text-lympha-primary opacity-[0] whitespace-nowrap">
              View all
            </b>
          </div>
        </div>
        <section className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-left text-base text-neutral-black-4 font-body-large-bold">
          <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[42px]">
            Name
          </b>
          <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-row items-center justify-start py-4 pr-[11px] pl-[19px] gap-[12px] whitespace-nowrap max-w-full border-[0.5px] border-solid border-neutral-black-2">
            <div className="flex-1 relative tracking-[-0.02em] leading-[140%] inline-block max-w-[calc(100%_-_30px)]">
              Arushi Parasrampuria
            </div>
            <img
              className="h-[18px] w-[18px] relative"
              alt=""
              src="/icontrailing1.svg"
            />
          </div>
          <div className="w-[189px] relative text-sm tracking-[-0.02em] leading-[140%] hidden">{`helper text lorem ipsum dolor sit `}</div>
        </section>
        <section className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-left text-base text-neutral-black-4 font-body-large-bold">
          <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[39px]">
            Email
          </b>
          <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-row items-center justify-start py-4 pr-[11px] pl-[19px] gap-[12px] max-w-full border-[0.5px] border-solid border-neutral-black-2">
            <input
              className="w-[calc(100%_-_48px)] [border:none] [outline:none] font-body-large-bold text-base bg-[transparent] h-[22px] flex-1 relative tracking-[-0.02em] leading-[140%] text-neutral-black-4 text-left inline-block min-w-[150px] whitespace-nowrap max-w-[calc(100%_-_30px)] p-0"
              placeholder="arushi.parasrampuria@gmail.com"
              type="text"
            />
            <img
              className="h-[18px] w-[18px] relative"
              alt=""
              src="/icontrailing1.svg"
            />
          </div>
          <div className="w-[189px] relative text-sm tracking-[-0.02em] leading-[140%] hidden">{`helper text lorem ipsum dolor sit `}</div>
        </section>
        <div className="rounded-13xl flex flex-row items-center justify-center gap-[8px] text-lg text-lympha-primary">
          <b className="relative tracking-[-0.02em] leading-[140%]">
            Change Password
          </b>
          <img
            className="h-[18px] w-[18px] relative"
            loading="lazy"
            alt=""
            src="/--navigation--arrow-forward1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LinkedBankAccountSidebar;
