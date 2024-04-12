import React from "react";
import { Link, useParams } from "react-router-dom";
import useActive from "../hooks/useActive";
import { AnimatePresence, motion } from "framer-motion";
import { componentsList } from "./componentsTypeList";
export default function ComponentsLeftBar() {
  const [active, setActive] = useActive();
  const params = useParams();
  return (
    <>
      {/* sm left bar */}
      <div
        className={`fixed px-2 z-10 ${active ? "h-screen w-screen" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setActive();
        }}
      >
        <div className={`xl:hidden " ${active ? "" : "bg-red-400"}`}>
          {!active && (
            <div className=" p-1 xl:hidden fixed  pl-5 top-14 left-0 w-full bg-white py-3  backdrop-blur-2xl ">
              <button
                className="flex flex-col gap-1 duration-500"
                onClick={setActive}
              >
                <div
                  className={`h-1 bg-black duration-500 rounded-full-rotate-45 w-5 translate-y-0
          `}
                ></div>

                <div
                  className={` h-1 bg-black duration-500 rounded-full  w-3 -translate-y-0
          `}
                ></div>
              </button>
            </div>
          )}
          <AnimatePresence>
            {active && (
              <motion.div
                className="w-1/2 md:w-1/4 lg:w-1/4 bg-white flex flex-col fixed mt-14 h-full pb-2"
                initial={{
                  opacity: 0,
                  translateX: -100,
                }}
                animate={{
                  translateX: -16,
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  translateX: -200,
                }}
              >
                <div className="w-full mt-2">
                  <button
                    className="flex flex-col gap-1 duration-500 float-end p-1"
                    onClick={setActive}
                  >
                    <div
                      className={`h-1 bg-black duration-500 rounded-full 
               -rotate-45 w-5 translate-y-2
              `}
                    ></div>

                    <div
                      className={`h-1 bg-black duration-500 rounded-full rotate-[45deg] w-5 -translate-y-0
              `}
                    ></div>
                  </button>
                </div>

                {/* title */}

                <p className="font-bold text-center text-xl py-2">Components</p>
                <Link
                  to={"/write"}
                  className="bg-green-700/20 text-center py-2 hover:bg-green-600/50 duration-500 w-full"
                >
                  Add New
                </Link>

                {/* list */}
                <div className="relative h-full overflow-y-scroll w-full ">
                  <ul className="flex flex-col p-2 rounded   ring-green-600/70 w-full">
                    {componentsList.map((component) => {
                      return (
                        <Link
                          to={`/components/${getFreshenComponent(component)}`}
                          key={component}
                        >
                          <li
                            className={`${
                              params &&
                              params?.name === getFreshenComponent(component)
                                ? "shadow-md ring-emerald-500 border-y border-green-600 rounded-sm bg-[#5cf24842]"
                                : ""
                            } h-10 flex-center mt-1   pl-2 border-b`}
                          >
                            {component}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* left bar */}
      <div className="hidden xl:block">
        <div className="w-full flex flex-col">
          <p className="font-bold text-center text-xl py-2">Components</p>
          <Link
            to={"/write"}
            className="bg-green-700/20 text-center py-2 hover:bg-green-600/50 duration-500 w-full"
          >
            Add New
          </Link>
        </div>
        <div className="relative h-full overflow-y-scroll w-62 ">
          <ul className="flex flex-col p-2 rounded   ring-green-600/70 w-56">
            {componentsList.map((component) => {
              return (
                <Link
                  to={`/components/${getFreshenComponent(component)}`}
                  key={component}
                >
                  <li
                    className={`${
                      params && params?.name === getFreshenComponent(component)
                        ? "shadow-md ring-emerald-500 border-y bg-[#5cf24842] border-green-600 rounded-sm"
                        : ""
                    } h-10 flex-center mt-1  pl-2 border-b`}
                  >
                    {component}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
function getFreshenComponent(text) {
  return text.replace(/\s+/g, "-").toLowerCase();
}
