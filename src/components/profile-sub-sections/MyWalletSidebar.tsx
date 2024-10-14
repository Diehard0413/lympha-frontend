"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { FaArrowLeft } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoArrowForward } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { getUser, initUserWallet } from "@/actions/project";

type Props = {
  onClose: () => void;
};

interface FeedFormDataType {
  message: string;
}

const feedValidationSchema = Yup.object().shape({
  message: Yup.string().required(),
});

const LinkedBankAccountSidebar = (props: Props) => {
  const navigate = useRouter();
  const session = useSession();
  const user = session.data?.user;

  const [userData, setUserData] = useState<any>({});
  const [isCreatingWallet, setIsCreatingWallet] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
    getValues,
    watch,
    setError,
    clearErrors,
  } = useForm<FeedFormDataType>({
    resolver: yupResolver(feedValidationSchema),
    defaultValues: {},
  });

  const onSubmit = async (data: FeedFormDataType) => {
    try {
      console.log("the data is ", data);
      // mock api call, with promise resolve
      await new Promise((resolve) =>
        setTimeout(() => {
          navigate.push("/auth/signin");
        }, 2000),
      );
    } catch (error: any) {
      console.error("An unexpected error happened:", error);
      setError("root.serverError", {
        message: "An unexpected error happened",
      });
    }
    setTimeout(() => {
      clearErrors();
    }, 3000);
  };

  const onCreateWallet = async () => {
    if (!user?.email) return;
    setIsCreatingWallet(true);
    const response = await initUserWallet(user.email);
    console.log("Create Wallet response", response);
    if (response.result) {
      const userData = response.data;
      setUserData(userData);
    }
    setIsCreatingWallet(false);
  }

  useEffect(() => {
    const fetchUser = async () => {
      if (user?.email) {
        const response = await getUser(user.email);
        const userData = response.data;
        console.log(userData);
        setUserData(userData);
      }
    }

    fetchUser();
  }, []);

  return (
    // <div className="w-full flex flex-col gap-y-5">
    //   <div className="self-stretch flex flex-col items-start justify-start max-w-full">
    //     <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-2 max-w-full">
    //       <button onClick={props.onClose}>
    //         <FaArrowLeft className="h-6 w-6 relative min-h-[24px]" />
    //       </button>
    //       <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[289px] max-w-full">
    //         <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
    //           <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[46px]">
    //             Profile
    //           </b>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //   className={`w-[596px] shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)] [backdrop-filter:blur(80px)] rounded-13xl bg-gray-300 max-w-full overflow-hidden flex flex-col items-start justify-start pt-20 px-[60px] pb-[715px] box-border gap-[32px] leading-[normal] tracking-[normal] text-left text-base text-neutral-black-3 `}
    // >
    //   <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[8px] max-w-full">
    //     <img
    //       className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
    //       loading="lazy"
    //       alt=""
    //       src="/iconsnavigate-before.svg"
    //     />
    //     <div className="flex-1 flex flex-row items-center justify-between min-w-[125px] max-w-full gap-[20px] mq450:flex-wrap">
    //       <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[67px]">{`My wallet `}</b>
    //       <b className="h-[19px] w-[58px] relative leading-[120%] inline-block text-lympha-primary opacity-[0]">
    //         View all
    //       </b>
    //     </div>
    //   </div>
    //   <div className="self-stretch flex flex-col items-start justify-start text-sm text-neutral-black-4">
    //     <div className="self-stretch rounded-2xl bg-neutral-white flex flex-col items-start justify-start p-4 gap-[24px]">
    //       <div className="self-stretch flex flex-col items-start justify-start">
    //         <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
    //           <div className="relative tracking-[-0.02em] leading-[20px] inline-block min-w-[67px]">{`Spot Wallet `}</div>
    //           <div className="flex flex-col items-start justify-center gap-[13px] text-right">
    //             <div className="flex flex-row items-center justify-start gap-[8px]">
    //               <input
    //                 className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
    //                 type="checkbox"
    //               />
    //               <div className="relative tracking-[-0.02em] leading-[20px]">
    //                 XXXX XXXX XXXX XXXX
    //               </div>
    //             </div>
    //             <div className="flex flex-row items-center justify-start gap-[8px]">
    //               <input
    //                 className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
    //                 type="checkbox"
    //               />
    //               <div className="relative tracking-[-0.02em] leading-[20px]">
    //                 XXXX XXXX XXXX XXXX
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="self-stretch flex flex-col items-start justify-start">
    //         <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
    //           <div className="relative tracking-[-0.02em] leading-[20px] inline-block min-w-[84px]">
    //             Trading Wallet
    //           </div>
    //           <div className="flex flex-row items-center justify-start gap-[8px] text-right">
    //             <input
    //               className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
    //               type="checkbox"
    //             />
    //             <div className="relative tracking-[-0.02em] leading-[20px]">
    //               XXXX XXXX XXXX XXXX
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="self-stretch flex flex-col items-start justify-start">
    //         <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
    //           <div className="relative tracking-[-0.02em] leading-[20px] inline-block min-w-[62px]">
    //             Etc Details
    //           </div>
    //           <div className="flex flex-row items-center justify-start gap-[8px] text-right">
    //             <input
    //               className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
    //               type="checkbox"
    //             />
    //             <div className="relative tracking-[-0.02em] leading-[20px]">
    //               XXXX XXXX XXXX XXXX
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>

    <div className="flex w-full flex-col gap-y-5">
      <div className="flex max-w-full flex-col items-start justify-start self-stretch">
        <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-2 self-stretch">
          <button onClick={props.onClose}>
            <FaArrowLeft className="relative h-6 min-h-6 w-6" />
          </button>
          <div className="flex max-w-full flex-1 flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-between gap-5 self-stretch">
              <b className="relative inline-block tracking-tight">My wallet</b>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start self-stretch text-sm text-neutral-black-4">
        <div className="flex flex-col items-start justify-start gap-[24px] self-stretch rounded-2xl bg-neutral-white p-4">
          {userData && userData.userWalletId ?
            <div className="flex flex-col items-start justify-start self-stretch">
              <div className="mq450:flex-wrap flex flex-row items-center justify-between gap-[20px] self-stretch">
                <div className="relative font-medium leading-5 tracking-tight">
                  Etc Details
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px] text-right">
                  <MdContentCopy className="relative m-0 h-4 w-4 shrink-0 overflow-hidden" />
                  <div className="relative leading-[20px] tracking-[-0.02em]">
                    XXXX XXXX XXXX XXXX
                  </div>
                </div>
              </div>
            </div> :
            <button onClick={(e) => { onCreateWallet(); }} className="flex flex-1 flex-row items-center justify-center whitespace-nowrap rounded-13xl border-[2px] border-darkslategray bg-lympha-primary px-[22px] py-1.5 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] hover:box-border hover:border-[2px] hover:hover:border-teal hover:bg-darkcyan-100" >
              <b className="relative shrink-0 text-sm uppercase text-neutral-white">
                create wallet
              </b>
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default LinkedBankAccountSidebar;
