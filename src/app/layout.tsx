import type { Metadata } from "next";
import "./globals.css";
import { cn } from "./helpers/utils";
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";
import AuthWrapper from "./auth_wrapper";
import HashConnectProvider from '../context/hashconnect'
import SingingProvider from '../context/signing'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserInfoProvider from "@/context/userinfo";

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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <SingingProvider>
          <HashConnectProvider>
            <UserInfoProvider>
              <AuthWrapper>
                {/* <LoadingPage /> */}
                {children}
              </AuthWrapper>
            </UserInfoProvider>
          </HashConnectProvider>
        </SingingProvider>
      </body>
    </html>
  );
}
