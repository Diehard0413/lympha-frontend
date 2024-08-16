"use client";

import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface LoginFormDataType {
  email: string;
  password: string;
}

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const SignIn: FunctionComponent = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

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
  } = useForm<LoginFormDataType>({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {},
  });

  const onSubmit = async (data: LoginFormDataType) => {
    try {
      console.log("the data is ", data);
      // const res = await login(data, "/dashboard");
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      console.log("res", res);
      if (res?.error) {
        setError("root.serverError", {
          message: "Invalid email or password",
        });
        setTimeout(() => {
          clearErrors();
        }, 2000);
        return;
      }
      router.push("/dashboard");
    } catch (error: any) {
      console.error("An unexpected error happened:", error);
      setError("root.serverError", {
        message: "An unexpected error happened",
      });
      setTimeout(() => {
        clearErrors();
      }, 2000);
    }
    setTimeout(() => {
      clearErrors();
    }, 3000);
  };

  return (
    <div className="relative flex h-screen w-full flex-row items-start justify-start overflow-hidden bg-[url('/images/auth-bg.png')] bg-cover bg-bottom bg-no-repeat text-center font-proxima text-sm text-neutral-black-6">
      <div className="flex h-screen w-full max-w-xl flex-col items-end justify-start">
        <div className="box-border flex h-full max-w-full flex-row items-start justify-end self-stretch py-0 pl-0 pr-7">
          <div className="flex h-full flex-1 flex-col items-start justify-between overflow-hidden rounded-r-13xl bg-gray-400 px-24 py-20 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)] backdrop-blur-2xl">
            <div className="flex flex-row items-center justify-start gap-3">
              <img
                className="relative h-10 object-cover"
                loading="lazy"
                alt=""
                src="/images/full-logo.svg"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="post"
              className="m-0 flex flex-col items-start justify-start gap-5 self-stretch"
            >
              <div className="flex flex-col items-start justify-start self-stretch">
                <h1 className="m-0 self-stretch text-left text-lg font-bold leading-10 tracking-tight text-neutral-black-6">
                  Log In
                </h1>
                <div className="font-body-large-bold relative self-stretch text-left text-lg leading-[140%] tracking-[-0.02em] text-neutral-black-6">
                  Access your Lympha account.
                </div>
              </div>
              <div className="flex max-w-full flex-col items-start justify-start gap-[24px] self-stretch">
                <div
                  className={`flex max-w-full flex-col items-start justify-start gap-[4px] self-stretch text-left text-base text-neutral-black-5`}
                >
                  <label
                    htmlFor="email"
                    className="relative inline-block min-w-[58px] leading-[140%] tracking-[-0.02em]"
                  >
                    Email ID
                  </label>
                  <div className="box-border flex max-w-full flex-row items-center justify-start self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white">
                    <input
                      id="email"
                      className="relative inline-block w-full max-w-full flex-1 whitespace-nowrap border-none bg-transparent py-3 pl-5 pr-3 text-left align-middle text-base tracking-tight text-neutral-black-5 placeholder-neutral-black-4 outline-none"
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
                    "flex max-w-full flex-col items-start justify-start gap-1 self-stretch text-left text-base text-neutral-black-5"
                  }
                >
                  <label
                    htmlFor="password"
                    className="relative inline-block min-w-[58px] leading-[140%] tracking-[-0.02em]"
                  >
                    Password
                  </label>
                  <div className="box-border flex max-w-full flex-row items-center justify-start self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white">
                    <input
                      id="password"
                      className="relative inline-block w-full max-w-full flex-1 whitespace-nowrap border-none bg-transparent py-3 pl-5 pr-3 text-left align-middle text-base tracking-[-0.02em] text-neutral-black-5 placeholder-neutral-black-4 outline-none"
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

                <div className="flex max-w-full flex-col items-start justify-start gap-1 self-stretch">
                  <Link
                    href="/auth/forgot"
                    className="relative text-sm leading-5 tracking-[-0.02em] text-lympha-primary"
                  >
                    Forgot Password?
                  </Link>
                </div>
                {errors.root?.serverError?.message && (
                  <div className="relative text-sm tracking-tight text-state-error">
                    {errors.root?.serverError?.message}
                  </div>
                )}
              </div>
              <div
                className={
                  "items-cneter font-body-large-bold flex flex-col justify-center gap-5 self-stretch text-left text-base text-neutral-black-5"
                }
              >
                <button
                  type="submit"
                  className="flex cursor-pointer flex-row items-center justify-center self-stretch whitespace-nowrap rounded-13xl border-[2px] border-solid border-darkslategray bg-lympha-primary px-5 py-[15px] font-semibold text-neutral-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] hover:box-border hover:border-[2px] hover:border-solid hover:border-teal hover:bg-darkcyan-100"
                >
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

                  {isSubmitting ? "Logging..." : "Sign in"}
                </button>
                <div className="flex flex-row items-start justify-center gap-[8px]">
                  <div className="relative whitespace-nowrap">
                    Dont have an account?
                  </div>
                  <Link
                    href="/auth/register"
                    className="flex cursor-pointer flex-row items-center justify-center rounded-13xl text-lympha-primary"
                  >
                    <b className="relative inline-block min-w-[96px] leading-[140%] tracking-[-0.02em]">
                      Register Here
                    </b>
                  </Link>
                </div>
              </div>
            </form>
            <Link
              href="/terms-and-privacy"
              className="relative flex h-20 shrink-0 items-end justify-center self-stretch leading-[140%] tracking-[-0.02em] [text-decoration:underline]"
            >
              Terms of Service & Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
