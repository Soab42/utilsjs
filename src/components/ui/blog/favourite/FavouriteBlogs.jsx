import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import FavCardLoader from "../../loader/FavCardLoader";
import FavouriteCard from "./FavouriteCard";

export default function FavouriteBlogs() {
  const { api } = useAxios();
  const retrieveFavPost = async ({ queryKey }) => {
    const response = await api.get(`${queryKey[0]}/${queryKey[1]}`);
    return response.data;
  };
  const {
    data: favPost,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["blogs", "favourites"],
    queryFn: retrieveFavPost,
  });

  let content;
  if (isLoading) {
    content = <FavCardLoader />;
  } else if (error) {
    content = (
      <div className="text-rose-400 h-96 flex-center">{error.message}</div>
    );
  } else if (favPost?.blogs.length === 0) {
    content = <div>No Favourite Blogs Post Found</div>;
  } else {
    content = (
      <ul className="space-y-5 my-5">
        {favPost?.blogs?.map((favBlog) => (
          <FavouriteCard key={favBlog.id} blog={favBlog} />
        ))}
      </ul>
    );
  }
  return (
    <div className="sidebar-card">
      <h3 className="dark:text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favourites ❤️
      </h3>

      {content}
    </div>
  );
}
