"use client";

import InputField from "@/components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";

interface RegisterFormDataType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const Register: FunctionComponent = () => {
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
  } = useForm<RegisterFormDataType>({
    resolver: yupResolver(registerValidationSchema),
    defaultValues: {},
  });

  const onSubmit = async (data: RegisterFormDataType) => {
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
              className={
                "m-0 self-stretch flex flex-col items-start justify-start  max-w-full shrink-0 "
              }
            >
              <div className="self-stretch flex flex-col items-start justify-start">
                <h1 className="m-0 self-stretch relative text-13xl tracking-[-0.02em] leading-10 text-xl font-bold  text-neutral-black-6 text-left ">
                  Create Your Account
                </h1>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[140%] font-body-large-bold text-neutral-black-6 text-left">
                  Sign up to access the Lympha platform and start trading carbon
                  credits.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-4 py-5">
                <div
                  className={`self-stretch flex flex-col items-start justify-start gap-1 max-w-full text-left text-base text-neutral-black-5`}
                >
                  <label
                    htmlFor="name"
                    className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[58px]"
                  >
                    Name
                  </label>
                  <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-row items-center justify-start max-w-full border-[0.5px] border-solid border-neutral-black-2">
                    <input
                      id="name"
                      className="w-full border-none outline-none text-base bg-transparent py-3 pr-3 pl-5  flex-1 relative tracking-tight text-left inline-block  whitespace-nowrap max-w-full text-neutral-black-5 placeholder-neutral-black-4 align-middle"
                      placeholder="john doe"
                      type="name"
                      {...register("name")}
                    />
                  </div>
                  {errors.name && (
                    <div className="relative text-sm tracking-tight text-state-error">
                      {errors.name.message}
                    </div>
                  )}
                </div>
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
                <div
                  className={
                    "self-stretch flex flex-col items-start justify-start gap-1 max-w-full text-left text-base text-neutral-black-5"
                  }
                >
                  <label
                    htmlFor="password"
                    className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[58px]"
                  >
                    Password
                  </label>
                  <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-row items-center justify-start max-w-full border-[0.5px] border-solid border-neutral-black-2">
                    <input
                      id="password"
                      className="w-full border-none outline-none text-base bg-transparent py-3 pr-3 pl-5  flex-1 relative tracking-[-0.02em] text-left inline-block  whitespace-nowrap max-w-full text-neutral-black-5 placeholder-neutral-black-4 align-middle"
                      type="password"
                      placeholder="*********"
                      {...register("password")}
                    />
                  </div>
                  {errors.password && (
                    <div className="relative text-sm tracking-tight text-state-error">
                      {errors.password.message}
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
                    Confirm
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
                <button className="cursor-pointer py-4 px-5 bg-lympha-primary self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl flex flex-row items-center justify-center border-[2px] border-solid border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px]  hover:border-teal text-neutral-white font-semibold">
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

                  {isSubmitting ? "Submitting" : "Register"}
                </button>
                <div className="flex flex-row items-start justify-center py-0 px-[65px] gap-[8px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="relative text-base tracking-[-0.02em] leading-[140%] font-body-large-bold text-neutral-black-5 text-left whitespace-nowrap">
                    Already have an account?
                  </div>
                  <Link
                    href="/auth/signin"
                    className="rounded-13xl flex flex-row items-center justify-center"
                  >
                    <b className="relative text-base tracking-[-0.02em] leading-[140%] inline-block font-body-large-bold text-lympha-primary text-left min-w-[43px] whitespace-nowrap">
                      Log in
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

export default Register;
