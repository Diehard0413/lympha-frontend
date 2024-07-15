import React, { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  className: string;
  children: React.ReactNode;
  id?: string;
}

const AnimationContainer: FC<Props> = ({ children, className = "", id }) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "backOut" }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
