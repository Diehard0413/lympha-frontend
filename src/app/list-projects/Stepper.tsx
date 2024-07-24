import React from "react";
import { cn } from "../helpers/utils";

type Props = {
  totalSteps: number;
  currentStep: number;
};

const Stepper = (props: Props) => {
  return (
    <div className="flex h-2.5 w-full items-center justify-between gap-x-4">
      <div className="h-full flex-1 rounded-full bg-white shadow-sm">
        <div
          className={cn(
            "h-full rounded-full bg-lympha-primary",
            props.currentStep > 1
              ? "w-full"
              : props.currentStep == 1
                ? "w-14"
                : "w-0",
          )}
        />
      </div>
      <div className="h-full flex-1 rounded-full bg-white shadow-sm">
        <div
          className={cn(
            "h-full rounded-full bg-lympha-primary",
            props.currentStep > 2
              ? "w-full"
              : props.currentStep == 2
                ? "w-14"
                : "w-0",
          )}
        />
      </div>
    </div>
  );
};

export default Stepper;
