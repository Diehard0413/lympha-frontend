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
    <div className="flex h-full w-full flex-col gap-y-5">
      <div className="flex max-w-full flex-col items-start justify-start self-stretch">
        <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-2 self-stretch">
          <button onClick={props.onClose}>
            <FaArrowLeft className="relative h-6 min-h-[24px] w-6" />
          </button>
          <div className="box-border flex min-w-[289px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-px">
            <div className="mq450:flex-wrap flex flex-row items-start justify-between gap-[20px] self-stretch">
              <b className="relative inline-block min-w-[46px] leading-[140%] tracking-[-0.02em]">
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
              className={cn(
                "flex flex-col items-start justify-start self-stretch text-left text-sm text-neutral-black-4",
                linkedBankAccount.primaryBank
                  ? "rounded-2xl border-2 border-lympha-primary"
                  : " ",
              )}
            >
              <div className="flex flex-col items-start justify-start self-stretch rounded-2xl bg-white p-4">
                <div className="flex flex-col items-start justify-start gap-[16px] self-stretch">
                  <div className="flex flex-col items-start justify-start gap-[8px] self-stretch py-0 pl-0 pr-5 text-lg">
                    <b className="relative inline-block min-w-[92px] leading-[140%] tracking-[-0.02em]">
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
                          "rounded-lg py-2 text-lympha-primary",
                          linkedBankAccount.primaryBank
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer",
                        )}
                      >
                        <b className="relative inline-block w-[171px] text-sm leading-[20px] tracking-[-0.02em] text-lympha-primary">
                          make primary bank
                        </b>
                      </button>
                    )}

                    <div className="relative inline-block min-w-[105px] leading-[140%] tracking-[-0.02em]">
                      {linkedBankAccount.bankName}
                    </div>
                  </div>

                  <div className="mq450:flex-wrap flex flex-row items-center justify-between gap-[20px] self-stretch">
                    <div className="relative inline-block shrink-0 font-medium leading-5 tracking-[-0.02em]">
                      Status
                    </div>
                    <div className="relative shrink-0 whitespace-nowrap text-right leading-5 tracking-tight">
                      {linkedBankAccount.verified ? "Verified" : "Not Verified"}
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-5 self-stretch">
                    <div className="relative font-medium leading-5 tracking-tight">
                      Account Number
                    </div>
                    <div className="relative inline-block w-[178px] shrink-0 text-right leading-[20px] tracking-[-0.02em]">
                      {linkedBankAccount.accountNumber}
                    </div>
                  </div>
                  <div className="mq450:flex-wrap flex flex-row items-center justify-between gap-[20px] self-stretch">
                    <div className="relative inline-block font-medium leading-5 tracking-tight">
                      Code
                    </div>
                    <div className="relative inline-block w-[94px] shrink-0 text-right leading-[20px] tracking-[-0.02em]">
                      {linkedBankAccount.code}
                    </div>
                  </div>
                  <div className="mq450:flex-wrap flex flex-row items-center justify-between gap-[20px] self-stretch">
                    <div className="relative inline-block font-medium leading-5 tracking-tight">
                      Branch Name
                    </div>
                    <div className="relative inline-block w-[153px] shrink-0 text-right leading-[20px] tracking-[-0.02em]">
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
