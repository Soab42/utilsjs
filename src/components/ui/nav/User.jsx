import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../../../../firebase";
import Icon from "../../../assets/person_11103795.png";
import useActive from "../../../hooks/useActive";
import { useEffect } from "react";
export default function User() {
  const [user, loading, error] = useAuthState(auth);
  const [active, setActive] = useActive();
  const name = user?.displayName?.split(" ");
  // console.log(active);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/profile/${user.uid}`);
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
    <div className="relative z-50 hidden lg:block nav-menu">
      <div
        className="flex gap-3 cursor-pointer justify-center items-center font-thin"
        onClick={() => {
          setActive(!active);
        }}
      >
        <p className="text-lg p-2 tracking-wider text-pink-800 ">
          {(name && name[name?.length - 1]) || user?.email}
        </p>
        <img
          src={user?.photoURL || Icon}
          alt={user?.displayName?.split("")[0] || "u"}
          width={50}
          height={50}
          className={`${
            !active ? "rounded-b-full" : "rounded-full"
          } shadow-md text-5xl ring-emerald-900 duration-300 ring-2`}
        />
      </div>

      <div
        className={`absolute text-[1rem] flex flex-col -right-10 top-16   gap-2 shadow-2xl rounded-lg setIndex bg-white shadow-pink-500/60 duration-200  p-4 w-36 ${
          active ? "translate-y-[.15rem]" : "-translate-y-56"
        }`}
        onClick={() => {
          setActive(!active);
        }}
      >
        <button
          onClick={handleNavigate}
          className="bg-emerald-400/40 hover:bg-emerald-400 duration-500 px-2 p-1 text-md w-full tracking-widest"
        >
          Profile
        </button>
        <button
          className="bg-pink-400/40 hover:bg-pink-400 duration-500 px-2 p-1 text-md w-full tracking-widest"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
