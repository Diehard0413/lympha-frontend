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
        "z-40 flex h-20 items-center justify-between gap-5 self-stretch bg-gray-300 px-5 font-proxima font-normal shadow-[0px_2px_24px_rgba(0,_0,_0,_0.04)] md:px-10"
      }
    >
      <Link href="/" className="flex flex-row items-start justify-start">
        <img className="relative h-8" alt="" src="/images/logo-icon.svg" />
      </Link>
      <div className="hidden flex-col items-start justify-start gap-x-10 md:flex">
        <div className="flex flex-row items-start justify-between gap-5 gap-x-10 self-stretch">
          <Link
            href="/"
            className={cn(
              "flex flex-row items-center justify-start",
              (pathname.includes("/dashboard") || pathname == "/") &&
                "font-bold",
            )}
          >
            <div className="relative inline-block tracking-wide">Dashboard</div>
          </Link>
          <Link
            href="/trading"
            className={cn(
              "flex flex-row items-center justify-center",
              pathname.includes("/trading") && "font-bold",
            )}
          >
            <div className="flex flex-col items-start justify-start">
              Trading
            </div>
            <IoMdArrowDropdown className="relative h-6 min-h-[24px] w-6" />
          </Link>
          <Link
            href="/invest"
            className={cn(
              "flex flex-row items-center justify-center",
              pathname.includes("/invest") && "font-bold",
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
              pathname.includes("/list-projects") && "font-bold",
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
          className="t flex size-8 items-center justify-center rounded-full bg-darkcyan-200 p-[5px] text-lg text-neutral-white"
        >
          <b className="relative inline-block min-w-[13px] whitespace-nowrap leading-[22px]">
            {user?.name?.charAt(0).toUpperCase()}
          </b>
        </button>
        <button
          onClick={() => setIsNavbarMenuOpen(true)}
          className="flex size-8 items-center justify-center rounded-full text-black md:hidden"
        >
          <CiMenuFries className="size-7" />
        </button>
      </div>
      <div
        className={cn(
          "text-neutral-black-3 fixed bottom-0 right-0 top-0 z-50 flex max-h-screen min-h-screen w-full max-w-xl translate-x-full flex-col items-start justify-start gap-6 overflow-hidden rounded-l-13xl bg-gray-300 p-5 text-base backdrop-blur-2xl transition-transform duration-500 ease-in-out md:p-8 lg:p-10",
          isOpen && "translate-x-0 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]",
        )}
      >
        <ProfileSidebar onClose={() => setIsOpen(false)} />
      </div>
      <div
        className={cn(
          "text-neutral-black-3 fixed bottom-0 right-0 top-0 z-50 flex max-h-screen min-h-screen w-full max-w-xl translate-x-full flex-col items-start justify-start gap-6 overflow-hidden rounded-l-13xl bg-gray-300 p-5 text-base backdrop-blur-2xl transition-transform duration-500 ease-in-out md:p-8 lg:p-10",
          isNavbarMenuOpen &&
            "translate-x-0 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]",
        )}
      >
        <NavbarListSidebar onClose={() => setIsNavbarMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Navbar;
