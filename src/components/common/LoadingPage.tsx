"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const LoadingPage = (props: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[1000] grid h-screen w-full place-items-center overflow-hidden bg-gray-100 bg-[url('/images/auth-bg.png')] bg-cover bg-[bottom] bg-no-repeat"
      >
        <div className="flex flex-row items-center justify-start gap-3">
          <img
            className="relative h-20 object-cover"
            loading="lazy"
            alt=""
            src="/images/full-logo.svg"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingPage;
