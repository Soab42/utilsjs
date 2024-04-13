import { useState } from "react";
import { ref, remove } from "firebase/database";
import DeleteSvg from "../../../assets/icons/delete.svg";
import { db } from "../../../../firebase";
import usePortal from "../../../hooks/usePortal";
import { useNotify } from "../../../contexts/NotifyContext";

export default function DeleteButton({ postId, postName, onclick }) {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const Portal = usePortal("portal");
  const postRef = ref(db, "/blogs/" + postName + "/" + postId);
  const { notify } = useNotify();
  const handleDeletePost = async (e) => {
    e.preventDefault();
    remove(postRef).then((data) => {
      console.log(data);
      notify("Blog deleted successfully");

      onclick(); // Call parent onclick function if needed
    });
    // toast("hi");
  };
  return (
    <>
      {/* Button to trigger modal */}
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

      {/* Modal */}
      {showModal && (
        <Portal>
          <div className="fixed top-0 h-screen w-screen z-[1000]  bg-black/20 flex-center backdrop-blur-sm">
            <div className="modal-content bg-black/20 h-fit w-fit p-16 space-y-8 rounded-lg xl:text-4xl text-2xl">
              <p className=" text-slate-50 font-black text-center">
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
