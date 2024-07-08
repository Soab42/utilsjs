import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="p-5 h-[90vh]">
      <Header />
    </div>
  );
}

const Header = () => {
  const variants = {
    animate: {
      height: ["100rem", "10rem", "100rem"],
      width: ["50rem", "30rem", "20rem"],
      opacity: [0.7, 0.5, 0.7],
      borderRadius: [500, 100, 1000],
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
      },
    },
  };
  return (
    <div className="w-full flex flex-col items-center justify-center  bg-slate-50 h-full overflow-hidden p-4 relative rounded-xl ">
      <motion.div
        className="header relative backdrop-blur-lg"
        viewport={{ once: true }}
      >
        <motion.h1
          className="xl:text-[10rem] text-7xl font-black text-center"
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          utils.<span className="text-amber-300">js</span>
        </motion.h1>
        <motion.p
          className="text-[1rem] flex items-center justify-center xl:absolute xl:top-40 mt-4 xl:mt-0 xl:right-36 border-y-2 px-4 w-[24.8rem] animate-pulse duration-1000 bg-gradient-to-r from-pink-400 bg-sky-400 via-amber-300 font-medium  text-white tracking-[.1rem] capitalize"
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          An accelerator engine for your web dev
        </motion.p>
      </motion.div>
      <motion.p
        className="xl:text-2xl text-xl xl:w-2/3 backdrop-blur-lg text-center font-bold mt-10"
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        A collection of components, hooks and utility functions to streamline
        your development process. From handling data manipulation to assisting
        with common tasks, utils.js provides a comprehensive set of tools to
        enhance your web development experience.
      </motion.p>
      <motion.button className="mt-12 px-20 rounded-full bg-green-500/40 hover:bg-green-300 py-5 text-xl  font-bold go ">
        <Link to={"/components"}>Let's explore</Link>
      </motion.button>
    </div>
  );
};
