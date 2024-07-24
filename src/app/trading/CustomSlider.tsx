"use client";

import React, { useState, useRef } from "react";
import { cn } from "../helpers/utils";

type Props = {
  onChange: (value: number) => void;
  value: number;
};

const CustomSlider = (props: Props) => {
  const [value, setValue] = useState<number>(0);
  const inputRef = useRef(null);

  const handleChange = (event: any) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };

  return (
    <div className="relative w-full">
      <div className="relative flex transform items-center transition-all duration-500 ease-in-out">
        <div className="absolute left-0 right-0 top-1/2 z-0 h-2 w-full -translate-y-1/2 rounded-full bg-neutral-black-2"></div>
        <div
          className={cn(
            "absolute left-0 right-0 top-1/2 z-10 w-full -translate-y-1/2",
            "bg-neutrals-4 overflow-visibled flex h-1 items-center justify-between",
          )}
        >
          <div
            className="relative h-2 rounded-full bg-lympha-primary shadow-sm"
            style={{ width: `${value}%` }}
          ></div>
        </div>

        <div
          className={cn(
            "overflow-visibled flex h-1 w-full items-center justify-between bg-transparent",
            "absolute left-0 right-0 top-1/2 z-20 w-full -translate-y-1/2",
          )}
        >
          <div
            className={cn(
              "relative size-4 rounded-full border-[3px] border-neutral-black-1 bg-neutral-black-2 shadow-sm",
              value >= 0 && "z-50 border-lympha-primary bg-lympha-dark",
            )}
          />
          <div
            className={cn(
              "relative size-4 rounded-full border-[3px] border-neutral-black-1 bg-neutral-black-2 shadow-sm",
              value >= 25 && "z-50 border-lympha-primary bg-lympha-dark",
            )}
          />
          <div
            className={cn(
              "relative size-4 rounded-full border-[3px] border-neutral-black-1 bg-neutral-black-2 shadow-sm",
              value >= 50 && "z-50 border-lympha-primary bg-lympha-dark",
            )}
          />
          <div
            className={cn(
              "relative size-4 rounded-full border-[3px] border-neutral-black-1 bg-neutral-black-2 shadow-sm",
              value >= 75 && "z-50 border-lympha-primary bg-lympha-dark",
            )}
          />
          <div
            className={cn(
              "relative size-4 rounded-full border-[3px] border-neutral-black-1 bg-neutral-black-2 shadow-sm",
              value >= 100 && "z-50 border-lympha-primary bg-lympha-dark",
            )}
          />
        </div>

        <input
          ref={inputRef}
          type="range"
          step={25}
          min={0}
          max={100}
          // className="w-full relative size-5 appearance-none bg-transparent custom-range-slider z-10 transition-all duration-100 ease-in-out"
          className="custom-range-slider relative size-5 w-full"
          onChange={handleChange}
          value={value}
          data-value={value}
        />
        {/* progress tooltip */}

        {/* thumb tooltip */}
        <div
          className="absolute left-0 z-30 flex size-8 items-center justify-center rounded-full bg-neutral-white shadow-sm"
          style={{
            left: `${value}%`,
            transform: `translateX(${
              value === 0
                ? -10
                : value === 100
                  ? -90
                  : value === 25
                    ? -30
                    : value === 75
                      ? -70
                      : -50
            }%)`,
          }}
        >
          <div className="aspect-square text-center font-mono text-[9px] font-semibold text-lympha-primary">
            {value}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
