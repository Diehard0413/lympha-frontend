"use client";

import React from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import ProfileBanner from "../common/ProfileBanner";
import {
  MdCampaign,
  MdOutlineAccountBalance,
  MdOutlineAccountBalanceWallet,
  MdQuiz,
} from "react-icons/md";
import { RiSettings3Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { cn } from "@/app/helpers/utils";
import { FaArrowLeft } from "react-icons/fa6";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoArrowForward } from "react-icons/io5";

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
        }, 2000)
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

  return (
    <div className="w-full flex flex-col gap-y-5">
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-2 max-w-full">
          <button onClick={props.onClose}>
            <FaArrowLeft className="h-6 w-6 relative min-h-[24px]" />
          </button>
          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[289px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[46px]">
                Feedback
              </b>
            </div>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        className="flex flex-col gap-y-4 py-5"
      >
        <div className="self-stretch flex flex-col items-start justify-start text-lg text-neutral-black-5">
          <b className="relative tracking-[-0.02em] leading-[140%]">
            We value your feedback.{" "}
          </b>
          <div className="self-stretch relative tracking-[-0.02em] leading-[140%]">
            Please share your thoughts and suggestions.
          </div>
          <textarea
            className="bg-neutral-white w-auto [outline:none] self-stretch rounded-lg box-border flex flex-col items-start justify-start p-5 font-body-large-bold text-base border-[0.5px] border-solid border-neutral-black-2 text-neutral-black-5 placeholder:text-neutral-black-4"
            placeholder="Explain what you need help with"
            {...register("message")}
            rows={5}
          />
          {errors.message && (
            <div className="relative text-sm tracking-tight text-state-error">
              {errors.message.message}
            </div>
          )}
        </div>

        <button className="w-max cursor-pointer py-3 px-5  bg-lympha-primary shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl flex flex-row items-center justify-center gap-2 whitespace-nowrap border-[2px]  border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-teal">
          <b className="relative text-sm tracking-right text-neutral-white text-left w-max flex items-center gap-x-1">
            {isSubmitting && (
              <svg
                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}

            {isSubmitting ? "Submitting Feedback..." : "Submit Feedback"}
          </b>
          {!isSubmitting && (
            <IoArrowForward className="h-5 w-5 relative min-h-[20px] text-white" />
          )}
        </button>
      </form>
    </div>
  );
};

export default LinkedBankAccountSidebar;
