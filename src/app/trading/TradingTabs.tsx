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
    <div className="flex max-w-full flex-row items-center justify-start gap-2 overflow-x-auto rounded-full bg-neutral-white px-4 py-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "flex w-max shrink-0 cursor-pointer flex-row items-center justify-center rounded-full border-[2px] border-solid border-darkslategray bg-lympha-disabled px-3 py-1.5 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] transition-all duration-300 ease-in-out hover:box-border hover:border-[2px] hover:border-solid hover:border-teal hover:bg-darkcyan-100 md:px-5 md:py-2",
            activeTab === tab.id
              ? "bg-lympha-primary text-neutral-white"
              : "bg-lympha-disabled text-lympha-primary hover:bg-darkcyan-100 hover:text-neutral-white",
          )}
        >
          <b className="">{tab.title}</b>
        </button>
      ))}
    </div>
  );
};

export default TradingTabs;
