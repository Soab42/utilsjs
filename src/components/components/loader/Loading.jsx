import { motion } from "framer-motion";
export default function Loading() {
  return (
    <div className="absolute text-xs left-0 top-0 text-center rounded-full  w-full h-full">
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
    </div>
  );
}
