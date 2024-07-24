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
          "m-0 flex max-w-full shrink-0 flex-col items-start justify-start self-stretch"
        }
      >
        <div className="flex flex-col items-start justify-start gap-4 self-stretch py-5">
          <div
            className={
              "flex max-w-full flex-col items-start justify-start gap-1 self-stretch text-left text-base text-neutral-black-5"
            }
          >
            <label
              htmlFor="current_password"
              className="relative inline-block min-w-[58px] leading-[140%] tracking-[-0.02em]"
            >
              Current Password
            </label>
            <div className="box-border flex max-w-full flex-row items-center justify-start self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white">
              <input
                id="current_password"
                className="relative inline-block w-full max-w-full flex-1 whitespace-nowrap border-none bg-transparent py-3 pl-5 pr-3 text-left align-middle text-base tracking-[-0.02em] text-neutral-black-5 placeholder-neutral-black-4 outline-none"
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
              "flex max-w-full flex-col items-start justify-start gap-1 self-stretch text-left text-base text-neutral-black-5"
            }
          >
            <label
              htmlFor="newPassword"
              className="relative inline-block min-w-[58px] leading-[140%] tracking-[-0.02em]"
            >
              New Password
            </label>
            <div className="box-border flex max-w-full flex-row items-center justify-start self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white">
              <input
                id="newPassword"
                className="relative inline-block w-full max-w-full flex-1 whitespace-nowrap border-none bg-transparent py-3 pl-5 pr-3 text-left align-middle text-base tracking-[-0.02em] text-neutral-black-5 placeholder-neutral-black-4 outline-none"
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
              "flex max-w-full flex-col items-start justify-start gap-1 self-stretch text-left text-base text-neutral-black-5"
            }
          >
            <label
              htmlFor="confirmPassword"
              className="relative inline-block min-w-[58px] leading-[140%] tracking-[-0.02em]"
            >
              Confirm Password
            </label>
            <div className="box-border flex max-w-full flex-row items-center justify-start self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white">
              <input
                id="confirmPassword"
                className="relative inline-block w-full max-w-full flex-1 whitespace-nowrap border-none bg-transparent py-3 pl-5 pr-3 text-left align-middle text-base tracking-[-0.02em] text-neutral-black-5 placeholder-neutral-black-4 outline-none"
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
        <div className="flex flex-col items-start justify-start gap-[20px] self-stretch">
          <button className="flex w-max cursor-pointer flex-row items-center justify-center self-stretch rounded-13xl border-[2px] border-solid border-darkslategray bg-lympha-primary px-5 py-3 font-semibold text-neutral-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] hover:box-border hover:border-[2px] hover:border-teal hover:bg-darkcyan-100">
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

            {isSubmitting ? "Submitting" : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LinkedBankAccountSidebar;
