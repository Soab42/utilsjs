import React from "react"; // Import React library
import { motion } from "framer-motion"; // Import motion component from Framer Motion library

const RotatingTitle = () => {
  // Define a functional component named RotatingTitle
  const text = "utils.js";
  const textArray = text.split("");
  //   console.log(textArray);

  return (
    <div className="xl:text-4xl text-2xl  w-fit tracking-wide flex justify-center font-bold  overflow-hidden">
      {textArray.map((letter, i) => {
        return (
          <motion.div
            className="duration-500 shadow-2xl rounded-sm  shadow-green-400"
            key={i}
            initial={{
              rotateY: 0,
              translateX: "10vh",
            }}
            animate={{
              rotateY: 360,
              translateX: "0vh",
            }}
            transition={{
              duration: 2,
              delay: i / 8,
              repeat: Infinity,
              repeatDelay: 5,
              type: "tween",
            }}
          >
            <span className={i > 5 ? "text-yellow-300" : "text-yellow-950"}>
              {letter}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default RotatingTitle; // Export the RotatingTitle component
