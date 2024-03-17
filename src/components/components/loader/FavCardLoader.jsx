import { motion } from "framer-motion";
import React from "react";

export default function FavCardLoader() {
  return (
    <ul className="space-y-5 my-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <CardLoader key={index} index={index} />
        ))}
      </motion.div>
    </ul>
  );
}

const CardLoader = ({ index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [1, 0.2, 1] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: index * 0.3,
      }}
      exit={{ x: 100 }}
      // className="blog-card"
      // className="flex w-full flex-col gap-2"
      style={{ marginBottom: "20px" }}
    >
      <div className="flex w-full flex-col gap-2">
        <p className="h-3 w-full rounded-full bg-slate-700"></p>
        <div className="flex gap-3">
          <p className="h-3 w-8 rounded-full bg-slate-700"></p>
          <p className="h-3 w-8 rounded-full bg-slate-700"></p>
          <p className="h-3 w-8 rounded-full bg-slate-700"></p>
          <p className="h-3 w-8 rounded-full bg-slate-700"></p>
          <p className="h-3 w-8 rounded-full bg-slate-700"></p>
        </div>
      </div>
    </motion.div>
  );
};
