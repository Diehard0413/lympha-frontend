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
    <div className="w-full relative">
      <div className="relative flex items-center transition-all duration-500 ease-in-out transform">
        <div className="absolute top-1/2 h-2 -translate-y-1/2 left-0 right-0 w-full z-0 bg-neutral-black-2 rounded-full"></div>
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full z-10",
            "h-1 bg-neutrals-4 flex justify-between items-center overflow-visibled"
          )}
        >
          <div
            className="shadow-sm relative rounded-full h-2 bg-lympha-primary"
            style={{ width: `${value}%` }}
          ></div>
        </div>

        <div
          className={cn(
            "w-full h-1 bg-transparent flex justify-between items-center overflow-visibled",
            "absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full z-20"
          )}
        >
          <div
            className={cn(
              "size-4 border-[3px] border-neutral-black-1 shadow-sm relative rounded-full bg-neutral-black-2",
              value >= 0 && "bg-lympha-dark z-50 border-lympha-primary"
            )}
          />
          <div
            className={cn(
              "size-4 border-[3px] border-neutral-black-1 shadow-sm relative rounded-full bg-neutral-black-2",
              value >= 25 && "bg-lympha-dark z-50 border-lympha-primary"
            )}
          />
          <div
            className={cn(
              "size-4 border-[3px] border-neutral-black-1 shadow-sm relative rounded-full bg-neutral-black-2",
              value >= 50 && "bg-lympha-dark z-50 border-lympha-primary"
            )}
          />
          <div
            className={cn(
              "size-4 border-[3px] border-neutral-black-1 shadow-sm relative rounded-full bg-neutral-black-2",
              value >= 75 && "bg-lympha-dark z-50 border-lympha-primary"
            )}
          />
          <div
            className={cn(
              "size-4 border-[3px] border-neutral-black-1 shadow-sm relative rounded-full bg-neutral-black-2",
              value >= 100 && "bg-lympha-dark z-50 border-lympha-primary"
            )}
          />
        </div>

        <input
          ref={inputRef}
          type="range"
          step={25}
          min={0}
          max={100}
          defaultValue={0}
          // className="w-full relative size-5 appearance-none bg-transparent custom-range-slider z-10 transition-all duration-100 ease-in-out"
          className="w-full relative size-5 custom-range-slider"
          onChange={handleChange}
          value={value}
          data-value={value}
        />
        {/* progress tooltip */}

        {/* thumb tooltip */}
        <div
          className="z-30 absolute size-8 shadow-sm rounded-full bg-neutral-white left-0 flex items-center justify-center"
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
          <div className="text-[9px] aspect-square text-center font-mono font-semibold  text-lympha-primary">
            {value}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
