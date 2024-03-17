import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import deleteIcon from "../../../assets/icons/delete.svg";
import useActive from "../../../hooks/useActive";
import { useAuth } from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import { getName, getNameURL } from "../../../provider/utils.js/getName";
import { isUser } from "../../../provider/utils.js/isUser";
import { buttonVariant } from "../../animated/variants";
import AuthorImage from "../../common/AuthorImage";
export default function Comment({ comment, postId }) {
  const { author, content, id } = comment;
  const { auth } = useAuth();
  const isMe = isUser(auth?.user, author?.id);
  const [active, setIsActive] = useActive();

  const { api } = useAxios();
  const queryClient = useQueryClient();

  const handleComment = async () => {
    try {
      await mutation.mutate();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const mutation = useMutation({
    gcTime: 2000,
    mutationFn: () => {
      return api.delete(`/blogs/${postId}/comment/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("blogs", postId);
      toast.success(`Comment deleted successfully`);
    },
  });

  return (
    <motion.div
      className="flex  items-start space-x-4 my-8 relative py-2 cursor-pointer  duration-200 hover:shadow-sm hover:shadow-blue-700/50 rounded-lg overflow-hidden"
      initial={{ opacity: 0, x: "-5%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={setIsActive}
      onMouseLeave={setIsActive}
    >
      <AuthorImage author={author} />

      <div className="w-full">
        <Link to={getNameURL(author)} className="text-slate -500 font-bold">
          {getName(author)}
        </Link>

        <p className="dark:text-slate-300">{content}</p>
      </div>
      <AnimatePresence>
        {active && isMe && (
          <motion.div
            onClick={handleComment}
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            exit="hidden" // Specify exit animation
            whileTap={{ width: "5rem" }}
            className="flex h-12 backdrop-blur-sm bg-rose-700/30 w-16"
          >
            <motion.button
              className="duration-700 flex-center w-12  backdrop-blur-sm   rounded shadow-2xl shadow-pink-700/20"
              onClick={setIsActive}
            >
              <img src={deleteIcon} alt="delete" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
