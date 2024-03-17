import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { actions } from "../../actions";
import EditIcon from "../../assets/icons/edit.svg";
import TickIcon from "../../assets/icons/ok.svg";
import useActive from "../../hooks/useActive";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";
import { isUser } from "../../provider/utils.js/isUser";

export default function Bio({ info = {} }) {
  const queryClient = useQueryClient();
  const { user, dispatch } = useProfile();
  const [isEdit, setIsEdit] = useActive();
  const { auth } = useAuth();
  const { api } = useAxios();
  const [bio, setBio] = useState(user?.bio);
  const isMe = isUser(auth?.user, info?.id);
  const handleEdit = async () => {
    const updatedUser = { ...user, bio };
    try {
      const res = await api.patch("/profile", { bio });
      if (res.status == 200) {
        queryClient.invalidateQueries("profile", info?.id);
        toast.success("Bio updated successfully");
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: updatedUser,
        });
      }
      setIsEdit();
    } catch (error) {
      toast.error(
        "error updating bio",
        error.message || error.response.message
      );
      setIsEdit();
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  useEffect(() => {
    setBio(user?.bio);
  }, [user?.bio]);

  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6 ">
      <div className="flex-1 relative">
        {!isEdit ? (
          <>
            <p className="leading-[188%] relative dark:text-gray-400 lg:text-lg">
              {info.bio}
            </p>
          </>
        ) : (
          <textarea
            type="text"
            name="bio"
            id="bio"
            rows={4}
            cols={55}
            value={bio}
            className="w-full focus:ring-0 border-none outline-none placeholder:text-lg text-lg pl-0  bg-transparent appearance-none focus:border-none focus:outline-none"
            onChange={(e) => setBio(e.target.value)}
          />
        )}
      </div>

      {isMe && (
        <button className="flex-center h-7 w-7 rounded-full ">
          {!isEdit ? (
            <img src={EditIcon} alt="Edit" onClick={setIsEdit} />
          ) : (
            <img src={TickIcon} alt="ok" onClick={handleEdit} />
          )}
        </button>
      )}
    </div>
  );
}
