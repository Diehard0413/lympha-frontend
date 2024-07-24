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
  [["image", "imageUrl"]],
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
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="font-medium text-lympha-primary"
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
              className="data-[closed]:transform-[scale(95%)] flex w-full max-w-xl flex-col gap-y-5 rounded-13xl bg-neutral-white p-10 font-proxima text-3xl text-neutral-black-5 shadow-[0px_2px_36px_rgba(0,_0,_0,_0.08)] backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
            >
              <div className="flex items-center justify-between self-stretch overflow-hidden">
                <div className="flex flex-col items-center justify-start self-stretch">
                  <h1 className="relative m-0 self-stretch font-bold text-inherit">
                    Unsuccessful Verification
                  </h1>
                  <b className="relative flex-1 text-sm font-normal text-neutral-black-4">
                    Project could not be verified due to lack of XYZ. Please
                    Submit XYZ below
                  </b>
                </div>

                <Button
                  onClick={close}
                  className="box-border flex h-12 w-12 shrink-0 flex-row items-center justify-center overflow-hidden rounded-13xl border-[1px] border-solid border-neutral-black-2 bg-neutral-white px-[11px] py-3"
                >
                  <IoMdClose className="relative h-6 min-h-[24px] w-6 text-ketto-primary" />
                </Button>
              </div>

              <form
                method="post"
                className="flex flex-col items-start justify-start gap-4 self-stretch font-proxima text-sm text-neutral-black-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div
                  className={`flex max-w-full flex-col items-start justify-start self-stretch text-left font-proxima text-base text-neutral-black-5`}
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
                  <div className="flex max-w-full flex-col items-start justify-start gap-[24px] self-stretch text-base text-neutral-black-5">
                    <div
                      className={cn(
                        "flex max-w-full flex-col items-start justify-start gap-y-2 self-stretch text-left text-base text-neutral-black-5",
                      )}
                    >
                      <label
                        htmlFor="file-upload"
                        className="relative font-bold leading-[140%] tracking-[-0.02em]"
                      >
                        Upload PDD
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
                      <div className="flex max-w-full flex-col items-start justify-start gap-[4px] self-stretch text-neutral-black-5">
                        <div className="box-border flex max-w-full flex-row flex-wrap items-center justify-start gap-[12px] self-stretch rounded-lg border-[0.5px] border-solid border-neutral-black-2 bg-neutral-white py-3 pl-[19px] pr-[11px] text-neutral-black-4">
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
                      {errors.imageUrl && (
                        <div className="relative text-sm tracking-tight text-state-error">
                          {errors.imageUrl.message}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center gap-x-5">
                  <button
                    type="button"
                    onClick={close}
                    className={`flex flex-1 cursor-pointer flex-col items-start justify-start self-stretch bg-[transparent] p-0 [border:none]`}
                  >
                    <div className="flex flex-row items-center justify-center gap-[8px] self-stretch rounded-full border border-lympha-primary py-[17px] pl-7 pr-5">
                      <b className="font-body-large-bold relative inline-block text-center text-lympha-primary">
                        I&apos;ll do it later
                      </b>
                      <IoArrowForward className="relative h-5 min-h-[20px] w-5 text-white" />
                    </div>
                  </button>
                  <button
                    type="submit"
                    className={`flex flex-1 cursor-pointer flex-col items-start justify-start self-stretch bg-[transparent] p-0 [border:none]`}
                  >
                    <div className="flex flex-row items-center justify-center gap-[8px] self-stretch rounded-full border-[2px] border-solid border-darkslategray bg-lympha-primary py-[17px] pl-7 pr-5">
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
                        {isSubmitting ? "Loading" : "Submit"}
                      </b>
                      {!isSubmitting && (
                        <IoArrowForward className="relative h-5 min-h-[20px] w-5 text-white" />
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
