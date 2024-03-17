import React from "react"; // Import React library
import { motion } from "framer-motion"; // Import motion component from Framer Motion library

const RotatingTitle = () => {
  // Define a functional component named RotatingTitle
  const text = "UtilsJs";
  const textArray = text.split("");
  //   console.log(textArray);

  return (
    <div className="xl:text-4xl text-2xl font-thin tracking-wide flex justify-center  text-yellow-950 overflow-hidden">
      {textArray.map((letter, i) => {
        return (
          <motion.div
            className="duration-500 shadow-2xl rounded-sm bg-blue-400/10 px-1 shadow-green-400"
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
              delay: i / 10,
              repeat: Infinity,
              repeatDelay: 5,
              type: "tween",
            }}
          >
            {letter}
          </motion.div>
        );
      })}
    </div>
  );
};

export default RotatingTitle; // Export the RotatingTitle component
