"use client";

import React from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import ProfileBanner from "./ProfileBanner";
import {
  MdCampaign,
  MdOutlineAccountBalance,
  MdOutlineAccountBalanceWallet,
  MdOutlinePassword,
  MdQuiz,
} from "react-icons/md";
import { RiSettings3Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { cn } from "@/app/helpers/utils";
import LinkedBankAccountSidebar from "../profile-sub-sections/LinkedBankAccountSidebar";
import MyWalletSidebar from "../profile-sub-sections/MyWalletSidebar";
import FeedbackSidebar from "../profile-sub-sections/FeedbackSidebar";
import SupportSidebar from "../profile-sub-sections/SupportSidebar";
import ChangePasswordSidebar from "../profile-sub-sections/ChangePasswordSidebar";

type Props = {
  onClose: () => void;
};

const ProfileSidebar = (props: Props) => {
  const navigate = useRouter();

  const [activeSidebarOption, setActiveSidebarOption] = React.useState<
    | "linked_bank_accounts"
    | "my_wallet"
    | "feedback"
    | "support"
    | "change_password"
    | "logout"
    | null
  >(null);

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
            <button
              onClick={() => {
                setActiveSidebarOption("linked_bank_accounts");
              }}
            >
              <IoIosArrowForward className="h-4 w-4 relative cursor-pointer" />
            </button>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_2px_20px_rgba(0,_0,_0,_0.07)] rounded-lg bg-neutral-white box-border flex flex-col items-start justify-start py-[17px] px-[19px] max-w-full border-[1px] border-solid border-darkcyan-300">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full">
            <MdOutlineAccountBalanceWallet className="h-4 w-4 relative overflow-hidden shrink-0" />
            <div className="flex-1 relative tracking-[-0.02em] leading-[130%] font-semibold inline-block min-w-[79px] max-w-full">
              My wallet details
            </div>
            <button
              onClick={() => {
                setActiveSidebarOption("my_wallet");
              }}
            >
              <IoIosArrowForward className="h-4 w-4 relative" />
            </button>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_2px_20px_rgba(0,_0,_0,_0.07)] rounded-lg bg-neutral-white box-border flex flex-col items-start justify-start py-[17px] px-[19px] max-w-full border-[1px] border-solid border-darkcyan-300">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full">
            <MdCampaign className="h-4 w-4 relative overflow-hidden shrink-0" />
            <div className="flex-1 relative tracking-[-0.02em] leading-[130%] font-semibold inline-block min-w-[47px] max-w-full">
              Feedback
            </div>
            <button
              onClick={() => {
                setActiveSidebarOption("feedback");
              }}
            >
              <IoIosArrowForward className="h-4 w-4 relative" />
            </button>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_2px_20px_rgba(0,_0,_0,_0.07)] rounded-lg bg-neutral-white box-border flex flex-col items-start justify-start py-[17px] px-[19px] max-w-full border-[1px] border-solid border-darkcyan-300">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full">
            <MdQuiz className="h-4 w-4 relative overflow-hidden shrink-0" />
            <div className="flex-1 relative tracking-[-0.02em] leading-[130%] font-semibold inline-block min-w-[38px] max-w-full">
              Support
            </div>
            <button
              onClick={() => {
                setActiveSidebarOption("support");
              }}
            >
              <IoIosArrowForward className="h-4 w-4 relative" />
            </button>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_2px_20px_rgba(0,_0,_0,_0.07)] rounded-lg bg-neutral-white box-border flex flex-col items-start justify-start py-[17px] px-[19px] max-w-full border-[1px] border-solid border-darkcyan-300">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full">
            <MdOutlinePassword className="h-4 w-4 relative overflow-hidden shrink-0" />
            <div className="flex-1 relative tracking-[-0.02em] leading-[130%] font-semibold inline-block min-w-[38px] max-w-full">
              Change Password
            </div>
            <button
              onClick={() => {
                setActiveSidebarOption("change_password");
              }}
            >
              <IoIosArrowForward className="h-4 w-4 relative" />
            </button>
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

      {/* Linked bank accounts */}
      <div
        className={cn(
          "z-[51] fixed top-0 right-0 bottom-0 translate-x-full min-h-screen max-h-screen max-w-xl backdrop-blur-2xl rounded-l-13xl bg-gray-300 overflow-hidden flex flex-col items-start justify-start py-10 px-10 gap-6 w-full  text-base text-neutral-black-3 transition-transform duration-500 ease-in-out",
          activeSidebarOption === "linked_bank_accounts" &&
            "translate-x-0 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]"
        )}
      >
        <LinkedBankAccountSidebar
          onClose={() => setActiveSidebarOption(null)}
        />
      </div>

      {/* Wallets */}
      <div
        className={cn(
          "z-[51] fixed top-0 right-0 bottom-0 translate-x-full min-h-screen max-h-screen max-w-xl   backdrop-blur-2xl rounded-l-13xl bg-gray-300 overflow-hidden flex flex-col items-start justify-start py-10 px-10 gap-6 w-full  text-base text-neutral-black-3 transition-transform duration-500 ease-in-out",
          activeSidebarOption === "my_wallet" &&
            "translate-x-0 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]"
        )}
      >
        <MyWalletSidebar onClose={() => setActiveSidebarOption(null)} />
      </div>

      {/* Feedback */}
      <div
        className={cn(
          "z-[51] fixed top-0 right-0 bottom-0 translate-x-full min-h-screen max-h-screen max-w-xl   backdrop-blur-2xl rounded-l-13xl bg-gray-300 overflow-hidden flex flex-col items-start justify-start py-10 px-10 gap-6 w-full  text-base text-neutral-black-3 transition-transform duration-500 ease-in-out",
          activeSidebarOption === "feedback" &&
            "translate-x-0 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]"
        )}
      >
        <FeedbackSidebar onClose={() => setActiveSidebarOption(null)} />
      </div>

      {/* Supports */}
      <div
        className={cn(
          "z-[51] fixed top-0 right-0 bottom-0 translate-x-full min-h-screen max-h-screen max-w-xl   backdrop-blur-2xl rounded-l-13xl bg-gray-300 overflow-hidden flex flex-col items-start justify-start py-10 px-10 gap-6 w-full  text-base text-neutral-black-3 transition-transform duration-500 ease-in-out",
          activeSidebarOption === "support" &&
            "translate-x-0 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]"
        )}
      >
        <SupportSidebar onClose={() => setActiveSidebarOption(null)} />
      </div>

      {/* Supports */}
      <div
        className={cn(
          "z-[51] fixed top-0 right-0 bottom-0 translate-x-full min-h-screen max-h-screen max-w-xl   backdrop-blur-2xl rounded-l-13xl bg-gray-300 overflow-hidden flex flex-col items-start justify-start py-10 px-10 gap-6 w-full  text-base text-neutral-black-3 transition-transform duration-500 ease-in-out",
          activeSidebarOption === "change_password" &&
            "translate-x-0 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]"
        )}
      >
        <ChangePasswordSidebar onClose={() => setActiveSidebarOption(null)} />
      </div>
    </div>
  );
};

export default ProfileSidebar;
