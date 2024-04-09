import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { actions } from "../../../actions";
import FavIconFilled from "../../../assets/icons/heart-filled.svg";
import FavIcon from "../../../assets/icons/heart.svg";
import useAxios from "../../../hooks/useAxios";
import { useProfile } from "../../../hooks/useProfile";
import { isPresentId } from "../../../provider/utils.js/isPresentId";
export default function FavButton({ postId }) {
  const { api } = useAxios();
  const { user, dispatch } = useProfile();
  // find id of post in user favorites list
  let isFavourite = isPresentId(user?.favourites, postId);

  const handleFavorite = async () => {
    try {
      const res = await api.patch(`/blogs/${postId}/favourite`);
      toast.success(
        `${res.data.title} ${
          res.data.isFavourite ? "added to" : "removed from"
        } favorites`
      );
      dispatch({ type: actions.profile.FAV_UPDATED, data: res.data });
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <li>
      <button className="relative">
        {isFavourite ? (
          <div>
            {/* main fav Button */}
            <motion.img
              src={FavIconFilled}
              alt="Favourite"
              onClick={handleFavorite}
              whileTap={{ scale: [0.9, 2, 1] }}
            />

            {/* animated icon when get first active */}
            <motion.img
              transition={{ duration: 2 }}
              className="absolute top-0"
              src={FavIconFilled}
              alt="Favourite"
              animate={{
                translateX: Math.random() * 100,
                translateY: -100,
                opacity: [1, 1, 1, 0],
              }}
            />
            <motion.img
              transition={{ duration: 2 }}
              className="absolute top-0"
              src={FavIconFilled}
              alt="Favourite"
              animate={{
                translateX: Math.random() * -100,
                translateY: -100,
                opacity: [1, 1, 1, 0],
              }}
            />
            <motion.img
              transition={{ duration: 2 }}
              className="absolute top-0"
              src={FavIconFilled}
              alt="Favourite"
              animate={{
                translateX: Math.random() * 110,
                translateY: 20,
                opacity: [1, 1, 1, 0],
              }}
            />

            <motion.img
              transition={{ duration: 2 }}
              className="absolute top-0"
              src={FavIconFilled}
              alt="Favourite"
              animate={{
                translateX: Math.random() * -110,
                translateY: 20,
                opacity: [1, 1, 1, 0],
              }}
            />

            <motion.img
              transition={{ duration: 2 }}
              className="absolute top-0"
              src={FavIconFilled}
              alt="Favourite"
              animate={{
                translateX: Math.random() * 50,
                translateY: -120,
                opacity: [1, 1, 1, 0],
              }}
            />

            <motion.img
              transition={{ duration: 2 }}
              className="absolute top-0"
              src={FavIconFilled}
              alt="Favourite"
              animate={{
                translateX: Math.random() * -50,
                translateY: -50,
                opacity: [1, 1, 1, 0],
              }}
            />
          </div>
        ) : (
          <motion.img
            src={FavIcon}
            alt="Favourite"
            onClick={handleFavorite}
            whileTap={{ scale: [0.9, 2, 1] }}
          />
        )}
      </button>
    </li>
  );
}
