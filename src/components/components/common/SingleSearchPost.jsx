import React from "react";
import { Link } from "react-router-dom";
import { useHighlightMatches } from "../../hooks/useHighlightMatches";
import { generatePostURL } from "../../provider/utils.js/generateURL";
import { getBlogImage } from "../../provider/utils.js/getBlogImage";
export default function SingleSearchPost({ post = {}, searchValue }) {
  const match = useHighlightMatches(searchValue);
  return (
    <div className="flex gap-6 py-2">
      <img
        className="w-56 object-contain"
        src={getBlogImage(post.thumbnail)}
        alt={post?.title}
      />
      <Link to={generatePostURL(post)} className="mt-2">
        <h3 className="dark:text-slate-300 text-xl font-bold">
          {match(post?.title)}
        </h3>
        <p className="mb-6 text-sm text-slate-500 mt-1 tr line-clamp-3">
          {match(post?.content)}
        </p>
      </Link>
    </div>
  );
}
