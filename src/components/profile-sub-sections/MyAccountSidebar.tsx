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
    <div className="flex w-full flex-col gap-y-5">
      <div className="flex max-w-full flex-col items-start justify-start self-stretch">
        <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-2 self-stretch">
          <button onClick={props.onClose}>
            <FaArrowLeft className="relative h-6 min-h-[24px] w-6" />
          </button>
          <div className="box-border flex min-w-[289px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-px">
            <div className="mq450:flex-wrap flex flex-row items-start justify-between gap-[20px] self-stretch">
              <b className="relative inline-block min-w-[46px] leading-[140%] tracking-[-0.02em]">
                Profile
              </b>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`text-neutral-black-3 font-body-large-bold mq298:gap-[16px] mq298:pl-5 mq298:pr-5 mq298:box-border box-border flex w-full max-w-full flex-col items-start justify-start gap-[32px] overflow-hidden rounded-13xl bg-gray-300 px-[60px] pb-[635px] pt-20 text-left text-base leading-[normal] tracking-[normal] shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)] [backdrop-filter:blur(80px)]`}
      >
        <div className="flex max-w-full flex-row items-center justify-start gap-[8px] self-stretch">
          <img
            className="relative h-6 min-h-[24px] w-6 shrink-0 overflow-hidden"
            loading="lazy"
            alt=""
            src="/iconsnavigate-before.svg"
          />
          <div className="mq468:hidden flex max-w-full flex-1 flex-row items-center justify-between gap-[20px]">
            <b className="relative inline-block min-w-[81px] whitespace-nowrap leading-[140%] tracking-[-0.02em]">
              My account
            </b>
            <b className="relative inline-block h-[19px] w-[58px] whitespace-nowrap leading-[120%] text-lympha-primary opacity-[0]">
              View all
            </b>
          </div>
        </div>
        <section className="font-body-large-bold flex max-w-full flex-col items-start justify-start gap-[4px] self-stretch text-left text-base text-neutral-black-4">
          <b className="relative inline-block min-w-[42px] leading-[140%] tracking-[-0.02em]">
            Name
          </b>
          <div className="box-border flex max-w-full flex-row items-center justify-start gap-[12px] self-stretch whitespace-nowrap rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white py-4 pl-[19px] pr-[11px]">
            <div className="relative inline-block max-w-[calc(100%_-_30px)] flex-1 leading-[140%] tracking-[-0.02em]">
              Arushi Parasrampuria
            </div>
            <img
              className="relative h-[18px] w-[18px]"
              alt=""
              src="/icontrailing1.svg"
            />
          </div>
          <div className="relative hidden w-[189px] text-sm leading-[140%] tracking-[-0.02em]">{`helper text lorem ipsum dolor sit `}</div>
        </section>
        <section className="font-body-large-bold flex max-w-full flex-col items-start justify-start gap-[4px] self-stretch text-left text-base text-neutral-black-4">
          <b className="relative inline-block min-w-[39px] leading-[140%] tracking-[-0.02em]">
            Email
          </b>
          <div className="box-border flex max-w-full flex-row items-center justify-start gap-[12px] self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white py-4 pl-[19px] pr-[11px]">
            <input
              className="font-body-large-bold relative inline-block h-[22px] w-[calc(100%_-_48px)] min-w-[150px] max-w-[calc(100%_-_30px)] flex-1 whitespace-nowrap bg-[transparent] p-0 text-left text-base leading-[140%] tracking-[-0.02em] text-neutral-black-4 [border:none] [outline:none]"
              placeholder="arushi.parasrampuria@gmail.com"
              type="text"
            />
            <img
              className="relative h-[18px] w-[18px]"
              alt=""
              src="/icontrailing1.svg"
            />
          </div>
          <div className="relative hidden w-[189px] text-sm leading-[140%] tracking-[-0.02em]">{`helper text lorem ipsum dolor sit `}</div>
        </section>
        <div className="flex flex-row items-center justify-center gap-[8px] rounded-13xl text-lg text-lympha-primary">
          <b className="relative leading-[140%] tracking-[-0.02em]">
            Change Password
          </b>
          <img
            className="relative h-[18px] w-[18px]"
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
