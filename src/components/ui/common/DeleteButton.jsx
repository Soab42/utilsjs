import { useState } from "react";
import { ref, remove } from "firebase/database";
import DeleteSvg from "../../../assets/icons/delete.svg";
import { auth, db } from "../../../../firebase";
import usePortal from "../../../hooks/usePortal";
import { useNotify } from "../../../contexts/NotifyContext";
import { useAuthState } from "react-firebase-hooks/auth";

export default function DeleteButton({ postId, postName, onclick, category }) {
  const [showModal, setShowModal] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const Portal = usePortal("portal");
  const postRef = ref(db, `/${category}/${postName}/${postId}`);
  const userPostRef = ref(db, `/usersData/${user?.uid}/posts/${postId}`);
  const { notify } = useNotify();

  const handleDeletePost = async (e) => {
    e.preventDefault();
    try {
      // Remove post from category and user posts
      await remove(postRef);
      await remove(userPostRef);

      notify("Blog deleted successfully");
      if (onclick) onclick();
    } catch (error) {
      console.error("Error deleting post:", error);
      notify("Error deleting post");
    }
    setShowModal(false);
  };

  return (
    <>
      <button
        className="action-menu-item hover:text-red-500"
        onClick={(e) => {
          e.preventDefault();
          setShowModal(true);
        }}
      >
        <img src={DeleteSvg} alt="Delete" />
        Delete
      </button>

      {showModal && (
        <Portal>
          <div className="fixed top-0 h-screen w-screen z-[1000] bg-black/20 flex-center backdrop-blur-sm">
            <div className="modal-content bg-black/20 h-fit w-fit p-16 space-y-8 rounded-lg xl:text-4xl text-2xl">
              <p className="text-slate-50 font-black text-center">
                Are you sure you want to delete?
              </p>
              <div className="flex-center gap-10 text-lg">
                <button
                  className="px-4 p-1 bg-red-300 rounded-md text-slate-800"
                  onClick={handleDeletePost}
                >
                  Delete
                </button>
                <button
                  className="px-4 p-1 bg-green-300 rounded-md"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
