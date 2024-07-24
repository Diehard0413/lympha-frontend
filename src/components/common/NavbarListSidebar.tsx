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
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/app/helpers/utils";
import LinkedBankAccountSidebar from "../profile-sub-sections/LinkedBankAccountSidebar";
import MyWalletSidebar from "../profile-sub-sections/MyWalletSidebar";
import FeedbackSidebar from "../profile-sub-sections/FeedbackSidebar";
import SupportSidebar from "../profile-sub-sections/SupportSidebar";
import ChangePasswordSidebar from "../profile-sub-sections/ChangePasswordSidebar";
import Link from "next/link";

type Props = {
  onClose: () => void;
};

const NavbarListSidebar = (props: Props) => {
  const navigate = useRouter();
  const pathname = usePathname();

  const navItems = [
    {
      id: "1",
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      id: "2",
      title: "Trading",
      href: "/trading",
    },
    {
      id: "3",
      title: "Invest",
      href: "/invest",
    },
    {
      id: "4",
      title: "List a Project",
      href: "/list-projects",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-y-5">
      <div className="flex max-w-full flex-col items-start justify-start self-stretch">
        <div className="flex max-w-full flex-row items-center justify-start gap-5 self-stretch">
          <button onClick={props.onClose}>
            <IoMdClose className="relative h-6 min-h-[24px] w-6" />
          </button>
          <div className="flex flex-1 items-center justify-center">
            <Link href="/" className="flex flex-row items-start justify-start">
              <img
                className="relative h-8"
                alt=""
                src="/images/full-logo.svg"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-full flex-col items-start justify-start gap-[16px] text-sm text-neutral-black-5">
        <ul className="flex w-full flex-col items-center justify-center gap-y-4 py-10 text-xl">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="flex flex-row items-center justify-start gap-4"
            >
              <Link
                href={item.href}
                className={cn(
                  "flex flex-row items-center",
                  pathname.includes(item.href) && "font-medium",
                )}
              >
                <div className="relative inline-block">{item.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarListSidebar;
