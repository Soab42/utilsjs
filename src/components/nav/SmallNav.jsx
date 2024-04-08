import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useActive from "../../hooks/useActive";
import { motion, AnimatePresence } from "framer-motion";
import { logout } from "../../../firebase";
import BurgerMenu from "../common/BurgerMenu";
export default function SmallNav({ user }) {
  const [active, setActive] = useActive();
  const location = useLocation();
  const handleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      const navMenu = document.querySelector(".nav-menu");
      if (navMenu && !navMenu.contains(event.target)) {
        setActive(false);
      }
    }

    if (active) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [active]);

  return (
    <div className="relative nav-menu">
      <BurgerMenu active={active} onClick={handleActive} />
      <AnimatePresence>
        {active && (
          <motion.div
            className="absolute -right-10 top-14 w-[45vw]  bg-white p-2 gap-2 flex flex-col"
            initial={{
              opacity: 0,
              translateX: 100,
            }}
            animate={{
              translateX: 0,
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              translateX: 100,
            }}
          >
            <Link onClick={handleActive} to={"/"}>
              <li className={location.pathname === "/" ? "active" : ""}>
                home
              </li>
            </Link>
            <Link onClick={handleActive} to={"/components"}>
              <li
                className={
                  location.pathname.match("/components") ? "active" : ""
                }
              >
                components
              </li>
            </Link>
            <Link onClick={handleActive} to={"/hooks"}>
              <li className={location.pathname.match("/hooks") ? "active" : ""}>
                hooks
              </li>
            </Link>
            <Link onClick={handleActive} to={"/utils"}>
              <li className={location.pathname.match("/utils") ? "active" : ""}>
                utils
              </li>
            </Link>
            <Link onClick={handleActive} to={"/tools"}>
              <li className={location.pathname.match("/tools") ? "active" : ""}>
                tools
              </li>
            </Link>
            <Link onClick={handleActive} to={"/blogs"}>
              <li className={location.pathname.match("/blogs") ? "active" : ""}>
                blogs
              </li>
            </Link>
            {user ? (
              <>
                <Link onClick={handleActive} to={`/profile/${user?.uid}`}>
                  <li
                    className={
                      location.pathname.match("/profile") ? "active" : ""
                    }
                  >
                    profile
                  </li>
                </Link>
                <button
                  onClick={logout}
                  className="text-start pl-4 bg-pink-400/30 py-1"
                >
                  logout
                </button>
              </>
            ) : (
              <Link onClick={handleActive} to="/login">
                <li>login</li>
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
