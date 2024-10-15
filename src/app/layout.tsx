import type { Metadata } from "next";
import "./globals.css";
import { cn } from "./helpers/utils";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import AuthWrapper from "./auth_wrapper";
import { HashConnect } from "hashconnect/dist/hashconnect";
import { HashConnectContextProvider } from 'hashconnect-provider';

export const metadata: Metadata = {
  title: "Lympha - Invest in the future",
  description: "Invest in the future with Lympha and help remove CO2e",
};

const proxima = localFont({
  src: [
    {
      path: "../assets/fonts/Proxima/Proxima Nova Thin.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Proxima/ProximaNova-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Proxima/Proxima Nova Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Proxima/Proxima Nova Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-proxima",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(proxima.variable, "text-neutral-black-5")}>
        <Toaster
          position="top-right"
          gutter={16}
          containerClassName="fixed z-[1000] top-0 right-0"
        />
        <HashConnectContextProvider hashConnect={new HashConnect(true)} network="testnet" metaData={{
          name: "Lympha - Invest in the future",
          description: "Invest in the future with Lympha and help remove CO2e",
          icon: "https://www.hashpack.app/img/logo.svg",
          url: "https://lympha.vercel.app"
        }}
        >
          <AuthWrapper>
            {/* <LoadingPage /> */}
            {children}
          </AuthWrapper>
        </HashConnectContextProvider>
      </body>
    </html>
  );
}
