import React from "react";
import { Link } from "react-router-dom";
import { generatePostURL } from "../../../provider/utils.js/generateURL";
import { getName, getNameURL } from "../../../provider/utils.js/getName";

export default function PopularCard({ data = {} }) {
  return (
    <li>
      <Link
        to={generatePostURL(data)}
        className="dark:text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer"
      >
        {data.title}
      </Link>
      <p className="text-slate-600 text-sm flex gap-2">
        by
        <Link to={getNameURL(data.author)}>{getName(data.author)}</Link>
        <span></span> {data.likes.length} Likes
      </p>
    </li>
  );
}
