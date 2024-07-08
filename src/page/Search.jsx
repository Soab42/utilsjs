/* eslint-disable react/display-name */
/* eslint-disable react/no-unescaped-entities */
import { AnimatePresence, motion } from "framer-motion";
import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useState,
} from "react";
import CloseIcon from "../../assets/icons/close2.svg";
import useActive from "../../hooks/useActive";
import useAxios from "../../hooks/useAxios";
import useDebounce from "../../hooks/useDebounce";
import { searchChildVariants, searchVariants } from "../animated/variants";
import SearchInput from "../search/SearchInput";
import SearchResult from "../search/SearchResult";

const Search = forwardRef((props, ref) => {
  const [show, setShow] = useActive(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { api } = useAxios();
  const [searchResult, setSearchResult] = useState();
  useImperativeHandle(ref, () => {
    return {
      open: () => setShow(true),
      close: () => setShow(false),
      show: show,
    };
  });

  useLayoutEffect(() => {
    const root = document.querySelector("#root");

    // Call disableScroll function when component mounts
    if (show) {
      root.style.height = "100vh";
      root.style.overflow = "hidden";
    }

    return () => {
      root.style.height = "";
      root.style.overflow = "";
    };
  }, [show]);

  const doSearch = useDebounce(async (value) => {
    setLoading(true);
    setError();
    try {
      const res = await api.get(`search?q=${value}`);
      if (res?.status === 200) {
        setSearchResult(res.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);

      setError(error?.response?.data?.message || "Something went wrong !");
    }
  }, 500);

  const handleChange = (e) => {
    doSearch(e.target.value);
  };

  return (
    show && (
      <AnimatePresence>
        <motion.section
          className="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50"
          variants={searchVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className="relative w-6/12 mx-auto dark:bg-slate-900 bg-slate-100 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10"
            variants={searchChildVariants}
          >
            <SearchInput onChange={handleChange} />

            {/* <!-- Search Result --> */}
            <div className="">
              <motion.h3 className="dark:text-slate-400 font-bold mt-6">
                {searchResult?.length && !error && (
                  <span>
                    Search Results :{" "}
                    <span className="text-green-400">
                      {searchResult?.length}{" "}
                    </span>{" "}
                    post found matching "
                    <span className="text-green-400 text-lg">
                      {searchResult.query}
                    </span>
                    " keyword
                  </span>
                )}
              </motion.h3>

              <SearchResult
                error={error}
                loading={loading}
                searchResult={searchResult}
              />
            </div>

            <button onClick={() => setShow(false)}>
              <img
                src={CloseIcon}
                alt="Close"
                className="absolute right-2 top-2 cursor-pointer w-8 h-8"
              />
            </button>
          </motion.div>
        </motion.section>
      </AnimatePresence>
    )
  );
});

export default Search;
