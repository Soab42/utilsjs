import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SearchInput({ onChange }) {
  const [index, setIndex] = useState(0);
  const indexRef = useRef();
  const searchRef = useRef();
  useEffect(() => {
    clearInterval(indexRef.current);
    indexRef.current = setInterval(() => {
      setIndex((index + 1) % PlaceHolder.length);
    }, 3000);
    return () => clearInterval(indexRef.current);
  }, [index]);

  return (
    <div className="">
      <h3 className="font-bold text-xl pl-2 dark:text-slate-400 my-2">
        Search for Your Desire Blogs
      </h3>
      <div className="relative">
        {!searchRef.current?.value && (
          <div className="absolute top-3 left-3 pointer-events-none">
            <AnimatePresence mode="sync">
              {PlaceHolder.map(
                (text, i) => i == index && <RevealText key={i} text={text} />
              )}
            </AnimatePresence>
          </div>
        )}
        <input
          onChange={onChange}
          type="text"
          ref={searchRef}
          className="w-full bg-transparent p-2 text-base dark:text-white outline-none border-none rounded-lg focus:ring focus:ring-indigo-600 ring-1 h-12 focus:backdrop-blur-xl"
        />
      </div>
    </div>
  );
}

const RevealText = ({ text }) => {
  const textArray = text.split("");
  return textArray.map((text, index) => (
    <motion.span
      className=" text-gray-400 top-0 text-md"
      initial={{ x: -5, opacity: 0, display: "hidden" }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.1 * index,
        duration: 0.009,
      }}
      key={index}
    >
      {text}
    </motion.span>
  ));
};

const PlaceHolder = [
  "react router dom",
  "tailwind css",
  "javascript framework",
  "redux",
  "axios",
  "formik",
  "storybook",
  "jest",
  "webpack",
  "babel",
];
