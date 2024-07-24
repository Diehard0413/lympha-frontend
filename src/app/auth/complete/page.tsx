import React from "react";

type Props = {};

const CompletePrototype = (props: Props) => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-100 bg-[url('/images/auth-bg.png')] bg-cover bg-[bottom] bg-no-repeat font-proxima">
      <div className="absolute inset-0 left-[0px] grid h-full w-full place-items-center overflow-hidden bg-gray-100/50 shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)] [backdrop-filter:blur(30px)]">
        <div className="flex max-w-md flex-col">
          <div className="flex size-24 items-center justify-center self-center">
            <img
              loading="lazy"
              src="/icons/check-mark-complete.svg"
              className="h-full w-full"
            />
          </div>
          <div className="mt-8 w-full text-center text-3xl font-bold leading-10 tracking-tighter text-gray-900">
            KYC Submitted
          </div>
          <div className="mt-4 w-full text-center text-xl leading-9 tracking-tight text-gray-900">
            Your KYC information has been submitted. We will notify you once it
            is verified.
          </div>
          <div className="bg-teal-700 mt-8 flex w-full items-center justify-center rounded-[32px] border-2 border-solid border-emerald-900 border-opacity-0 py-2 pl-6 pr-4 text-lg font-bold leading-5 tracking-tight text-white shadow-sm">
            <div className="flex gap-2 rounded-full bg-lympha-primary px-20 py-5">
              <div>Go to dashboard</div>
              <img
                loading="lazy"
                src="/icons/arrow-right.svg"
                className="aspect-square w-5 shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletePrototype;
