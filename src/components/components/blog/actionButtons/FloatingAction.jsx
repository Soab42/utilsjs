import { useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../../../assets/icons/login.png";
import { useAuth } from "../../../hooks/useAuth";
import CommentsButton from "./CommentsButton";
import FavButton from "./FavButton";
import LikeButton from "./LikeButton";

export default function FloatingAction({ post = {} }) {
  const { likes, comments, id } = post;
  const { auth } = useAuth();
  const [showLoginButton, setShowLoginButton] = useState(false);
  const [showLoginButton2, setShowLoginButton2] = useState(false);

  // function for  showLoginButton on like and favorite button if not login
  const handleMouseEnterLike = () => {
    if (!auth?.user?.id) {
      setShowLoginButton(true);
    }
  };

  const handleMouseEnterFav = () => {
    if (!auth?.user?.id) {
      setShowLoginButton2(true);
    }
  };

  const handleMouseLeaveLike = () => {
    setShowLoginButton(false);
  };

  const handleMouseLeaveFav = () => {
    setShowLoginButton2(false);
  };

  return (
    <div className="floating-action" style={{ position: "fixed" }}>
      <ul className="floating-action-menus">
        <div
          onMouseEnter={handleMouseEnterLike}
          onMouseLeave={handleMouseLeaveLike}
          className="cursor-pointer"
        >
          <LikeButton likes={likes} postId={id} />
          {showLoginButton && (
            <Link to={"/login"}>
              <img
                src={LoginButton}
                alt="login"
                width={45}
                height={20}
                className="dark:backdrop-blur bg-blue dark:shadow-md dark:bg-sky-400 dark:bg-opacity-20  rounded"
                style={{ position: "absolute", top: "-4px" }}
              />
            </Link>
          )}
        </div>
        <div
          onMouseEnter={handleMouseEnterFav}
          onMouseLeave={handleMouseLeaveFav}
          className="cursor-pointer"
        >
          <FavButton postId={id} />

          {showLoginButton2 && (
            <Link to={"/login"}>
              <img
                src={LoginButton}
                alt="login"
                width={46}
                height={20}
                className="dark:backdrop-blur bg-blue dark:shadow-md dark:bg-sky-400 dark:bg-opacity-20  rounded"
                style={{ position: "absolute", top: "-4px", right: "70px" }}
              />
            </Link>
          )}
        </div>
        {/* Favourite button */}
        {/* Comments button */}
        <CommentsButton commentsLength={comments?.length} />
      </ul>
    </div>
  );
}
