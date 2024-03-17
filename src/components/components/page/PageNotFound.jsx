import { motion } from "framer-motion";
import React from "react";
import elephent from "../../assets/icons/elephent.png";
import Tree from "../../assets/icons/tree.png";
export default function PageNotFound() {
  const text = "404 | Page Not Found";
  return (
    <div className="h-[79vh] relative flex justify-center items-center flex-col overflow-hidden relative">
      <div className="font-thin  z-10 backdrop-blur-2xl  flex justify-between px-96 items-center h-screen">
        <motion.img
          transition={{ delay: 1, repeat: Infinity }}
          src={Tree}
          width={500}
        />
        <div>
          <motion.img
            animate={{
              // rotateY: 10,
              // rotateX: 10,
              rotateZ: [10, 0, 10],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            src={elephent}
            // className="animate-ping"
          />
          <p className="absolute text-7xl top-[75%] ">404 | Page Not Found!</p>
        </div>
      </div>
      <motion.div
        className="absolute top-0 bg-gradient-to-br shadow-pink/10-400  from-yellow-300 via-red-400 via-40%  to-sky-500 text-center  shadow-2xl shadow-pink-400  size-[20rem] rounded-full z-0 "
        animate={{
          x: [100, -100],
          y: [300, 600],
          borderTopLeftRadius: [100, 800],
          borderTopRightRadius: [10, 80, 200, 200],
          borderBottomRightRadius: [100, 500],
          borderBottomLeftRadius: [300],
          scale: [0, 2, 0, 2],
          opacity: [1, 0, 1, 0],
        }}
        transition={{
          // delay: 1,
          duration: 7,
          times: [0, 3, 2, 1],
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div
        className="absolute top-0 bg-gradient-to-br shadow-pink/10-400  from-emerald-400 via-green-400 via-80%  to-sky-500 text-center  shadow-2xl shadow-pink-400  size-[10rem] rounded-full z-0 "
        animate={{
          x: [-200, 100],
          y: [0, 100],
          borderTopLeftRadius: [100, 100],
          borderTopRightRadius: [10, 400, 0, 200],
          borderBottomRightRadius: [100, 900],
          borderBottomLeftRadius: [300, 900],
          scale: [1, 2, 0, 1],
          opacity: [1, 1, 0, 1],
        }}
        transition={{
          // delay: 1,
          duration: 7,
          times: [0, 3, 2, 1],
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
    </div>
  );
}
