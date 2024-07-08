import { motion } from "framer-motion";

export default function LoadingLoader() {
  return (
    <div className="absolute h-full  text-white overflow-hidden backdrop-blur-sm w-full top-0">
      <motion.div className="w-full h-full">
        <div className="absolute text-xs  text-center rounded-full  w-full h-full">
          <div className="mt-[35vh] flex-center text-xl ">
            <motion.p
              className="text-sky-400 text-7xl  drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ delay: 0.1, duration: 1, repeat: Infinity }}
            >
              Updating
            </motion.p>
            <motion.span
              className="text-7xl drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ delay: 0.1, duration: 1, repeat: Infinity }}
            >
              .
            </motion.span>
            <motion.span
              className="text-7xl drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ delay: 0.4, duration: 1, repeat: Infinity }}
            >
              .
            </motion.span>
            <motion.span
              className="text-7xl drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ delay: 0.6, duration: 1, repeat: Infinity }}
            >
              .
            </motion.span>
          </div>
          <motion.span
            className="absolute text-xs bg-pink-400/20 h-full text-center w-full bg-sky-900 top-1 left-0 blur-md"
            initial={{ opacity: 0.2, width: "100%" }}
            animate={{
              rotateX: 360,
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          ></motion.span>
          <motion.span
            className="absolute text-xs bg-pink-400 h-full text-center w-full bg-gray-400 top-1 left-0 blur-md"
            initial={{ opacity: 0.6, width: "100%" }}
            animate={{
              rotateX: 360,
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          ></motion.span>
        </div>
      </motion.div>
    </div>
  );
}
