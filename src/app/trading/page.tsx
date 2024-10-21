"use client";

import Navbar from "@/components/common/Navbar";
import React, { useEffect, useState } from "react";
import TradingChartSection from "./TradingChartSection";
import MyHoldings from "./MyHoldings";
import Statistics from "./Statistics";
import BuyOrders from "./BuyOrders";
import SellOrders from "./SellOrders";
import BuySellTradingSection from "./BuySellTradingSection";
import SampleProjectTokens from "./SampleProjectTokens";
import TradingTabs from "./TradingTabs";
import configs from "@/configs";

import { toast } from "react-toastify";

type Props = {};

const TradingPage = (props: Props) => {

  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    let ws: WebSocket;

    const connect = () => {
      ws = new WebSocket(configs.SOCKET_URL);

      ws.onopen = () => {
        console.log('WebSocket connection established');
      };

      ws.onmessage = (event: MessageEvent) => {
        console.log('WebSocket message received:', event.data);
      };

      ws.onerror = (error: Event) => {
        console.log('WebSocket error:', error);
      };

      ws.onclose = (e: CloseEvent) => {
        console.log('WebSocket connection closed');
        if (!e.wasClean) {
          setTimeout(connect, 5000); // Try to reconnect after 5 seconds
        }
      };

      setSocket(ws);
    };

    connect();

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send('Hello from Next.js!');
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden font-proxima [background:linear-gradient(rgba(230,_232,_232,_0.4),_rgba(230,_232,_232,_0.4)),_#fcfdfd]">
      <Navbar />
      <main className="mx-auto flex w-11/12 flex-row items-start justify-center self-stretch py-10 md:w-5/6 md:px-5 lg:w-4/5">
        <section className="flex w-full max-w-full flex-col items-start justify-start gap-4 text-left text-sm text-neutral-white">
          <div
            className={`text-13xl flex w-full max-w-full shrink-0 flex-col items-start justify-start gap-6 text-left text-neutral-black-6`}
          >
            {/* Trading Header */}
            <div className="flex w-full max-w-full flex-col items-start justify-between gap-2 md:flex-row md:items-center">
              <div className="flex w-max max-w-full flex-row items-center justify-start gap-4">
                <img
                  className="relative size-20 object-cover"
                  loading="lazy"
                  alt=""
                  src={"/images/coins/let-coin.svg"}
                />
                <div className="box-border flex min-w-[203px] flex-1 flex-row items-center justify-start py-0 pl-0 pr-5">
                  <div className="flex flex-1 flex-col items-start justify-start">
                    <h1 onClick={() => { sendMessage(); }} className="font-inherit relative m-0 self-stretch text-2xl font-bold leading-10 tracking-[-0.02em] text-inherit">
                      $LET
                    </h1>
                    <h2 className="relative m-0 self-stretch text-xl tracking-tight md:text-2xl">
                      Lympha Earch Token
                    </h2>
                  </div>
                </div>
              </div>
              <TradingTabs />
            </div>

            {/* Trading Body */}
            <div className="flex w-full max-w-full flex-col items-start justify-start gap-4 md:flex-row">
              <TradingChartSection />
              <Statistics />
            </div>
          </div>
          <MyHoldings />
          <div className="grid w-full max-w-full shrink-0 grid-cols-1 flex-row flex-wrap items-center justify-start gap-4 md:grid-cols-2">
            <BuyOrders />
            <SellOrders />
          </div>

          <BuySellTradingSection />

          <SampleProjectTokens />

          <div className="box-border flex max-w-full shrink-0 flex-col items-start justify-between gap-3 self-stretch rounded-[20px] bg-lightgray p-5 text-lg text-gray-200 md:flex-row md:gap-5 md:text-xl">
            <div className="flex max-w-full flex-col items-start justify-start py-3">
              <h3 className="font-inherit relative inline-block self-stretch font-bold">
                You can also choose to retire your tokens
              </h3>
            </div>
            <button className="flex flex-row items-start justify-start whitespace-nowrap rounded-full bg-neutral-white px-5 py-3 text-base text-state-error shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] transition-all duration-300 ease-out hover:bg-state-error hover:text-neutral-white">
              <b className="relative flex-1 self-stretch leading-[24px] tracking-[0.15px]">
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
