import { motion } from "framer-motion";

export default function ImageLoader() {
  return (
    <div className="absolute text-xs left-0 top-0 bottom-0 text-center  w-full h-full ">
      <div className="mt-12 flex-center text-xl ">
        <motion.p
          className="text-gray-200 drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ delay: 0.1, duration: 1, repeat: Infinity }}
        >
          Uploading
        </motion.p>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ delay: 0.1, duration: 1, repeat: Infinity }}
        >
          .
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ delay: 0.4, duration: 1, repeat: Infinity }}
        >
          .
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ delay: 0.6, duration: 1, repeat: Infinity }}
        >
          .
        </motion.span>
      </div>
      <motion.span
        className="absolute text-xs -left-4 -top-5 text-center w-full dark:bg-black"
        initial={{ opacity: 0.4, width: "140%" }}
        animate={{
          height: ["10%", "150%", "10%"],
          width: "140%",
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      ></motion.span>
    </div>
  );
}
