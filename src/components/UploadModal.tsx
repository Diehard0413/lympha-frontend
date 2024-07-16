import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React, { useCallback, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { IoMdClose, IoMdCloseCircle } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { useDropzone } from "react-dropzone";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { cn } from "@/app/helpers/utils";

type Props = {};

interface ImageUploadFormDataType {
  image?: File | null;
  imageUrl?: string;
}

const imageUploadValidationSchema = Yup.object().shape(
  {
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
const UploadModal = (props: Props) => {
  const navigator = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  const close = () => {
    setIsOpen(false);
  };

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
  } = useForm<ImageUploadFormDataType>({
    resolver: yupResolver(imageUploadValidationSchema),
    defaultValues: {},
  });

  const onSubmit = async (data: ImageUploadFormDataType) => {
    try {
      console.log("the data is ", data);
      // mock api call, with promise resolve
      await new Promise((resolve) =>
        setTimeout(() => {
          navigator.push("/list-projects/complete");
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
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-lympha-primary font-medium"
      >
        Upload missing documents
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-[100] w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-xl flex flex-col p-10 gap-y-5  bg-neutral-white backdrop-blur-2xl shadow-[0px_2px_36px_rgba(0,_0,_0,_0.08)] rounded-13xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 text-3xl text-neutral-black-5 font-proxima"
            >
              <div className="self-stretch overflow-hidden flex items-center justify-between">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <h1 className="m-0 self-stretch relative text-inherit   font-bold">
                    Unsuccessful Verification
                  </h1>
                  <b className="flex-1 relative text-sm text-neutral-black-4 font-normal">
                    Project could not be verified due to lack of XYZ. Please
                    Submit XYZ below
                  </b>
                </div>

                <Button
                  onClick={close}
                  className="h-12 w-12 rounded-13xl bg-neutral-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-[11px] border-[1px] border-solid border-neutral-black-2"
                >
                  <IoMdClose className="h-6 w-6 relative min-h-[24px] text-ketto-primary" />
                </Button>
              </div>

              <form
                method="post"
                className="self-stretch flex flex-col items-start justify-start  gap-4 text-sm text-neutral-black-4 font-proxima"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div
                  className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-base text-neutral-black-5 font-proxima`}
                >
                  {/* <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                    <b className="relative tracking-[-0.02em] leading-[140%]">
                      Upload XYZ
                    </b>
                    <div className="w-[189px] relative text-sm tracking-[-0.02em] leading-[140%] text-neutral-white hidden">{`helper text lorem ipsum dolor sit `}</div>
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
                      <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-neutral-black-5">
                        <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-row flex-wrap items-center justify-start py-3 pr-[11px] pl-[19px] gap-[12px] max-w-full text-neutral-black-4 border-[0.5px] border-solid border-neutral-black-2">
                          <input
                            placeholder="Or pase URL"
                            className="flex-1 relative py-2 inline-block  max-w-full border-none outline-none placeholder-neutral-black-4"
                          />
                          <button className="cursor-pointer [border:none] py-2 px-4 bg-lympha-disabled rounded-13xl flex flex-row items-center justify-center hover:bg-gainsboro-200">
                            <b className="relative text-3xs leading-[130%] uppercase inline-block font-body-large-bold text-lympha-primary text-left min-w-[40px]">
                              upload
                            </b>
                          </button>
                        </div>
                        <div className="w-[189px] relative text-sm tracking-[-0.02em] leading-[140%] text-neutral-white hidden">{`helper text lorem ipsum dolor sit `}</div>
                      </div>
                    </div>
                  </div> */}
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-base text-neutral-black-5">
                    <div
                      className={cn(
                        "self-stretch flex flex-col items-start justify-start max-w-full text-left text-base text-neutral-black-5 gap-y-2"
                      )}
                    >
                      <label
                        htmlFor="file-upload"
                        className="relative tracking-[-0.02em] leading-[140%] font-bold"
                      >
                        Upload PDD
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
                      <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-neutral-black-5">
                        <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-row flex-wrap items-center justify-start py-3 pr-[11px] pl-[19px] gap-[12px] max-w-full text-neutral-black-4 border-[0.5px] border-solid border-neutral-black-2">
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
                      {errors.imageUrl && (
                        <div className="relative text-sm tracking-tight text-state-error">
                          {errors.imageUrl.message}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center gap-x-5">
                  <button
                    className={`flex-1 cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start `}
                  >
                    <div className="self-stretch rounded-full border border-lympha-primary flex flex-row items-center justify-center py-[17px] pr-5 pl-7 gap-[8px]">
                      <b className="relative  inline-block font-body-large-bold text-lympha-primary text-center">
                        I&apos;ll do it later
                      </b>
                      <IoArrowForward className="h-5 w-5 relative min-h-[20px] text-white" />
                    </div>
                  </button>
                  <button
                    type="submit"
                    className={`flex-1 cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start `}
                  >
                    <div className="self-stretch rounded-full bg-lympha-primary flex flex-row items-center justify-center py-[17px] pr-5 pl-7 gap-[8px] border-[2px] border-solid border-darkslategray">
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
                        {isSubmitting ? "Loading" : "Submit"}
                      </b>
                      {!isSubmitting && (
                        <IoArrowForward className="h-5 w-5 relative min-h-[20px] text-white" />
                      )}
                    </div>
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default UploadModal;
