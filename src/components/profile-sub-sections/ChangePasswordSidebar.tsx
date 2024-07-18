"use client";

import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

type Props = {
  onClose: () => void;
};

import { useForm } from "react-hook-form";
import * as Yup from "yup";

interface ChangePasswordFormDataType {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const registerValidationSchema = Yup.object().shape({
  currentPassword: Yup.string().required(),
  newPassword: Yup.string().required(),
  confirmPassword: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .oneOf([Yup.ref("newPassword")], "Passwords must match"),
});

const LinkedBankAccountSidebar = (props: Props) => {
  const router = useRouter();

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
  } = useForm<ChangePasswordFormDataType>({
    resolver: yupResolver(registerValidationSchema),
    defaultValues: {},
  });

  const onSubmit = async (data: ChangePasswordFormDataType) => {
    try {
      console.log("the data is ", data);
      // mock api call, with promise resolve
      await new Promise((resolve) =>
        setTimeout(() => {
          router.push("/auth/signin");
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
                Change Password
              </b>
            </div>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        className={
          "m-0 self-stretch flex flex-col items-start justify-start  max-w-full shrink-0 "
        }
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-4 py-5">
          <div
            className={
              "self-stretch flex flex-col items-start justify-start gap-1 max-w-full text-left text-base text-neutral-black-5"
            }
          >
            <label
              htmlFor="current_password"
              className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[58px]"
            >
              Current Password
            </label>
            <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-row items-center justify-start max-w-full border-[0.5px] border-solid border-neutral-black-2">
              <input
                id="current_password"
                className="w-full border-none outline-none text-base bg-transparent py-3 pr-3 pl-5  flex-1 relative tracking-[-0.02em] text-left inline-block  whitespace-nowrap max-w-full text-neutral-black-5 placeholder-neutral-black-4 align-middle"
                type="password"
                placeholder="*********"
                {...register("currentPassword")}
              />
            </div>
            {errors.currentPassword && (
              <div className="relative text-sm tracking-tight text-state-error">
                {errors.currentPassword.message}
              </div>
            )}
          </div>
          <div
            className={
              "self-stretch flex flex-col items-start justify-start gap-1 max-w-full text-left text-base text-neutral-black-5"
            }
          >
            <label
              htmlFor="newPassword"
              className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[58px]"
            >
              New Password
            </label>
            <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-row items-center justify-start max-w-full border-[0.5px] border-solid border-neutral-black-2">
              <input
                id="newPassword"
                className="w-full border-none outline-none text-base bg-transparent py-3 pr-3 pl-5  flex-1 relative tracking-[-0.02em] text-left inline-block  whitespace-nowrap max-w-full text-neutral-black-5 placeholder-neutral-black-4 align-middle"
                type="password"
                placeholder="*********"
                {...register("newPassword")}
              />
            </div>
            {errors.newPassword && (
              <div className="relative text-sm tracking-tight text-state-error">
                {errors.newPassword.message}
              </div>
            )}
          </div>
          <div
            className={
              "self-stretch flex flex-col items-start justify-start gap-1 max-w-full text-left text-base text-neutral-black-5"
            }
          >
            <label
              htmlFor="confirmPassword"
              className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[58px]"
            >
              Confirm Password
            </label>
            <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-row items-center justify-start max-w-full border-[0.5px] border-solid border-neutral-black-2">
              <input
                id="confirmPassword"
                className="w-full border-none outline-none text-base bg-transparent py-3 pr-3 pl-5  flex-1 relative tracking-[-0.02em] text-left inline-block  whitespace-nowrap max-w-full text-neutral-black-5 placeholder-neutral-black-4 align-middle"
                type="password"
                placeholder="*********"
                {...register("confirmPassword")}
              />
            </div>
            {errors.confirmPassword && (
              <div className="relative text-sm tracking-tight text-state-error">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
          <button className="w-max cursor-pointer py-3 px-5 bg-lympha-primary self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl flex flex-row items-center justify-center border-[2px] border-solid border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px]  hover:border-teal text-neutral-white font-semibold">
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

            {isSubmitting ? "Submitting" : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LinkedBankAccountSidebar;
