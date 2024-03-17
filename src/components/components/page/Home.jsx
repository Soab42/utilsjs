import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { actions } from "../../actions";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { usePost } from "../../hooks/usePost";
import { pageVariants } from "../animated/variants";
import MainCard from "../blog/MainCard";
import FavouriteBlogs from "../blog/favourite/FavouriteBlogs";
import PopularBlogs from "../blog/popular/PopularBlogs";
import Error from "../common/Error";
import NoDataFound from "../common/NoDataFound";
import MainCardLoader, { CardLoader } from "../loader/MainCardLoader";
export default function Home() {
  const [ref, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "50px",
    threshold: 1,
  });
  const [page, setPage] = useState(1);
  const { state, dispatch } = usePost();
  const { auth } = useAuth();
  const { api } = useAxios();

  useEffect(() => {
    if (state?.posts?.length === 0) {
      dispatch({ type: actions.post.DATA_FETCHING });
    }
    async function fetchData() {
      try {
        const res = await api.get(`/blogs?page=${page}&limit=10`);
        dispatch({ type: actions.post.DATA_FETCHED, data: res.data });
      } catch (error) {
        dispatch({
          type: actions.post.DATA_FETCH_ERROR,
          error: "Something Is Wrong! ",
        });
      }
    }
    fetchData();
  }, [page]);

  useEffect(() => {
    if (isVisible && state.hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [isVisible, state.hasMore]);

  useDynamicTitle(state?.loading ? "loading" : undefined);

  let content;
  if (state?.loading) {
    content = <MainCardLoader />;
  } else if (state?.error) {
    content = <Error error={state?.error} />;
  } else if (state.posts.length === 0) {
    content = <NoDataFound />;
  } else {
    content = (
      <>
        {state.posts.map((post) => (
          <MainCard data={post} key={post.id} />
        ))}
        {state.hasMore ? (
          <div ref={ref}>
            <CardLoader index={1} />
          </div>
        ) : (
          <motion.div
            className="h-10 text-center font-bold"
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: [1, 1, 0], y: ["50%", "0%", "0%"] }}
            transition={{ duration: 2, repeat: 2 }}
          >
            All Post Loaded
          </motion.div>
        )}
      </>
    );
  }
  return (
    <motion.div
      className="container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 relative">
        <div className="space-y-3 md:col-span-5">{content}</div>

        <div className="md:col-span-2 h-full w-full space-y-5 relative">
          <PopularBlogs />
          {auth?.user && <FavouriteBlogs />}
        </div>
      </div>
    </motion.div>
  );
}
