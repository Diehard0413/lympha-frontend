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
import { logout } from "@/actions/logout";

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
    <div className="flex w-full flex-col gap-y-5">
      <div className="flex max-w-full flex-col items-start justify-start self-stretch">
        <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-2 self-stretch">
          <button onClick={props.onClose}>
            <IoMdClose className="relative h-6 min-h-[24px] w-6" />
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
      <ProfileBanner />
      <div className="flex w-full max-w-full flex-col items-start justify-start gap-[16px] text-sm text-neutral-black-5">
        <div className="box-border flex max-w-full flex-col items-start justify-start self-stretch rounded-lg border-[1px] border-solid border-darkcyan-300 bg-neutral-white px-[19px] py-[17px] shadow-[0px_2px_20px_rgba(0,_0,_0,_0.07)]">
          <div className="flex max-w-full flex-row flex-wrap items-center justify-start gap-[10px] self-stretch">
            <MdOutlineAccountBalance className="relative h-4 w-4 shrink-0 overflow-hidden" />
            <div className="relative inline-block min-w-[106px] max-w-full flex-1 font-semibold leading-[130%] tracking-[-0.02em]">
              Linked Bank Accounts
            </div>
            <button
              onClick={() => {
                setActiveSidebarOption("linked_bank_accounts");
              }}
            >
              <IoIosArrowForward className="relative h-4 w-4 cursor-pointer" />
            </button>
          </div>
        </div>
        <div className="box-border flex max-w-full flex-col items-start justify-start self-stretch rounded-lg border-[1px] border-solid border-darkcyan-300 bg-neutral-white px-[19px] py-[17px] shadow-[0px_2px_20px_rgba(0,_0,_0,_0.07)]">
          <div className="flex max-w-full flex-row flex-wrap items-center justify-start gap-[10px] self-stretch">
            <MdOutlineAccountBalanceWallet className="relative h-4 w-4 shrink-0 overflow-hidden" />
            <div className="relative inline-block min-w-[79px] max-w-full flex-1 font-semibold leading-[130%] tracking-[-0.02em]">
              My wallet details
            </div>
            <button
              onClick={() => {
                setActiveSidebarOption("my_wallet");
              }}
            >
              <IoIosArrowForward className="relative h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="box-border flex max-w-full flex-col items-start justify-start self-stretch rounded-lg border-[1px] border-solid border-darkcyan-300 bg-neutral-white px-[19px] py-[17px] shadow-[0px_2px_20px_rgba(0,_0,_0,_0.07)]">
          <div className="flex max-w-full flex-row flex-wrap items-center justify-start gap-[10px] self-stretch">
            <MdCampaign className="relative h-4 w-4 shrink-0 overflow-hidden" />
            <div className="relative inline-block min-w-[47px] max-w-full flex-1 font-semibold leading-[130%] tracking-[-0.02em]">
              Feedback
            </div>
            <button
              onClick={() => {
                setActiveSidebarOption("feedback");
              }}
            >
              <IoIosArrowForward className="relative h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="box-border flex max-w-full flex-col items-start justify-start self-stretch rounded-lg border-[1px] border-solid border-darkcyan-300 bg-neutral-white px-[19px] py-[17px] shadow-[0px_2px_20px_rgba(0,_0,_0,_0.07)]">
          <div className="flex max-w-full flex-row flex-wrap items-center justify-start gap-[10px] self-stretch">
            <MdQuiz className="relative h-4 w-4 shrink-0 overflow-hidden" />
            <div className="relative inline-block min-w-[38px] max-w-full flex-1 font-semibold leading-[130%] tracking-[-0.02em]">
              Support
            </div>
            <button
              onClick={() => {
                setActiveSidebarOption("support");
              }}
            >
              <IoIosArrowForward className="relative h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="box-border flex max-w-full flex-col items-start justify-start self-stretch rounded-lg border-[1px] border-solid border-darkcyan-300 bg-neutral-white px-[19px] py-[17px] shadow-[0px_2px_20px_rgba(0,_0,_0,_0.07)]">
          <div className="flex max-w-full flex-row flex-wrap items-center justify-start gap-[10px] self-stretch">
            <MdOutlinePassword className="relative h-4 w-4 shrink-0 overflow-hidden" />
            <div className="relative inline-block min-w-[38px] max-w-full flex-1 font-semibold leading-[130%] tracking-[-0.02em]">
              Change Password
            </div>
            <button
              onClick={() => {
                setActiveSidebarOption("change_password");
              }}
            >
              <IoIosArrowForward className="relative h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="box-border flex max-w-full flex-col items-start justify-start self-stretch rounded-lg border-[1px] border-solid border-darkcyan-300 bg-neutral-white px-[19px] py-[17px] shadow-[0px_2px_20px_rgba(0,_0,_0,_0.07)]">
          <div className="flex max-w-full flex-row flex-wrap items-center justify-start gap-[10px] self-stretch">
            <RiSettings3Fill className="relative h-4 w-4 shrink-0 overflow-hidden" />
            <div className="flex min-w-[250px] max-w-full flex-1 flex-row items-center justify-start">
              <div className="relative inline-block w-[262px] shrink-0 font-semibold leading-[130%] tracking-[-0.02em]">
                Log out
              </div>
            </div>
            <button
              onClick={async () => {
                await logout();
                navigate.push("/auth/login");
              }}
              className=""
            >
              <IoIosArrowForward className="relative h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Linked bank accounts */}
      <div
        className={cn(
          "text-neutral-black-3 fixed bottom-0 right-0 top-0 z-[51] flex max-h-screen min-h-screen w-full max-w-xl translate-x-full flex-col items-start justify-start gap-6 overflow-hidden rounded-l-13xl bg-gray-300 px-10 py-10 text-base backdrop-blur-2xl transition-transform duration-500 ease-in-out",
          activeSidebarOption === "linked_bank_accounts" &&
            "translate-x-0 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]",
        )}
      >
        <LinkedBankAccountSidebar
          onClose={() => setActiveSidebarOption(null)}
        />
      </div>

      {/* Wallets */}
      <div
        className={cn(
          "text-neutral-black-3 fixed bottom-0 right-0 top-0 z-[51] flex max-h-screen min-h-screen w-full max-w-xl translate-x-full flex-col items-start justify-start gap-6 overflow-hidden rounded-l-13xl bg-gray-300 px-10 py-10 text-base backdrop-blur-2xl transition-transform duration-500 ease-in-out",
          activeSidebarOption === "my_wallet" &&
            "translate-x-0 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]",
        )}
      >
        <MyWalletSidebar activeSidebarOption={activeSidebarOption} onClose={() => setActiveSidebarOption(null)} />
      </div>

      {/* Feedback */}
      <div
        className={cn(
          "text-neutral-black-3 fixed bottom-0 right-0 top-0 z-[51] flex max-h-screen min-h-screen w-full max-w-xl translate-x-full flex-col items-start justify-start gap-6 overflow-hidden rounded-l-13xl bg-gray-300 px-10 py-10 text-base backdrop-blur-2xl transition-transform duration-500 ease-in-out",
          activeSidebarOption === "feedback" &&
            "translate-x-0 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]",
        )}
      >
        <FeedbackSidebar onClose={() => setActiveSidebarOption(null)} />
      </div>

      {/* Supports */}
      <div
        className={cn(
          "text-neutral-black-3 fixed bottom-0 right-0 top-0 z-[51] flex max-h-screen min-h-screen w-full max-w-xl translate-x-full flex-col items-start justify-start gap-6 overflow-hidden rounded-l-13xl bg-gray-300 px-10 py-10 text-base backdrop-blur-2xl transition-transform duration-500 ease-in-out",
          activeSidebarOption === "support" &&
            "translate-x-0 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]",
        )}
      >
        <SupportSidebar onClose={() => setActiveSidebarOption(null)} />
      </div>

      {/* Supports */}
      <div
        className={cn(
          "text-neutral-black-3 fixed bottom-0 right-0 top-0 z-[51] flex max-h-screen min-h-screen w-full max-w-xl translate-x-full flex-col items-start justify-start gap-6 overflow-hidden rounded-l-13xl bg-gray-300 px-10 py-10 text-base backdrop-blur-2xl transition-transform duration-500 ease-in-out",
          activeSidebarOption === "change_password" &&
            "translate-x-0 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]",
        )}
      >
        <ChangePasswordSidebar onClose={() => setActiveSidebarOption(null)} />
      </div>
    </div>
  );
};

export default ProfileSidebar;
