import { ref } from "firebase/database";
import { AnimatePresence, motion } from "framer-motion";
import { useList } from "react-firebase-hooks/database";
import { Link, useLocation, useParams } from "react-router-dom";

import { db } from "../../../../firebase";
import useActive from "../../../hooks/useActive";
// import { extractFirstPathname } from "../../utils/extractFirstPathname";
import { removeSlug } from "../../../utils/generateSlug";
import { extractFirstPathname } from "../../../utils/extractFirstPathname";
import usePortal from "../../../hooks/usePortal";
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
            <li
              key={index}
              className={`${
                params && params?.name === item.key
                  ? "shadow-md ring-emerald-500 border-y border-green-600 w-full rounded-sm"
                  : ""
              } h-10 flex mt-1 items-center hover:bg-green-600/30 pl-2 border-b`}
            >
              <Link to={`${pathName}/${decodeURIComponent(item.key)}`}>
                {removeSlug(item.key)}
              </Link>
            </li>
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
      className={`fixed -top-1 ${active ? "h-screen w-screen" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        setActive(false);
      }}
    >
      {!active && (
        <div className=" p-1 xl:hidden fixed  pl-5 top-[4.5rem] left-0 bg-white py-3 backdrop-blur-2xl w-full">
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
              className={` h-1 bg-black duration-500 rounded-full  w-5 -translate-y-0
        `}
            ></div>
          </button>
        </div>
      )}
      <AnimatePresence>
        {active && (
          <motion.ul
            className="w-[45vw] flex flex-col p-2 rounded h-full ring-1 ring-green-600/70 bg-white lg:hidden absolute top-20 z-50 "
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
                <li
                  key={index}
                  className={`${
                    params && params?.name === item.key
                      ? "shadow-md ring-emerald-500 border-y border-green-600 w-full rounded-sm"
                      : ""
                  } h-10 flex mt-1 items-center hover:bg-green-600/30 pl-2 border-b`}
                >
                  <Link
                    to={`${pathName}/${decodeURIComponent(item.key)}`}
                    onClick={setActive}
                  >
                    {removeSlug(item.key)}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
