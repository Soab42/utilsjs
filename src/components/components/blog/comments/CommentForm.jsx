import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import AuthorImage from "../../common/AuthorImage";

export default function CommentForm({ postId }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState();
  const { auth } = useAuth();
  const { api } = useAxios();
  const queryClient = useQueryClient();

  const handleComment = async () => {
    try {
      if (content) {
        await mutation.mutate();
        setContent("");
      } else {
        throw new Error("Comment content is required");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const mutation = useMutation({
    gcTime: 2000,
    mutationFn: () => {
      return api.post(`/blogs/${postId}/comment`, { content });
    },
    onSuccess: () => {
      queryClient.invalidateQueries("blogs", postId);
    },
    onError: (error) => {
      console.error(error.message);
    },
  });

  return (
    <div className="flex items -center space-x-4">
      <AuthorImage author={auth?.user} />
      <div className="w-full">
        <textarea
          className={`w-full dark:bg-[#030317] border border-slate-500 dark:text-slate-300 p-4 rounded-md focus:outline-none ${
            error ? "ring-1 ring-red-500" : ""
          }`}
          placeholder="Write a comment"
          value={content}
          onChange={(e) => {
            setError("");
            setContent(e.target.value);
          }}
        />
        {error && (
          <p className="text-red-300 pl-2 text-sm absolute backdrop-blur-sm ">
            {error} !
          </p>
        )}
        <div className="flex justify-end mt-4">
          <button
            className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
            onClick={handleComment}
          >
            Comment
          </button>
        </div>
      </div>
    </div>
  );
}
