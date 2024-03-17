import { motion } from "framer-motion";

export default function RotatingSquire() {
  return (
    <motion.div
      className="xl:size-20 size-16 rotate-45 bg-pink-600 absolute xl:right-72 right-24 top-40 rounded"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
    ></motion.div>
  );
}
