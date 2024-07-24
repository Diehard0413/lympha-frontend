import Navbar from "@/components/common/Navbar";
import React from "react";
import TradingChartSection from "./TradingChartSection";
import MyHoldings from "./MyHoldings";
import Statistics from "./Statistics";
import BuyOrders from "./BuyOrders";
import SellOrders from "./SellOrders";
import BuySellTradingSection from "./BuySellTradingSection";
import SampleProjectTokens from "./SampleProjectTokens";
import TradingTabs from "./TradingTabs";

type Props = {};

const TradingPage = (props: Props) => {
  return (
    <div className="w-full min-h-screen relative [background:linear-gradient(rgba(230,_232,_232,_0.4),_rgba(230,_232,_232,_0.4)),_#fcfdfd] overflow-hidden flex flex-col items-start justify-start font-proxima">
      <Navbar />
      <main className="w-11/12 md:w-5/6 lg:w-4/5 mx-auto self-stretch flex flex-row items-start justify-center md:px-5 py-10">
        <section className="w-full flex flex-col items-start justify-start  gap-4 max-w-full text-left text-sm text-neutral-white">
          <div
            className={`w-full flex flex-col items-start justify-start gap-6 shrink-0 max-w-full text-left text-13xl text-neutral-black-6`}
          >
            {/* Trading Header */}
            <div className="w-full flex flex-col  md:flex-row items-start md:items-center justify-between max-w-full gap-2">
              <div className="w-max flex flex-row items-center justify-start gap-4 max-w-full">
                <img
                  className="size-20 relative object-cover"
                  loading="lazy"
                  alt=""
                  src={"/images/coins/let-coin.svg"}
                />
                <div className="flex-1 flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border min-w-[203px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-10 font-bold font-inherit text-2xl">
                      $LET
                    </h1>
                    <h2 className="m-0 self-stretch relative text-xl md:text-2xl tracking-tight">
                      Lympha Earch Token
                    </h2>
                  </div>
                </div>
              </div>
              <TradingTabs />
            </div>

            {/* Trading Body */}
            <div className="w-full flex flex-col md:flex-row items-start justify-start  gap-4 max-w-full ">
              <TradingChartSection />
              <Statistics />
            </div>
          </div>
          <MyHoldings />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 flex-row flex-wrap items-center justify-start gap-4 shrink-0 max-w-full">
            <BuyOrders />
            <SellOrders />
          </div>

          <BuySellTradingSection />

          <SampleProjectTokens />

          <div className="self-stretch rounded-[20px] bg-lightgray flex flex-col md:flex-row items-start justify-between p-5 box-border shrink-0 max-w-full gap-3 md:gap-5 text-lg md:text-xl text-gray-200">
            <div className=" flex flex-col items-start justify-start py-3 max-w-full">
              <h3 className="self-stretch relative  font-bold font-inherit inline-block ">
                You can also choose to retire your tokens
              </h3>
            </div>
            <button className=" shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-full px-5 bg-neutral-white flex flex-row items-start justify-start py-3 whitespace-nowrap text-base text-state-error hover:bg-state-error hover:text-neutral-white transition-all duration-300 ease-out">
              <b className="self-stretch flex-1 relative tracking-[0.15px] leading-[24px]">
                Retire my LCT tokens
              </b>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TradingPage;
