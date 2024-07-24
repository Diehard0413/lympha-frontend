"use client";
import { useDropzone } from "react-dropzone";
import Navbar from "@/components/common/Navbar";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { FiUpload } from "react-icons/fi";
import { IoArrowForward } from "react-icons/io5";
import Stepper from "../Stepper";
import { Select } from "@headlessui/react";
import { cn } from "@/app/helpers/utils";

type Props = {};

interface Step1FormDataType {
  projectName: string;
  conservationMethodology: string;
  image?: File | null;
  imageUrl?: string;
}

const step1ValidationSchema = Yup.object().shape(
  {
    projectName: Yup.string().required("Project name is required"),
    conservationMethodology: Yup.string().required(
      "Conservation methodology is required",
    ),
    imageUrl: Yup.string()
      .optional()
      .url()
      .when("image", {
        is: (val: File | null) => !val,
        then: (schema) => schema.required("Please provide an image, or a URL"),
        otherwise: (schema) => schema.notRequired(),
      }),
  },
  [["image", "imageUrl"]],
);

const Step1 = (props: Props) => {
  const navigator = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
    getValues,
    setValue,
    watch,
    setError,
    clearErrors,
  } = useForm<Step1FormDataType>({
    resolver: yupResolver(step1ValidationSchema),
    defaultValues: {},
  });

  const onSubmit = async (data: Step1FormDataType) => {
    try {
      console.log("the data is ", data);
      // mock api call, with promise resolve
      await new Promise((resolve) =>
        setTimeout(() => {
          navigator.push("/list-projects/step2");
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

  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        setValue("image", file);
        setPreview(URL.createObjectURL(file));
      }
    },
    [setValue],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    // accept: {
    //   "image/png": [".png"],
    //   "image/jpeg": [".jpeg"],
    //   "image/jpg": [".jpg"],
    // },
  });

  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden font-proxima [background:linear-gradient(rgba(230,_232,_232,_0.4),_rgba(230,_232,_232,_0.4)),_#fcfdfd]">
      <Navbar />
      <main className="box-border flex max-w-full flex-row items-start justify-center self-stretch px-5 py-10">
        <section className="mx-auto flex max-w-full flex-col items-start justify-start gap-4 py-10 text-left text-sm">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={
              "w-lg text-13xl flex flex-col items-start justify-start gap-10 text-left text-neutral-black-6"
            }
          >
            <div className="flex flex-col items-start justify-start self-stretch">
              <h1 className="relative m-0 self-stretch text-lg font-bold leading-10 tracking-tight">
                List your project
              </h1>
              <div className="relative text-lg leading-[140%] tracking-[-0.02em]">
                Please provide the necessary information to verify and list the
                project.
              </div>
            </div>
            <Stepper currentStep={1} totalSteps={2} />
            <div className="flex max-w-full flex-col items-start justify-start gap-[24px] self-stretch text-base text-neutral-black-5">
              <div className="flex max-w-full flex-col items-start justify-start gap-[4px] self-stretch">
                <b className="relative inline-block min-w-[95px] leading-[140%] tracking-[-0.02em]">
                  Project Name
                </b>
                <div className="flex max-w-full flex-row items-center justify-start self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white px-5 py-4">
                  <input
                    {...register("projectName")}
                    className="relative w-full max-w-full flex-1 appearance-none border-none bg-transparent p-0 text-left text-base tracking-tight text-neutral-black-5 outline-none placeholder:text-neutral-black-4"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                {errors.projectName && (
                  <div className="relative text-sm tracking-tight text-state-error">
                    {errors.projectName.message}
                  </div>
                )}
              </div>
              <div className="flex max-w-full flex-col items-start justify-start gap-[4px] self-stretch">
                <b className="relative leading-[140%] tracking-[-0.02em]">
                  Conservation Methodology
                </b>
                <Controller
                  control={control}
                  name="conservationMethodology"
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="relative flex max-w-full flex-1 flex-row items-center justify-start self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white bg-transparent p-0 px-5 py-4 text-left tracking-tight text-neutral-black-5 outline-none placeholder:text-neutral-black-4"
                      aria-label="conservation methodology"
                    >
                      <option value="">Select Method</option>
                      <option value="Option1">Option 1</option>
                      <option value="Option2">Option 2</option>
                      <option value="Option3">Option 2</option>
                      <option value="Option4">Option 3</option>
                    </Select>
                  )}
                />
                {errors.conservationMethodology && (
                  <div className="relative text-sm tracking-tight text-state-error">
                    {errors.conservationMethodology.message}
                  </div>
                )}
              </div>
              <div
                className={cn(
                  "flex max-w-full flex-col items-start justify-start gap-y-2 self-stretch text-left text-base text-neutral-black-5",
                )}
              >
                <label
                  htmlFor="file-upload"
                  className="relative font-bold leading-[140%] tracking-[-0.02em]"
                >
                  Upload
                </label>
                <div
                  {...getRootProps()}
                  className={cn(
                    "w-full cursor-pointer rounded-lg border-2 border-dashed",
                    isDragActive ? "border-blue-500" : "border-gray-300",
                  )}
                >
                  <input id="file-upload" {...getInputProps()} />
                  {isDragActive ? (
                    <div className="flex max-w-full flex-col items-start justify-start gap-[4px] self-stretch">
                      <div className="text-neutral-black-3 flex max-w-full flex-col items-start justify-start gap-[24px] self-stretch">
                        <div className="bg-gainsboro-600 flex flex-col items-center justify-center gap-[4px] self-stretch rounded-lg border-[1px] border-dashed border-neutral-black-2 py-[46px] pl-7 pr-5">
                          <FiUpload className="relative h-6 w-6 shrink-0 overflow-hidden" />
                          <b className="relative leading-[140%] tracking-[-0.02em]">
                            You can drop the file now ...
                          </b>
                          <div className="relative text-sm leading-[20px] tracking-[-0.02em]"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex max-w-full flex-col items-start justify-start gap-[4px] self-stretch">
                      <div className="text-neutral-black-3 flex max-w-full flex-col items-start justify-start gap-[24px] self-stretch">
                        <div className="bg-gainsboro-600 flex flex-col items-center justify-center gap-[4px] self-stretch rounded-lg border-[1px] border-dashed border-neutral-black-2 py-[46px] pl-7 pr-5">
                          <FiUpload className="relative h-6 w-6 shrink-0 overflow-hidden" />
                          <b className="relative leading-[140%] tracking-[-0.02em]">
                            Select a file to upload
                          </b>
                          <div className="relative text-sm leading-[20px] tracking-[-0.02em]">
                            or drag and drop it here
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {preview && (
                  <div className="flex w-full">
                    <div className="size-20">
                      <img
                        src={preview}
                        alt="Preview"
                        className="size-full rounded-lg object-cover shadow-md"
                      />
                    </div>
                  </div>
                )}
                <div className="flex max-w-full flex-col items-start justify-start gap-1 self-stretch text-neutral-black-5">
                  <div className="flex max-w-full flex-row flex-wrap items-center justify-start gap-3 self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white px-5 py-3 text-neutral-black-4">
                    <input
                      {...register("imageUrl")}
                      type="url"
                      placeholder="Or paste URL"
                      className="relative inline-block max-w-full flex-1 border-none py-2 placeholder-neutral-black-4 outline-none"
                    />
                    <button
                      type="button"
                      className="hover:bg-gainsboro-200 flex cursor-pointer flex-row items-center justify-center rounded-13xl bg-lympha-disabled px-4 py-2 [border:none]"
                    >
                      <b className="text-3xs font-body-large-bold relative inline-block min-w-[40px] text-left uppercase leading-[130%] text-lympha-primary">
                        upload
                      </b>
                    </button>
                  </div>
                </div>
                {
                  // Show error message if there is any
                  errors.imageUrl && (
                    <div className="relative text-sm tracking-tight text-state-error">
                      {errors.imageUrl.message}
                    </div>
                  )
                }
              </div>
            </div>

            <button
              type="submit"
              className="flex cursor-pointer flex-col items-start justify-start self-stretch border-none bg-transparent p-0"
            >
              <div className="flex flex-row items-center justify-center gap-[8px] self-stretch rounded-13xl border-[2px] border-solid border-darkslategray bg-lympha-primary py-[17px] pl-7 pr-5 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)]">
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
                <b className="text-mid font-body-large-bold relative inline-block min-w-[61px] text-left leading-[120%] tracking-[-0.02em] text-neutral-white">
                  {isSubmitting ? "Loading" : "Proceed"}
                </b>
                {!isSubmitting && (
                  <IoArrowForward className="relative h-5 min-h-[20px] w-5 text-white" />
                )}
              </div>
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Step1;
