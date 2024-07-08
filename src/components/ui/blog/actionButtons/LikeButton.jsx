import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import LikeIconFilled from "../../../assets/icons/like-filled.svg";
import LikeIcon from "../../../assets/icons/like.svg";
import useAxios from "../../../hooks/useAxios";
import { useProfile } from "../../../hooks/useProfile";
import { isPresentId } from "../../../provider/utils.js/isPresentId";
import AnimatedValueSpan from "../../animated/AnimatedValueSpan";

export default function LikeButton({ likes, postId }) {
  const queryClient = useQueryClient();
  const { user } = useProfile();

  const { api } = useAxios();

  //get that is is present on posts likes array
  let isLiked = isPresentId(likes, user?.id);

  const handleLike = async () => {
    if (user) {
      try {
        mutation.mutate("like");
      } catch (error) {
        toast.error(error?.message);
      }
    }
  };

  const mutation = useMutation({
    gcTime: 2000,
    mutationFn: (toggle) => {
      return api.post(`/blogs/${postId}/${toggle}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("blogs", postId);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <li>
      <motion.button onClick={handleLike} whileTap={{ scale: [0.9, 4, 1] }}>
        {isLiked ? (
          <img src={LikeIconFilled} alt="like" />
        ) : (
          <img src={LikeIcon} alt="like" />
        )}
      </motion.button>
      <div className="relative">
        {/* for showing value with animation */}
        <AnimatedValueSpan initialValue={likes?.length} />
      </div>
    </li>
  );
}
