"use client";

import { cn } from "@/app/helpers/utils";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import ProfileSidebar from "./ProfileSidebar";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import NavbarListSidebar from "./NavbarListSidebar";
import { useSession } from "next-auth/react";

export type NavbarType = {
  className?: string;
};

const Navbar = ({ className = "" }) => {
  const { data: session, update } = useSession();
  const user = session?.user;

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);

  return (
    <header
      className={
        "flex items-center self-stretch shadow-[0px_2px_24px_rgba(0,_0,_0,_0.04)] bg-gray-300  justify-between px-5 md:px-10 h-20 gap-5 font-normal font-proxima z-40"
      }
    >
      <Link href="/" className="flex flex-row items-start justify-start">
        <img className="h-8 relative" alt="" src="/images/logo-icon.svg" />
      </Link>
      <div className="hidden md:flex flex-col items-start justify-start gap-x-10">
        <div className="self-stretch flex flex-row items-start justify-between gap-5 gap-x-10">
          <Link
            href="/"
            className={cn(
              "flex flex-row items-center justify-start",
              (pathname.includes("/dashboard") || pathname == "/") &&
                "font-bold"
            )}
          >
            <div className="relative tracking-wide inline-block">Dashboard</div>
          </Link>
          <Link
            href="/trading"
            className={cn(
              "flex flex-row items-center justify-center",
              pathname.includes("/trading") && " font-bold"
            )}
          >
            <div className="flex flex-col items-start justify-start">
              Trading
            </div>
            <IoMdArrowDropdown className="h-6 w-6 relative min-h-[24px]" />
          </Link>
          <Link
            href="/invest"
            className={cn(
              "flex flex-row items-center justify-center",
              pathname.includes("/invest") && " font-bold"
            )}
          >
            <div className="flex flex-row items-start justify-start">
              Invest
            </div>
          </Link>
          <Link
            href="/list-projects"
            className={cn(
              "flex flex-row items-center justify-center",
              pathname.includes("/list-projects") && " font-bold"
            )}
          >
            <div className="relative whitespace-nowrap tracking-tighter">
              List a Project
            </div>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-x-5">
        <button
          onClick={() => setIsOpen(true)}
          className="size-8 flex items-center justify-center rounded-full bg-darkcyan-200 t p-[5px] text-lg text-neutral-white"
        >
          <b className="relative leading-[22px] inline-block min-w-[13px] whitespace-nowrap">
            {user?.name?.charAt(0).toUpperCase()}
          </b>
        </button>
        <button
          onClick={() => setIsNavbarMenuOpen(true)}
          className="size-8 flex items-center justify-center rounded-full  text-black md:hidden"
        >
          <CiMenuFries className="size-7" />
        </button>
      </div>
      <div
        className={cn(
          "z-50 fixed top-0 right-0 bottom-0 translate-x-full min-h-screen max-h-screen max-w-xl   backdrop-blur-2xl rounded-l-13xl bg-gray-300 overflow-hidden flex flex-col items-start justify-start p-5 md:p-8 lg:p-10 gap-6 w-full  text-base text-neutral-black-3 transition-transform duration-500 ease-in-out",
          isOpen && "translate-x-0 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]"
        )}
      >
        <ProfileSidebar onClose={() => setIsOpen(false)} />
      </div>
      <div
        className={cn(
          "z-50 fixed top-0 right-0 bottom-0 translate-x-full min-h-screen max-h-screen max-w-xl  backdrop-blur-2xl rounded-l-13xl bg-gray-300 overflow-hidden flex flex-col items-start justify-start p-5 md:p-8 lg:p-10 gap-6 w-full  text-base text-neutral-black-3 transition-transform duration-500 ease-in-out",
          isNavbarMenuOpen &&
            "translate-x-0 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]"
        )}
      >
        <NavbarListSidebar onClose={() => setIsNavbarMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Navbar;
