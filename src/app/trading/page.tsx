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
      <main className="w-4/5 mx-auto self-stretch flex flex-row items-start justify-center px-5 py-10">
        <section className="w-full flex flex-col items-start justify-start  gap-4 max-w-full text-left text-sm text-neutral-white">
          <div
            className={`w-full flex flex-col items-start justify-start gap-6 shrink-0 max-w-full text-left text-13xl text-neutral-black-6`}
          >
            {/* Trading Header */}
            <div className="w-full flex flex-row items-center justify-between max-w-full gap-2">
              <div className="w-max flex flex-row items-center justify-start gap-4 max-w-full">
                <img
                  className="size-20 relative object-cover"
                  loading="lazy"
                  alt=""
                  src={"/images/coins/let-coin.svg"}
                />
                <div className="flex-1 flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border min-w-[203px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[45px] font-bold font-inherit mq450:text-lgi mq450:leading-[27px] mq1025:text-7xl mq1025:leading-[36px]">
                      $LET
                    </h1>
                    <h2 className="m-0 self-stretch relative text-2xl tracking-wide">
                      Lympha Earch Token
                    </h2>
                  </div>
                </div>
              </div>
              <TradingTabs />
            </div>

            {/* Trading Body */}
            <div className="w-full flex flex-row items-start justify-start  gap-4 max-w-full ">
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

          <div className="self-stretch rounded-[20px] bg-lightgray flex flex-row items-start justify-between p-5 box-border shrink-0 max-w-full gap-[20px] text-xl text-gray-200 mq750:flex-wrap">
            <div className="w-[372px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-full">
              <h3 className="m-0 self-stretch h-6 relative text-inherit leading-[120%] font-bold font-inherit inline-block mq450:text-base mq450:leading-[19px]">
                You can also choose to retire your tokens
              </h3>
            </div>
            <button className="h-12 w-[205px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl bg-neutral-white flex flex-row items-start justify-start py-3 px-6 box-border whitespace-nowrap text-base text-state-error hover:bg-state-error hover:text-neutral-white transition-all duration-300 ease-out">
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
