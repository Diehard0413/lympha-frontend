import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";

type Props = {};

const LoadingPage = (props: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[1000] w-full h-screen bg-gray-100 overflow-hidden bg-[url('/images/auth-bg.png')] bg-cover bg-no-repeat bg-[bottom] grid place-items-center"
      >
        <div className="flex flex-row items-center justify-start gap-3">
          <img
            className="h-20 relative object-cover"
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
