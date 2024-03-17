import { motion } from "framer-motion";
import Person from "../../assets/icons/user.svg";
import MainCardLoader from "./MainCardLoader";
export default function ProfileLoader() {
  return (
    <motion.main
      className="mx-auto xl:w-[1020px] md:w-[700px] py-8"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="flex flex-col items-center py-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="size-32 bg-sky-500/50 rounded-full">
          <img src={Person} alt="person" />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h3 className="mt-5 h-4 rounded-md w-36 bg-slate-700/70"></h3>
          <p className="w-56 h-2 bg-gray-600 mt-3 rounded-md"></p>
        </div>

        <div className="w-full flex flex-col items-center mt-5">
          <p className="w-full h-2 bg-slate-700 mt-3 rounded-md"></p>
          <p className="w-2/3 h-2 bg-slate-700 mt-3 rounded-md"></p>
        </div>
        <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
      </motion.div>
      <div className="my-6 space-y-4">
        <MainCardLoader />
      </div>
    </motion.main>
  );
}
