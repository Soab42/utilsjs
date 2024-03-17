// import LogoutSvg from "../../assets/icons/logout.svg";
import LogoutSvg from "../../../assets/icons/logout2.svg";
// import UserSvg from "../../assets/icons/user.svg";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { actions } from "../../../actions";
import UserSvg from "../../../assets/icons/user-heart.svg";
import useActive from "../../../hooks/useActive";
import { useAuth } from "../../../hooks/useAuth";
import { useProfile } from "../../../hooks/useProfile";
import useSessionCookie from "../../../hooks/useSessionCookie";
import { getName, getNameURL } from "../../../provider/utils.js/getName";
import { actionModalVariants } from "../../animated/variants";
import AuthorImage from "../AuthorImage";
export default function ProfileNavigation({ user }) {
  const [active, handleActive] = useActive();
  const { removeCookie } = useSessionCookie("auth");
  const { setAuth } = useAuth();
  const { dispatch } = useProfile();
  const handleSignOut = () => {
    removeCookie("auth");
    setAuth(null);
    dispatch({ type: actions.profile.DATA_FETCHED, data: null });
  };
  return user ? (
    <li className="flex items-center">
      <div className="w-full relative">
        <button
          className="dark:text-white ml-2 relative flex-center gap-2"
          onClick={handleActive}
        >
          <AuthorImage author={user} />
          <span>{getName(user)}</span>
        </button>
        {/* <!-- Action Menus Popup --> */}
        <AnimatePresence>
          {/* right-0 top-12 */}
          {active && (
            <motion.div
              className={`action-modal-container right-0 top-12`}
              variants={actionModalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={handleActive}
            >
              <Link to={getNameURL(user)}>
                <button className="action-menu-item hover:text-green-400  duration-500">
                  <img src={UserSvg} alt="UserSvg" width={30} />
                  <span> Profile</span>
                </button>
              </Link>
              <button
                className="action-menu-item hover:text-red-500 duration-500"
                onClick={handleSignOut}
              >
                <img src={LogoutSvg} alt="LogoutSvg" width={30} />
                Log out
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </li>
  ) : (
    <li>
      <Link
        to="/login"
        className="dark:text-white/50 dark:hover:text-white transition-all duration-200"
      >
        Login
      </Link>
    </li>
  );
}
