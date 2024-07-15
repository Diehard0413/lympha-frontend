import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";
import { FiUpload } from "react-icons/fi";
import { IoMdClose, IoMdCloseCircle } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";

type Props = {};

const UploadModal = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const close = () => {
    setIsOpen(false);
  };

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

              <section className="self-stretch flex flex-col items-start justify-start  gap-4 text-sm text-neutral-black-4 font-proxima">
                <div
                  className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-base text-neutral-black-5 font-proxima`}
                >
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
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
                    className={`flex-1 cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start `}
                  >
                    <div className="self-stretch rounded-full bg-lympha-primary flex flex-row items-center justify-center py-[17px] pr-5 pl-7 gap-[8px] border-[2px] border-solid border-darkslategray">
                      <b className="relative  inline-block font-body-large-bold text-neutral-white text-center">
                        Submit
                      </b>
                      <IoArrowForward className="h-5 w-5 relative min-h-[20px] text-white" />
                    </div>
                  </button>
                </div>
              </section>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default UploadModal;
