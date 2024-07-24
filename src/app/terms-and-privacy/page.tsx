import React from "react";

type Props = {};

const TermsAndPrivacy = (props: Props) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden font-proxima [background:linear-gradient(rgba(230,_232,_232,_0.4),_rgba(230,_232,_232,_0.4)),_#fcfdfd]">
      <main className="mx-auto flex w-11/12 flex-row items-start justify-center py-10 md:w-5/6 md:px-5 lg:w-4/5">
        <section className="font-body-large-bold mq450:gap-[16px] flex w-full max-w-full flex-col items-start justify-start gap-4 text-left text-2xl text-neutral-black-6 md:gap-8 lg:w-4/5">
          <div className="flex flex-col items-start justify-center self-stretch">
            <div className="flex flex-col items-start justify-start gap-2 self-stretch">
              <h3 className="font-inherit relative m-0 self-stretch font-bold text-inherit">
                Terms and Privacy
              </h3>
              <h3 className="relative self-stretch text-base tracking-tight text-inherit text-neutral-black-4 md:text-inherit">
                Your Lympha assets have helped remove 5 tons of CO2e. Thats
                equivalent to recycling 712,837 plastic bottles. Great work!
              </h3>
            </div>
          </div>
          <div className="inline-flex h-20 w-full items-center justify-between rounded-3xl bg-neutral-black-4/5 px-6 py-5">
            <div className="inline-flex w-96 flex-col items-start justify-start gap-0.5">
              <div className="font-['Proxima Nova'] text-lg font-normal leading-relaxed text-gray-600">
                You have an investment opportunity?
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TermsAndPrivacy;
