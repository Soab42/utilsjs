import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link, useParams } from "react-router-dom";
// import useActive from "../../hooks/useActive";
import ComponentsType from "../components/ui/ComponentsType";
import { componentsList } from "../data/componentsTypeList";
import useActive from "../hooks/useActive";

export default function Components() {
  const [active, setActive] = useActive();
  const params = useParams();
  return (
    <div className="flex border-x-2 h-[90vh] ">
      {/* sm left bar */}
      <div
        className={`fixed top-0 px-2 ${active ? "h-screen w-screen" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setActive();
        }}
      >
        <div className={`xl:hidden mt-16 " ${active ? "" : "bg-red-400"}`}>
          {!active && (
            <div className=" p-1 xl:hidden fixed  pl-5 top-[4.5rem] left-0 w-full bg-white py-3 backdrop-blur-2xl ">
              <button
                className="flex flex-col gap-1 duration-500"
                onClick={setActive}
              >
                <div
                  className={`h-1 bg-black duration-500 rounded-full-rotate-45 w-5 translate-y-0
              `}
                ></div>

                <div
                  className={` h-1 bg-black duration-500 rounded-full  w-5 -translate-y-0
              `}
                ></div>
              </button>
            </div>
          )}
          <AnimatePresence>
            {active && (
              <motion.div
                className="w-1/2 bg-white flex flex-col fixed h-full"
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
                        <li
                          className={`${
                            params &&
                            params?.name === getFreshenComponent(component)
                              ? "shadow-md ring-emerald-500 border-y border-green-600 rounded-sm"
                              : ""
                          } h-10 flex mt-1 items-center hover:bg-green-600/30 pl-2 border-b`}
                          key={component}
                        >
                          <Link
                            to={`/components/${getFreshenComponent(component)}`}
                          >
                            {component}
                          </Link>
                        </li>
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
                <li
                  className={`${
                    params && params?.name === getFreshenComponent(component)
                      ? "shadow-md ring-emerald-500 border-y border-green-600 rounded-sm"
                      : ""
                  } h-10 flex mt-1 items-center hover:bg-green-600/30 pl-2 border-b`}
                  key={component}
                >
                  <Link to={`/components/${getFreshenComponent(component)}`}>
                    {component}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* content */}
      <div
        className="xl:w-[80%] h-screen  xl:p-4 overflow-hidden
      "
      >
        {params.name && <ComponentsType />}
      </div>
    </div>
  );
}

function getFreshenComponent(text) {
  return text.replace(/\s+/g, "-").toLowerCase();
}
