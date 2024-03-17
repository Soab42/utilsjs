import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function AnimatedValueSpan({ initialValue = 0 }) {
  const prevValue = useRef(0);

  const [isIncrement, setIsIncrement] = useState(false);

  const buttonVariant = {
    hidden: { y: !isIncrement ? -16 : 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        delay: 0.1,
      },
    },
    exit: {
      y: !isIncrement ? 16 : -16,
      opacity: 0,
      position: "absolute",
      transition: {
        duration: 0.2,
      },
    },
  };

  useEffect(() => {
    if (initialValue > prevValue.current) {
      setIsIncrement(true);
    } else if (initialValue < prevValue.current) {
      setIsIncrement(false);
    }
    prevValue.current = initialValue;
  }, [initialValue]);

  return (
    <AnimatePresence>
      <motion.span
        key={initialValue}
        variants={buttonVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {initialValue}
      </motion.span>
    </AnimatePresence>
  );
}
