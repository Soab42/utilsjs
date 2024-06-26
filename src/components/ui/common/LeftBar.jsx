import { ref } from "firebase/database";
import { AnimatePresence, motion } from "framer-motion";
import { useList } from "react-firebase-hooks/database";
import { Link, useLocation, useParams } from "react-router-dom";

import { db } from "../../../../firebase";
import useActive from "../../../hooks/useActive";
// import { extractFirstPathname } from "../../utils/extractFirstPathname";
import { removeSlug } from "../../../utils/generateSlug";
import { extractFirstPathname } from "../../../utils/extractFirstPathname";
export default function LeftBar() {
  // Define an array of items with links
  const location = useLocation();
  const params = useParams();
  const pathName = extractFirstPathname(location?.pathname);
  const reference = ref(db, pathName);
  const [snapshots, loading, error] = useList(reference);

  error && <strong>Error: {error}</strong>;

  loading && <span>;List: Loading...</span>;

  return (
    <div className="">
      <SmallLeftBar snapshots={snapshots} />
      {/* for large device */}
      <ul className="lg:flex flex-col mr-4 p-2 rounded h-full ring-1 ring-green-600/70 bg-white hidden ">
        <Link
          to={"/write"}
          className="bg-green-700/20 text-center py-2 hover:bg-green-600/50 duration-500 w-full"
        >
          Add New
        </Link>

        {snapshots.length === 0 && <span>No Data Found</span>}
        {/* Map over the array to render each item */}
        {snapshots?.map((item, index) => {
          return (
            <Link
              to={`${pathName}/${decodeURIComponent(item.key)}`}
              key={index}
            >
              <li
                className={`${
                  params && params?.name === item.key
                    ? "shadow-md ring-emerald-500 border-y bg-[#5cf24842]  border-green-600 w-full rounded-sm"
                    : ""
                } h-10 flex-center mt-1 items-center  pl-2 border-b`}
              >
                {removeSlug(item.key)}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

function SmallLeftBar({ snapshots }) {
  const [active, setActive] = useActive();
  const params = useParams();
  const pathName = extractFirstPathname(location?.pathname);

  return (
    <div
      className={`fixed ${active ? "h-screen w-screen" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        setActive(false);
      }}
    >
      {!active && (
        <div className=" p-1 xl:hidden fixed top-14  pl-5 left-0 bg-white py-3 backdrop-blur-2xl w-full">
          <button
            className="flex flex-col gap-1 duration-500"
            onClick={(e) => {
              e.stopPropagation();
              setActive();
            }}
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
          <motion.ul
            className="w-1/2 md:w-1/4 lg:1/4 flex flex-col p-2 rounded h-full  bg-white lg:hidden fixed top-14 z-10 left-0 "
            initial={{
              opacity: 0,
              translateX: -100,
            }}
            animate={{
              translateX: 0,
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              translateX: -400,
            }}
          >
            <div className="w-full">
              <button
                className="flex flex-col gap-1 duration-500 mb-3 float-end p-1"
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
            <Link
              to={"/write"}
              className="bg-green-700/20 text-center py-2 hover:bg-green-600/50 duration-500 w-full"
            >
              Add New
            </Link>

            {snapshots.length === 0 && <span>No Data Found</span>}
            {/* Map over the array to render each item */}
            {snapshots?.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`${pathName}/${decodeURIComponent(item.key)}`}
                  onClick={setActive}
                >
                  <li
                    className={`${
                      params && params?.name === item.key
                        ? "shadow-md ring-emerald-500 border-y bg-[#5cf24842] border-green-600 w-full rounded-sm"
                        : ""
                    } h-10 flex mt-1 items-center  pl-2 border-b`}
                  >
                    {removeSlug(item.key)}
                  </li>
                </Link>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
