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
        className="font-medium text-lympha-primary"
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

              <section className="font-body-large-bold flex flex-col items-start justify-start gap-[16px] self-stretch px-8 py-0 text-left text-sm text-neutral-black-4">
                <div className="mq450:flex-wrap flex flex-row items-center justify-between gap-[20px] self-stretch">
                  <div className="relative inline-block min-w-[90px] uppercase leading-[17px]">
                    Price Impact
                  </div>
                  <div className="relative inline-block w-[42px] shrink-0 text-right uppercase leading-[17px]">
                    -2.4%
                  </div>
                </div>
                <div className="mq450:flex-wrap flex flex-row items-center justify-between gap-[20px] self-stretch">
                  <div className="relative inline-block min-w-[68px] uppercase leading-[17px]">
                    Slippage
                  </div>
                  <div className="relative inline-block w-[57px] shrink-0 text-right uppercase leading-[17px]">
                    0.10%
                  </div>
                </div>
                <div className="mq450:flex-wrap flex flex-row items-center justify-between gap-[20px] self-stretch">
                  <div className="relative inline-block min-w-[110px] uppercase leading-[17px]">
                    Exchange rate
                  </div>
                  <div className="relative inline-block min-w-[96px] text-right uppercase leading-[17px]">{`1 LCT ~ 100 LET `}</div>
                </div>
                <div className="mq450:flex-wrap flex flex-row items-center justify-between gap-[20px] self-stretch">
                  <div className="relative inline-block w-[92px] shrink-0 uppercase leading-[17px]">
                    FEE
                  </div>
                  <div className="relative inline-block min-w-[71px] text-right uppercase leading-[17px]">
                    0.0392 LET
                  </div>
                </div>
                <div className="mq450:flex-wrap flex flex-row items-center justify-between gap-[20px] self-stretch">
                  <div className="relative inline-block min-w-[129px] uppercase leading-[17px]">
                    Minimum received
                  </div>
                  <div className="relative inline-block min-w-[71px] text-right uppercase leading-[17px]">
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
