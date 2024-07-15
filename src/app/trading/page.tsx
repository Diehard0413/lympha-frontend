import Navbar from "@/components/common/Navbar";
import React from "react";
import TradingChartSection from "./TradingChartSection";
import OrdersSection from "./OrdersSection";
import MyHoldings from "./MyHoldings";
import Labels from "./Labels";
import InputPair from "./InputPair";
import ProjectCard from "./ProjectCard";
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import Statistics from "./Statistics";
import BuyOrders from "./BuyOrders";
import SellOrders from "./SellOrders";

type Props = {};

const TradingPage = (props: Props) => {
  const projects = [
    {
      id: "1",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "2",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "3",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "4",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "5",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "6",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "7",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "8",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
    {
      id: "9",
      title: "Project Title",
      method: "XYZ",
      description:
        "The Convertible project is bringing new solutions to the automotive and...",
      minInvest: 2000,
      tokensOffered: 47333834,
    },
  ];

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
              <div className="rounded-full bg-neutral-white overflow-x-auto flex flex-row items-center justify-start py-4 px-4 gap-2 max-w-full">
                <button className="cursor-pointer py-2 px-5 bg-lympha-primary w-max shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl box-border shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-teal">
                  <b className="relative text-base tracking-[-0.02em] leading-[140%] inline-block font-body-large-bold text-neutral-white text-left min-w-[55px]">
                    Deposit
                  </b>
                </button>
                <button className="cursor-pointer [border:none] py-3 px-6 bg-lympha-disabled rounded-13xl flex flex-row items-center justify-center hover:bg-gainsboro-200">
                  <b className="relative text-base tracking-[-0.02em] leading-[140%] inline-block font-body-large-bold text-lympha-primary text-left min-w-[68px]">
                    Withdraw
                  </b>
                </button>
                <button className="cursor-pointer [border:none] py-3 px-6 bg-lympha-disabled rounded-13xl flex flex-row items-center justify-center hover:bg-gainsboro-200">
                  <b className="relative text-base tracking-[-0.02em] leading-[140%] inline-block font-body-large-bold text-lympha-primary text-left min-w-[37px]">
                    Send
                  </b>
                </button>
                <button className="cursor-pointer [border:none] py-3 px-6 bg-lympha-disabled rounded-13xl flex flex-row items-center justify-center hover:bg-gainsboro-200">
                  <b className="relative text-base tracking-[-0.02em] leading-[140%] inline-block font-body-large-bold text-lympha-primary text-left min-w-[58px]">
                    Transfer
                  </b>
                </button>
                <button className="cursor-pointer [border:none] py-3 px-6 bg-lympha-disabled rounded-13xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-200">
                  <b className="relative text-base tracking-[-0.02em] leading-[140%] font-body-large-bold text-lympha-primary text-left">
                    Transaction History
                  </b>
                </button>
              </div>
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
            {/* <OrdersSection /> */}
          </div>

          {/* Trading Footer */}

          <div className="self-stretch shadow-[0px_2px_36px_rgba(0,_0,_0,_0.08)] rounded-13xl bg-neutral-white flex flex-col items-start justify-start py-6 px-4 box-border gap-[24px] shrink-0 max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-neutral-black-5 mq750:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[12px]">
                <div className="rounded-mid bg-neutral-black-1 flex flex-row items-start justify-start py-0.5 px-2">
                  <b className="relative tracking-[-0.02em] leading-[23px] inline-block min-w-[34px]">
                    Limit
                  </b>
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <b className="relative tracking-[-0.02em] leading-[23px] inline-block min-w-[49px]">
                    Market
                  </b>
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="flex flex-row items-start justify-start gap-[4px]">
                    <b className="relative tracking-[-0.02em] leading-[23px] inline-block min-w-[67px]">
                      Stop-limit
                    </b>
                    <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                      <IoMdArrowDropdown className="h-6 w-6 relative min-h-[24px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px] max-w-full mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[2.5px] pb-0 pr-2 pl-0">
                  <div className="rounded-mid bg-neutral-black-1 flex flex-row items-start justify-start py-0.5 px-2">
                    <b className="relative tracking-[-0.02em] leading-[23px] inline-block min-w-[57px]">
                      Transfer
                    </b>
                  </div>
                </div>
                <div className="h-[28.5px] flex flex-col items-start justify-start pt-[3.5px] pb-0 pr-[7px] pl-0 box-border">
                  <div className="w-px h-[26px] relative box-border border-r-[1px] border-solid border-neutral-black-1" />
                </div>
                <div className="flex flex-col items-start justify-start pt-[2.5px] pb-0 pr-2 pl-0">
                  <div className="rounded-mid bg-neutral-black-1 flex flex-row items-start justify-start py-0.5 px-2">
                    <b className="relative tracking-[-0.02em] leading-[23px] inline-block min-w-[80px]">
                      Auto-Invest
                    </b>
                  </div>
                </div>
                <div className="h-[28.5px] flex flex-col items-start justify-start pt-[3.5px] pb-0 pr-[7px] pl-0 box-border">
                  <div className="w-px h-[26px] relative box-border border-r-[1px] border-solid border-neutral-black-1" />
                </div>
                <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                  <div className="relative tracking-[-0.02em] leading-[23px] inline-block min-w-[58px]">{`Buy with `}</div>
                </div>
                <div className="w-20 rounded-full bg-neutral-white1 box-border flex flex-row items-center justify-center py-1 px-3 border border-neutral-black-1">
                  <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[33px]">
                    USD
                  </b>
                  <IoIosArrowForward className="w-3.5 h-3.5 relative" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-2 box-border max-w-full text-neutral-black-2">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 flex-col items-start justify-start gap-4 max-w-full gap-x-10">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-5">
                  <Labels />
                  <InputPair />
                  <div className="flex-1 rounded-lg bg-neutral-white box-border flex flex-row items-start justify-start py-4 pr-[11px] pl-[19px] gap-[12px] min-w-[309px] max-w-full border-[0.5px] border-solid border-neutral-black-2 mq750:flex-wrap">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[140%] inline-block min-w-[24px] max-w-full">
                      Total
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-mid text-neutral-black-5">
                      <div className="h-[18px] rounded-13xl flex flex-row items-start justify-start gap-[8px]">
                        <b className="mt-[-1px] relative tracking-[-0.02em] leading-[120%] inline-block min-w-[30px]">
                          393
                        </b>
                        <b className="mt-[-1px] relative tracking-[-0.02em] leading-[120%] inline-block min-w-[30px]">
                          LCT
                        </b>
                      </div>
                    </div>
                  </div>
                  <button className="w-full cursor-pointer py-[17px] px-5 bg-state-success flex-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl box-border flex flex-row items-start justify-center min-w-[309px] whitespace-nowrap max-w-full border-[2px] border-solid border-darkslategray hover:bg-mediumseagreen hover:box-border hover:border-[2px] hover:border-solid hover:border-teal">
                    <b className="relative text-mid tracking-[-0.02em] leading-[120%] inline-block font-body-large-bold text-neutral-white text-left min-w-[68px]">
                      BUY LCT
                    </b>
                  </button>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-5">
                  <Labels />
                  <InputPair />
                  <div className="flex-1 rounded-lg bg-neutral-white box-border flex flex-row items-start justify-start py-4 pr-[11px] pl-[19px] gap-[12px] min-w-[309px] max-w-full border-[0.5px] border-solid border-neutral-black-2 mq750:flex-wrap">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[140%] inline-block min-w-[24px] max-w-full">
                      Total
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-mid text-neutral-black-5">
                      <div className="h-[18px] rounded-13xl flex flex-row items-start justify-start gap-[8px]">
                        <b className="mt-[-1px] relative tracking-[-0.02em] leading-[120%] inline-block min-w-[30px]">
                          393
                        </b>
                        <b className="mt-[-1px] relative tracking-[-0.02em] leading-[120%] inline-block min-w-[30px]">
                          LCT
                        </b>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer py-[17px] px-5 bg-state-error flex-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl box-border flex flex-row items-start justify-center min-w-[309px] whitespace-nowrap max-w-full border-[2px] border-solid border-darkslategray hover:bg-crimson hover:box-border hover:border-[2px] hover:border-solid hover:border-teal">
                    <b className="relative text-mid tracking-[-0.02em] leading-[120%] inline-block font-body-large-bold text-neutral-white text-left min-w-[68px]">
                      BUY LCT
                    </b>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-6 px-0 pb-0 gap-4 shrink-0 text-2xl text-neutral-black-6">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[140%] font-bold font-inherit mq450:text-3xl mq450:leading-[31px]">
                  Invest your Lympha Carbon Tokens in Projects
                </h1>
                <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[140%] font-normal font-inherit text-neutral-black-4 mq450:text-3xl mq450:leading-[31px]">
                  Here are some of the projects you can choose to invest in.
                  Some copy on these lines.
                </h1>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch grid flex-row items-start justify-start gap-4 grid-cols-4">
                  {projects.slice(0, 4).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-[20px] bg-lightgray flex flex-row items-start justify-between p-5 box-border shrink-0 max-w-full gap-[20px] text-xl text-gray-200 mq750:flex-wrap">
            <div className="w-[372px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-full">
              <h3 className="m-0 self-stretch h-6 relative text-inherit leading-[120%] font-bold font-inherit inline-block mq450:text-base mq450:leading-[19px]">
                You can also choose to retire your tokens
              </h3>
            </div>
            <div className="h-12 w-[205px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl bg-neutral-white flex flex-row items-start justify-start py-3 px-6 box-border whitespace-nowrap text-base text-state-error">
              <b className="self-stretch flex-1 relative tracking-[0.15px] leading-[24px]">
                Retire my LCT tokens
              </b>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TradingPage;
