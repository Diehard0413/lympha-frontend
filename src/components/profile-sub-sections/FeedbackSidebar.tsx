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

  return (
    <div className="flex w-full flex-col gap-y-5">
      <div className="flex max-w-full flex-col items-start justify-start self-stretch">
        <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-2 self-stretch">
          <button onClick={props.onClose}>
            <FaArrowLeft className="relative h-6 min-h-[24px] w-6" />
          </button>
          <div className="box-border flex min-w-[289px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-px">
            <div className="mq450:flex-wrap flex flex-row items-start justify-between gap-[20px] self-stretch">
              <b className="relative inline-block min-w-[46px] leading-[140%] tracking-[-0.02em]">
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
        <div className="flex flex-col items-start justify-start self-stretch text-lg text-neutral-black-5">
          <b className="relative leading-[140%] tracking-[-0.02em]">
            We value your feedback.{" "}
          </b>
          <div className="relative self-stretch leading-[140%] tracking-[-0.02em]">
            Please share your thoughts and suggestions.
          </div>
          <textarea
            className="font-body-large-bold box-border flex w-auto flex-col items-start justify-start self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white p-5 text-base text-neutral-black-5 [outline:none] placeholder:text-neutral-black-4"
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

        <button className="flex w-max cursor-pointer flex-row items-center justify-center gap-2 whitespace-nowrap rounded-13xl border-[2px] border-darkslategray bg-lympha-primary px-5 py-3 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] hover:box-border hover:border-[2px] hover:border-solid hover:border-teal hover:bg-darkcyan-100">
          <b className="tracking-right relative flex w-max items-center gap-x-1 text-left text-sm text-neutral-white">
            {isSubmitting && (
              <svg
                className="-ml-1 mr-2 h-5 w-5 animate-spin text-white"
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
            <IoArrowForward className="relative h-5 min-h-[20px] w-5 text-white" />
          )}
        </button>
      </form>
    </div>
  );
};

export default LinkedBankAccountSidebar;
