import React from "react";

type Props = {};

const CompletePrototype = (props: Props) => {
  return (
    <div className="w-full h-screen relative bg-gray-100 overflow-hidden bg-[url('/images/auth-bg.png')] bg-cover bg-no-repeat bg-[bottom] font-proxima">
      <div className="absolute inset-0 left-[0px] shadow-[0px_0px_72px_rgba(2,_24,_29,_0.11)] [backdrop-filter:blur(30px)]  bg-gray-100/50 w-full h-full overflow-hidden grid place-items-center">
        <div className="flex flex-col max-w-md ">
          <div className="flex justify-center items-center self-center size-24">
            <img
              loading="lazy"
              src="/icons/check-mark-complete.svg"
              className="w-full h-full"
            />
          </div>
          <div className="mt-8 w-full text-3xl font-bold tracking-tighter leading-10 text-center text-gray-900">
            KYC Submitted
          </div>
          <div className="mt-4 w-full text-xl tracking-tight leading-9 text-center text-gray-900">
            Your KYC information has been submitted. We will notify you once it
            is verified.
          </div>
          <div className="flex justify-center items-center py-2 pr-4 pl-6 mt-8 w-full text-lg font-bold tracking-tight leading-5 text-white bg-teal-700 border-2 border-solid shadow-sm border-emerald-900 border-opacity-0 rounded-[32px]">
            <div className="flex gap-2 bg-lympha-primary py-5 px-20 rounded-full">
              <div>Go to dashboard</div>
              <img
                loading="lazy"
                src="/icons/arrow-right.svg"
                className="shrink-0 w-5 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletePrototype;
