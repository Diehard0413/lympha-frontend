import { Button, Dialog, DialogPanel } from "@headlessui/react";
import React from "react";
import { IoMdClose } from "react-icons/io";

type Props = {};

const SwapModal = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-lympha-primary font-medium"
      >
        SWAP
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

              <section className="self-stretch flex flex-col items-start justify-start py-0 px-8 gap-[16px] text-left text-sm text-neutral-black-4 font-body-large-bold">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                  <div className="relative leading-[17px] uppercase inline-block min-w-[90px]">
                    Price Impact
                  </div>
                  <div className="w-[42px] relative leading-[17px] uppercase text-right inline-block shrink-0">
                    -2.4%
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                  <div className="relative leading-[17px] uppercase inline-block min-w-[68px]">
                    Slippage
                  </div>
                  <div className="w-[57px] relative leading-[17px] uppercase text-right inline-block shrink-0">
                    0.10%
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                  <div className="relative leading-[17px] uppercase inline-block min-w-[110px]">
                    Exchange rate
                  </div>
                  <div className="relative leading-[17px] uppercase text-right inline-block min-w-[96px]">{`1 LCT ~ 100 LET `}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                  <div className="w-[92px] relative leading-[17px] uppercase inline-block shrink-0">
                    FEE
                  </div>
                  <div className="relative leading-[17px] uppercase text-right inline-block min-w-[71px]">
                    0.0392 LET
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                  <div className="relative leading-[17px] uppercase inline-block min-w-[129px]">
                    Minimum received
                  </div>
                  <div className="relative leading-[17px] uppercase text-right inline-block min-w-[71px]">
                    0.0392 LET
                  </div>
                </div>
              </section>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default SwapModal;
