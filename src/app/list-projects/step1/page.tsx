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
      "Conservation methodology is required"
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
  [["image", "imageUrl"]]
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

  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        setValue("image", file);
        setPreview(URL.createObjectURL(file));
      }
    },
    [setValue]
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
    <div className="w-full min-h-screen relative [background:linear-gradient(rgba(230,_232,_232,_0.4),_rgba(230,_232,_232,_0.4)),_#fcfdfd] overflow-hidden flex flex-col items-start justify-start font-proxima">
      <Navbar />
      <main className="self-stretch flex flex-row items-start justify-center px-5 box-border max-w-full py-10">
        <section className="mx-auto flex flex-col items-start justify-start  gap-4 max-w-full text-left text-sm py-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={
              "w-lg flex flex-col items-start justify-start gap-10 text-left text-13xl text-neutral-black-6"
            }
          >
            <div className="self-stretch flex flex-col items-start justify-start">
              <h1 className="m-0 self-stretch relative text-lg tracking-tight leading-10 font-bold">
                List your project
              </h1>
              <div className="relative text-lg tracking-[-0.02em] leading-[140%]">
                Please provide the necessary information to verify and list the
                project.
              </div>
            </div>
            <Stepper currentStep={1} totalSteps={2} />
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-base text-neutral-black-5">
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                <b className="relative tracking-[-0.02em] leading-[140%] inline-block min-w-[95px]">
                  Project Name
                </b>
                <div className="self-stretch rounded-lg bg-neutral-white flex flex-row items-center justify-start py-4 px-5 max-w-full border-[0.5px] border-solid border-neutral-black-2">
                  <input
                    {...register("projectName")}
                    className="w-full text-base bg-transparent flex-1 relative tracking-tight text-left max-w-full p-0 outline-none border-none appearance-none placeholder:text-neutral-black-4 text-neutral-black-5"
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
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                <b className="relative tracking-[-0.02em] leading-[140%]">
                  Conservation Methodology
                </b>
                <Controller
                  control={control}
                  name="conservationMethodology"
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="self-stretch rounded-lg bg-neutral-white flex flex-row items-center justify-start py-4 px-5 max-w-full border-[0.5px] border-solid border-neutral-black-2 bg-transparent flex-1 relative tracking-tight text-left p-0 outline-none placeholder:text-neutral-black-4 text-neutral-black-5"
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
                  "self-stretch flex flex-col items-start justify-start max-w-full text-left text-base text-neutral-black-5 gap-y-2"
                )}
              >
                <label
                  htmlFor="file-upload"
                  className="relative tracking-[-0.02em] leading-[140%] font-bold"
                >
                  Upload
                </label>
                <div
                  {...getRootProps()}
                  className={cn(
                    "w-full border-2 border-dashed rounded-lg cursor-pointer",
                    isDragActive ? "border-blue-500 " : "border-gray-300"
                  )}
                >
                  <input id="file-upload" {...getInputProps()} />
                  {isDragActive ? (
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-neutral-black-3">
                        <div className="self-stretch rounded-lg bg-gainsboro-600 flex flex-col items-center justify-center py-[46px] pr-5 pl-7 gap-[4px] border-[1px] border-dashed border-neutral-black-2">
                          <FiUpload className="w-6 h-6 relative overflow-hidden shrink-0" />
                          <b className="relative tracking-[-0.02em] leading-[140%]">
                            You can drop the file now ...
                          </b>
                          <div className="relative text-sm tracking-[-0.02em] leading-[20px]"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-neutral-black-3">
                        <div className="self-stretch rounded-lg bg-gainsboro-600 flex flex-col items-center justify-center py-[46px] pr-5 pl-7 gap-[4px] border-[1px] border-dashed border-neutral-black-2">
                          <FiUpload className="w-6 h-6 relative overflow-hidden shrink-0" />
                          <b className="relative tracking-[-0.02em] leading-[140%]">
                            Select a file to upload
                          </b>
                          <div className="relative text-sm tracking-[-0.02em] leading-[20px]">
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
                        className="size-full object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                )}
                <div className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full text-neutral-black-5">
                  <div className="self-stretch rounded-lg bg-neutral-white flex flex-row flex-wrap items-center justify-start py-3 px-5 gap-3 max-w-full text-neutral-black-4 border-[0.5px] border-solid border-neutral-black-2">
                    <input
                      {...register("imageUrl")}
                      type="url"
                      placeholder="Or paste URL"
                      className="flex-1 relative py-2 inline-block  max-w-full border-none outline-none placeholder-neutral-black-4"
                    />
                    <button
                      type="button"
                      className="cursor-pointer [border:none] py-2 px-4 bg-lympha-disabled rounded-13xl flex flex-row items-center justify-center hover:bg-gainsboro-200"
                    >
                      <b className="relative text-3xs leading-[130%] uppercase inline-block font-body-large-bold text-lympha-primary text-left min-w-[40px]">
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
              className="cursor-pointer border-none p-0 bg-transparent self-stretch flex flex-col items-start justify-start"
            >
              <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl bg-lympha-primary flex flex-row items-center justify-center py-[17px] pr-5 pl-7 gap-[8px] border-[2px] border-solid border-darkslategray">
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
                <b className="relative text-mid tracking-[-0.02em] leading-[120%] inline-block font-body-large-bold text-neutral-white text-left min-w-[61px]">
                  {isSubmitting ? "Loading" : "Proceed"}
                </b>
                {!isSubmitting && (
                  <IoArrowForward className="h-5 w-5 relative min-h-[20px] text-white" />
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
