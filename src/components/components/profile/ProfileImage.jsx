import { motion } from "framer-motion";
import { useRef } from "react";
import { actions } from "../../actions";
import EditIcon from "../../assets/icons/edit.svg";
import useActive from "../../hooks/useActive";
import { useAvatar } from "../../hooks/useAvatar";
import useAxios from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";


import { useEffect, useState } from "react";
// import { useAuth } from "../../hooks/useAuth";
import { generateColor } from "../../provider/utils.js/generateColor";
import ImageLoader from "../loader/ImageLoader";

export default function ProfileImage({ author }) {
  // const { auth } = useAuth();
  const { dispatch } = useProfile();
  const { api } = useAxios();
  const fileUploaderRef = useRef();
  const [loading, setLoading] = useActive();
  // const isME = isUser(auth?.user, author?.id);
  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploaderRef.current.addEventListener("change", updateImageDisplay);
    fileUploaderRef.current.click();
  };

  const updateImageDisplay = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      for (const file of fileUploaderRef.current.files) {
        formData.append("avatar", file);
      }

      const response = await api.post("/profile/avatar", formData);
      if (response.status === 200) {
        setLoading(false);
        // toast.success("Image uploaded successfully");
        dispatch({
          type: actions.profile.IMAGE_UPDATED,
          data: response.data.user.avatar,
        });
      }
    } catch (error) {
      // toast.error(error.response.data.error);
      setLoading(false);
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };
  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <div className="w-full h-full text-white grid place-items-center text-5xl rounded-full">
        <AuthorProfileImage author={author} loading={loading} />
      </div>

      {/* {isME && ( */}
        <form id="form" encType="multipart/form-data">
          <button
            className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full dark:bg-slate-700 bg-slate-200 dark:hover:bg-slate-700/80 hover:bg-slate-200/80"
            type="submit"
            onClick={handleImageUpload}
          >
            <img src={EditIcon} alt="Edit" />
          </button>
          <input id="file" type="file" ref={fileUploaderRef} hidden />
        </form>
      {/* )} */}
    </div>
  );
}

function AuthorProfileImage({ author = {}, loading }) {
  const { avatarURL } = useAvatar(author);

  const [nameBackgroundColor, setNameBackgroundColor] = useState("");

  // Effect to generate the color once on component mount
  useEffect(() => {
    if (author.firstName) {
      const color = generateColor(author.firstName);
      setNameBackgroundColor(color);
    }
  }, [author.firstName]);

  return (
    <div className="rounded-full text-white overflow-hidden">
      <motion.div className="size-36 rounded-full object-cover overflow-hidden">
        {author?.avatar ? (
          <img
            src={avatarURL}
            alt={author?.firstName?.slice(0, 1)}
            className=" h-full w-full"
          />
        ) : (
          <span
            className="bg-orange-500 w-full h-full flex-center"
            style={{ backgroundColor: nameBackgroundColor }}
          >
            {author?.firstName?.slice(0, 1)}
          </span>
        )}
        {loading && <ImageLoader />}
      </motion.div>
    </div>
  );
}
