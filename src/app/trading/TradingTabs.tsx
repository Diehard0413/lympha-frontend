"use client";
import React from "react";
import { cn } from "../helpers/utils";

type Props = {};

const TradingTabs = (props: Props) => {
  const tabs = [
    {
      id: "1",
      title: "Deposit",
    },
    {
      id: "2",
      title: "Withdraw",
    },
    {
      id: "3",
      title: "Send",
    },
    {
      id: "4",
      title: "Transfer",
    },
    {
      id: "5",
      title: "Transaction History",
    },
  ];

  const [activeTab, setActiveTab] = React.useState(tabs[0].id);

  return (
    <div className="rounded-full bg-neutral-white overflow-x-auto flex flex-row items-center justify-start py-4 px-4 gap-2 max-w-full">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "cursor-pointer py-1.5 md:py-2 px-3 md:px-5 bg-lympha-disabled w-max shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-full shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-teal transition-all duration-300 ease-in-out",
            activeTab === tab.id
              ? "bg-lympha-primary text-neutral-white"
              : "bg-lympha-disabled text-lympha-primary hover:bg-darkcyan-100 hover:text-neutral-white"
          )}
        >
          <b className="">{tab.title}</b>
        </button>
      ))}
    </div>
  );
};

export default TradingTabs;
