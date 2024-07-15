"use client";

import Link from "next/link";
import {
  forwardRef,
  FunctionComponent,
  InputHTMLAttributes,
  useState,
} from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

interface forgotFormDataType {
  email: string;
}

const forgotValidationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

const SignIn: FunctionComponent = () => {
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
  } = useForm<forgotFormDataType>({
    resolver: yupResolver(forgotValidationSchema),
    defaultValues: {},
  });

  const onSubmit = async (data: forgotFormDataType) => {
    try {
      console.log("the data is ", data);
      // mock api call, with promise resolve
      await new Promise((resolve) =>
        setTimeout(() => {
          router.push("/auth/verify");
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
    <div className="h-screen w-full relative overflow-hidden flex flex-row items-start justify-start bg-[url('/images/auth-bg.png')] bg-cover bg-no-repeat bg-bottom text-center text-sm text-neutral-black-6 font-proxima">
      <div className="h-screen w-full flex flex-col items-end justify-start max-w-xl">
        <div className="h-full self-stretch flex flex-row items-start justify-end py-0 pr-7 pl-0 box-border max-w-full">
          <div className="h-full flex-1 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]  backdrop-blur-2xl rounded-r-13xl bg-gray-400 overflow-hidden flex flex-col items-start justify-between py-20 px-24">
            <div className="flex flex-row items-center justify-start gap-3">
              <img
                className="h-10 relative object-cover"
                loading="lazy"
                alt=""
                src="/images/full-logo.svg"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="post"
              className="m-0 self-stretch flex flex-col items-start justify-start gap-10"
            >
              <div className="self-stretch flex flex-col items-start justify-start">
                <h1 className="m-0 self-stretch text-lg text-left tracking-tight leading-10 font-bold text-neutral-black-6">
                  Forgot Password
                </h1>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[140%] font-body-large-bold text-neutral-black-6 text-left">
                  Enter your email to reset your password
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                <div
                  className={`self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-left text-base text-neutral-black-5`}
                >
                  <label
                    htmlFor="email"
                    className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[58px]"
                  >
                    Email ID
                  </label>
                  <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-row items-center justify-start max-w-full border-[0.5px] border-solid border-neutral-black-2">
                    <input
                      id="email"
                      className="w-full border-none outline-none text-base bg-transparent py-3 pr-3 pl-5  flex-1 relative tracking-tight text-left inline-block  whitespace-nowrap max-w-full text-neutral-black-5 placeholder-neutral-black-4 align-middle"
                      placeholder="arushi.parasrampuria@gmail.com"
                      type="email"
                      {...register("email")}
                    />
                  </div>
                  {errors.email && (
                    <div className="relative text-sm tracking-tight text-state-error">
                      {errors.email.message}
                    </div>
                  )}
                </div>
              </div>
              <div
                className={
                  "self-stretch flex flex-col items-cneter  justify-center gap-5 text-left text-base text-neutral-black-5 font-body-large-bold"
                }
              >
                <button
                  type="submit"
                  className="cursor-pointer py-[15px] px-5 bg-lympha-primary self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl flex flex-row items-center justify-center whitespace-nowrap border-[2px] border-solid border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-teal text-neutral-white font-semibold"
                >
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

                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <div className="flex flex-row items-start justify-center gap-[8px] ">
                  <div className="relative whitespace-nowrap">
                    Dont have an account?
                  </div>
                  <Link
                    href="/auth/register"
                    className="rounded-13xl flex flex-row items-center justify-center cursor-pointer text-lympha-primary"
                  >
                    <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[96px]">
                      Register Here
                    </b>
                  </Link>
                </div>
              </div>
            </form>
            <div className="self-stretch h-20 relative [text-decoration:underline] tracking-[-0.02em] leading-[140%] flex items-end justify-center shrink-0">
              Terms of Service & Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
