// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import { auth, logout } from "../../../firebase";
// import Icon from "../../assets/person_11103795.png";
// import useActive from "../../hooks/useActive";
// export default function User() {
//   const [user, loading, error] = useAuthState(auth);
//   const [active, handleIsActive] = useActive();
//   const name = user?.displayName?.split(" ");
//   // console.log(active);
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate(`/profile/${user.uid}`);
//   };
//   return (
//     <div className="relative z-50 hidden lg:block">
//       <div
//         className="flex gap-3 cursor-pointer justify-center items-center font-thin group/user"
//         onClick={() => {
//           handleIsActive(!active);
//         }}
//       >
//         <p className="text-lg p-2 tracking-wider text-pink-800 ">
//           {(name && name[name?.length - 1]) || user?.email}
//         </p>
//         <img
//           src={user?.photoURL || Icon}
//           alt={user?.displayName?.split("")[0] || "u"}
//           width={50}
//           height={50}
//           className={`${
//             !active ? "rounded-b-full" : "rounded-full"
//           } shadow-md text-5xl ring-emerald-900 duration-300 ring-2`}
//         />
//       </div>
//       <div
//         className={`absolute text-[1rem] flex flex-col right-0 top-16   gap-2 shadow-2xl rounded-lg setIndex bg-white shadow-pink-500/60 duration-200  p-4 w-36 active:group-visible/user ${
//           active ? "translate-y-[.15rem]" : "-translate-y-56"
//         }`}
//       >
//         <button
//           onClick={handleNavigate}
//           className="bg-emerald-400/40 hover:bg-emerald-400 duration-500 px-2 p-1 text-md w-full tracking-widest"
//         >
//           Profile
//         </button>
//         <button
//           className="bg-pink-400/40 hover:bg-pink-400 duration-500 px-2 p-1 text-md w-full tracking-widest"
//           onClick={logout}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../../../firebase";
import Icon from "../../assets/person_11103795.png";
import useActive from "../../hooks/useActive";
export default function User() {
  const [user, loading, error] = useAuthState(auth);
  const [active, handleIsActive] = useActive();
  const name = user?.displayName?.split(" ");
  // console.log(active);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/profile/${user.uid}`);
  };
  return (
    <div className="relative z-50 hidden lg:block">
      <div
        className="flex gap-3 cursor-pointer justify-center items-center font-thin"
        onClick={() => {
          handleIsActive(!active);
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
        className={`fixed left-0 top-0 delay-700 ${
          active ? "h-screen w-screen" : "h-0"
        }`}
        onClick={(e) => {
          e.preventDefault();
          handleIsActive(!active);
        }}
      >
        <div
          className={`absolute text-[1rem] flex flex-col right-64 top-20   gap-2 shadow-2xl rounded-lg setIndex bg-white shadow-pink-500/60 duration-200  p-4 w-36 ${
            active ? "translate-y-[.15rem]" : "-translate-y-56"
          }`}
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
    </div>
  );
}
