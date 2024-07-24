"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { FunctionComponent } from "react";
import OtpInput from "react-otp-input";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { verifyPasswordResetRequestOtpCode } from "@/actions/forgot-password";
import { verifyEmailVerificationOtpCode } from "@/actions/register";

interface forgotFormDataType {
  email: string;
  otpCode: string;
}

const forgotValidationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  otpCode: Yup.string().required(),
});

const VerifyComponent: FunctionComponent = () => {
  const router = useRouter();
  // get requestType from query params
  const searchParams = useSearchParams();
  const requestType = searchParams.get("requestType") ?? "forgot";

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
    defaultValues: {
      // get the email from local storage
      email: localStorage?.getItem("email") ?? "",
    },
  });

  const onSubmit = async (data: forgotFormDataType) => {
    try {
      if (requestType === "forgot") {
        // mock api call, with promise resolve
        const response = await verifyPasswordResetRequestOtpCode(data);
        console.log("the response is ");
        if (response?.error) {
          setError("otpCode", {
            message: response.error,
          });
          return;
        } else if (response?.resetToken) {
          localStorage?.setItem("resetToken", response.resetToken);
          router.push("/auth/reset");
        } else {
          router.push("/auth/signin");
        }
      } else {
        // mock api call, with promise resolve
        const response = await verifyEmailVerificationOtpCode(data);
        console.log("the response is ", response);
        if (response.error) {
          setError("otpCode", {
            message: response.error,
          });

          setTimeout(() => {
            clearErrors();
          }, 2000);

          return;
        }

        router.push("/auth/signin");
      }
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
    }, 2000);
  };

  return (
    <div className="font-body-large-bold relative flex h-screen w-full flex-row items-start justify-start overflow-hidden bg-[url('/images/auth-bg.png')] bg-cover bg-bottom bg-no-repeat text-center text-sm text-neutral-black-6">
      <div className="flex h-screen w-full max-w-xl flex-col items-end justify-start">
        <div className="box-border flex h-full max-w-full flex-row items-start justify-end self-stretch py-0 pl-0 pr-7">
          <div className="flex h-full flex-1 flex-col items-start justify-between overflow-hidden rounded-r-13xl bg-gray-400 px-5 py-20 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)] backdrop-blur-2xl md:px-10 xl:px-20">
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
              className="m-0 flex flex-col items-start justify-start gap-10 self-stretch"
            >
              <div
                className={`text-13xl flex flex-col items-start justify-start gap-10 self-stretch text-left font-proxima text-neutral-black-6`}
              >
                <div className="flex flex-col items-start justify-start self-stretch">
                  <h1 className="font-inherit relative self-stretch text-2xl font-bold leading-10 tracking-[-0.02em] text-inherit md:text-3xl">
                    Verify Your Email
                  </h1>
                  <div className="relative self-stretch text-lg leading-[140%] tracking-[-0.02em]">
                    Please enter the code sent to your email.
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[24px] self-stretch text-base text-neutral-black-5">
                  <div className="flex flex-col items-start justify-start gap-[4px] self-stretch">
                    <b className="relative inline-block min-w-[121px] leading-[140%] tracking-[-0.02em]">
                      Verification Code
                    </b>
                    <Controller
                      name="otpCode"
                      control={control}
                      render={({ field }) => (
                        <OtpInput
                          value={field.value}
                          onChange={field.onChange}
                          numInputs={6}
                          renderInput={(props, index) => (
                            <input key={index} {...props} />
                          )}
                          renderSeparator={(index) => (
                            <span key={index}>&nbsp;</span>
                          )}
                          containerStyle={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            gap: "3px",
                          }}
                          inputStyle={{
                            width: "50px",
                            height: "50px",
                            fontSize: "20px",
                            fontWeight: "bold",
                            borderRadius: "10px",
                            border: "1px solid #E0E0E0",
                            color: "#000000",
                          }}
                        />
                      )}
                    />
                    {errors.otpCode && (
                      <div className="relative text-sm tracking-tight text-state-error">
                        {errors.otpCode.message}
                      </div>
                    )}

                    <div className="box-border flex h-7 flex-row items-center justify-start gap-[8px] px-0 pb-0 pt-[7px] text-neutral-black-6">
                      <div className="relative leading-[140%] tracking-[-0.02em]">
                        <span>Resend OTP in </span>
                        <b>24s</b>
                      </div>
                      <button className="flex flex-row items-center justify-center rounded-13xl text-ketto-primary">
                        <b className="relative tracking-tight">Resend Code</b>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[12px] text-neutral-black-6">
                    <input
                      className="relative m-0 box-border h-6 w-6 rounded border-[0.5px] border-solid border-neutral-black-21 text-lympha-primary accent-lympha-primary"
                      type="checkbox"
                    />
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-px">
                      <div className="relative leading-[140%] tracking-[-0.02em]">
                        Remember this device
                      </div>
                    </div>
                  </div>
                  {errors.root?.serverError && (
                    <div className="flex flex-col items-start justify-start gap-2 self-stretch text-base text-red-500">
                      <span>{errors.root.serverError.message}</span>
                    </div>
                  )}
                </div>
                <button className="flex cursor-pointer flex-row items-start justify-center self-stretch rounded-13xl border-[2px] border-solid border-darkslategray bg-lympha-primary px-5 py-[15px] font-semibold text-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] hover:box-border hover:border-[2px] hover:border-solid hover:border-teal hover:bg-darkcyan-100">
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

                  {isSubmitting ? "Verifying..." : "Verify"}
                </button>
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

export default VerifyComponent;
