"use client";

import React from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import ProfileBanner from "./ProfileBanner";
import {
  MdCampaign,
  MdOutlineAccountBalance,
  MdOutlineAccountBalanceWallet,
  MdQuiz,
} from "react-icons/md";
import { RiSettings3Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";

type Props = {
  onClose: () => void;
};

const ProfileSidebar = (props: Props) => {
  const navigate = useRouter();

  return (
    <div className="w-full flex flex-col gap-y-5">
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-2 max-w-full">
          <button onClick={props.onClose}>
            <IoMdClose className="h-6 w-6 relative min-h-[24px]" />
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
      <ProfileBanner />
      <div className="w-full flex flex-col items-start justify-start gap-[16px] max-w-full text-sm text-neutral-black-5">
        <div className="self-stretch shadow-[0px_2px_20px_rgba(0,_0,_0,_0.07)] rounded-lg bg-neutral-white box-border flex flex-col items-start justify-start py-[17px] px-[19px] max-w-full border-[1px] border-solid border-darkcyan-300">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full">
            <MdOutlineAccountBalance className="h-4 w-4 relative overflow-hidden shrink-0" />
            <div className="flex-1 relative tracking-[-0.02em] leading-[130%] font-semibold inline-block min-w-[106px] max-w-full">
              Linked Bank Accounts
            </div>
            <IoIosArrowForward className="h-4 w-4 relative" />
          </div>
        </div>
        <div className="self-stretch shadow-[0px_2px_20px_rgba(0,_0,_0,_0.07)] rounded-lg bg-neutral-white box-border flex flex-col items-start justify-start py-[17px] px-[19px] max-w-full border-[1px] border-solid border-darkcyan-300">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full">
            <MdOutlineAccountBalanceWallet className="h-4 w-4 relative overflow-hidden shrink-0" />
            <div className="flex-1 relative tracking-[-0.02em] leading-[130%] font-semibold inline-block min-w-[79px] max-w-full">
              My wallet details
            </div>
            <IoIosArrowForward className="h-4 w-4 relative" />
          </div>
        </div>
        <div className="self-stretch shadow-[0px_2px_20px_rgba(0,_0,_0,_0.07)] rounded-lg bg-neutral-white box-border flex flex-col items-start justify-start py-[17px] px-[19px] max-w-full border-[1px] border-solid border-darkcyan-300">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full">
            <MdCampaign className="h-4 w-4 relative overflow-hidden shrink-0" />
            <div className="flex-1 relative tracking-[-0.02em] leading-[130%] font-semibold inline-block min-w-[47px] max-w-full">
              Feedback
            </div>
            <IoIosArrowForward className="h-4 w-4 relative" />
          </div>
        </div>
        <div className="self-stretch shadow-[0px_2px_20px_rgba(0,_0,_0,_0.07)] rounded-lg bg-neutral-white box-border flex flex-col items-start justify-start py-[17px] px-[19px] max-w-full border-[1px] border-solid border-darkcyan-300">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full">
            <MdQuiz className="h-4 w-4 relative overflow-hidden shrink-0" />
            <div className="flex-1 relative tracking-[-0.02em] leading-[130%] font-semibold inline-block min-w-[38px] max-w-full">
              Support
            </div>
            <IoIosArrowForward className="h-4 w-4 relative" />
          </div>
        </div>
        <div className="self-stretch shadow-[0px_2px_20px_rgba(0,_0,_0,_0.07)] rounded-lg bg-neutral-white box-border flex flex-col items-start justify-start py-[17px] px-[19px] max-w-full border-[1px] border-solid border-darkcyan-300">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full">
            <RiSettings3Fill className="h-4 w-4 relative overflow-hidden shrink-0" />
            <div className="flex-1 flex flex-row items-center justify-start min-w-[250px] max-w-full">
              <div className="w-[262px] relative tracking-[-0.02em] leading-[130%] font-semibold inline-block shrink-0">
                Log out
              </div>
            </div>
            <button
              onClick={() => {
                navigate.push("/auth/signin");
              }}
              className=""
            >
              <IoIosArrowForward className="h-4 w-4 relative" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
