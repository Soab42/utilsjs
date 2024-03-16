import LinkList from "./LinkList";
import Logo from "../nav/Logo";
import User from "./User";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

export default function Navbar() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="flex justify-between h-[4.5rem]  backdrop-blur-md xl:px-52 px-5 items-center shadow-xl shadow-red-950/10 fixed w-full z-50">
      <section className="">
        <Logo />
      </section>
      <div className=" pr-10 flex justify-between  items-center lowercase">
        <section className="flex gap-1 font-thin text-lg justify-start tracking-widest pr-10">
          <LinkList />
        </section>
        <section className="">
          {user ? <User /> : <Link to={"/login"}>Login</Link>}
        </section>
      </div>
    </div>
  );
}
