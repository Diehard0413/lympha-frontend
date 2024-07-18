"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/app/helpers/utils";
import { FaArrowLeft } from "react-icons/fa6";

type Props = {
  onClose: () => void;
};

const LinkedBankAccountSidebar = (props: Props) => {
  const navigate = useRouter();

  const [linkedBankAccounts, setLinkedBankAccounts] = React.useState([
    {
      bankName: "Access Bank",
      primaryBank: true,
      verified: true,
      accountNumber: "XXXX XXXX XXXX XXXX",
      code: "UTI9239723",
      branchName: "bank branch name",
    },
    {
      bankName: "First Bank",
      primaryBank: false,
      verified: true,
      accountNumber: "XXXX XXXX XXXX XXXX",
      code: "UTI9239723",
      branchName: "bank branch name",
    },
  ]);

  return (
    <div className="w-full flex flex-col gap-y-5 h-full">
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-2 max-w-full">
          <button onClick={props.onClose}>
            <FaArrowLeft className="h-6 w-6 relative min-h-[24px]" />
          </button>
          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[289px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[46px]">
                Linked Bank Accounts
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 overflow-y-auto">
        {linkedBankAccounts
          .sort((a, b) => (a.primaryBank ? -1 : 1) - (b.primaryBank ? -1 : 1))
          .map((linkedBankAccount, index) => (
            <section
              key={index}
              className={
                cn(
                  "self-stretch flex flex-col items-start justify-start text-left text-sm text-neutral-black-4 ",
                  linkedBankAccount.primaryBank
                    ? "border-lympha-primary border-2 rounded-2xl "
                    : " "
                )
              }
            >
              <div className="self-stretch rounded-2xl bg-white  flex flex-col items-start justify-start p-4">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[8px] text-lg">
                    <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[92px]">
                      {linkedBankAccount.primaryBank ? "Primary Bank" : "Bank"}
                    </b>
                    {!linkedBankAccount.primaryBank && (
                      <button
                        onClick={() => {
                          const updatedLinkedBankAccounts =
                            linkedBankAccounts.map((linkedBankAccount, i) => {
                              if (i === index) {
                                return {
                                  ...linkedBankAccount,
                                  primaryBank: true,
                                };
                              } else {
                                return {
                                  ...linkedBankAccount,
                                  primaryBank: false,
                                };
                              }
                            });
                          setLinkedBankAccounts(updatedLinkedBankAccounts);
                        }}
                        className={cn(
                          "rounded-lg text-lympha-primary py-2",
                          linkedBankAccount.primaryBank
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer"
                        )}
                      >
                        <b className="w-[171px] relative text-sm tracking-[-0.02em] leading-[20px] inline-block text-lympha-primary">
                          make primary bank
                        </b>
                      </button>
                    )}

                    <div className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[105px]">
                      {linkedBankAccount.bankName}
                    </div>
                  </div>

                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <div className="relative tracking-[-0.02em] leading-5 font-medium inline-block shrink-0">
                      Status
                    </div>
                    <div className="relative tracking-tight leading-5 text-right shrink-0 whitespace-nowrap">
                      {linkedBankAccount.verified ? "Verified" : "Not Verified"}
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-5">
                    <div className="relative tracking-tight leading-5 font-medium">
                      Account Number
                    </div>
                    <div className="w-[178px] relative tracking-[-0.02em] leading-[20px] text-right inline-block shrink-0">
                      {linkedBankAccount.accountNumber}
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <div className="relative tracking-tight leading-5 inline-block font-medium">
                      Code
                    </div>
                    <div className="w-[94px] relative tracking-[-0.02em] leading-[20px] text-right inline-block shrink-0">
                      {linkedBankAccount.code}
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <div className="relative tracking-tight leading-5 inline-block font-medium">
                      Branch Name
                    </div>
                    <div className="w-[153px] relative tracking-[-0.02em] leading-[20px] text-right inline-block shrink-0">
                      {linkedBankAccount.branchName}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
      </div>
    </div>
  );
};

export default LinkedBankAccountSidebar;
