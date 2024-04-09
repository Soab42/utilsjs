import React from "react";
import { Link } from "react-router-dom";
import { generatePostURL } from "../../../provider/utils.js/generateURL";

export default function FavouriteCard({ blog }) {
  const tags = blog.tags.split(",");
  return (
    <li>
      <Link to={generatePostURL(blog)}>
        <h3 className="dark:text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
          {blog?.title}
        </h3>
      </Link>
      <p className="text-slate-600 text-sm space-x-2">
        {tags?.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </p>
    </li>
  );
}
