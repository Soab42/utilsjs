import React from "react";
import getDateFormat from "../../utils.js/getDateFormat";

export default function AuthorDetails({ post = {} }) {
  return (
    <div className="mt-10 p-2 flex rounded flex-col gap-2 shadow-xl ">
      <p className="">Posted By</p>
      <div className="flex gap-2">
        <img src={post?.author?.avatar} width={60} className="rounded-full" />
        <div className="gap-2 w-full items-end capitalize ">
          <p className="text-xl font-black text-blue-900">
            {post?.author?.name}
          </p>
          {/* <p>{snapshot?.val().author.email}</p> */}
          <p>posted on: {getDateFormat(post?.createdAt)}</p>
        </div>
      </div>
    </div>
  );
}
