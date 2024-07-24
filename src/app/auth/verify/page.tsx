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

const SignIn: FunctionComponent = () => {
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
      email: localStorage.getItem("email") ?? "",
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
          localStorage.setItem("resetToken", response.resetToken);
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
    <div className="h-screen w-full relative overflow-hidden flex flex-row items-start justify-start bg-[url('/images/auth-bg.png')] bg-cover bg-no-repeat bg-bottom text-center text-sm text-neutral-black-6 font-body-large-bold">
      <div className="h-screen w-full flex flex-col items-end justify-start max-w-xl">
        <div className="h-full self-stretch flex flex-row items-start justify-end py-0 pr-7 pl-0 box-border max-w-full">
          <div className="h-full flex-1 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)]  backdrop-blur-2xl rounded-r-13xl bg-gray-400 overflow-hidden flex flex-col items-start justify-between py-20 px-5 md:px-10 xl:px-20">
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
              <div
                className={`self-stretch flex flex-col items-start justify-start gap-10 text-left text-13xl text-neutral-black-6 font-proxima`}
              >
                <div className="self-stretch flex flex-col items-start justify-start">
                  <h1 className="self-stretch relative text-inherit tracking-[-0.02em] leading-10 font-bold font-inherit text-2xl md:text-3xl">
                    Verify Your Email
                  </h1>
                  <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[140%]">
                    Please enter the code sent to your email.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-base text-neutral-black-5">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                    <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[121px]">
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

                    <div className="h-7 flex flex-row items-center justify-start pt-[7px] px-0 pb-0 box-border gap-[8px] text-neutral-black-6">
                      <div className="relative tracking-[-0.02em] leading-[140%]">
                        <span>Resend OTP in </span>
                        <b>24s</b>
                      </div>
                      <button className="rounded-13xl flex flex-row items-center justify-center text-ketto-primary">
                        <b className="relative tracking-tight">Resend Code</b>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[12px] text-neutral-black-6">
                    <input
                      className="m-0 h-6 w-6 relative rounded box-border border-[0.5px] border-solid border-neutral-black-21 accent-lympha-primary text-lympha-primary"
                      type="checkbox"
                    />
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="relative tracking-[-0.02em] leading-[140%]">
                        Remember this device
                      </div>
                    </div>
                  </div>
                  {errors.root?.serverError && (
                    <div className="self-stretch flex flex-col items-start justify-start gap-2 text-base text-red-500">
                      <span>{errors.root.serverError.message}</span>
                    </div>
                  )}
                </div>
                <button className="cursor-pointer py-[15px] px-5 bg-lympha-primary self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl flex flex-row items-start justify-center border-[2px] border-solid border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-teal text-white font-semibold">
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

                  {isSubmitting ? "Verifying..." : "Verify"}
                </button>
              </div>
            </form>
            <Link
              href="/terms-and-privacy"
              className="self-stretch h-20 relative [text-decoration:underline] tracking-[-0.02em] leading-[140%] flex items-end justify-center shrink-0"
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
