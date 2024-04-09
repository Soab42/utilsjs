// import { useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { actions } from "../../actions/index.js";
import DeleteSvg from "../../../assets/icons/delete.svg";
// import useAxios from "../../hooks/useAxios.js";
// import { usePost } from "../../hooks/usePost.js";
// import { useProfile } from "../../hooks/useProfile";
export default function DeleteButton({ postId, onclick }) {
  // const queryClient = useQueryClient();
  // const { dispatch } = usePost();
  // const { user } = useProfile();
  // const { api } = useAxios();

  const handleDeletePost = async () => {
    onclick();
    // try {
    //   const res = await api.delete(`blogs/${postId}`);
    //   if (res.status === 200) {
    //     dispatch({
    //       type: actions.post.POST_DELETED,
    //       data: postId,
    //     });
    //     toast.success("Post deleted successfully");

    //     queryClient.invalidateQueries("profile", user.id);
    //   }
    // } catch (error) {
    //   console.error(error?.response?.data?.error || error.message);
    //   toast.error(error?.response?.data?.error || error.message);
    // }
  };
  return (
    <button
      className="action-menu-item hover:text-red-500"
      onClick={handleDeletePost}
    >
      <img src={DeleteSvg} alt="Delete" />
      Delete
    </button>
  );
}
