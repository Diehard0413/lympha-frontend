import { cn } from "@/app/helpers/utils";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

type Props = {};

const MyPortfolio = (props: Props) => {
  const [hiddenValue, setHiddenValue] = React.useState(true);
  return (
    <div className="box-border flex max-w-full flex-col items-center justify-center self-stretch rounded-3xl bg-neutral-white p-6">
      <TabGroup className="flex max-w-full flex-col items-start justify-start gap-[20px] self-stretch">
        <div className="mq675:flex-wrap flex flex-row items-center justify-between gap-[20px] self-stretch">
          <h3 className="relative whitespace-nowrap font-bold leading-[140%] tracking-tight text-inherit">
            My Portfolio
          </h3>
          <TabList className="flex flex-row items-center justify-start gap-[4px] rounded-11xl bg-neutral-black-1 p-1 text-sm">
            <Tab
              className={cn(
                "flex cursor-pointer flex-row items-center justify-center rounded-2xl border-none px-3 py-1.5 outline-none hover:bg-gainsboro data-[selected]:bg-neutral-white md:px-5 md:py-2",
              )}
            >
              <b className="font-body-large-bold relative inline-block min-w-[56px] text-left text-sm leading-[20px] tracking-[-0.02em] text-neutral-black-6">
                overview
              </b>
            </Tab>
            <Tab
              className={cn(
                "flex cursor-pointer flex-row items-center justify-center rounded-2xl border-none px-3 py-1.5 outline-none hover:bg-gainsboro data-[selected]:bg-neutral-white md:px-5 md:py-2",
              )}
            >
              <b className="relative inline-block min-w-[64px] leading-[20px] tracking-[-0.02em]">
                my tokens
              </b>
            </Tab>
          </TabList>
        </div>
        <TabPanels className="border-silver box-border flex max-w-full flex-col items-start justify-start gap-[16px] self-stretch rounded-2xl border-[1px] border-solid bg-neutral-white px-[23px] py-[22px] text-base">
          {/* overview */}
          <TabPanel className="w-full">
            <div className="flex flex-row items-center justify-start self-stretch">
              <div className="flex w-[292px] flex-col items-start justify-start gap-[4px]">
                <div className="relative self-stretch leading-[140%] tracking-[-0.02em]">
                  Current Value
                </div>
                <div className="flex flex-row items-center justify-start gap-4">
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative m-0 text-3xl font-normal leading-[45px] tracking-wide text-inherit"
                  >
                    $ {hiddenValue ? "******" : "78,338.00"}
                  </motion.h2>
                  {hiddenValue ? (
                    <LuEye
                      className="relative h-6 w-6 shrink-0 cursor-pointer overflow-hidden"
                      onClick={() => setHiddenValue(false)}
                    />
                  ) : (
                    <LuEyeOff
                      className="relative h-6 w-6 shrink-0 cursor-pointer overflow-hidden"
                      onClick={() => setHiddenValue(true)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-between gap-y-2 self-stretch text-lg md:flex-row md:items-center">
              <div className="flex flex-1 flex-col items-start justify-start gap-2 md:flex-row md:items-center md:gap-4 lg:gap-6">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="relative inline-block min-w-[98px] leading-[140%] tracking-[-0.02em]">
                    Total Returns
                  </div>
                  <b className="relative inline-block min-w-[91px] leading-[140%] tracking-[-0.02em] text-state-success">
                    +$8,338.00
                  </b>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="relative inline-block min-w-[76px] leading-[140%] tracking-[-0.02em]">
                    1D returns
                  </div>
                  <b className="relative inline-block min-w-[53px] leading-[140%] tracking-[-0.02em] text-state-error">
                    -$8.00
                  </b>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-2">
                <Link
                  href="/trading"
                  className="flex flex-1 cursor-pointer flex-row items-center justify-center whitespace-nowrap rounded-13xl border-[2px] border-darkslategray bg-lympha-primary px-[22px] py-1.5 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] hover:box-border hover:border-[2px] hover:hover:border-teal hover:bg-darkcyan-100"
                >
                  <b className="relative shrink-0 text-sm uppercase text-neutral-white">
                    get let
                  </b>
                </Link>
                <Link
                  href="/trading"
                  className="flex flex-1 cursor-pointer flex-row items-center justify-center whitespace-nowrap rounded-13xl border-[2px] border-solid border-darkslategray bg-lympha-primary px-[22px] py-1.5 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] hover:box-border hover:border-[2px] hover:border-solid hover:border-teal hover:bg-darkcyan-100"
                >
                  <b className="relative min-w-[53px] text-left text-sm uppercase text-neutral-white">
                    get lct
                  </b>
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="w-full">
            <div className="flex flex-row items-center justify-start self-stretch">
              <div className="flex w-[292px] flex-col items-start justify-start gap-[4px]">
                <div className="relative self-stretch leading-[140%] tracking-[-0.02em]">
                  Current Value
                </div>
                <div className="flex flex-row items-center justify-start gap-4">
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative m-0 text-3xl font-normal leading-[45px] tracking-wide text-inherit"
                  >
                    $ {hiddenValue ? "******" : "78,338.00"}
                  </motion.h2>
                  {hiddenValue ? (
                    <LuEye
                      className="relative h-6 w-6 shrink-0 cursor-pointer overflow-hidden"
                      onClick={() => setHiddenValue(false)}
                    />
                  ) : (
                    <LuEyeOff
                      className="relative h-6 w-6 shrink-0 cursor-pointer overflow-hidden"
                      onClick={() => setHiddenValue(true)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-between gap-y-2 self-stretch text-lg md:flex-row md:items-center">
              <div className="flex flex-1 flex-col items-start justify-start gap-2 md:flex-row md:items-center md:gap-4 lg:gap-6">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="relative inline-block min-w-[98px] leading-[140%] tracking-[-0.02em]">
                    Total Returns
                  </div>
                  <b className="relative inline-block min-w-[91px] leading-[140%] tracking-[-0.02em] text-state-success">
                    +$8,338.00
                  </b>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="relative inline-block min-w-[76px] leading-[140%] tracking-[-0.02em]">
                    1D returns
                  </div>
                  <b className="relative inline-block min-w-[53px] leading-[140%] tracking-[-0.02em] text-state-error">
                    -$8.00
                  </b>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-2">
                <button className="flex flex-1 cursor-pointer flex-row items-center justify-center whitespace-nowrap rounded-13xl border-[2px] border-darkslategray bg-lympha-primary px-[22px] py-1.5 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] hover:box-border hover:border-[2px] hover:hover:border-teal hover:bg-darkcyan-100">
                  <b className="relative shrink-0 text-sm uppercase text-neutral-white">
                    get let
                  </b>
                </button>
                <button className="flex flex-1 cursor-pointer flex-row items-center justify-center whitespace-nowrap rounded-13xl border-[2px] border-solid border-darkslategray bg-lympha-primary px-[22px] py-1.5 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] hover:box-border hover:border-[2px] hover:border-solid hover:border-teal hover:bg-darkcyan-100">
                  <b className="relative min-w-[53px] text-left text-sm uppercase text-neutral-white">
                    get lct
                  </b>
                </button>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default MyPortfolio;
