import { cn } from "@/app/helpers/utils";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion } from "framer-motion";
import React from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

type Props = {};

const MyPortfolio = (props: Props) => {
  const [hiddenValue, setHiddenValue] = React.useState(true);
  const [enabelValue, setEnableValue] = React.useState(false);
  return (
    <div className="self-stretch rounded-3xl bg-neutral-white flex flex-col items-center justify-center p-6 box-border max-w-full">
      <TabGroup className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq675:flex-wrap">
          <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[140%] font-bold font-inherit mq450:text-3xl mq450:leading-[31px]">
            My Portfolio
          </h3>
          <TabList className="rounded-11xl bg-neutral-black-1 flex flex-row items-center justify-start p-1 gap-[4px] text-sm">
            <Tab
              className={cn(
                "cursor-pointer border-none outline-none py-2 px-5 data-[selected]:bg-neutral-white rounded-2xl flex flex-row items-center justify-center hover:bg-gainsboro"
              )}
            >
              <b className="relative text-sm tracking-[-0.02em] leading-[20px] inline-block font-body-large-bold text-neutral-black-6 text-left min-w-[56px]">
                overview
              </b>
            </Tab>
            <Tab
              className={cn(
                "cursor-pointer border-none outline-none py-2 px-5 data-[selected]:bg-neutral-white rounded-2xl flex flex-row items-center justify-center hover:bg-gainsboro"
              )}
            >
              <b className="relative tracking-[-0.02em] leading-[20px] inline-block min-w-[64px]">
                my tokens
              </b>
            </Tab>
          </TabList>
        </div>
        <TabPanels className="self-stretch rounded-2xl bg-neutral-white box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-[16px] max-w-full text-base border-[1px] border-solid border-silver">
          {/* overview */}
          <TabPanel className="w-full">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="w-[292px] flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[-0.02em] leading-[140%]">
                  Current Value
                </div>
                <div className="flex flex-row items-center justify-start gap-4">
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="m-0 relative text-inherit tracking-wide leading-[45px] font-normal text-3xl"
                  >
                    $ {hiddenValue ? "******" : "78,338.00"}
                  </motion.h2>
                  {hiddenValue ? (
                    <LuEye
                      className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                      onClick={() => setHiddenValue(false)}
                    />
                  ) : (
                    <LuEyeOff
                      className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                      onClick={() => setHiddenValue(true)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="w-full self-stretch flex flex-row items-center justify-between text-lg ">
              <div className="flex-1 flex flex-row items-center justify-start gap-6 ">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[98px]">
                    Total Returns
                  </div>
                  <b className="relative tracking-[-0.02em] leading-[140%] inline-block text-state-success min-w-[91px]">
                    +$8,338.00
                  </b>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[76px]">
                    1D returns
                  </div>
                  <b className="relative tracking-[-0.02em] leading-[140%] inline-block text-state-error min-w-[53px]">
                    -$8.00
                  </b>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-2">
                <button className="cursor-pointer py-1.5 px-[22px] bg-lympha-primary flex-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl flex flex-row items-center justify-center whitespace-nowrap border-[2px] border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px] hover:hover:border-teal">
                  <b className="relative text-sm  uppercase  text-neutral-white shrink-0">
                    get let
                  </b>
                </button>
                <button className="cursor-pointer py-1.5 px-[22px] bg-lympha-primary flex-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl flex flex-row items-center justify-center whitespace-nowrap border-[2px] border-solid border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-teal">
                  <b className="relative text-sm  uppercase  text-neutral-white text-left min-w-[53px]">
                    get lct
                  </b>
                </button>
              </div>
            </div>
          </TabPanel>

          {/* my tokens */}
          <TabPanel className="w-full">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="w-[292px] flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[-0.02em] leading-[140%]">
                  Current Value
                </div>
                <div className="flex flex-row items-center justify-start gap-4">
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="m-0 relative text-inherit tracking-wide leading-[45px] font-normal text-3xl"
                  >
                    $ {hiddenValue ? "******" : "74,322.40"}
                  </motion.h2>
                  {hiddenValue ? (
                    <LuEye
                      className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                      onClick={() => setHiddenValue(false)}
                    />
                  ) : (
                    <LuEyeOff
                      className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                      onClick={() => setHiddenValue(true)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="w-full self-stretch flex flex-row items-center justify-between text-lg ">
              <div className="flex-1 flex flex-row items-center justify-start gap-6 ">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[98px]">
                    Total Returns
                  </div>
                  <b className="relative tracking-[-0.02em] leading-[140%] inline-block text-state-success min-w-[91px]">
                    +$12,136.00
                  </b>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[76px]">
                    1D returns
                  </div>
                  <b className="relative tracking-[-0.02em] leading-[140%] inline-block text-state-error min-w-[53px]">
                    -$9.00
                  </b>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-2">
                <button className="cursor-pointer py-1.5 px-[22px] bg-lympha-primary flex-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl flex flex-row items-center justify-center whitespace-nowrap border-[2px] border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px] hover:hover:border-teal">
                  <b className="relative text-sm  uppercase  text-neutral-white shrink-0">
                    get let
                  </b>
                </button>
                <button className="cursor-pointer py-1.5 px-[22px] bg-lympha-primary flex-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl flex flex-row items-center justify-center whitespace-nowrap border-[2px] border-solid border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-teal">
                  <b className="relative text-sm  uppercase  text-neutral-white text-left min-w-[53px]">
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
