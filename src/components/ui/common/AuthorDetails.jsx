import React from "react";
import { Link } from "react-router-dom";
import getDateFormat from "../../../utils/getDateFormat";

export default function AuthorDetails({ post = {} }) {
  return (
    <div className="mt-10 p-2 flex rounded flex-col gap-2 shadow-xl ">
      <p className="">Posted By</p>
      <div className="flex gap-2">
        <img src={post?.author?.avatar} width={50} className="rounded-full" />
        <div className="gap-2 w-full items-end capitalize self-center">
          <Link
            className="font-black text-blue-900"
            to={`/profile/${post?.author?.userId}`}
          >
            {post?.author?.name}
          </Link>
          {/* <p>{snapshot?.val().author.email}</p> */}
          <p>posted on: {getDateFormat(post?.createdAt)}</p>
        </div>
      </div>
    </div>
  );
}
